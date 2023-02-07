const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('hdv', 'Clash of Clans', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
      .setTitle("Building information - Town Hall")
      .setDescription("Which th do you want information from?");
    
    message.channel.send(embed).then(async message => {

      await message.react(emo.th13);
      await message.react(emo.th12);
      await message.react(emo.th11);
      await message.react(emo.th10);
      await message.react(emo.th9);
      await message.react(emo.th8);
      await message.react(emo.th7);
      await message.react(emo.th6);
      await message.react(emo.th5);
      await message.react(emo.th4);
      await message.react(emo.th3);
      await message.react(emo.th2);

    });
  }
} 