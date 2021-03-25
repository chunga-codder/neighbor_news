const Confirm = require("../models/confirmModel");
const User = require("../models/userModel");

module.exports = {
  confirmUser: async (req, res) => {
    try {
      const confirmation = await Confirm.findOne({ token: req.body.token });
      console.log(confirmation.authorId);

      const confirmedUser = await User.findById(confirmation.authorId);

      confirmedUser.confirmed = true;
      confirmedUser.save();

      res.send("success");
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
  deleteUserConfirm: async (req, res) => {
    try {
      const deletedConfirm = await Confirm.deleteOne({ authorId: req.user});
      res.json(deletedConfirm)
    } catch (err) {
      res.send({ error: err });
    }
  }, 
};
