<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6 rounded-lg elevation-6">
          <v-card-title class="text-center text-h5 font-weight-bold">Sign Up</v-card-title>
          <v-card-subtitle class="text-center text-body-2 mt-2">Create an account to get started.</v-card-subtitle>
          <v-card-text>
            <v-form @submit.prevent="handleSignup">
              <v-text-field 
                v-model="name" 
                label="Full Name" 
                required 
                outlined 
                density="compact"
                prepend-inner-icon="mdi-account"
              />
              
              <v-text-field 
                v-model="email" 
                label="Email" 
                type="email"
                required 
                outlined 
                density="compact"
                prepend-inner-icon="mdi-email"
              />

              <v-text-field 
                v-model="password" 
                label="Password" 
                :type="showPassword ? 'text' : 'password'"
                required 
                outlined 
                density="compact"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="togglePasswordVisibility"
              />

              <v-btn type="submit" block class="mt-4" color="primary" rounded>Sign Up</v-btn>
              <v-alert v-if="signupError" type="error" class="mt-3">{{ signupError }}</v-alert>
              <v-divider class="my-4"></v-divider>

              <!-- Small, Centered Google Sign-Up Button -->
              <v-btn 
                class="mt-2" 
                color="red darken-1" 
                rounded 
                @click="signInWithGoogle" 
                small
                style="max-width: 250px; margin-left: auto; margin-right: auto; display: block;"
              >
                <v-icon left>mdi-google</v-icon>
                Sign up with Google
              </v-btn>
              
              <v-divider class="my-4"></v-divider>
              
              <v-btn variant="text" block class="text-caption" @click="$router.push('/login')">
                Already have an account? Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAuthStore } from '../stores/auth';

export default {
  data() {
    return { 
      name: '',
      email: '', 
      password: '', 
      showPassword: false,
      signupError: "" 
    };
  },
  methods: {
    async handleSignup() {
  const authStore = useAuthStore();
  this.signupError = "";
  try {
    await authStore.signUpWithEmail(this.email, this.password); 
    this.$router.push('/'); 
  } catch (error) {
    this.signupError = error.message;
    console.error("Signup failed:", error.message);
  }
},
    async signInWithGoogle() {
      const authStore = useAuthStore();
      await authStore.loginWithGoogle();
      this.$router.push('/'); 
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
  border-radius: 12px;
}
</style>
