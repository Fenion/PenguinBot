const Discord = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.reply("Pong!");
}

module.exports.help = {
    name: "ping"
}
