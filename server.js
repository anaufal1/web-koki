const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3000 },()=>{
    console.log('server started')
})
var pesanan = "";
wss.on('connection', function connection(ws) {
   ws.on('message', (data) => {
      console.log(data);
      
      if(data == "pija") {
         ws.send(pesanan);
      } else {
         console.log('data received \n %o',data);
            pesanan = data;
      }
   });
});
wss.on('listening',()=>{
   console.log('listening on 3000')
});