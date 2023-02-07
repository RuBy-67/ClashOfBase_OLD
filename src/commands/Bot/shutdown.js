

const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('shutdown', 'Bot', ['off', 'stop']);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    message.delete();

    let nonembed = new Discord.MessageEmbed()
      .setDescription("Erreur - Accès refusé")
      .addField("Permission requise", "`Développeur du bot`")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Devlopped by " + dev, client.user.displayAvatarURL())

    if (message.author.id != config.drimoz && message.author.id != config.rub) {
      return message.channel.send(nonembed).then(m => m.delete({ timeout: 5000}));
    }else{
      message.channel.send(emoji(emo.roue) + " Déconnexion du bot par <@" + message.author.id + ">.").then(() => process.exit(0));
    };
  }
} 