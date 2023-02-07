const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo13', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c13embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Town Hall 13 Compositions**`)
    .setFooter(`Clash of Base - Developped By ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711603155841974282/711246813113352202.png")
    .setColor("#008B8B")
    .setDescription(`Compos Th 13 available.`)
    .addField(emoji(emo.reine) + " Queen Walk:", "Qw Dragons => `" + prefix + "c13qwd` \nQw Miners => `" + prefix + "c13qwm`\n Qw MoBal => `" + prefix + "c13qwmb` \nQw Yeti => `" + prefix + "c13qwy` \nQw Archers => `" + prefix + "c13qwfa` \nQw Barbares => `" + prefix + "c13qwfb` \nQw Valkyrie Miners => `" + prefix + "c13qwvm` \nQw E-Drag => `" + prefix + "c13qwed` \nQw Min-Hogs => `" + prefix + "c13qwmh`\nMineurs Zap => `" + prefix + "c13mz`")
    .addField(emoji(emo.bouliste) + " Bowlers:", "Bowler Attack => `" + prefix + "c13ba` \nIce BoWitch => `" + prefix + "c13ibw`")
    .addField(emoji(emo.dragon) + " Dragons:", "Clone Ed Drag => `" + prefix + "c13cedd` \nDragCLone => `" + prefix + "c13dbc` \nElectrone => `" + prefix + "c13e` \nElectro Loons => `" + prefix + "c13edb`\nDrag Zap => `" + prefix + "c13dz`\nDrag Strike => `" + prefix + "c13ds`\nE-drag Bat => `" + prefix + "c13eddb`\nE-lightning => `" + prefix + "c13el`\nSuper Drag Bat => `" + prefix + "c13sdb`\nElec Invisible=> `" + prefix + "c13ilec`\nDrag de fer => `" + prefix + "c13de`")
    .addField(emoji(emo.ballon) + "Loons:", "SuiLaLo => `" + prefix + "c13sll`\nBat LaLo => `" + prefix + "c13bll`\nLaLo Stike=> `" + prefix + "c13lls`")
    .addField(emoji(emo.hog) + " Hogs:", "Mass Hogs => `" + prefix + "c13mh`\nSui Hog => `" + prefix + "c13sh`\nMin-Hog Lightning => `" + prefix + "c13mhl`\nHog Zap => `" + prefix + "c13hz`")
    .addField(emoji(emo.pekka) + " Pekkas:", "Full pekka => `" + prefix + "c13fp` \nPekka Bobats => `" + prefix + "c13pbb` \nPekka Smash => `" + prefix + "c13ps`\nPeWiYe => `" + prefix + "c13pwy`")
    .addField(emoji(emo.golem) + " Golems:", "Ice earthquake => `" + prefix + "c13iq`\nAngry Golem => `" + prefix + "c13ag`\nIce YéWi => `" + prefix + "c13iyw`\nGolembat MoBal => `" + prefix + "c13gbmb`")
    .addField(emoji(emo.yeti) + " Yeti:", "Yeti bats => `" + prefix + "c13yb` \nYeti Octoquake => `" + prefix + "c13yo`\nYeti smash => `" + prefix + "c13ys`\nYeti spam => `" + prefix + "c13ysp` \nSuper Yeti => `" + prefix + "c13sy`\nYewi Hunter => `" + prefix + "c13ywhu`\nYeti Hunter => `" + prefix + "c13yhu`\nYeti Strike => `" + prefix + "c13yst`\nYewi Jump => `" + prefix + "c13ywj`\nYebo Quake => `" + prefix + "c13ybs`\nYeti Jump => `" + prefix + "c13yj`\nYeti Quake => `" + prefix + "c13yq`\nChilled Yeti => `" + prefix + "c13cy`\nYeti clone => `" + prefix + "c13yc`\nYeti Valks-Rage => `" + prefix + "c13yvr`\nYeti Pekka Smash => `" + prefix + "c13yps`\nYeWi-Rage  => `" + prefix + "c13ywr`")
    .addField(emoji(emo.guerri) + " Walk:", "Full Healer => `" + prefix + "c13fg` \nMass Healer => `" + prefix + "c13mg`\nRoyal Charge => `" + prefix + "c13rc`")
    .addField(emoji(emo.superwiwi) + " Super Witch", "Super Witch Smash => `" + prefix + "c13sws` \nSuper Wi => `" + prefix + "c13sw`\nSuper Wi 2 => `" + prefix + "c13sw2`\nGrands Oscar => `" + prefix + "c13go`\nWitch Zap => `" + prefix + "c13wz`\nSuper Sorcière => `" + prefix + "c13ss`\nSuper Sorcier => `" + prefix + "c13sgs`")
    message.channel.send(c13embed)
  }
} 