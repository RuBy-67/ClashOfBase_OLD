const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo10', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c10embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Town Hall 10 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711602661543116871/711252239343419457.png")
    .setColor("#FF6347")
    .setDescription(`Compos Th 10 available.`)
    .addField(emoji(emo.reine) + " Queen Walk:", "Qw BB-Drag => `" + prefix + "c10qwbd`\nQw BB-Valk => `" + prefix + "c10qwbdv` \nQw Dragon => `" + prefix + "c10qwd`\nQw BB Electro BB => `" + prefix + "c10qwebb` \nQw Minions => `" + prefix + "c10qwg`\nQw Mass BB Drags => `" + prefix + "c10qwbb` ( Other : `" + prefix + "c10qwbb2`) \nQw Miners => `" + prefix + "c10qwm`\nQw Mobal => `" + prefix + "c10qwmb` \nQw PeBoWitch => `" + prefix + "c10qwpbw`\nQw VaWitch => `" + prefix + "c10qwvw`\nQw Min Hog => `" + prefix + "c10qwmh`\nQw Pekka Bobat => `" + prefix + "c10qwpbb`")
    .addField(emoji(emo.witch) + " Witch:", "Dual Walk (PeBoWitch) => `" + prefix + "c10dw` \nFrozen pekka => `" + prefix + "c10fp`\nFrozen Witch => `" + prefix + "c10fw` \nWitch Slap Bowlers => `" + prefix + "c10wb`\nWitch Slap => `" + prefix + "c10ws`")
    .addField(emoji(emo.ballon) + " Loons:", "Ghost électro => `" + prefix + "c10ge` \nLavaLoon Squelettes => `" + prefix + "c10mbs`\nElectro Clone => `" + prefix + "c10ec`\nMobal => `" + prefix + "c10mb`")
    .addField(emoji(emo.bats) + " Bats:", "BatSlap => `" + prefix + "c10bats`\nDragBat => `" + prefix + "c10db` \nGoBat => `" + prefix + "c10gb`\nMobBat => `" + prefix + "c10mbats` \nPekkaGoBat => `" + prefix + "c10pgb` ( other : `" + prefix + "c10pgb2`) \nPekkaHogBats => `" + prefix + "c10phb`\n Mobal Zap => `" + prefix + "c10mbz`")
    .addField(emoji(emo.hog) + " Hogs:", "HGHB => `" + prefix + "c10hghb`\n GoHog => `" + prefix + "c10gh`")
    .addField(emoji(emo.dragon) + " Dragons:", "Dragon => `" + prefix + "c10d` \nDraHo => `" + prefix + "c10dh` \nDrag Zap => `" + prefix + "c10zd` \nGiBoDragLoon => `" + prefix + "c10gibdb` \nMass Baby clone => `" + prefix + "c10bbc`\nMass Baby Drag => `" + prefix + "c10bd`\n Drag Zap => `" + prefix + "c10dz`")
    .addField(emoji(emo.golem) + " Golems:", "Bowler Smash => `" + prefix + "c10bs`")
    .addField(emoji(emo.pekka) + " Pekkas:", "Mass Pekka => `" + prefix + "c10mp`")
    .addField(emoji(emo.valky) + " Valkyries:", "Falcon => `" + prefix + "c10f`")
    .addField(emoji(emo.mineur) + "Miner:", "Full Miner => `" + prefix + "c10m`")
    message.channel.send(c10embed)
  }
} 