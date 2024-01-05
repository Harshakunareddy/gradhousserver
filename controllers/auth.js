import User from '../models/Users.js'; // Assuming your User model is in a file named Users.js in the models directory

const registerController = async (req, res) => {
  try {
    const { firstName, email, phoneno, countryCode } = req.body;

    const newUser = new User({
      firstName,
      email,
      phoneno,
      countryCode,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default registerController;
