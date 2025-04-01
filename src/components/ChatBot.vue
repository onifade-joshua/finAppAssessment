<template>
  <div>
    <!-- Floating Chat Button -->
    <v-btn 
      icon 
      fab 
      color="primary" 
      class="chat-button"
      @click="toggleChat"
    >
      <v-icon>mdi-message-text</v-icon>
    </v-btn>

    <!-- Chat Window -->
    <v-dialog v-model="isChatOpen" persistent :max-width="dialogWidth">
      <v-card class="chat-card">
        <v-card-title class="d-flex justify-space-between align-center">
          <span>Customer Support</span>
          <v-btn icon @click="toggleChat">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <!-- Chat Messages -->
        <v-card-text class="chat-content">
          <div 
            v-for="(message, index) in messages" 
            :key="index" 
            :class="['chat-message', message.isUser ? 'user-message' : 'bot-message']"
          >
            <span>{{ message.text }}</span>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <!-- Chat Input -->
        <v-card-actions class="chat-actions">
          <v-text-field 
            v-model="newMessage" 
            label="Type your message..." 
            dense 
            outlined
            hide-details
            class="chat-input"
            @keyup.enter="sendMessage"
          ></v-text-field>
          <v-btn icon color="primary" @click="sendMessage">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChatOpen: false,
      newMessage: "",
      messages: [
        { text: "Hello! How can I assist you today?", isUser: false }
      ],
    };
  },
  computed: {
    dialogWidth() {
      return window.innerWidth < 500 ? "90vw" : "400px";
    }
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({ text: this.newMessage, isUser: true });
        this.newMessage = "";
        
        setTimeout(() => {
          this.messages.push({ text: "Thank you for reaching out! Our support team will assist you shortly.", isUser: false });
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
/* Floating Chat Button */
.chat-button {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
}

/* Chat Window */
.chat-card {
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

/* Chat Content */
.chat-content {
  max-width: 400px;
  overflow-y: auto;
  max-height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

/* Chat Messages */
.chat-message {
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  max-width: 80%;
}

.user-message {
  background-color: #e3f2fd;
  align-self: flex-end;
  text-align: right;
}

.bot-message {
  background-color: #f1f1f1;
  align-self: flex-start;
  text-align: left;
}

/* Chat Input */
.chat-actions {
  display: flex;
  align-items: center;
  padding: 10px;
}

.chat-input {
  flex-grow: 1;
}

/* Mobile Adjustments */
@media (max-width: 450px) {
  .chat-button {
    bottom: 10px;
    right: 10px;
  }

  .chat-content {
    max-height: 250px;
  }
}
</style>
