const Discord = require("discord.js");
const beautify = require("beautify")
module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "437296610305769472") {
        return message.reply("אתה לא האוונר מטומטם")
             .than(m => m.delete(5000));
    }

    if(!args[0]) {
        message.reply("אתה לא חושב שצריך לכתוב משהו?!")
        .than(m => m.delete(5000));
    }

    try {
        if (args.join(" ").toLowerCase().includes("token")) {

        }
        const toEval = args.join(" ");
        const evaluated = eval(toEval);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL)
        .setTitle("Eval")
        .addField("To evaluate:", ` \`\`\`js\n${beautify(args.join(" "),{ format: "js"})}\n\`\`\``)
        .addField("Evaluated:", evaluated)
        .addField("type of:", typeof(evaluated));
        message.channel.send(embed);
    } catch (e) {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("\:x: Error!")
        .setDescription(e)
        .setFooter(bot.user.username, bot.user.displayAvatarURL);
        message.channel.send(embed)
message.delete()
    }
}
module.exports.help = {
    name: "eval",
    aliases: ["e"]

}



