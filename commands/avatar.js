
const Discord = require("discord.js");
const cooldown = new Set()
module.exports.run = async (bot, message, args) => {

  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});

if(cooldown.has(message.author.id)){
  message.reply("You should wait 5 secconds between command").then(m => m.delete({timeout: 4000}))
  message.delete()
}else{
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
  message.channel.send(embed)
  
  cooldown.add(message.author.id)
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, 5000)
}
}
module.exports.help = {
    name: "avatar",
    aliases: ["a", "av"]
}