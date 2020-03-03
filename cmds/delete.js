module.exports.run = (client, msg, args) => {
    if(!args) return msg.reply('Не указано название роли!');
    let role = args.join(' '),
        answers = ['Готово!', 'Роль удалена!'];
    if(role === 'Penguin' || role === 'Old' || role === 'Little Peng' || role === 'Senior Penguin' || role === 'Sanya') return msg.reply('А по жопе?');
    if(msg.member.roles.find(role2 => role2.name === role) && msg.member.roles.find(role2 => role2.name === role).client.user.username === 'Penguin Bot'){
        msg.member.roles.find(role2 => role2.name === role).delete();
        msg.reply(answers[Math.round(Math.random() * (answers.length - 1))]);
    } else {
        msg.reply('Роль не найдена!');
    }
}
module.exports.help = {
    name: 'delete'
}