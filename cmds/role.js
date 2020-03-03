module.exports.run = (client, msg, args) => {
    let role = args.splice(1).join(' '),
        color = args[0],
        answers = ['Готово!', 'Сделано! Теперь вы восхитительны!'];
    msg.guild.createRole({
        name: role,
        color: color,
    }).then(async role => {
        await role.setPermissions(0).catch(err => console.log(err));
        await role.setPosition(msg.member.highestRole.position+1).catch(err => console.log(err));
        msg.member.addRole(role.id);
        msg.reply(answers[Math.round(Math.random() * (answers.length - 1))]);
    }).catch(err => console.log(err));
}
module.exports.help = {
    name: 'role'
}