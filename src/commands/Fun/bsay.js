const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('bsay', 'Fun', ['say']);
  }

  async run(client, message, args) {
    message.delete().catch()

    let args2 = args.join(" ");

    let nonembed = new Discord.MessageEmbed()
      .setDescription("Erreur - Accès refusé")
      .addField("Permission requise", "`Gérer les messages`")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
    let bnonembed = new Discord.MessageEmbed()
      .setDescription("Erreur - **" + client.user.username + "** n'a pas les permissions requises.")
      .setColor("#fb2929")
      .addField("Permission requise", "Gérer les messages")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
    let mnonembed = new Discord.MessageEmbed()
      .setDescription("Erreur - **" + client.user.username + "** ne peut envoyer un message vide.")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

    if (!message.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(bnonembed).then(m => m.delete({ timeout: 5000}));
    };
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(nonembed).then(m => m.delete({ timeout: 5000}));
    };

    if (!args2 || args2 === " " || args2 === undefined || args2 === null || args2 === "") {
      return message.channel.send(mnonembed).then(m => m.delete({ timeout: 5000}));
    };
    
    message.channel.send(args2);
  }
}