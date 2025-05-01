import mongoose from '../config/database';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // will be chaged to mobile number in the near future
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emailVerifiedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
