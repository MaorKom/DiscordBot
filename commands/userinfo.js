const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author


            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Username", `${member.user.tag}`)
                .addField("ID", member.user.id)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<:no:425632070036094986> Not playing"}`)
                .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`)
                .addField("Joined Discord At", member.user.createdAt)
                .setTimestamp()
    
            message.channel.send(embed);

    }
module.exports.help = {
    name: "userinfo",
    aliases: ["ui"]

}