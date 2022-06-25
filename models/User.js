const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'username required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email address required'],
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        'Please fill a valid email address',
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
