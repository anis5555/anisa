const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(538671092626358292)
setInterval(function() {
channel.send(احححححححححح سبام رهيب يا زق ايم ذو بسط فورر ايفر);
}, 30)
})

client.login(process.env.BOT_TOKEN);
