const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
    if(!message.channel.nsfw) return message.channel.send(":flushed: NSFW החדר הזה לא ")
        let {body} = await superagent
        .get(`https://nekos.life/api/v2/img/boobs`);
          
          let dogembed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setImage(body.url);
          message.channel.send(dogembed)
    message.delete()
        }
module.exports.help = {
    name: "boobs",
    aliases: ["boob"]

}