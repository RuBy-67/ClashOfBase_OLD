const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const moment = require('moment');
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('botinfo', 'Bot', ['bi']);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let botuptime = client.uptime;
    let totsec = botuptime / 1000;
    let days = Math.floor(totsec / 86400);
    let hours = Math.floor(totsec / 3600 % 24);
    let minutes = Math.floor(totsec / 60 % 60);
    let seconds = Number.parseInt(totsec % 60 % 60);

    let dDay =`${days} Days`;
    let dHour =`${hours} Hours`;
    let dMinute =`${minutes} Minuts`;
    let dSecond =`${seconds} Seconds`;

      if (days == 0) dDay = "";
      else if (days > 1) dDay += "s, ";
      else dDay += ", ";
      if (hours == 0) dHour = "";
      else if (hours > 1) dHour += "s, ";
      else dHour += ", ";
      if (minutes == 0) dMinute = "";
      else if (minutes > 1) dMinute += "s et ";
      else dMinute += " et ";
      if (seconds == 0) dSecond = "0 Seconds";
      else if (seconds > 1) dSecond += "s";

    let uptime = dDay + dHour + dMinute + dSecond;
    let botstatut = client.presence.status;
      if (botstatut === "online") var botstatut2 = "Online";
      else if (botstatut === "dnd") var botstatut2 = "Do not disturb";
      else if (botstatut === "idle") var botstatut2 = "Offline";
          
    let binfoembed = new Discord.MessageEmbed()
      .setTitle("Bot Info")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .addField(':id: ID', "`" + client.user.id + "`")
      .addField(":abc: Name ", "`" + client.user.username + "`")
      .addField(":1234: Discriminator", "`#" + client.user.discriminator + "`")
      .addField(":alarm_clock: Bot online since", "`" + uptime + "`")
      .addField(':calendar: Bot created :', "`" + moment.utc(client.user.createdAt).format("dddd Do MMMM YYYY") + "`")
      .addField(emoji(emo.chargement) + " Server joins : ", "`" + moment.utc(client.user.joinedAt).format("dddd Do MMMM YYYY") + "`")
      .addField(emoji(emo.loadgreen) + " Status", "`" + botstatut2 + "`")
      .addField(emoji(emo.rond) + ` Number of servers` , "`" + client.guilds.cache.size + "`")
      .addField(`:busts_in_silhouette: Number of users`, "`" + client.users.cache.size + "`")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

    message.channel.send(binfoembed);
  }
} 