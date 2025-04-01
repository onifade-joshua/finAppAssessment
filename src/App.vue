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

        <!-- Popup Menu for Three-Dot Icon -->
        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item link @click="$router.push('/edit-profile')">
              <v-list-item-title>
                <v-icon left class="mr-2">mdi-account-edit</v-icon> Edit Profile
              </v-list-item-title>
            </v-list-item>

            <v-list-item link @click="$router.push('/messages')">
              <v-list-item-title>
                <v-icon left class="mr-2">mdi-message</v-icon> Messages
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Sidebar Navigation (Fixed Sidebar) -->
      <v-navigation-drawer v-model="sidebar" app :permanent="$vuetify.display.mdAndUp" temporary color="light">
        <v-list>
          <v-list-item link to="/" prepend-icon="mdi-view-dashboard"> Dashboard </v-list-item>
          <v-list-item link to="/transactions" prepend-icon="mdi-bank"> Transactions </v-list-item>
          <v-list-item link to="/settings" prepend-icon="mdi-cog"> Settings </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="logoutDialog = true" prepend-icon="mdi-logout"> Logout </v-list-item>
        </v-list>
      </v-navigation-drawer>
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

export default {
  name: 'App',
  components: {
    ChatBot,
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

<style scoped>
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
