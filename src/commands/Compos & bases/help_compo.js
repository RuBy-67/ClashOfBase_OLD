const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('help-compo', 'Compos & Bases', ['hc', 'help_compo']);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let cembed = new Discord.MessageEmbed()
      .setTitle(`Compositions - **Clash of Base**`)
      .setFooter(
        `Clash of Base - Developped by ` + dev,
        client.user.displayAvatarURL()
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/671075545072533545/711544866357903480/711544618344251432.png"
      )
      .setColor("RANDOM")
      .setDescription(`Here are the different attack compositions.`)
      .addField(
        emoji(emo.roi) + " Main Village :",
        "Compos** Th 7 ** => `" +
          prefix +
          "compo7` \nCompos **Th 8** => `" +
          prefix +
          "compo8`\nCompos **Th 9** => `" +
          prefix +
          "compo9`\nCompos **Th 10** => `" +
          prefix +
          "compo10`\nCompos **Th 11** => `" +
          prefix +
          "compo11`\nCompos **Th 12** => `" +
          prefix +
          "compo12`\nCompos **Th 13** => `" +
          prefix +
          "compo13`\nCompos **Th 14** => `" +
          prefix +
          "compo14`"
      )
      .addField(
        emoji(emo.machine) + " Builder Hall :",
        "Compos **Bh 6** => `" +
          prefix +
          "bh6` \nCompos **Bh 7** => `" +
          prefix +
          "bh7` \nCompos **Bh 8** => `" +
          prefix +
          "bh8` \nCompos **Bh 9** => `" +
          prefix +
          "bh9`"
      )
      .addField(
        emoji(emo.question2) + " Need to train ?",
        "`" + prefix + "training`"
      );
    
    message.channel.send(cembed);
  }
} 