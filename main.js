const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const cfg = require('./json/settings.json');

fs.readdir('./cmds/', (error, files) => {
    if(error) return console.log(error);
    let jsFiles = files.filter((f) => f.split('.').pop() === "js");
    if(jsFiles == 0) console.log("Нет команд для загрузки!");
    jsFiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`[${i+1}]${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
    console.log(`Loaded ${jsFiles.length} commands`);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('p!help');
});

client.on('message', (msg) => {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return;
    let arr = msg.content.split(" ");
    let command = arr[0].toLowerCase();
    let args = arr.slice(1);
    if(!msg.content.startsWith(cfg.prefix)) return;
    let cmd = client.commands.get(command.slice(cfg.prefix.length));
    if(cmd) cmd.run(client, msg, args)
});

client.login(cfg.token);
