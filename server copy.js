const { CONNECTING } = require("ws");
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000});

wss.on("connection", ws=> {
   console.log("New Client connected!");

   ws.on("message", data => {
      console.log(data);
      if(data == "pija?"){
         console.log(`Client has sent us: ${data}`);
         ws.send("ini pija");
      } else {
         ws.send(data.toUpperCase());
      }
      

      
   });

   ws.on("close", () => {
      console.log("Client has disconnected!");

   });
});