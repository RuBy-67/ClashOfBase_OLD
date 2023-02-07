const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('vote', 'Bot', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let vote = new Discord.MessageEmbed()
      .setFooter("Clash of Base - Devlopped by " + dev, client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(emoji(emo.right) + " [[Discord Bot List]](https://top.gg/bot/657293926730039306/vote) (https://top.gg/bot/657293926730039306/vote)\n" + emoji(emo.right) + " [[Wonder Bot List]](https://wonderbotlist.com/fr/bot/661316233848684544/vote) (https://wonderbotlist.com/fr/bot/661316233848684544/vote)")
      .setTitle("Want to support us? Come and vote quickly!");
    message.channel.send(vote)
  }
} 