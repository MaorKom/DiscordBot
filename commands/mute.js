const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you don't have permission'")
if(!user) return message.reply("I can't find this user")
if (user.id === message.author.id) return message.channel.send("You cannot mute yourself!");
if(user.hasPermission("ADMINISTRATOR")) return message.reply("I cant mute this user")
let role = message.guild.roles.cache.find(r => r.name === "Muted")
if(!role) return;
let time = args[1]
if(!time) return message.reply("How long is the mute?")
user.roles.add(role.id)
message.channel.send(`<@${user.id}> has been muted for ${(time)}`)
setTimeout(function() {
user.roles.remove(role.id)
message.channel.send(`<@${user.id}> has been unmuted!`)
}, ms(time))
}
module.exports.help = {
    name: "mute",
    aliases: ["tempmute"]

}