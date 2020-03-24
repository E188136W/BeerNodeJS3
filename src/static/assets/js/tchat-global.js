const socket = io();

const app = new Vue({
  el: "#tchat-global",
  vuetify: new Vuetify(),
  data: {
    displayConnection: true,
    user: "",
    allUser: [],

    displayGlobalTchat: false,
    message: "",
    allMessage: []
  },
  methods: {
    onUserConnection: function() {
      if (this.user != "") {
        this.allUser.push(this.user);
        socket.emit("new-user-connection", this.user);
        this.displayConnection = false;
        this.displayGlobalTchat = true;
      }
    },
    onUserInput: function() {
      if (this.message != "") {
        this.allMessage.push({ user: this.user, message: this.message });
        socket.emit("on-user-input", {
          user: this.user,
          message: this.message
        });
        this.message = "";
      }
    }
  },
  mounted() {
    socket.on("broadcast-users", data => {
      this.allUser = data;
    });
    socket.on("broadcast-messages", data => {
      this.allMessage = data;
    });
  }
});

socket.on("init", function(users, messages) {
  app.allUser = users;
  app.allMessage = messages;
});
