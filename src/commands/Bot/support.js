const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json');
const dev = config.dev;


module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('support', 'bw3', ['discord']);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let pbembed = new Discord.MessageEmbed()
    .setTitle("**:star:__ Black Widow Ultimate Cup __:star:**")
    .setDescription(":flag_gb: **|** **[Rules](https://docs.google.com/document/d/1AEnDx-RsUfCaT-nmiEQCWTwCZ6h3WPclimKPh9NIMOY/edit?usp=sharing)**\n:flag_fr: **|** **[Règlement](https://docs.google.com/document/d/163AcYm5QcJ67UzKL3z0u8jlYUIg8K6ywXEm5mlgx-A0/edit?usp=sharing)**\n\n:bookmark_tabs: **|** **[Registration Forms](https://forms.gle/v6rk5btoQmnXV3nT7)**\n\n"+ emoji(emo.interro) + " *You need help ? tag an <@&692364496903077898> in <#710167056582049824> or <#584134843810447382>*")
    .setImage("https://cdn.discordapp.com/attachments/717681044148584449/822406242571517952/AfficheBD-UltimateCup.png")
    .setColor("#00FF00")
    .setFooter(`Black Widow Ultimate Cup`, `https://cdn.discordapp.com/attachments/717681044148584449/808379358283563008/LogoUltimateCup-BW.png`);

    message.channel.send(pbembed);
  }
} 