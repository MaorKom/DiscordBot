const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
if(message.author.id !== "437296610305769472") {
return message.reply("אתה לא האוונר, מטומטם").then(m => m.delete({timeout: 5000}));
}
let commands = message.client.commands.array();
commands.forEach((cmd) => {
      `${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
      `${cmd.description}`,
      true
  }).then(message.channel.send(commands))
message.channel.send(commands)
}
module.exports.help = {
    name: "test",
    aliases: ["** **"],
    description: "test"
}
