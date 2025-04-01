<template>
    <v-card>
      <v-card-title> Recent Transactions </v-card-title>
      <v-card-text>
        <v-data-table :items="transactions" :headers="headers" class="elevation-1">
        </v-data-table>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { text: "Date", value: "date" },
          { text: "Description", value: "description" },
          { text: "Amount", value: "amount" },
          { text: "Status", value: "status" }
        ],
        transactions: [
          { date: "2024-03-01", description: "Salary", amount: "$5000", status: "Completed" },
          { date: "2024-03-05", description: "Investment", amount: "$2000", status: "Pending" },
          { date: "2024-03-10", description: "Groceries", amount: "-$150", status: "Completed" }
        ]
      };
    }
  };
  </script>
  