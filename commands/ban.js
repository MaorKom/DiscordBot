var Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You can\'t use that!');

    var user = message.mentions.users.first();
    if(!user) return message.reply('You didn\'t mention anyone!');

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return message.reply('You cannot ban this person!');
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('You need to give a reason!');



    var embed = new Discord.MessageEmbed()
    .setTitle('You were banned!')
    .setDescription(reason);

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    message.guild.members.ban(user); // This should not be user.id like I said in my video. I made a mistake. Sorry! :)

    message.channel.send(`**${user}** has been banned by **${message.author}**!`);
}
module.exports.help = {
    name: "ban",
    aliases: []
}