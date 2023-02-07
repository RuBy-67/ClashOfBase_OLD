require("dotenv").config();
const config = require("../src/storage/config.json");
const { Client } = require("discord.js");
const client = new Client();
const { registerCommands, registerEvents } = require("./utils/registry");

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(
    "/////"
  );
})();

client.on("message", (msg) => {
  const { MessageEmbed } = require("discord.js");
  const jsonData = require("../src/storage/compo.json");
  const prefix = config.prefix;
  const dev = config.dev;
  var color;
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  
//couleurs des embeds
  if (msg.content.startsWith(prefix + "c14"))
    color = "#228B22";
  else if (msg.content.startsWith(prefix + "c13"))
    color = "#008B8B";
  
  else if (msg.content.startsWith(prefix + "c12"))
    color = "#4169E1";
  
  else if (msg.content.startsWith(prefix + "c11"))
    color = "#FFFFFF";
  
  else if (msg.content.startsWith(prefix + "c10"))
    color = "#FF6347";
    
  else if (msg.content.startsWith(prefix + "c9"))
    color = "#000000";

  else
    color = "#FFFF00";
    

  //Compo Village Principal
  let arg = msg.content.split(prefix).slice(1).join("c");
  if (jsonData[arg] === null || jsonData[arg] === undefined) return;

  let embed = new MessageEmbed()
    .setColor(color)
    .setFooter(
      "Clash of Base - Developped by " + dev,
      client.user.displayAvatarURL()
    )
    .setImage(jsonData[arg].img)
    .setDescription(
      "**" +
        jsonData[arg].nom +
        "** " +
        jsonData[arg].nv +
        " | [[Tutorial]](" +
        jsonData[arg].tuto +
        ") | [[Compo Link]](https://link.clashofclans.com/fr?action=CopyArmy&army=u" +
        jsonData[arg].troupe +
        ")"
    );
  msg.channel.send(embed);

  //Compo MDO
  if (msg.content.startsWith(prefix + "b")) {
    let arg = msg.content.split(prefix).slice(1).join("b");
    if (jsonData[arg] === null || jsonData[arg] === undefined) return;

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setFooter(
        "Clash of Base - Developped by " + dev,
        client.user.displayAvatarURL()
      )
      .setImage(jsonData[arg].img)
      .setDescription(
        "**" +
          jsonData[arg].nom +
          "** " +
          jsonData[arg].nv +
          " | [[Tutorial]](" +
          jsonData[arg].tuto +
          ")"
      );
    msg.channel.send(embed);
  }
});
