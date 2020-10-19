const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const cooldown = new Set()
module.exports.run = async (bot, message, args) => {
    if(cooldown.has(message.author.id)){
        message.reply("You should wait 5 secconds between command").then(m => m.delete({timeout: 4000}))
        message.delete()
      }else{
    let subReddits = ["meme", "anime_meme", "anime"]
    let random = subReddits[Math.floor(Math.random() * subReddits.length)]
    let img = await randomPuppy(random)
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setURL(`https://www.reddit.com/f/${random}`)
    message.channel.send(embed)
}
cooldown.add(message.author.id)
setTimeout(() => {
  cooldown.delete(message.author.id)
}, 5000)
}
module.exports.help = {
    name: "meme",
    aliases:  ["memes"]
}
