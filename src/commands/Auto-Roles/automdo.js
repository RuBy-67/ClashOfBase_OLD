const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json');
const fs = require('fs');
const prefix = config.prefix;
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('automdo', 'Auto-Roles', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    message.delete()
    let autoth = JSON.parse(fs.readFileSync("../../../storage/autoth.json", "utf8"));

    if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) {
      let bnonembed = new Discord.MessageEmbed()
        .setDescription("Erreur - **" + client.user.username + "** n'a pas les permissions requises.")
        .setColor("#fb2929")
        .addField("Permission requise", "Gérer les rôles")
        .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

      return message.channel.send(bnonembed).then(m => m.delete({ timeout: 5000}));
    };

    if (autoth[message.guild.id] === undefined || autoth[message.guild.id].perm === "false") {
      let nonembed = new Discord.MessageEmbed()
        .setDescription("Erreur - Module Non Activé sur le serveur")
        .addField("\u200b", "Demandez à un administrateur du serveur d'exécuter la commande `" + prefix + "ar-admin true`")
        .setColor("#fb2929")
        .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
        return message.channel.send(nonembed).then(m => m.delete({ timeout: 5000}));
    };

    const r9 = message.guild.roles.cache.find(r => r.name === ("Mdo9"));
      if (!r9) message.guild.roles.create({data: {name: "Mdo9", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r8 = message.guild.roles.cache.find(r => r.name === ("Mdo8"));
      if (!r8) message.guild.roles.create({data: {name: "Mdo8", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r7 = message.guild.roles.cache.find(r => r.name === ("Mdo7"));
      if (!r7) message.guild.roles.create({data: {name: "Mdo7", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r6 = message.guild.roles.cache.find(r => r.name === ("Mdo6"));
      if (!r6) message.guild.roles.create({data: {name: "Mdo6", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });   
    const r5 = message.guild.roles.cache.find(r => r.name === ("Mdo5"));
      if (!r5) message.guild.roles.create({data: {name: "Mdo5", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });   
    const r4 = message.guild.roles.cache.find(r => r.name === ("Mdo4"));
      if (!r4) message.guild.roles.create({data: {name: "Mdo4", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r3 = message.guild.roles.cache.find(r => r.name === ("Mdo3"));
      if (!r3) message.guild.roles.create({data: {name: "Mdo3", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });
    const r2 = message.guild.roles.cache.find(r => r.name === ("Mdo2"));
      if (!r2) message.guild.roles.create({data: {name: "Mdo2", permissions: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], color: "BLUE"} });



    try{
      setTimeout(() => {
        const id9 = message.guild.roles.cache.find(r => r.name === ("Mdo9")).id;
        const id8 = message.guild.roles.cache.find(r => r.name === ("Mdo8")).id;
        const id7 = message.guild.roles.cache.find(r => r.name === ("Mdo7")).id;
        const id6 = message.guild.roles.cache.find(r => r.name === ("Mdo6")).id;
        const id5 = message.guild.roles.cache.find(r => r.name === ("Mdo5")).id;
        const id4 = message.guild.roles.cache.find(r => r.name === ("Mdo4")).id;
        const id3 = message.guild.roles.cache.find(r => r.name === ("Mdo3")).id;
        const id2 = message.guild.roles.cache.find(r => r.name === ("Mdo2")).id;

        let thembed = new Discord.MessageEmbed()
          .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
          .setTitle("Rôles automatiques - Niveau de Maison des Ouvriers")
          .setColor("GREEN")
          .setThumbnail("https://media.discordapp.net/attachments/671075545072533545/711544866357903480/711544618344251432.png")
          .setDescription("Sélectionnez ici votre niveau de Maison des Ouvriers.")
          .addField("Les rôles disponibles sont", 
          `
          ${emoji(emo.mdo9)} => <@&${id9}>
          ${emoji(emo.mdo8)} => <@&${id8}>
          ${emoji(emo.mdo7)} => <@&${id7}>
          ${emoji(emo.mdo6)} => <@&${id6}>
          ${emoji(emo.mdo5)} => <@&${id5}>
          ${emoji(emo.mdo4)} => <@&${id4}>
          ${emoji(emo.mdo3)} => <@&${id3}>
          ${emoji(emo.mdo2)} => <@&${id2}>
          `);

        message.channel.send(thembed).then( async message => {
          await message.react(emo.mdo9);
          await message.react(emo.mdo8);
          await message.react(emo.mdo7);
          await message.react(emo.mdo6);
          await message.react(emo.mdo5);
          await message.react(emo.mdo4);
          await message.react(emo.mdo3);
          await message.react(emo.mdo2);

          await message.delete({timeout: 30000})
        })

      }, 2000);
    }
    catch {
      return
    };
  }
} 