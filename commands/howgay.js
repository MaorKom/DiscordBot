const Discord = require("discord.js");
const cooldown = new Set()
module.exports.run = async (bot, message, args) => {
if(cooldown.has(message.author.id)){
message.reply("You should wait 5 secconds between command").then(m => m.delete({timeout: 4000}))
message.delete()
}else{
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let howgay = Math.floor(Math.random() * 100 + 1)
let embed = new Discord.MessageEmbed()
.setTitle("Howgay")
.setColor("RANDOM")
.setThumbnail(member.user.displayAvatarURL())
if (['624591546213203969', '437296610305769472'].includes(member.id)){
    embed.setDescription(`MaorKom is 0% gay`)
}else if(member.id !== '437296610305769472'){
    embed.setDescription(`${member.user.username} is ${howgay}% gay`)
}
message.channel.send(embed)

cooldown.add(message.author.id)
setTimeout(() => {
  cooldown.delete(message.author.id)
}, 5000)

}
}
module.exports.help = {
    name: "howgay",
    aliases: ["hg"]

}
