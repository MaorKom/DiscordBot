const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`"prefix": "!" \n\n __**Moderetor**__ \n ban, kick, eval, mute, clear. \n\n __**fun**__ \n  say, dm (adminstrator), meme, boobs \n __**info**__ \n avatar, serverinfo, userinfo, invite, uptime.`)
message.channel.send(embed)
}
module.exports.help = {
    name: "help",
    aliases: ["commands"]

}