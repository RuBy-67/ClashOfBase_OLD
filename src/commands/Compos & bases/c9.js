const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo9', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c9embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Town Hall 9 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711603054541144145/711246912103383102.png")
    .setColor("#000000")
    .setDescription(`Compos Th 9 available.\n*Some composition displayed on the poster has been corrected in the composition link and update*`)
    .addField(emoji(emo.reine) + " Queen Walk:", "Qw Barch => `" + prefix + "c9qwb` \nQw BBdrag => `" + prefix + "c9qwbb` \nQw Hogs => `" + prefix + "c9qwh` \nQw Dragon => `" + prefix + "c9qwd`\nQw minions => `" + prefix + "c9qwg` \nQw Gobelins => `" + prefix + "c9qwgob`\nQw GoWitch  => `" + prefix + "c9qwgw`\nQw GoHog => `" + prefix + "c9qwgh` \nQw GoMoBal => `" + prefix + "c9qwgmb` \nQw GoVaHog => `" + prefix + "c9qwgvh` \nQw Hell Storm => `" + prefix + "c9qwhs`\nQw Lavaloonion => `" + prefix + "c9qwmbg` \nQw MoBal (Rage) => `" + prefix + "c9qwmb` \nQw MoBal (Speed) => `" + prefix + "c9qwmb2` \nQw PekkaHog => `" + prefix + "c9qwph`\nQw Valkyrie => `" + prefix + "c9qwv` \nSingle Shock=> `" + prefix + "c9ss`")
    .addField(emoji(emo.ballon) + " Loon:", "GoMoBal => `" + prefix + "c9gmb` \nGoVaLoon => `" + prefix + "c9gvb`\nLaVaLooNion => `" + prefix + "c9mgb` \nLaVaLoon Skeletons => `" + prefix + "c9mbs` \nMobal (Speed) => `" + prefix + "c9mb` \nMobal (2 lightning) => `" + prefix + "c9mb2f`\nMobal (4 lightning) => `" + prefix + "c9mb4f`\nElectro Smash => `" + prefix + "c9eds`\n Mobal zap => `" + prefix + "c9mbz`")
    .addField(emoji(emo.hog) + " Hogs:", "Armoured Ruckus => `" + prefix + "c9ar` \nGo Hog => `" + prefix + "c9gh` \n GoHog2 (soins) => `" + prefix + "c9gh2` \nHGHB => `" + prefix + "c9hghb`\nHogs & Witches => `" + prefix + "c9hw` \nStoned Hogs => `" + prefix + "c9sh`\nFull Hogs => `" + prefix + "c9fh`")
    .addField(emoji(emo.dragon) + " Dragons:", "BabyLoon => `" + prefix + "c9bbb`\nDragHo => `" + prefix + "c9dh`\nDragloon => `" + prefix + "c9db` \nFull Drags => `" + prefix + "c9d` \nGoBoDrag  => `" + prefix + "c9gbd`\nGoWiDrag => `" + prefix + "c9gwd` \nHealer dominant => `" + prefix + "c9hd` \nLaLoDrag => `" + prefix + "c9mbd` \nOctoBaby  => `" + prefix + "c9ob`")
    .addField(emoji(emo.golem) + " Golems:", "Avalanche => `" + prefix + "c9a`\nFreak Show => `" + prefix + "c9fs` \nGoWi (loon) => `" + prefix + "c9gw` \nGoWiz => `" + prefix + "c9gwiz` \nMass Skeletons  => `" + prefix + "c9ms`\nStonned GoWiWi => `" + prefix + "c9sgww`\nPenta Golem => `" + prefix + "c9pg`")
    .addField(emoji(emo.pekka) + " Pekkas:", "GoWiPe => `" + prefix + "c9gwp` \nGoWipe (Loons) => `" + prefix + "9cgwpb` \nMass Pekka => `" + prefix + "c9mp` \nPekka Hog => `" + prefix + "c9ph`\nPekka Sosotte Walk  => `" + prefix + "c9psw`\nPekka Walk (Hogs) => `" + prefix + "c9pwh` \nPekka Walk (BB) => `" + prefix + "c9pwbb`")
    .addField(emoji(emo.witch) + " Witchs:", "GoWiWi => `" + prefix + "c9gww`\n Witch earthquake => `" + prefix + "c9w`\nWitch Slap => `" + prefix + "c9ws`")
    .addField(emoji(emo.valky) + " Valkyries", "Excalibur => `" + prefix + "c9e`\nE-xcalibur => `" + prefix + "c9e-x`\nFalcon => `" + prefix + "c9f`\nGoWiVa => `" + prefix + "9cgwv`\nGoWiWiVa => `" + prefix + "c9gwwv`\nGrundinator => `" + prefix + "c9g`\nValkyries => `" + prefix + "c9v`")
    message.channel.send(c9embed)
  }
} 