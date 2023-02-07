const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('clan', 'Clash of Clans', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    const clashAPI = require('clash-of-clans-api');
    let api_client = clashAPI({
      token: config.rubcocip
    });

    let nope = new Discord.MessageEmbed()
      .setDescription("Error - Please provide a correct Tag")
      .addField("Try : :", "`" + prefix + "clan #tag`")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

    if (!args || args === " " || args === undefined || args === null || args === "" || !args[0]) {
      return message.channel.send(nope);
    };
    
    api_client
      .clanByTag(args)
      .catch(err => {message.channel.send(nope)})
      .then(response => { 

        let ctype = response.type;
          if (ctype === "inviteOnly") var ctype2 = "InviteOnly";
          else if (ctype === "open") var ctype2 = "Open";
          else if (ctype === "close") var ctype2 = "Close";
          else ctype2 = ctype;

        let fdg = response.warFrequency;
          if (fdg === "always") var fdg2 = "Always";
          else if (fdg === "never") var fdg2 = "Nevers";
          else if (fdg === "unknown") var fdg2 = "Unknown";
          else fdg2 = fdg;

        if (response.labels === undefined || response.labels === null || response.labels[0] === undefined || response.labels[0] === null || response.labels.length === "0") {var labels = "Non Définis";
        }else{ labels = response.labels[0].name + " **|** " + response.labels[1].name + " **|** " + response.labels[2].name; }
        if ( response.description === undefined || response.description === null || response.description === " " || response.description.length === 0) { var desc = "Pas de Description"}
        else { desc = response.description}
        if ( response.location === undefined || response.location === null) { var loca = "Origin Not Defined"}
        else { loca = response.location.name}

        let embed = new Discord.MessageEmbed()
          .setTitle("**" + response.name + "**")
          .setThumbnail(response.badgeUrls.medium)
          .setColor("RANDOM")
          .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
          .setDescription("**[Clan Link](https://link.clashofclans.com/fr?action=OpenClanProfile&tag" + response.tag.replace("#", "=") + ")  |  Tag : `" + response.tag + "`**")
          .addField("Description :", desc)
          .addField("Country :", emoji(emo.terre) + " " + loca, true)
          .addField("Members :", ":busts_in_silhouette: **" + response.members + "** / 50", true)
          .addField("Type :", ctype2, true)
          .addField("Trophies Required :", emoji(emo.tr) + " " + response.requiredTrophies, true,)
          .addField("War Frequency :", ":crossed_swords: " + fdg2, true)
          .addField("Clan trophies :", emoji(emo.tr) + " " + response.clanPoints, true)
          .addField("Trophies Builder Hall :", emoji(emo.vtr) + " " + response.clanVersusPoints, true)
          .addField("Labels :", emoji(emo.right) + " " + labels)
          .addField("War Won :", emoji(emo.garrow) + " " + response.warWins, true)
          .addField("Successive Victories :", emoji(emo.rarrow) + " " + response.warWinStreak, true)
          .addField("League :", emoji(emo.barrow) + " " + response.warLeague.name);

        message.channel.send(embed);
      })
  }
} 