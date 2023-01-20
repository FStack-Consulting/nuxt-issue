export const createUserStore = defineStore({
  id: "create-user",
  state: () => {
    return {
      name: "",
      email: "",
      password: "",
      remember: false,
      valid: true,
      show1: "",
      isSignUp: true,
    };
  },
  actions: {
    async createUser() {
      return await $fetch("/api/users", {
        method: "POST",
        body: {
          email: this.email,
          password: this.password,
          name: this.name,
          rememberMe: this.remember,
        },
      });
    },
    emptyForm() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.remember = false;
    },
  },
  getters: {
    credentials: (state) => {
      return { name: state.name, email: state.email };
    },
  },
});
