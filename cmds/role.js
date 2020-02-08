module.exports.run = (client, msg, args) => {
    let role = args.splice(1).join(' '),
        color = args[0];
    msg.guild.createRole({
        name: role,
        color: color,
    }).then(async role => {
        await msg.member.addRole(role.id);
        role.setPosition(msg.member.highestRole.position+1).catch(err => console.log(err));
        msg.reply('Готово!');
    }).catch(err => console.log(err));
}
module.exports.help = {
    name: 'role'
}