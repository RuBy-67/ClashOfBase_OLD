const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json');
const fs = require('fs');
const prefix = config.prefix;
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('ar-admin', 'Auto-Roles', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let nonembed = new Discord.MessageEmbed()
      .setDescription("Erreur - Accès refusé")
      .addField("Permission requise", "`Gérer le serveur`")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
    let mnonembed = new Discord.MessageEmbed()
      .setDescription("Erreur - Paramètres Possibles : `true` | `false`")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
    
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.delete().then( message.channel.send(nonembed).then(m => m.delete({ timeout: 10000})));
    if (args != "false" && args != "true") return message.delete().then( message.channel.send(mnonembed).then(m => m.delete({ timeout: 10000})));

    let autoth = JSON.parse(fs.readFileSync('../../../storage/autoth.json', "utf8"));

    autoth[message.guild.id] = {
      perm: args
    };

    fs.writeFile("../../../storage/autoth.json", JSON.stringify(autoth), err => {
      if (err) console.log(err);
    });

    let pref = new Discord.MessageEmbed()
      .setTitle("Permission - Module d'Auto-Rôle")
      .setColor("RANDOM")
      .addField("Commande Activée :", "`" + autoth[message.guild.id].perm + "`")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
      .setThumbnail(message.guild.iconURL())
    
    message.channel.send(pref)
  }
} 