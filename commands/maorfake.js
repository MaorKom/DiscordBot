const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first() || message.author;
if(message.author.id !== "437296610305769472") return;
let say = args.slice(1).join(" ")
message.delete()
if(!say) return message.channel.send("What to say")
message.channel.createWebhook(user.username, {
    avatar: user.displayAvatarURL(),
    reason: say
}).then(async wb => {
    const user = new Discord.WebhookClient(wb.id, wb.token )
    await user.send(say)
    user.delete()
})
}

module.exports.help = {
    name: "fakee",
    aliases: []
}