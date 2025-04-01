<template>
  <v-app>
    <v-navigation-drawer app color="grey-darken-4" dark>
      <v-list>
        <v-list-item title="Fintech App" class="text-h6 font-weight-bold"></v-list-item>
        <v-divider></v-divider>
        <v-list-item link to="/" prepend-icon="mdi-view-dashboard"> Dashboard </v-list-item>
        <v-list-item link to="/transactions" prepend-icon="mdi-bank"> Transactions </v-list-item>
        <v-list-item link to="/settings" prepend-icon="mdi-cog"> Settings </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="handleLogout" prepend-icon="mdi-logout"> Logout </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <h1 class="mb-6 text-h4 font-weight-bold">Dashboard</h1>

        <!-- Show loading or error messages -->
        <div v-if="financialStore.isLoading">Loading...</div>
        <div v-else-if="financialStore.errorMessage">
          <v-alert type="error">{{ financialStore.errorMessage }}</v-alert>
        </div>

        <v-row justify="center">
          <DashboardCard 
            :title="'Total Balance'" 
            :value="`$${financialStore.totalBalance.toFixed(2)}`" 
            icon="mdi-wallet" 
          />
          <DashboardCard 
            :title="'Total Investment'" 
            :value="`$${financialStore.totalInvestment.toFixed(2)}`" 
            icon="mdi-chart-line" 
          />
          <DashboardCard 
            :title="'Total Savings'" 
            :value="`$${financialStore.totalSavings.toFixed(2)}`" 
            icon="mdi-piggy-bank" 
          />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useFinancialStore } from '../stores/finance';
import DashboardCard from '../components/DashboardCard.vue';

export default {
  components: { DashboardCard },
  computed: {
    financialStore() {
      return useFinancialStore();
    },
  },
  mounted() {
    console.log('Dashboard mounted, fetching data...');
    this.financialStore.fetchFinancialData('AAPL'); 
  },
  methods: {
    handleLogout() {
      const authStore = useAuthStore();
      authStore.logout();
    },
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .text-h4 {
    text-align: center;
  }
}
</style>
