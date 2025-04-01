<template>
  <v-col cols="12" xs="12" sm="6" md="4">
    <v-card class="pa-4 dashboard-card" color="indigo darken-2" dark elevation="5">
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-2">{{ icon }}</v-icon> 
        <span class="card-title">{{ title }}</span>
      </v-card-title>
      <v-card-text class="card-value">{{ value }}</v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['title', 'value', 'icon'],
};
</script>

<style scoped>
.dashboard-card {
  text-align: center;
  border-radius: 12px;
}

.card-title {
  font-size: 1.2rem;
}

.card-value {
  font-size: 2rem;
}

@media (max-width: 400px) {
  .card-title {
    font-size: 1rem;
  }
  .card-value {
    font-size: 1.8rem;
  }
}
</style>
