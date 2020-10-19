const Discord = require ("discord.js");
const fs = require("fs");
const cooldown = new Set()

module.exports.run = async (bot, message, args) => {
    if(cooldown.has(message.author.id)){
        message.reply("You should wait 5 secconds between command").then(m => m.delete({timeout: 4000}))
        message.delete()
      }else{
    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./moderetor.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    let bicon = bot.user.displayAvatarURL;
    const pidor = message.guild.members.cache.get(args[0]) || message.member;
    const prefixcmds = fs.readFileSync("./prefix.txt", "utf8");
    let funEmbed = new Discord.MessageEmbed()
    .setColor("00ff00")
    .setTitle("**__Commands__**")
    .setDescription(` **__Admin Commands:__**\n  ${adminCommands}\n\n  **__Fun Commands:__**\n ${funcommands} \n\n**__Server Info/User Info/Bot Info__**\n ${infoList} \n\n **Other Commands:**\n ${prefixcmds}`)
    
    message.author.send(funEmbed).catch(function(err) {
        message.channel.send(err)
    })
    let supEmbed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle("Support")
    .setImage("https://cdn.discordapp.com/avatars/291221132256870400/4f71fea454b62405b55f2fe0d8e7db0c.png?size=2048")
    .setDescription("for support join to the [Support Server](https://discord.gg/McypVqP) and you can [invite me](https://discord.com/api/oauth2/authorize?client_id=726075214915698780&permissions=8&scope=bot) and else you can check for update in my [offical website](https://helpkom.000webhostapp.com/)")
    .setTimestamp()
    

    message.author.send(supEmbed).catch((err) => {
        message.channel.send(err)
    })


    

    message.delete();
    cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
}
 }

 module.exports.help = {
     name: "help",
     aliases: ["commands", "cmd", "cmds"]
 }