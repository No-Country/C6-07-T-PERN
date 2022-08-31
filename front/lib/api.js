// class user {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
//   createNewUser() {
//     return `${this.email} ${this.password}`;
//   }
//   getLogin() {
//     return `${this.email} ${this.password}`.toLowerCase();
//   }
// }

// user.createNewUser();

export async function getAuth() {
  const promise = Promise.resolve({ user: "user" });
  return promise;
}
export async function getToken() {
  const promise = Promise.resolve({ token: "token" });
  return promise;
}
