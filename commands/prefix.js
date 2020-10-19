const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No perms")
    if(!args[0]) return message.reply("Usage !set-prefix <prefix>")
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
      prefixes[message.guild.id] = {
        prefixes: args[0]
      }
      fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
          if(err) console.log(err)
      })
      message.channel.send(`Prefix set!, the new prefix is: ${args[0]}`)
}
module.exports.help = {
    name: 'set-prefix',
    aliases:['setprefix']
}