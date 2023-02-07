const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('player', 'Clash of Clans', []);
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
      .addField("Try :", "`" + prefix + "player #tag`")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

    if (!args || args === " " || args === undefined || args === null || args === "" || !args[0]) {
      return message.channel.send(nope)
    }
    
    api_client
      .playerByTag(args)
      .catch(err => {message.channel.send(nope)})
      .then(response => { 

          if (response.league != undefined || response.league != null) var league = response.league.name;
          else league = "Unclassified";
          if (response.builderHallLevel != undefined || response.builderHallLevel != null) var bh = response.builderHallLevel;
          else bh = "blocked";
          if (response.clan != undefined || response.clan != null) var clan = " **[" + response.clan.name + "](https://link.clashofclans.com/fr?action=OpenClanProfile&tag" + response.clan.tag.replace("#", "=") + ")** ( Tag: `" + response.clan.tag + "` )";
          else clan = "No Clan";
          if (response.labels === undefined || response.labels === null || response.labels[0] === undefined || response.labels[0] === null || response.labels.length === "0") {var labels = "Not Defined";
        }else{ labels = response.labels[0].name + " **|** " + response.labels[1].name + " **|** " + response.labels[2].name; }
          if ( response.heroes[0] != undefined || response.heroes[0] != null) {
            if ( response.heroes[0].village === "home" ) {
              var king = response.heroes[0].level; 
              var mdc = "0";
            }else{
              king = "0";  
              mdc = response.heroes[0].level;
            };
          
            if ( response.heroes[1] != undefined || response.heroes[1] != null) {
              if ( response.heroes[1].village === "home" ) {
                var queen = response.heroes[1].level; 
                var mdc = "0";
              }else{
                queen = "0";  
                mdc = response.heroes[1].level;
              };
            
              if ( response.heroes[2] != undefined || response.heroes[2] != null) {
                if ( response.heroes[2].village === "home" ) {
                  var gardien = response.heroes[2].level; 
                  var mdc = "0";
                }else{
                  gardien = "0";  
                  mdc = response.heroes[2].level;
                };
              
                if ( response.heroes[3] != undefined || response.heroes[3] != null) {
                  if ( response.heroes[3].village === "home" ) {
                    var championne = response.heroes[3].level; 
                    var mdc = "0";
                  }else{
                    championne = "0";  
                    mdc = response.heroes[3].level;
                  };

                  if ( response.heroes[4] != undefined || response.heroes[4] != null) {
                    if ( response.heroes[4].village === "builderbase" ) {
                      var mdc = response.heroes[4].level; 
                    }else{
                      var championne = response.heroes[4].level
                    };
                  };
                }else{
                  championne = "0"
                };
              }else{
                championne = "0";
                gardien = "0";
              };
            }else {
              championne = "0";
              gardien = "0";
              queen ="0";
            };
          }else{
            mdc = "0";
            championne = "0";
            gardien = "0";
            queen = "0";
            king = "0";
          };

          let e = new Discord.MessageEmbed()
            .setTitle("**" + response.name + "**")
            .setDescription("**[Player Profile](https://link.clashofclans.com/?action=OpenPlayerProfile&tag=%" + response.tag.replace("#", "23") + ")  |  Tag : `" + response.tag + "`**")
            .setThumbnail("https://cdn.discordapp.com/emojis/711510864234152016.png?v=1")
            .setColor("RANDOM")
            .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
            .addField("Town Hall :", response.townHallLevel, true)
            .addField("Builder Hall :", bh, true)
            .addField("Levels :", emoji(emo.lvl) + " " + response.expLevel, true)
            .addField("War stars :", emoji(emo.star) + " " + response.warStars, true)
            .addField("Donation :", emoji(emo.barbs) + " " + response.donations, true)
            .addField("Successful Attacks :", emoji(emo.epee) + " " + response.attackWins, true)
            .addField("Clan :", emoji(emo.bouclier) + clan)
            .addField("Th Trophy :", emoji(emo.tr) + " " + response.trophies, true)
            .addField("Bh Trophy  :", emoji(emo.vtr) + " " + response.versusTrophies, true)
            .addField("League :", league)
            .addField("Hero :", emoji(emo.roi) + " **" + king + "** / 75\n" + emoji(emo.reine) + " **" + queen + "** / 75\n" + emoji(emo.warden) + " **" + gardien + "** / 50\n" + emoji(emo.amazone) + " **" + championne + "** / 20\n" + emoji(emo.machine) + " **" + mdc + "** / 30")
            .addField("Labels :", emoji(emo.right) + " " + labels, true)

          message.channel.send(e)
        });
  }
} 