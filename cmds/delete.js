module.exports.run = (client, msg, args) => {
    if(!args) return msg.reply('Не указано название роли!');
    let role = args.join(' ');
    if(role === 'Penguin' || role === 'Old' || role === 'Little Peng' || role === 'Senior Penguin' || role === 'Sanya') return msg.reply('А по жопе?');
    if(msg.member.roles.find(role2 => role2.name === role) && msg.member.roles.find(role2 => role2.name === role).client.user.username === 'Penguin Bot'){
        msg.member.roles.find(role2 => role2.name === role).delete();
        msg.reply('Готово!');
    } else {
        msg.reply('Роль не найдена или создана не вами!');
    }
}
module.exports.help = {
    name: 'delete'
}