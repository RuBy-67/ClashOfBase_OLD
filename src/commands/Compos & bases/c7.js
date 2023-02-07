const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo7', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c7embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Town Hall 7 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711603223173005402/711247103891865641.png")
    .setColor("#FFFF00")
    .setDescription(`Compos Th 7 available.`)
    .addField(emoji(emo.bouliste) + " Bowlers:", "Bowler Walk => `" + prefix + "c7bw`")
    .addField(emoji(emo.dragon) + " Dragons:", "Dragon loon => `" + prefix + "c7db` \nDragHo => `" + prefix + "c7dh`")
    .addField(emoji(emo.hog) + " Hogs:", "Full Hogs => `" + prefix + "c7h`\nGoWiHog =>`" + prefix + "c7gwh`")
    .addField(emoji(emo.geant) + " Giants:", "GiBarch => `" + prefix + "c7gb` \nGiWi => `" + prefix + "c7gw`\nGobelins Knife => `" + prefix + "c7gk`\nHGHB=> `" + prefix + "c7hghb`\nWiGiHe=> `" + prefix + "c7wgh`")
    message.channel.send(c7embed)
  }
} 