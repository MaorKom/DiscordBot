const Discord = require("discord.js");
const cooldown = new Set()
module.exports.run = async (bot, message, args) => {
  if(cooldown.has(message.author.id)){
    message.reply("You should wait 5 seconds between command")

  }else{

    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.cache.size
    let chansize = bot.channels.cache.size
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    let servsize = bot.guilds.cache.size
    let botembed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("My Name:", `:desktop: ${bot.user.username}`)
    .addField("My Owner", "<@437296610305769472>")
    .addField("channels: Channels", `📁 ${chansize}`)
    .addField("Users", `:busts_in_silhouette:  ${usersize}`)
    .addField("I am in Servers", `🛡 ${servsize}`)
    .addField("I Created at", bot.user.createdAt)
    .addField("My uptime:", uptime)
    .setFooter(`Info: ${bot.user.username}. MaorKom is my dev`)
    .setTimestamp()
    
    message.channel.send(botembed);
    
    cooldown.add(message.author.id)
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, 5000)
  }
}

module.exports.help = {
  name:"botinfo",
  aliases: ["bi"]
}