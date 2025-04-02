<!-- <template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item link to="/" prepend-icon="mdi-home"> Dashboard </v-list-item>
      <v-list-item link to="/transactions" prepend-icon="mdi-bank"> Transactions </v-list-item>
      <v-list-item link to="/settings" prepend-icon="mdi-cog"> Settings </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="handleLogout" prepend-icon="mdi-logout"> Logout </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useAuthStore } from '../stores/auth';

export default {
  methods: {
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();
    }
  }
};
</script> -->
