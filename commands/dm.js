const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("אין לך גישה");
let reason = args.slice(1).join(' ');
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('תתייג מישהו אידיוט');
if (reason.length < 1) return message.reply('מה לכתוב לו?!');
user.send(`${args.join(" ")}`);
message.delete();
}


module.exports.help = {
    name: "dm",
    aliases: ["dmmsg"]
}