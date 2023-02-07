const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo11', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c11embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Town Hall 11 Compositions**`)
    .setFooter(`Clash of Base - Developped By ` + dev, client.user.displayAvatarURL())
    .setColor("#FFFFFF")
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711603082261430282/711246868147077230.png")
    .setDescription(`Compos Th 11 available.`)
    .addField(emoji(emo.reine) + " Queen Walk:", "Qw Baby Drag => `" + prefix + "c11qwbb` \nQw Baby Hogs  => `" + prefix + "c11qwbbh` \nQw Electro => `" + prefix + "c11qwed`\nQw GiBoElectro => `" + prefix + "c11qwgbed` \nQw Hogs => `" + prefix + "c11qwh`\nQw Miners => `" + prefix + "c11qwm` \nQw Min-Hogs => `" + prefix + "c11qwmh`\nQw Pekkabou => `" + prefix + "c11qwpb`\nQw Pekka Bobat => `" + prefix + "c11qwpbb`")
    .addField(emoji(emo.hog) + " Hogs:", "Electro Hogs => `" + prefix + "c11eh` \nGoHog => `" + prefix + "c11gh`\nHGHB=> `" + prefix + "c11hghb`\nHogs => `" + prefix + "c11h`\nIcy Hogs => `" + prefix + "c11ih`")
    .addField(emoji(emo.ballon) + " Loons:", "BoLaLo => `" + prefix + "c11bmb` \nGhost Electro => `" + prefix + "c11ge` \nGoMoBall => `" + prefix + "c11gmb`\nZap LaLo => `" + prefix + "c11zll`")
    .addField(emoji(emo.dragon) + " Dragons:", "Dragon et loon => `" + prefix + "c11db`\nDragon Bats => `" + prefix + "c11dcs`\nKS Electro => `" + prefix + "c11kse`\nZap Drag => `" + prefix + "c11zd`\n Dragon loon Bat => `" + prefix + "c11dbb`")
    .addField(emoji(emo.mineur) + " Miners:", "BoMiner => `" + prefix + "c11bm` \nMineurs Valkyries => `" + prefix + "c11vm`")
    .addField(emoji(emo.witch) + " Witch:", "Bat Slap => `" + prefix + "c11bs` \nFrozen Witches => `" + prefix + "c11fw` \nGiBoWitch => `" + prefix + "c11gibw` \nWitch Slap => `" + prefix + "c11ws`")
    .addField(emoji(emo.valky) + " Valkyries:", "Falcon => `" + prefix + "c11f`\nFalcon bat => `" + prefix + "c11fb`")
    message.channel.send(c11embed)
  }
} 