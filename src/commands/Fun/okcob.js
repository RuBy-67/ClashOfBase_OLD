const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('8ball', 'Fun', ['8b', 'okcob']);
  }

  async run(client, message, args) {

    let args2 = args.join(" ")

    let mnonembed = new Discord.MessageEmbed()
      .setDescription("Erreur - Il vous faut poser une question.")
      .setColor("#fb2929")
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());

    if (!args2 || args2 === " " || args2 === undefined || args2 === null || args2 === "") {
        message.delete();
        return message.channel.send(mnonembed).then(m => m.delete({ timeout: 5000}));
    };

      const reponses = ["oui.", "non.", "je ne sais pas.", "peut-être.", "reposes-moi la question plus tard.", "tu as vraiment cru que j'étais Google ?", "demandes le à ta mère, elle pourra peut-être te répondre.", "ça coule de source.", "c'est clair comme de l'eau de roche.", "que neni.", "et moi je suis Président des Etas-Unis aussi?", "ne comptes pas la dessus.", "oui, définitivement.", "comme je le vois, oui.", "réfléchis à la reproduction de sauterelle en Mésopotamie !", "il serait temps d'arrêter.", "concentre toi et demande moi à nouveau.", "sans aucun doute.", "les signes indiquent que oui.", "les signes indiquent que non.", "je ne peux pas le prédire maintenant.", "la réponse est oui. Mais quelle était la question ?", "tout n’est qu’apparence, non ?", "on est venu, on a vu et il l'a eu dans le cul !", "de tous les arguments, le plus difficile a réfuter est le silence.", "élémentaire mon cher watson.", "je ne veux vexer personne.", "je suis trop vieux pour ces conneries.", "si tu te pointes encore, tu peux être sûr que tu repars avec la bite dans un Tupperware.", "tu a tords."];
      const resultat = Math.floor((Math.random() * reponses.length));
    
      message.reply(reponses[resultat]);
  }
}