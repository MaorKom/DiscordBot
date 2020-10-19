const Discord = require("discord.js");
const ytdl = require("ytdl-core");
module.exports.run = async (bot, message, args) => {
const voiceChannel = message.member.voice.channel
if(!voiceChannel) return message.reply("you must be in voice channel")
try{
var connection = await voiceChannel.join().then(message.channel.send("For stop me do the command !leave"))
} catch(error){
console.log(`cant connect to the voice! ${error}`)
}

}
module.exports.help = {
    name: "24/7",
    aliases: ["24", "join"]
}