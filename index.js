const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const Canvas = require("canvas")
const colors = require("./colors.json")
const canvacord = require("canvacord")
const xp = require("./xp.json");

bot.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; 
  if (!reaction.message.guild) return; 
  if (reaction.message.guild.id !== "702791995298545745") return; 
  
  if (reaction.message.channel.id === "749954043174060053") {
    if (reaction.emoji.name === "🎉") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("749954472112947281")
      return user.send("הרול הגרלות ניתן בהצלחה").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "🏓") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("749954979309027340"); // Roblox role.
      return user.send("הרול תיוגים ניתן בהצלחה!").catch(() => console.log("Failed to send DM."));
    }
  } else {
    return
  }
})
/////////////////////////////////////
bot.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; 
  if (!reaction.message.guild) return; 
  if (reaction.message.guild.id !== "702791995298545745") return; 
  
  if (reaction.message.channel.id === "749954043174060053") {
    if (reaction.emoji.name === "🎉") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("749954472112947281") 
      return user.send("הרול הגרלות ירד!").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "🏓") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("749954979309027340") 
      return user.send("הרול תיוגים ירד!").catch(() => console.log("Failed to send DM."));
    }
  } else {
    return;
  }
})
bot.on("ready", async () => {
  console.log(`${bot.user.tag} is now online`);
  setInterval(() => {
    const statuses = [`Watching ${bot.guilds.cache.size} servers! \ https://helpkom.000webhostapp.com \ MaorKom#7860 created me!`, 'join the support discord server: invite.gg/maorkom']
  const status = statuses[Math.floor(Math.random() * statuses.length)]
    bot.user.setPresence({
      status: "online",
      activity: {
        name: status, 
        type: "PLAYING"
      }
    })
  }, 3000)
  const role = bot.guilds.cache.get("702791995298545745").roles.cache.get("720363337090859058")

  setInterval(() => {
    role.edit({
      color: "RANDOM"
    })
  }, 100000)
});

const fs = require("fs");
const { set } = require("quick.db");
bot.db = require("quick.db")
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  console.log(`Loading a total of ${files.length} commands.`);

  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    console.log(pull.help);
    bot.commands.set(pull.help.name, pull);
    pull.help.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.help.name)
    });

  });
});
bot.on("message", message => {
 if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let xpAdd = Math.floor(Math.random() * 5) + 4;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    
  }
  fs.writeFileSync("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  if(message.content.startsWith('<@726075214915698780>') || message.content.startsWith('<@!726075214915698780>')) return message.reply("**If you want to see my commands write `!help` in the chat!**")

//-------------------------------------------------------------------------------------------------
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes
  if (!message.content.startsWith(prefix) || message.author.bot) return;


  // let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(message.content.startsWith(`!prefix`)){
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
if(!prefixes[message.guild.id]){
  prefixes[message.guild.id] = {
    prefixes: botconfig.prefix
  };
}
message.channel.send(`**The server prefix is: __${prefixes[message.guild.id].prefixes}__**`)

    }
  if(message.content.startsWith(`resetprefix`)){
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
      prefixes[message.guild.id] = {
        prefixes: "!"
      }
      fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
          if(err) console.log(err)
      })
    message.channel.send("The prefix has been reset to !")
      }
//----------------------------------------------------------------------------------------------
    if(message.content.startsWith("https://")){
      if(message.member.hasPermission("MANAGE_MESSAGES")) return;
      message.delete().then(async msg => {
        msg.reply("Do not send any link!")
      })
    }


    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args);


})


bot.on("guildMemberAdd", async member => {
  if(member.guild.id !== "702791995298545745") return;
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  let welcome = member.guild.channels.cache.get("765464588035817482")
  if(!welcome) return;
  let embed = new Discord.MessageEmbed()
  .setDescription(`Hey ${member} type hello in the main chat!`)
  .setThumbnail(member.user.displayAvatarURL())
  .setFooter(member.user.tag)
  .setColor("#ffasff")
welcome.send(embed)
});

bot.login(botconfig.token);