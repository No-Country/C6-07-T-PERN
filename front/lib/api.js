class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  createNewUser() {
    return `${this.email} ${this.password}`;
  }
  getLogin() {
    return `${this.email} ${this.password}`.toLowerCase();
  }
}

user.createNewUser();
