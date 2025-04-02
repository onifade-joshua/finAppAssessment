<template>
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
  
        <!-- Logout Option in the 3-dot menu -->
        <v-list-item @click="openLogoutDialog">
          <v-list-item-title>
            <v-icon left class="mr-2">mdi-logout</v-icon> Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
  
  <script>
  export default {
    methods: {
      openLogoutDialog() {
        this.$emit('logout-dialog');
      }
    }
  };
  </script>
  