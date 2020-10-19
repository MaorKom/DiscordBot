const Discord = require("discord.js")
module.exports.run = async(bot, message, args) => {
let voice = message.member.voice.channel 
if(!voice) return message.reply("Join the voice to disconnect me")
voice.leave()

}
module.exports.help = {
    name: "leave",
    aliases: []
}