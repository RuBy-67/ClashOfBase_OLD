const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('members', 'Clash of Clans', []);
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
      .addField("Try : :", "`" + prefix + "members #clantag`")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL()); 
    if (!args || args === " " || args === undefined || args === null || args === "" || !args[0]) {
      return message.channel.send(nope);
    };

    api_client
      .clanByTag(args)
      .catch(err => {message.channel.send(nope)})
      .then(response => {

        

        let message1 = "";
        let message2 = "";

          
        if(response.memberList.length < 25) {

          let memberlist = response.memberList;

          for(var i=0; i<memberlist.length; i++) {
            message1 += emoji(emo.tr) + " " + memberlist[i].trophies + " | **" + memberlist[i].name + "**\n";
          }
                
          let embed = new Discord.MessageEmbed()
            .setTitle("Clan composition | __" + response.name + "__")
            .setDescription(message1)
            .setThumbnail(response.badgeUrls.medium)
            .setColor("#e57233")
            .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL()); 
              
          message.channel.send(embed);
        }
        else {
          let memberlist = response.memberList;

          for(var i=0; i<25; i++) {
            message1 += emoji(emo.tr) + " " + memberlist[i].trophies + " | **" + memberlist[i].name + "**\n";
          };

          let memberlist_sliced = response.memberList.slice(25);

          for(var i=0; i<memberlist_sliced.length; i++) {
            message2 += emoji(emo.tr) + " " + memberlist_sliced[i].trophies + " | **" + memberlist_sliced[i].name + "** \n";
          };

          let embed1 = new Discord.MessageEmbed()
            .setTitle("Clan composition | __" + response.name + "__")
            .setDescription(message1)
            .setThumbnail(response.badgeUrls.medium)
            .setColor("#e57233")
            .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

          let embed2 = new Discord.MessageEmbed()
            .setTitle("continuation of the list | __" + response.name + "__")
            .setThumbnail(response.badgeUrls.medium)
            .setDescription(message2)
            .setColor("#e57233")
            .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL()); 

          message.channel.send(embed1)
            .then(message => {
                message.channel.send(embed2);
            });
        };
              
      });
  }
} 