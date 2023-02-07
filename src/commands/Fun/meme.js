const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('meme', 'Fun', []);
  }

  async run(client, message, args) {
    try{
        const api = require("imageapi.js");
  
        let reddits = ["memes", "me_irl", "dankmeme"];
        let reddit = reddits[Math.floor(Math.random() * reddits.length )];
        let img = await api(reddit);
        let Embed = new Discord.MessageEmbed()
          .setTitle(`A meme of r/${reddit}`)
          .setURL(`https://reddit.com/r/${reddit}`)
          .setColor("RANDOM")
          .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
          .setImage(img);
        message.channel.send(Embed);
      }catch (err){
        console.log(err)
      };
  }
}