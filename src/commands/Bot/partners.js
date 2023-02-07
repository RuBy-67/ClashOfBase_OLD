const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('partner', 'Bot', ['partners', 'partenaire', 'partenaires', 'p']);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let pbembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL())
    .setTitle("Our partners' Discord servers")
    .addField(":spider: Black Widow *(Tournament Organisation)*","https://discord.gg/VJXRft5")
    .addField(emoji(emo.discord) + "Support servers", "https://discord.gg/TGeGVzJ ")
    .setFooter(`Clash of Base - Devlopped by ` + dev, client.user.displayAvatarURL());

    message.channel.send(pbembed);
  }
} 