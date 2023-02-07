const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json');
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('invite', 'Bot', ['invitebot', 'lien','link','invit','add']);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let iembed = new Discord.MessageEmbed()
    .setTitle(`Invitation page - **Clash of Base**`)
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL())
    .setDescription(emoji(emo.paperclip2) + " [[Invitation link]](https://discordapp.com/oauth2/authorize?client_id=661316233848684544&scope=bot&permissions=2113404159)")
    .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
  
    message.channel.send(iembed);
  }
} 