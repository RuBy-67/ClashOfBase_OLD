const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('uptime', 'Bot', []);
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

    message.channel.send(`Bot online since **${uptime}**.`);
  }
} 