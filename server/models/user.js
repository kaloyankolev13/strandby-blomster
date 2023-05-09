// Create user model
const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
});

// That is how we initialise passport in the user model for mongoose
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
