const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo14', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c14embed = new Discord.MessageEmbed()
      .setTitle(`**CoB - Town Hall 14 Compositions**`)
      .setFooter(
        `Clash of Base - Developped By ` + dev,
        client.user.displayAvatarURL()
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/721459003686780988/854472856783028244/TH14-2_f0e593fd-cdd0-4edf-a986-ced767a1df51_240x240.png"
      )
      .setColor("#228B22")
      .setDescription(`Compos Th 14 available.`)
      .addField(
        emoji(emo.reine) + " Queen Walk:",
        "Queen Walk Super Wiwi => `" + prefix + "c14qwsw`"
      )
      .addField(emoji(emo.bouliste) + " Bowlers:", "*soon !*")
      .addField(
        emoji(emo.dragon) + " Dragons:",
        "Edrag => `" +
          prefix +
          "c14ed`\nDrag Ball Clone => `" +
          prefix +
          "c14dbc`\nSuper Minion drag => `" +
          prefix +
          "c14smd`\nDrag Bat => `" +
          prefix +
          "c14db`"
      )
      .addField(emoji(emo.ballon) + "Loons:", "Wiz Mobal=> `" + prefix + "c14wmb`\n")
      .addField(emoji(emo.hog) + " Hogs:", "Min Hog => `" +
          prefix +
          "c14mh`")
      .addField(
        emoji(emo.pekka) + " Pekkas:",
        "Pekka Smash => `" + prefix + "c14ps`\nKiller Smash => `" +
          prefix +
          "c14ks`"
      )
      .addField(emoji(emo.golem) + " Golems:", "*soon !*")
      .addField(emoji(emo.yeti) + " Yeti:", "Yetis => `" +
          prefix +
          "c14y`\nYetis Witch=> `" +
          prefix +
          "c14yw`")
      .addField(
        emoji(emo.superwiwi) + " Super troops",
        "Super Wiwi => `" +
          prefix +
          "c14sw`\nSuper Archery => `" +
          prefix +
          "c14sa`\nAir Spam => `" +
          prefix +
          "c14as`"
      );
    message.channel.send(c14embed)
  }
} 