const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('compo8', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let c8embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Town Hall 8 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711603259285962853/711247082576543805.png")
    .setColor("#FFFF00")
    .setDescription(`Compos Th 8 available.`)
    .addField(emoji(emo.ballon) + " Loons:", "GoVaLoon => `" + prefix + "c8gvb` \n Loonion => `" + prefix + "c8bg`")
    .addField(emoji(emo.dragon) + " Dragons:", "Dragons Loons => `" + prefix + "c8db` \nFull Dragons => `" + prefix + "c8d`")
    .addField(emoji(emo.geant) + " Giants:", "GiHeHog => `" + prefix + "c8ghh` \nHGHB => `" + prefix + "c8hghb`")
    .addField(emoji(emo.witch) + " Witchs:", "GoWiWi => `" + prefix + "c8gww`")
    .addField(emoji(emo.hog) + " Hogs:", "Full Hogs => `" + prefix + "c8h`\nGoHog => `" + prefix + "c8gh`\nGoVaHo => `" + prefix + "c8gvh`\nStoned GoHog => `" + prefix + "c8sh`\nWizard Hogs => `" + prefix + "c8soh`")
    .addField(emoji(emo.pekka) + " Pekkas:", "GoWiPe => `" + prefix + "c8gwp`\nGoWiWiPe => `" + prefix + "c8gwwp` \nLoGoWipe => `" + prefix + "c8bgwp` \nPekka Walk (Hogs) => `" + prefix + "c8pwh`\nPekka Walk (Loons) => `" + prefix + "c8pwb`")
    .addField(emoji(emo.valky) + " Valkyries:", "Falcon => `" + prefix + "c8f` \nGoWiVa => `" + prefix + "c8gwv`\nGoVaBo (Bowler Walk) => `" + prefix + "c8gvbw`")
    message.channel.send(c8embed)
  }
} 