import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    mockedCredentials: {
      email: "teste@teste.com",
      password: "123456",
    },
  }),
  getters: {
    isLoggedIn(state): boolean {
      return state.isAuthenticated;
    },
  },
  actions: {
    login(email: string, password: string): boolean {
      if (
        email === this.mockedCredentials.email &&
        password === this.mockedCredentials.password
      ) {
        console.log("Login successful");
        this.isAuthenticated = true;
        return true;
      }
      console.log("Invalid credentials");
      console.log(email, password);
      this.isAuthenticated = false;
      return false;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});
