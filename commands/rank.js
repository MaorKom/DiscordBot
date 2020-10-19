const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
const cooldown = new Set()
const xp = require("../xp.json");
module.exports.run = async (bot, message, args) => {
  if(cooldown.has(message.author.id)){
    message.reply("You should wait 5 secconds between command").then(m => m.delete({timeout: 4000}))
    message.delete()
  }else{
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    }
  }
  let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
  let level = xp[message.author.id].level;
  let exp = xp[message.author.id].xp;
  let neededXP = level * 300;

  let rank = level


  const card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(rank)
    .setLevel(level)
    .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setStatus(user.presence.status)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await card.build();
  
  message.channel.send(new MessageAttachment(img, "rank.png"));
  cooldown.add(message.author.id)
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, 5000)
}
}

module.exports.help = {
  name: "rank",
  aliases:[]
};