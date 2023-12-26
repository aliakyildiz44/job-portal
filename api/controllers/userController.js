import User from "../models/User.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  console.log("deleting userr");
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  console.log(`is seller3: ${user.isSeller}`);
  res.status(200).send(user);
};
