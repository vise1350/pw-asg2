class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getPassword() {
    return "*".repeat(this.password.length);
  }

  setPassword(newPassword) {
    if (newPassword.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
    if (!newPassword.match(/[0-9]/)) {
      throw new Error("Password must contain at least one number");
    }
    if (!newPassword.match(/[A-Z]/)) {
      throw new Error("Password must contain at least one uppercase letter");
    }
    this.password = newPassword;
  }
}

const user = new User("johndoe", "password");
console.log(user.getPassword()); // *****

try {
  user.setPassword("newpassword");
} catch (error) {
  console.log(error.message); // Password must be at least 8 characters long
}
