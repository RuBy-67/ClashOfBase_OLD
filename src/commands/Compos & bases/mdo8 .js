const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('bh8', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let m8embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Builder Hall 8 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711607170684289144/711255667150946349.png")
    .setColor("RANDOM")
    .setDescription(`Here are the different Bh 8 compositions available.`)
    .addField(emoji(emo.bombea) + " Air:", "Loon Minions => `" + prefix + "bh8bg`")
    .addField(emoji(emo.mmortier) + " Ground:", "Barbars Giant Charettes => `" + prefix + "b8bgc` \nGiant Charettes => `" + prefix + "b8gc`\nGiants Charettes Pekkas => `" + prefix + "b8gcp`\nMass Barbars => `" + prefix + "b8mb`\nPekkas Charettes => `" + prefix + "b8pc`")
    .addField(emoji(emo.mtesla) + " Hybrid:", "Archers Minions => `" + prefix + "b8ag`\nloon Witch => `" + prefix + "b8bs`\nMinions Witch => `" + prefix + "b8sg`\nWitch Giants Minions => `" + prefix + "b6sgg`")
    message.channel.send(m8embed)
  }
} 