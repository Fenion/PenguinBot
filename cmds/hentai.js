module.exports.run = (client, msg) => {
    if(msg.member.roles.find('name', "nsfw")) {
        msg.member.removeRole(msg.guild.roles.find('name', 'nsfw').id).then(() => msg.reply('Готово')).catch(err => console.log(err));
    } else {
        msg.member.addRole(msg.guild.roles.find('name', 'nsfw').id).then(() => msg.reply('Готово')).catch(err => console.log(err));
    }
}
module.exports.help = {
    name: 'nsfw'
}