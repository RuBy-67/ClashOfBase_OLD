const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo12', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c12embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Town Hall 12 Compositions**`)
    .setFooter(`Clash of Base - Developped by  ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711603123054968882/711246843131986000.png")
    .setColor("#4169E1")
    .setDescription(`Compos Th 11 available.`)
    .addField(emoji(emo.reine) + " Queen Walk:", "Qw BB Drag => `" + prefix + "c12qwbb` \nQw BoMi => `" + prefix + "c12qwbm` \nQw BoWiPe => `" + prefix + "c12qwbwp` \nQw BoPe => `" + prefix + "c12qwbp`\nQw Dragon=> `" + prefix + "c12qwd`\nQw GiBoElectro => `" + prefix + "c12qwgbed`\nQw Hog => `" + prefix + "c12qwh`\nQw Mass Minion => `" + prefix + "c12qwmm`\nQw Mineurs => `" + prefix + "c12qwm`\nQw Miners Hogs => `" + prefix + "c12qwmh`\nQw Mobal => `" + prefix + "c12qwmb`\nQw Pekka Bowler => `" + prefix + "c12qwpb`\nQw Pekka Mineur => `" + prefix + "c12qwpm`")
    .addField(emoji(emo.hog) + " Hogs:", "BoHo => `" + prefix + "c12bh` \nBoVaHo => `" + prefix + "c12bvh`\nGoBoHo => `" + prefix + "c12gbh`\nHGHB => `" + prefix + "c12hghb`\nGoHog => `" + prefix + "c12gh`")
    .addField(emoji(emo.ballon) + " Loons:", "Electro lavaloon => `" + prefix + "c12emb` \nGhost Electro => `" + prefix + "c12ge` \nHexa MoBal => `" + prefix + "c12hmb` \nLooNion => `" + prefix + "c12bg`\nMobal => `" + prefix + "c12mb`\nMobal Zap=> `" + prefix + "c12mbz`")
    .addField(emoji(emo.bouliste) + " Bowlers:", "HPBW (Healer, Pekka, Bowler, Witch) => `" + prefix + "c12hpbw`\nSpam Bowler => `" + prefix + "c12b`\nSuper Wibou => `" + prefix + "c12swb`")
    .addField(emoji(emo.dragon) + " Dragons:", "Baby Drag & loon => `" + prefix + "c12bbb`\nDragon & loon => `" + prefix + "c12db`( Others : `" + prefix + "c12db1`, `" + prefix + "c12db2` )\nDrags bats => `" + prefix + "c12dcs`\n Electro loon freeze => `" + prefix + "c12edbg`\n Electro Bowler => `" + prefix + "c12edb`\nElectro Valkyries => `" + prefix + "c12edv`")
    .addField(emoji(emo.geant) + " Giants:", "Army12 => `" + prefix + "c1212` \nGibowitch =>` " + prefix + "c12gibw`")
    .addField(emoji(emo.mineur) + " Miners:", "Miners & Hogs => `" + prefix + "c12mh`")
    .addField(emoji(emo.golem) + " Golems:", "Ice Spam => `" + prefix + "c12is`\n Golem Bat => `" + prefix + "c12gb`\nIce BoWitch => `" + prefix + "c12ibw`")
    .addField(emoji(emo.pekka) + " Pekkas:", "PekkaBoBat => `" + prefix + "c12pbb`\nPekka LaLoon => `" + prefix + "c12pmb` \n Mass Pekka => `" + prefix + "c12mp`")
    .addField(emoji(emo.witch) + " Witchs:", " Avalanche=> `" + prefix + "c12a`\nGoWitch => `" + prefix + "c12gw`\nWrecker WiWi => `" + prefix + "c12www`\nBatSlap => `" + prefix + "c12bs`")
    .addField(emoji(emo.valky) + " Valkyries:", "Falcon => `" + prefix + "c12f`\nValkyrie Bat => `" + prefix + "c12vb` (Other:`" + prefix + "c12vb2`)")
    .addField(emoji(emo.yeti) + " Yeti:", "Yeti Witch => `" + prefix + "c12yw`\n Yeti Hogs => `" + prefix + "c12yh`\nYeti Bat => `" + prefix + "c12yb`")
    message.channel.send(c12embed)
  }
} 