const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// Define the User schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Removes whitespace from the beginning and end
      lowercase: true, // Converts email to lowercase
    },
    name: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from the beginning and end
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Ensures the password is at least 6 characters long
    },
    profilePic: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?w=740", // Default to an empty string if no profile picture is provided
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to match the entered password with the hashed password in the database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
