const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('bh6', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let m6embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Builder Hall 6 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711607260249456780/711255607830904963.png")
    .setColor("RANDOM")
    .setDescription(`Here are the different Bh 6 compositions available.`)
    .addField(emoji(emo.bombea) + " Air:", "Baby minions => `" + prefix + "b6bbg`\nBaby Minions Witchs => `" + prefix + "b6bbgw`\nFull Baby => `" + prefix + "b6bb`")
    .addField(emoji(emo.mmortier) + " Ground:", "Giant Barbars => `" + prefix + "b6gb` \nGiant Charettes => `" + prefix + "b6gc`\nGiants Charettes 1 => `" + prefix + "b6gc1`\nGiants Charettes 2 => `" + prefix + "b6gc2`")
    .addField(emoji(emo.mtesla) + " Hybrid:", "Archers Minions => `" + prefix + "b6ag`\nFull Witchs => `" + prefix + "b6w`\nWitch Giants => `" + prefix + "b6wg`\n Minions Witch => `" + prefix + "b6wl`")
    message.channel.send(m6embed)
  }
} 