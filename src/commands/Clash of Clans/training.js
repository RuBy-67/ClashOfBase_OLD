const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('training', 'Clash of Clans', ['train']);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let trainembed = new Discord.MessageEmbed()
      .setDescription(emoji(emo.epee) + " Here is the list of challenge clans:")
      .setColor("RANDOM")
      .setThumbnail(
        "https://media.discordapp.net/attachments/671075545072533545/711578031906357318/Raid_Star3.png"
      )
      .addField(
        emoji(emo.Th14) + "**Th14**",
        "Id : [#JVLLCG2J](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=JVLLCG2J)"
      );
      addField(
        emoji(emo.Th14) + "**Th14**",
        "Id : [#22GV8JGVU](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=#22GV8JGVU)"
      )
        .addField(emoji(emo.th13) + "/////th13/////", "////th13////")
        .addField(
          emoji(emo.th12) + "**Th12 (`Th12 Fc clan`)**",
          "Id : [#2Y0CVPJJ9](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=2Y0CVPJJ9)"
        )
        .addField(
          emoji(emo.th11) + "**Th11**",
          "Id : [#29QVLJLJ2](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=29QVLJLJ2)"
        )
        .addField(
          emoji(emo.th10) + "Th10",
          "Id : [#2YJUJCRY2](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=2YJUJCRY2)"
        )
        .addField(
          emoji(emo.th9) + "**Th9 (`大黒屋 フレチャth9専用`)**",
          "Id : [#L2RJ2LP9](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=L2RJ2LP9)"
        )
        .addField(
          emoji(emo.th9) + "**Th9 (`フレチャTH9 only“極”`)**",
          "Id : [#GYP8YUJV](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=GYP8YUJV)"
        )
        .setFooter(
          "Clash of Base - Developped by " + dev,
          client.user.displayAvatarURL()
        );
    message.channel.send(trainembed);
  }
}