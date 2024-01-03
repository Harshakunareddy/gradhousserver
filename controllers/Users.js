import User from "../models/Users.js";

const getUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


export default getUser;