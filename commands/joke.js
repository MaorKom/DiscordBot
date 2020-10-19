const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;
const cooldown = new Set()
module.exports.run = async (bot, message, args) => {
    if(cooldown.has(message.author.id)){
        message.reply("You should wait 5 secconds between command").then(m => m.delete({timeout: 4000}))
        message.delete()
      }else{
    giveMeAJoke.getRandomDadJoke(function(joke){
        message.channel.send(joke)
    })
}
cooldown.add(message.author.id)
setTimeout(() => {
  cooldown.delete(message.author.id)
}, 5000)
}
module.exports.help = {
    name: "joke",
    aliases:["בדיחה"]
}