module.exports.run = (client, msg, args) => {
    let role = args.join(' ');
    console.log(msg.guild.roles.find("name", role).client.user);
}
module.exports.help = {
    name: 'test'
}