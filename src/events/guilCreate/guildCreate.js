const BaseEvent = require('../../utils/structures/BaseEvent');
const config = require('../../storage/config.json');
const Discord = require('discord.js');
const moment = require('moment');
const prefix = config.prefix;
const dev = config.dev;
const emo = require('../../storage/emoji.json')

module.exports = class guildCreateEvent extends BaseEvent {
    constructor() {
        super('guildCreate');
    }
    async run(client, guild) {

        function emoji (id) {
            return client.emojis.cache.get(id).toString();
          };
          
        let addch = client.channels.cache.get(config.addc);

        let addE = new Discord.MessageEmbed()
            .setTitle("**" + client.user.username + "** a été ajouté sur un nouveau serveur !")
            .setThumbnail(guild.iconURL())
            .setColor("#1edf00")
            .addField("Nom du serveur", "**" + guild.name + "**")
            .addField("Nom du propriétaire", "`" + guild.owner.user.username + "#" + guild.owner.user.discriminator +"`")
            .addField("Nombre de membres", "`" + guild.memberCount + "`")
            .addField("Serveur créé le", "`" + moment.utc(guild.createdAt).format("dddd Do MMMM YYYY") + "`")
            .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

        addch.send(addE);

        const wch = guild.channels.cache.find(ch => ch.name === `clash-of-base`);

        let wembed = new Discord.MessageEmbed()
            .setTitle("Merci d'avoir ajouté **" + client.user.username + "** sur **__" + guild.name + "__** !")
            .setThumbnail(guild.iconURL())
            .setColor("#1edf00")
            .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
            .setDescription('*Le préfix par défaut de Clash of Base est " `=`" ( Modifible par les administrateurs de serveur )*.')
            .addField(emoji(emo.question2) + "Commande d'aide", "`" + prefix + "help`")
            .addField(":paperclips: Support", "[[Lien]](https://discord.gg/TGeGVzJ) ou `" + prefix + "support`")
            .addField(emoji(emo.merci) + "Aider les développeurs", "*Voter :* [[Lien]](https://top.gg/bot/657293926730039306/vote) ou `" + prefix + "vote` \n*Aide financière :* [[Lien]](https://fr.tipeee.com/clash-of-base/) ou `" + prefix + "tipeee`");

        let bw = new Discord.MessageEmbed()
            .setFooter(`Clash of Base - Developped by ` + dev, "https://cdn.discordapp.com/attachments/686935646517985312/722151822529265695/black_widow.png")
            .setDescription("**[Black Widow](https://discord.gg/u6fxEJU)**, Partenaire Officiel de **__[Clash of Base](https://top.gg/bot/657293926730039306/vote)__** (`" + prefix + "bw`) !")
            .setColor("#bf0060")

        if(wch === undefined || wch === null) {
            try{
                guild.channels.create('clash-of-base')
                .then( () => {
                    let wc = guild.channels.cache.find(ch => ch.name === `clash-of-base`)
                    wc.send(wembed)
                    wc.send(bw)
                })
            }catch{
                return
            }
        
        }else{
            wch.send(wembed);
            wch.send(bw);
        };
    }

}