<template>
  <v-app>
    <!-- Show Navbar & Sidebar only if not on auth pages -->
    <template v-if="!isAuthPage">
      <!-- Navbar (Top Bar) -->
      <v-app-bar color="primary" dark app elevation="4">
        <!-- Sidebar Toggle Button for Mobile -->
        <v-btn icon @click="sidebar = !sidebar" class="d-md-none">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <!-- Updated Title: Keeping only "FinPay" -->
        <v-toolbar-title class="d-flex align-center">
          <span class="font-weight-bold">
            <span style="color: #ffcc00;">Fin</span> <span style="color: red;">Pay</span>
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Search Bar -->
        <v-text-field
          label="Search..."
          prepend-inner-icon="mdi-magnify"
          solo-inverted
          dense
          hide-details
          class="search-bar"
        ></v-text-field>

        <v-spacer></v-spacer>

        <!-- Notifications -->
        <v-btn icon>
          <v-badge color="red" content="3" overlap>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>

        <!-- Import and use the UserMenu component -->
        <UserMenu @logout-dialog="logoutDialog = true" />
      </v-app-bar>
    </template>

    <!-- Logout Confirmation Dialog -->
    <v-dialog v-model="logoutDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Confirm Logout</v-card-title>
        <v-card-text>Are you sure you want to log out?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="logoutDialog = false">Cancel</v-btn>
          <v-btn color="red darken-1" text @click="confirmLogout">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Chatbot Component (Positioned at Bottom Right) -->
    <ChatBot style="width: 400px;" />
  </v-app>
</template>

<script>
import { useAuthStore } from './stores/auth';
import ChatBot from '../src/components/ChatBot.vue';
import UserMenu from './components/UserMenu.vue';

export default {
  name: 'App',
  components: {
    ChatBot,
    UserMenu,
  },
  data() {
    return {
      logoutDialog: false,
      sidebar: true, 
      chatbotOpen: false, 
    };
  },
  computed: {
    isAuthPage() {
      return this.$route.path === "/login" || this.$route.path === "/signup";
    }
  },
  methods: {
    confirmLogout() {
      const authStore = useAuthStore();
      authStore.logout();
      this.logoutDialog = false;
      this.$router.push('/login');
    },
    toggleChatbot() {
      this.chatbotOpen = !this.chatbotOpen;
    }
  },
  created() { 
    const authStore = useAuthStore();
    authStore.initAuth();
  }
};
</script>

<style>
.search-bar {
  max-width: 250px;
}

@media (max-width: 600px) {
  .search-bar {
    max-width: 150px;
  }
}

.chatbot-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
