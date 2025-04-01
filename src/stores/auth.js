import { defineStore } from 'pinia';
import { auth, db } from '../firebase';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user, 
  },

  actions: {
    async signUpWithEmail(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.$patch({ isAuthenticated: true }); 

        await setDoc(doc(db, 'users', this.user.uid), {
          uid: this.user.uid,
          name: this.user.displayName || 'Anonymous',
          email: this.user.email,
          createdAt: new Date(),
        });
      } catch (error) {
        console.error('Signup Error:', error.message);
        throw error;
      }
    },

    async loginWithEmail(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.$patch({ isAuthenticated: true }); 
      } catch (error) {
        console.error('Login Error:', error.message);
        throw error;
      }
    },

    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
        this.$patch({ isAuthenticated: true }); 

        await setDoc(doc(db, 'users', this.user.uid), {
          uid: this.user.uid,
          name: this.user.displayName || 'Anonymous',
          email: this.user.email,
          createdAt: new Date(),
        });
      } catch (error) {
        console.error('Google Sign-In Error:', error.message);
        throw error;
      }
    },

    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.$patch({ isAuthenticated: false }); 
      } catch (error) {
        console.error('Logout Error:', error.message);
      }
    },

    initAuth() { 
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.$patch({ isAuthenticated: true }); 
        } else {
          this.user = null;
          this.$patch({ isAuthenticated: false }); 
        }
      });
    }
  },
});
