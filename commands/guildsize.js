const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    message.channel.send(`I am in ${bot.guilds.cache.size} servers!`)
}
module.exports.help = {
    name: "guilds",
    aliases: ["guildsize", "g"]
}