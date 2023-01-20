<!--suppress JSUnresolvedFunction -->
<script setup>
import { storeToRefs } from 'pinia';

definePageMeta({
  auth: false
});

const { signIn } = useSession();

const nameRules = [
  // @ts-ignore
  (v) => !!v || "Name is required",
  // @ts-ignore
  (v) =>
    (v && v.length <= 10) || "Name must be less than 10 characters",
]
const emailRules = [
  // @ts-ignore
  (v) => !!v || "E-mail is required",
  // @ts-ignore
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]
const passwordRules = {
  // @ts-ignore
  min: v => /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v) || 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (@,$,!,%,*,?,&)',
  emailMatch: () => `The email and password you entered don't match`,
}

const getUserStore = createUserStore()
const { credentials, createUser, emptyForm } = createUserStore()
const user = storeToRefs(getUserStore)

const form = ref(null)

</script>

<script>
export default {
  methods: {
    async login() {
      const valid = await this.$refs.form.validate().then((res) => res)

      if (valid.valid) {
        await this.signIn('credentials', {
          email: this.user.email.value,
          password: this.user.password.value,
          callbackUrl: '/editor'
        })
      } else {
        console.log('form is not valid')
      }
    },
    async signUp(createUser, emptyForm) {
      const valid = await this.$refs.form.validate().then((res) => res)

      if (valid.valid) {
        const userObj = await createUser().then((item) => item)
        emptyForm()
      } else {
        console.log('form is not valid')
      }
    }
  },
}
</script>


<template>
  <div class="login-page">
    <v-form ref="form" v-model="user.valid.value" lazy-validation>
      <!--      <v-text-field v-if="user.isSignUp.value"-->
      <!--                    v-model="user.name.value"-->
      <!--                    :counter="10"-->
      <!--                    :rules="nameRules"-->
      <!--                    label="Name"-->
      <!--                    required></v-text-field>-->

      <v-text-field v-model="user.email.value" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-text-field v-model="user.password.value" :append-icon="user.show1.value ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[passwordRules.min]" :type="user.show1.value ? 'text' : 'password'" name="input-10-1" label="Password"
        hint="At least 8 characters" counter @click:append="user.show1.value = !user.show1.value"></v-text-field>

      <v-checkbox v-model="user.remember.value" label="remember me" required></v-checkbox>

      <v-btn color="success" class="mr-4" width="100%"
        @click="() => (user.isSignUp.value ? signUp(createUser, emptyForm) : login())">
        {{ user.isSignUp.value ? 'Sign Up' : 'Login' }}
      </v-btn>
    </v-form>
  </div>
</template>
