const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("Back up Smoke, **BACK UP!**");
});

client.on("message", message => {
  if (message.author.id === "416405151050366976") message.reply("Now **THAT** was some some serious **shit! Whoo!**");
});

client.on("message", message => {
  if (message.author.id === "415704844221808640") message.reply("Man, nobody give a **shit** about the 'hood'.");
});

client.on("message", message => {
  if (message.author.id === "") message.reply("");
});

client.on('message', msg => {
  if (msg.content.toLowerCase()=== "What's Cj?") {
    msg.reply("A **MOTHER FUCKING BUSTA**.");
  }
});

client.login(process.env.BOT_TOKEN);
