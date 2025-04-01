<template>
    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
      <!-- Background Gradient -->
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
  
      <!-- Sidebar Toggle Icon -->
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="$emit('toggleSidebar')"></v-app-bar-nav-icon>
      </template>
  
      <!-- Company Name -->
      <v-toolbar-title class="d-flex align-center">
        <v-img src="@/assets/logo.png" max-height="40" max-width="40" contain class="mr-2"></v-img>
        <span class="font-weight-bold">
          <span style="color: #ffcc00;">Fintech</span> <span style="color: white;">App</span>
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
  
      <!-- User Avatar -->
      <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  .search-bar {
    max-width: 250px;
  }
  </style>
  