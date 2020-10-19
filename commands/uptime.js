const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
    message.channel.send(`My uptime is  **${ms(bot.uptime, { long: true })}**`)
}
module.exports.help = {
    name: "uptime",
    aliases: ["u", "up"]
}
