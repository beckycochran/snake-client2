const net = require("net");
const { host, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ host, PORT });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    // console.log('connected!');

    conn.write('SNK: YO');
    // conn.write('Move: up');
    // conn.write('Move: up');
    // conn.write('Move: right');

  });


  // conn.on("connect", () => {
  //   conn.write('Name: SNK');
  // });


  return conn;
};


module.exports = connect;