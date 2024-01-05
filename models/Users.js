import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    max: 50,
  },
  phoneno: {
    type: String, 
  },
  countryCode: {
    type: String,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
