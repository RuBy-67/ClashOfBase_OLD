const BaseEvent = require('../../utils/structures/BaseEvent');
const config = require('../../storage/config.json');
const Discord = require('discord.js');
const moment = require('moment');
const prefix = config.prefix;
const dev = config.dev;

module.exports = class guildDeleteEvent extends BaseEvent {
    constructor() {
        super('guildDelete');
    }
    async run(client, guild) {
        
        function emoji (id) {
            return client.emojis.cache.get(id).toString();
          };

          
        let suppch = client.channels.cache.get(config.addc);

        let suppE = new Discord.MessageEmbed()
          .setTitle("**Clash of Base** a été supprimé d'un serveur.")
          .setThumbnail(guild.iconURL())
          .setColor("#fb2929")
          .addField("Nom du serveur", "**" + guild.name + "**")
          .addField("Nom du propriétaire", "`" + guild.owner.user.tag +"`")
          .addField("Nombre de membres", "`" + guild.memberCount + "`")
          .addField("Serveur créé le", "`" + moment.utc(guild.createdAt).format("dddd Do MMMM YYYY") + "`")
          .addField("**Clash of Base** avait été ajouté le", "`" + moment.utc(client.user.joinedAt).format('dddd Do MMMM YYYY') + "`")
          .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

        suppch.send(suppE);
    }
}