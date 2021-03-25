require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Confirm = require("../models/confirmModel");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

module.exports = {
  register: async (req, res) => {
    //   Checking to see that the user passes all the necessary information when trying create a profile
    try {
      const {
        email,
        password,
        passwordCheck,
        displayName,
        firstName,
        lastName,
        zipCode,
      } = req.body;

      if (
        !email ||
        !password ||
        !passwordCheck ||
        !displayName ||
        !firstName ||
        !lastName ||
        !zipCode
      ) {
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered" });
      }

      if (passwordCheck.length < 8) {
        return res.status(400).json({ msg: "You need a longer password" });
      }

      if (password !== passwordCheck) {
        return res
          .status(400)
          .json({ msg: "password does not match the password check" });
      }

      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        email,
        password: passwordHash,
        displayName,
        firstName,
        lastName,
        zipCode,
      });

      // Start here to confirm that a user is logged in

      const confirmationToken = new Confirm({
        token: crypto.randomBytes(10).toString("hex"),
        authorId: newUser._id,
      });

      console.log(confirmationToken);

      //   Setting up email to send new user a confirmation email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "heyneighborteam@gmail.com",
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: "heyneighborteam@gmail.com",
        to: newUser.email,
        subject: " Thanks for signing up",
        text: `Click to confirm http://localhost:3000/confirm_token/${confirmationToken.token}`,
      };

      //   Sending the user an email if there is an error then it will console log it
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(
            `Email was sent with: http://localhost:5000/confirm_token/${confirmationToken.token}`
          );
        }
      });

      await confirmationToken.save();
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ msg: "all required fields were not sent" });
      }

      const user = await User.findOne({ email: email });

      if (!user) {
        res.status(400).json({ msg: "User doesn't exist" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ msg: "The password was incorrect" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      res.json({
        token,
        user: {
          id: user._id,
          displayName: user.displayName,
          confirmed: user.confirmed,
        },
      });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user);

      res.json({
        displayName: user.displayName,
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        zipCode: user.zipCode,
      });
    } catch (err) {
      res.send(err.response);
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      const { displayName, id, firstName, lastName, email, zipCode } = req.body;

      console.log(req.body)

      if (displayName) user.displayName = displayName;
      if (id) user.id = id;
      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (email) user.email = email;
      if (zipCode) user.zipCode = zipCode;

      res.json(await user.save());
      
    } catch (err) {
      res.send({error:err})
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.user);
      res.json(deletedUser);
      next();
    } catch (err) {
      res.send({ error: err });
    }
  },

  checkToken: async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) return res.json(false);

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) return res.json(false);

      const user = await User.findById(verified.id);
      if (!user) return res.json(false);

      return res.json(true);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
