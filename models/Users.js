import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  phoneno: {
    type: String, // Assuming phoneno can be a string to include '+' and country code
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
