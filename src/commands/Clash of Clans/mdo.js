const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('bh', 'Clash of Clans', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
      .setTitle("Building information - Builder Hall")
      .setDescription("Which Bh do you want information from?");
    
    message.channel.send(embed).then(async message => {

      await message.react(emo.mdo9);
      await message.react(emo.mdo8);
      await message.react(emo.mdo7);
      await message.react(emo.mdo6);
      await message.react(emo.mdo5);
      await message.react(emo.mdo4);
      await message.react(emo.mdo3);
      await message.react(emo.mdo2);

    });
  }
} 