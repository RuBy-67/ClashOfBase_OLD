const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json');
const fs = require('fs');
const prefix = config.prefix;
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('autohdv', 'Auto-Roles', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    message.delete()
    let autoth = JSON.parse(fs.readFileSync("../../storage/autoth.json", "utf8"));

    if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) {
      let bnonembed = new Discord.MessageEmbed()
        .setDescription("Erreur - **" + client.user.username + "** n'a pas les permissions requises.")
        .setColor("#fb2929")
        .addField("Permission requise", "Gérer les rôles")
        .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

      return message.channel.send(bnonembed).then(m => m.delete({ timeout: 10000}));
    };

    if (autoth[message.guild.id] === undefined || autoth[message.guild.id].perm === "false") {
      let nonembed = new Discord.MessageEmbed()
        .setTitle("Erreur - Module Non Activé sur le serveur")
        .setDescription("Demandez à un administrateur du serveur d'exécuter la commande `" + prefix + "ar-admin true`")
        .setColor("#fb2929")
        .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
        return message.channel.send(nonembed).then(m => m.delete({ timeout: 10000}));
    };

    const r13 = message.guild.roles.cache.find(r => r.name === ("Hdv13"));
      if (!r13) message.guild.roles.create({data: {name: "Hdv13", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r12 = message.guild.roles.cache.find(r => r.name === ("Hdv12"));
       if (!r12) message.guild.roles.create({data: {name: "Hdv12", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r11 = message.guild.roles.cache.find(r => r.name === ("Hdv11"));
      if (!r11) message.guild.roles.create({data: {name: "Hdv11", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r10 = message.guild.roles.cache.find(r => r.name === ("Hdv10"));
      if (!r10) message.guild.roles.create({data: {name: "Hdv10", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r9 = message.guild.roles.cache.find(r => r.name === ("Hdv9"));
      if (!r9) message.guild.roles.create({data: {name: "Hdv9", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r8 = message.guild.roles.cache.find(r => r.name === ("Hdv8"));
      if (!r8) message.guild.roles.create({data: {name: "Hdv8", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r7 = message.guild.roles.cache.find(r => r.name === ("Hdv7"));
      if (!r7) message.guild.roles.create({data: {name: "Hdv7", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r6 = message.guild.roles.cache.find(r => r.name === ("Hdv6"));
      if (!r6) message.guild.roles.create({data: {name: "Hdv6", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });   
    const r5 = message.guild.roles.cache.find(r => r.name === ("Hdv5"));
      if (!r5) message.guild.roles.create({data: {name: "Hdv5", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });   
    const r4 = message.guild.roles.cache.find(r => r.name === ("Hdv4"));
      if (!r4) message.guild.roles.create({data: {name: "Hdv4", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r3 = message.guild.roles.cache.find(r => r.name === ("Hdv3"));
      if (!r3) message.guild.roles.create({data: {name: "Hdv3", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r2 = message.guild.roles.cache.find(r => r.name === ("Hdv2"));
      if (!r2) message.guild.roles.create({data: {name: "Hdv2", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });



    try{
      setTimeout(() => {
        const id13 = message.guild.roles.cache.find(r => r.name === ("Hdv13")).id;
        const id12 = message.guild.roles.cache.find(r => r.name === ("Hdv12")).id;
        const id11 = message.guild.roles.cache.find(r => r.name === ("Hdv11")).id;
        const id10 = message.guild.roles.cache.find(r => r.name === ("Hdv10")).id;
        const id9 = message.guild.roles.cache.find(r => r.name === ("Hdv9")).id;
        const id8 = message.guild.roles.cache.find(r => r.name === ("Hdv8")).id;
        const id7 = message.guild.roles.cache.find(r => r.name === ("Hdv7")).id;
        const id6 = message.guild.roles.cache.find(r => r.name === ("Hdv6")).id;
        const id5 = message.guild.roles.cache.find(r => r.name === ("Hdv5")).id;
        const id4 = message.guild.roles.cache.find(r => r.name === ("Hdv4")).id;
        const id3 = message.guild.roles.cache.find(r => r.name === ("Hdv3")).id;
        const id2 = message.guild.roles.cache.find(r => r.name === ("Hdv2")).id;

        let thembed = new Discord.MessageEmbed()
          .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
          .setTitle("Rôles automatiques - Niveau d'Hotel de Ville")
          .setColor("GREEN")
          .setThumbnail("https://media.discordapp.net/attachments/671075545072533545/711544866357903480/711544618344251432.png")
          .setDescription("Sélectionnez ici votre niveau d'Hotel de ville.")
          .addField("Les rôles disponibles sont", 
          `
          ${emoji(emo.th13)} => <@&${id13}>
          ${emoji(emo.th12)} => <@&${id12}>
          ${emoji(emo.th11)} => <@&${id11}>
          ${emoji(emo.th10)} => <@&${id10}>
          ${emoji(emo.th9)} => <@&${id9}>
          ${emoji(emo.th8)} => <@&${id8}>
          ${emoji(emo.th7)} => <@&${id7}>
          ${emoji(emo.th6)} => <@&${id6}>
          ${emoji(emo.th5)} => <@&${id5}>
          ${emoji(emo.th4)} => <@&${id4}>
          ${emoji(emo.th3)} => <@&${id3}>
          ${emoji(emo.th2)} => <@&${id2}>
          `);

        message.channel.send(thembed).then( async message => {
          await message.react(emo.th13);
          await message.react(emo.th12);
          await message.react(emo.th11);
          await message.react(emo.th10);
          await message.react(emo.th9);
          await message.react(emo.th8);
          await message.react(emo.th7);
          await message.react(emo.th6);
          await message.react(emo.th5);
          await message.react(emo.th4);
          await message.react(emo.th3);
          await message.react(emo.th2);

          await message.delete({timeout: 30000})
        })

      }, 2000);
    }
    catch {
      return
    };
  }
} 