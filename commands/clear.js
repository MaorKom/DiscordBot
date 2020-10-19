const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
if(args[0] == "clear"){
if (num <= 500 && num > 1) {
    message.delete();
    message.channel.bulkDelete(num);
} else message.reply('אני יכול לנקות רק 2-500 הודעות מפגר');
    
    let clear = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("clear Command", "Usage: !Clear <amount>")
            
    message.channel.send(clear);
        return;
} 
            
    message.delete()
            
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to do that!");
    if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: !clear <amount>`");
      message.channel.bulkDelete(args[0]).then(() => {
        });        

}
module.exports.help = {
    name: "clear",
    aliases: ["c", "delete"]

}