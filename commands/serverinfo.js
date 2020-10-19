const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL())
    .setTitle("**__Server Information__**")
    .addField(`Server Name:`, message.guild.name)
    .addField(`ID:`, message.guild.id)
    .addField(`The Server Created At:`, message.guild.createdAt)
    .addField(`You Joined At:`, message.guild.joinedAt)
    .addField(`The Owner Of The Server:`, message.guild.owner, `ID:`, message.guild.ownerID)
    .addField(`The Owner Of The Server ID:`, message.guild.ownerID)
    .addField(`Member In The Server:`, message.guild.memberCount)
message.channel.send(embed);

}
module.exports.help = {
    name: "serverinfo",
    aliases: ["si"]

}