const BaseEvent = require('../../utils/structures/BaseEvent');
const config = require('../../storage/config.json')
const Discord = require('discord.js')
const prefix = config.prefix;

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(" ");
    console.log("------------------------------------------");
    console.log('Bot Online!');
    console.log("Version de NodeJS : " + process.version);
    console.log("Version de Disocrd.js : " + Discord.version);
    console.log('Prefix du bot : ' + config.prefix)
    console.log("Ping du bot : " + Math.round(client.ws.ping));
    console.log("Nombre de serveurs : " + client.guilds.cache.size + "\nNombre d'utilisateurs : " + client.users.cache.size);
    console.log(`Connecté en tant que ${client.user.tag}!`);
    console.log("------------------------------------------");


    let statuses = [
      `${client.guilds.cache.size} servers | ` + prefix + `help`,
      `${client.users.cache.size} User | ` + prefix + `support`,
      `Black Widow, official partner`
    ];

    setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, {type: 'WATCHING'});
    }, 10000);

    client.user.setStatus('online');
    

    //WONDERBOTLIST
    const request = require('request');
    request.post("https://api.wonderbotlist.com/v1/bot/661316233848684544",{
      headers:{
          Authorization:"d2c7c5f1-e5ac-42a0-b3aa-588d12709331"
      },
      form:{
          serveurs: client.guilds.cache.size
      }
    }, (e,r,b)=>{if(e) return;else return });
  }
}