const BaseEvent = require('../../utils/structures/BaseEvent');
const config = require('../../storage/config.json');
const Discord = require('discord.js');
const moment = require('moment');
const prefix = config.prefix;
const dev = config.dev;
const emo = require('../../storage/emoji.json')

module.exports = class messageReactionAddEvent extends BaseEvent {
    constructor() {
        super('messageReactionAdd');
    }
    async run(client, reaction, user) {
        
        function emoji (id) {
            return client.emojis.cache.get(id).toString();
          };

          if (user.bot) return;
  
          const msg = reaction.message;
        
          //Info Mdo
          const embed1 = msg.embeds.find(msg => msg.title === "Information about the buildings - Builder Hall");
            if (embed1) {
        
              let m2 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 2__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255384958173194.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Wall `(x4)` : Level 1\nCannon `(x1)` : Level 1\nArcher Tower `(x1)` : Level 1\nDouble Cannon `(x1)` : Level 1")
                .addField(emoji(emo.par) + " __Traps:__", "Push Trap  `(x1)` : Level 1")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x2)` : No Level  \nBuilder Barracks `(x1)` : Level 2\nStar Laboratory `(x1)` : Level 1")
                .addField(emoji(emo.mineg) + " __Resource buildings__", "Gold Mine `(x1)` : Level 1\nElixir Collector `(x1)` : Level 1");
        
              let m3 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 3__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255538905645119.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Wall `(x10)` : Level 3\nCannon `(x2)` : Level 3\n\nArcher Tower `(x1)` : Level 3\nDouble Cannon `(x1)` : Level 3\nFirecrackers `(x1)` : Level 3\nTesla `(x1)` : Level 3\nCrusher `(x1)` : Level 3")
                .addField(emoji(emo.par) + " __Traps:__", "Push Trap  `(x2)` : Level 3\n Spring Trap `(x2)` :Level 1\nMine `(x2)`: Level 3 ")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x3)` : No Level  \nBuilder Barracks `(x1)` : Level 4\nStar Laboratory `(x1)` : Level 3\n")
                .addField(emoji(emo.mineg) + " __Resource buildings__", "Gold Storage `(x1)` : Level 3\nElixir Storage `(x1)` : Level 3\nGold Mine `(x1)` : Level 3\nElixir Collector `(x1)` : Level 3\nGem Mine  `(x1)` n: Level 3");
        
              let m4 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 4__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255562028843079.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Wall `(x15)` : Level 4\nCannon `(x2)` : Level 4\nArcher Tower `(x2)` : Level 4\nDouble Cannon `(x1)` : Level 4\nFirecrackers `(x1)` : Level 4\nHiden Tesla `(x1)` : Level 4\nAir Bombs `(x1)` : Level 4\nCrusher `(x1)` : Level 4\nGuard Post `(x1)` : Level 4")
                .addField(emoji(emo.par) +  " __Traps:__", "Push Trap `(x3)` : Level 4\nSpring Trap `(x2)` : Level 1\nMine `(x3)` : Level 4\nMega Mine `(x1)` : Level 4")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x4)` : No Level\nBuilder Barracks `(x1)` : Level 5\nStar Laboratory `(x1)` : Level 4\n")
                .addField(emoji(emo.mineg) + " __Resource buildings:__", "Gold Storage`(x1)` : Level 4\nElixir Storage `(x1)` : Level 4\nGold Mine `(x1)` : Level 4\nElixir Collector `(x1)` : Level 1\nGem Mines `(x1)` : Level 4\nClock Tower `(x1)` : Level 4");
              
              let m5 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 5__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255586590949387.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Wall `(x20)` : Level 5\nCannon `(x2)` : Level 5\nArcher Tower `(x2)` : Level 5\nDouble Cannon `(x2)` : Level 5\nFirecrackers `(x2)` : Level 5\nHiden Tesla `(x1)` : Level 5\nAir Bombs `(x1)` : Level 6\nCrusher `(x1)` : Level 5\nGuard Post `(x1)` : Level 5\nMulti-Mortar `(x1)` : Level 5")
                .addField(emoji(emo.par) +  " __Traps:__", "Push Trap `(x4)` : Level 5\nSpring Trap `(x3)` : Level 2\nMine `(x4)` : Level 5\nMega Mine `(x1)` : Level 5")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x4)` : No Level\nBuilder Barracks `(x1)` : Level 7\nStar Laboratory `(x1)` : Level 5\nBattle Machine `(x1)` : Level 5")
                .addField(emoji(emo.mineg) + " __Resource buildings:__", "Gold Storage`(x2)` : Level 5\nElixir Storage `(x2)` : Level 5\nGold Mine `(x2)` : Level 5\nElixir Collector `(x2)` : Level 5\nGem Mines `(x1)` : Level 5\nClock Tower `(x1)` : Level 5");
              
              let m6 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 6__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255607830904963.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Wall `(x26)` : Level 6\nCannon `(x2)` : Level 6\nArcher Tower `(x3)` : Level 6\nDouble Cannon `(x2)` : Level 6\nFirecrackers `(x2)` : Level 6\nHiden Tesla `(x1)` : Level 6\nAir Bombs `(x1)` : Level 6\nCrusher `(x2)` : Level 6\nGuard Post `(x1)` : Level 6\nMulti-Mortar `(x1)` : Level 6\nRoaster `(x1)` : Level 6")
                .addField(emoji(emo.par) +  " __Traps:__", "Push Trap `(x4)` : Level 6\nSpring Trap `(x3)` : Level 3\nMine `(x5)` : Level 6\nMega Mine `(x2)` : Level 6")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x4)` : No Level\nBuilder Barracks `(x1)` : Level 8\nStar Laboratory `(x1)` : Level 6\nBattle Machine `(x1)` : Level 10")
                .addField(emoji(emo.mineg) + " __Resource buildings:__", "Gold Storage`(x2)` : Level 6\nElixir Storage `(x2)` : Level 6\nGold Mine `(x2)` : Level 6\nElixir Collector `(x2)` : Level 8\nGem Mines `(x1)` : Level 6\nClock Tower `(x1)` : Level 6");
              
                let m7 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 7__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255643755118592.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Cannon `(x2)` : Level 7\nWall `(x28)` : Level 7\nArcher Tower `(x3)` : Level 7\nDouble Cannon `(x2)` : Level 7\nFirecrackers `(x3)` : Level 7\nHiden Tesla `(x2)` : Level 7\nAir Bombs `(x1)` : Level 7\nCrusher `(x2)` : Level 2\nGuard Post `(x1)` : Level 7\nMulti-Mortar `(x1)` : Level 7\nRoaster `(x1)` : Level 7\nGiant Cannon `(x1)` : Level 7")
                .addField(emoji(emo.par) + " __Traps:__", "Push Trap  `(x4)` : Level 7 \n Spring Trap `(x3)` :Level 3\nMine `(x5)`: Level 7 \n Mega Mine  `(x2)` : Level 7")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x4)` : No Level  \nBuilder Barracks `(x1)` : Level 9\nStar Laboratory `(x1)` : Level 7\nBattle Machine `(x1)` : Level 20")
                .addField(emoji(emo.mineg) + " __Resource buildings__", "Gold Storage `(x2)` : Level 7\nElixir Storage `(x2)` : Level 7\nGold Mine `(x2)` : Level 7\nElixir Collector `(x2)` : Level 7\nGem Mine  `(x1)` : Level 7\nClock Tower `(x1)` : Level 7");
              
                let m8 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 8__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255667150946349.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Wall `(x32)` : Level 8\nCannon `(x3)` : Level 8\nArcher Tower `(x3)` : Level 8\nDouble Cannon `(x3)` : Level 8\nFirecrackers `(x4)` : Level 5\nHiden Tesla `(x3)` : Level 8\nAir Bombs `(x1)` : Level 8\nCrusher `(x2)` : Level 8\nGuard Post `(x1)` : Level 8\nMulti-Mortar `(x1)` : Level 8\nRoaster `(x1)` : Level 8\nGiant Cannon `(x1)` : Level 8\nMega Tesla `(x1)` : Level 8")
                .addField(emoji(emo.par) +  " __Traps:__", "Push Trap `(x5)` : Level 8\nSpring Trap `(x4)` : Level 4\nMine `(x5)` : Level 8\nMega Mine `(x3)` : Level 8")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x6)` : No Level\nBuilder Barracks `(x1)` : Level 10\nStar Laboratory `(x1)` : Level 8\nBattle Machine `(x1)` : Level 25")
                .addField(emoji(emo.mineg) + " __Resource buildings:__", "Gold Storage`(x2)` : Level 8\nElixir Storage `(x2)` : Level 8\nGold Mine `(x3)` : Level 8\nElixir Collector `(x3)` : Level 8\nGem Mines `(x1)` : Level 8\nClock Tower `(x1)` : Level 8");
              
              let m9 = new Discord.MessageEmbed()
                .setTitle("Information about the buildings - Builder Hall")
                .setDescription("**__Builder Hall - Level 9__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711255699921043537.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.bombea) + " __Defensive buildings:__", "Wall `(x36)` : Level 9\nCannon `(x3)` : Level 9\nArcher Tower `(x3)` : Level 9\nDouble Cannon `(x3)` : Level 9\nFirecrackers `(x5)` : Level 9\nHiden Tesla `(x3)` : Level 9\nAir Bombs `(x1)` : Level 9\nCrusher `(x2)` : Level 9\nGuard Post `(x1)` : Level 9\nMulti-Mortar `(x1)` : Level 9\nRoaster `(x1)` : Level 9\nGiant Cannon `(x1)` : Level 9\nMega Tesla `(x1)` : Level 9\nLava Launcher `(x1)` : Level 9")
                .addField(emoji(emo.par) + " __Traps:__", "Push Trap  `(x5)` : Level 9\n Spring Trap `(x4)` :Level 4\nMine `(x5)`: Level 9 \n Mega Mine  `(x4)` : Level 9")
                .addField(emoji(emo.machine) + " __Army:__", "Army Camp `(x6)` : No Level  \nBuilder Barracks `(x1)` : Level 11\nStar Laboratory `(x1)` : Level 9\nBattle Machine `(x1)` : Level 30")
                .addField(emoji(emo.mineg) + " __Resource buildings__", "Gold Storage `(x2)` : Level 9\nElixir Storage `(x2)` : Level 9\nGold Mine `(x3)` : Level 9\nElixir Collector `(x3)` : Level 9\nGem Mine  `(x1)` : Level 9\nClock Tower `(x1)` : Level 9");
        
              if(reaction.emoji.name === "mdo2") {
                msg.edit(m2);
              };
              if(reaction.emoji.name === "mdo2") {
                msg.edit(m3);
              };
              if(reaction.emoji.name === "mdo4") {
                msg.edit(m4);
              };
              if(reaction.emoji.name === "mdo5") {
                msg.edit(m5);
              };
              if(reaction.emoji.name === "mdo6") {
                msg.edit(m6);
              };
              if(reaction.emoji.name === "mdo7") {
                msg.edit(m7);
              };
              if(reaction.emoji.name === "mdo8") {
                msg.edit(m8);
              };
              if(reaction.emoji.name === "mdo9") {
                msg.edit(m9);
              };
            };
        
        
          //Info Hdv
          const embed2 = msg.embeds.find(msg => msg.title === "Building information - Town Hall");
            if (embed2) {
              let th2 = new Discord.MessageEmbed()
                .setTitle("Building information - Town Hall")
                .setDescription("**__Town Hall - Level 2__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/720932345066291201.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x25)` : Level 2\nCannon `(x2)` : Level 3\nArcher Tower `(x1)` : Level 2")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x1)` : Level 2\nBarracks `(x2)` : Level 4")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x1)` : Level 3\nElixir Storage `(x1)` : Level 3\nGold Mine `(x2)` : Level 4\nElixir Collector `(x2)` : Level 4");
              let th3 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 3__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/720932361243590739.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x50)` : Level 3\nCannon `(x2)` : Level 4\nArcher Tower `(x1)` : Level 3\nMortar `(x1)` : Level 1")
                .addField(emoji(emo.par) + " __Traps:__", "Bomb `(x2)` : Level 2")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x2)` : Level 3\nLaboratory `(x1)` : Level 1\nBarracks `(x2)` : Level 5")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x2)` : Level 6\nElixir Storage `(x2)` : Level 6\nGold Mine `(x3)` : Level 6\nElixir Collector `(x3)` : Level 6");
              let th4 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 4__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/720932330973167717.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x75)` : Level 5\nCannon `(x2)` : Level 5\nArcher Tower `(x2)` : Level 4\nMortar `(x1)` : Level 2\nAir Defense `(x1)` : Level 2")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x2)` : Level 1\nBomb `(x2)` : Level 2")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x2)` : Level 4\nLaboratory `(x1)` : Level 2\nBarracks `(x3)` : Level 6")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x2)` : Level 8\nElixir Storage `(x2)` : Level 8\nGold Mine `(x4)` : Level 8\nElixir Collector `(x4)` : Level 8");
              let th5 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 5__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711247201753628733.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x100)` : Level 5\nCannon `(x3)` : Level 6\nArcher Tower `(x3)` : Level 6\nMortar `(x1)` : Level 3\nAir Defense `(x1)` : Level 3\nWizard Tower `(x1)` : Level 2")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x2)` : Level 1\nBomb `(x4)` : Level 3\nAir Bombs `(x2)` : Level 2")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x3)` : Level 5\nLaboratory `(x1)` : Level 3\nBarracks `(x3)` : Level 7\nSpell Factory `(x1)` : Level 1")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x2)` : Level 9\nElixir Storage `(x2)` : Level 9\nGold Mine `(x5)` : Level 10\nElixir Collector `(x5)` : Level 10");
              let th6 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 6 __**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711247753484697670.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x125)` : Level 6\nCannon `(x3)` : Level 7\nArcher Tower `(x3)` : Level 7\nMortar `(x2)` : Level 4\nAir Defense `(x2)` : Level 4\nWizard Tower `(x2)` : Level 3\n\nAir Sweeper `(x1)` : Level 2")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x4)` : Level 1\nBomb `(x4)` : Level 3\nGiant Bomb `(x1)` : Level 2\nAir Bombs `(x2)` : Level 2")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x3)` : Level 6\nLaboratory `(x1)` : Level 4\nBarracks `(x3)` : Level 8\nSpell Factory `(x1)` : Level 2")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x2)` : Level 10\nElixir Storage `(x2)` : Level 10\nGold Mine `(x6)` : Level 10\nElixir Collector `(x6)` : Level 10");
        
              let th7 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 7__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711247103891865641.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x175)` : Level 7\nCannon `(x5)` : Level 8\nArcher Tower `(x4)` : Level 8\nMortar `(x3)` : Level 5\nAir Defense `(x3)` : Level 5\nWizard Tower `(x2)` : Level 4\nHiden Tesla `(x2)` : Level 3\nAir Sweeper `(x1)` : Level 3")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x4)` : Level 2\nBomb `(x6)` : Level 4\nGiant Bomb `(x2)` : Level 2\nAir Bombs `(x2)` : Level 3\nSeeking Air Mine `(x1)` : Level 1")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x4)` : Level 6\nLaboratory `(x1)` : Level 5\nBarracks `(x4)` : Level 9\nBarracks (Dark) `(x1)` : Level 2\nSpell Factory `(x1)` : Level 3\nBarbarian King `(x1)` : Level 5")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x2)` : Level 11\nElixir Storage `(x2)` : Level 11\nElixir Storage (Dark) `(x1)` : Level 2\nGold Mine `(x6)` : Level 11\nElixir Collector `(x6)` : Level 11\nDark Elixir Drill  `(x1)` : Level 3");
              let th8 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 8__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711247082576543805.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x225)` : Level 8\nCannon `(x5)` : Level 10\nArcher Tower `(x5)` : Level 10\nMortar `(x4)` : Level 6\nAir Defense `(x3)` : Level 6\nWizard Tower `(x3)` : Level 6\nHiden Tesla `(x3)` : Level 6\nAir Sweeper `(x1)` : Level 4\nBomb Tower `(x1)` : Level 2")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x6)` : Level 3\nBomb `(x6)` : Level 5\nGiant Bomb `(x3)` : Level 3\nAir Bombs `(x4)` : Level 3\nSeeking Air Mine `(x2)` : Level 1\nSkeleton Trap `(x2)` : Level 1")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x4)` : Level 6\nLaboratory `(x1)` : Level 6\nBarracks `(x4)` : Level 10\nBarracks (Dark) `(x2)` : Level 4\nSpell Factory `(x1)` : Level 3\nSpell Factory (Dark) `(x1)` : Level 3\nBarbarian King `(x1)` : Level 10")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x3)` : Level 11\nElixir Storage `(x3)` : Level 11\nElixir Storage (Dark) `(x1)` : Level 4\nGold Mine `(x6)` : Level 12\nElixir Collector `(x6)` : Level 12\nDark Elixir Drill  `(x2)` : Level 3");
        
              let th9 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 9__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711246912103383102.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x250)` : Level 10\nCannon `(x5)` : Level 11\nArcher Tower `(x6)` : Level 11\nMortar `(x4)` : Level 7\nAir Defense `(x4)` : Level 7\nWizard Tower `(x4)` : Level 7\nHiden Tesla `(x4)` : Level 7\nAir Sweeper `(x2)` : Level 5\nBomb Tower `(x1)` : Level 3\nX-Bow `(x2)` : Level 3")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x)` : Level \nBomb `(x)` : Level \nGiant Bomb `(x)` : Level \nAir Bombs `(x)` : Level \nSeeking Air Mine `(x)` : Level \nSkeleton Trap `(x)` : Level 3")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x4)` : Level 7\nLaboratory `(x1)` : Level 7\nBarracks `(x4)` : Level 11\nBarracks (Dark) `(x2)` : Level 6\nSpell Factory `(x1)` : Level 4\nSpell Factory (Dark) `(x1)` : Level 4\nBarbarian King `(x1)` : Level 30\nArcher Queen `(x1)` : Level 30")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x4)` : Level 11\nElixir Storage `(x4)` : Level 11\nElixir Storage (Dark) `(x1)` : Level 6\nGold Mine `(x7)` : Level 12\nElixir Collector `(x7)` : Level 12\nDark Elixir Drill  `(x3)` : Level 6");
        
              let th10 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 10__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711252239343419457.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x275)` : Level 11\nCannon `(x6)` : Level 13\nArcher Tower `(x7)` : Level 13\nMortar `(x4)` : Level 8\nAir Defense `(x4)` : Level 8\nWizard Tower `(x4)` : Level 9\nHiden Tesla `(x4)` : Level 8\nAir Sweeper `(x2)` : Level 6\nBomb Tower `(x2)` : Level 4\nX-Bow `(x3)` : Level 4\nInferno Tower `(x2)` : Level 3")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x6)` : Level 5\nBomb `(x6)` : Level 7\nGiant Bomb `(x5)` : Level 4\nAir Bombs `(x5)` : Level 4\nSeeking Air Mine `(x5)` : Level 3\nSkeleton Trap `(x3)` : Level 4")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x4)` : Level 8\nLaboratory `(x1)` : Level 8\nBarracks `(x4)` : Level 12\nBarracks (Dark) `(x2)` : Level 7\nSpell Factory `(x1)` : Level 5\nSpell Factory (Dark) `(x1)` : Level 5\nBarbarian King `(x1)` : Level 40\nArcher Queen `(x1)` : Level 40")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x4)` : Level 11\nElixir Storage `(x4)` : Level 11\nElixir Storage (Dark) `(x1)` : Level 6\nGold Mine `(x7)` : Level 13\nElixir Collector `(x7)` : Level 13\nDark Elixir Drill  `(x3)` : Level 7");
              let th11  = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 11__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711246868147077230.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x300)` : Level 12 \nCannon `(x7)` : Level 15\nArcher Tower `(x8)` : Level 15 \nMortar `(x4)` : Level 10\nAir Defense `(x4)` : Level 9\nWizard Tower `(x5)` : Level 10\nHiden Tesla `(x4)` : Level 9\nAir Sweeper `(x2)` : Level 7\nBomb Tower `(x2)` : Level 6\nX-Bow `(x4)` : Level 5\nInferno Tower `(x2)` : Level 5\nEagle Artillery `(x1)` : Level 2")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x6)` : Level 5\nBomb `(x6)` : Level 8\nGiant Bomb `(x5)` : Level 5\nAir Bombs `(x5)` : Level 5\nSeeking Air Mine `(x5)` : Level 3\nSkeleton Trap `(x3)` : Level 4\nTornado Trap `(x1)` : Level 2")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x4)` : Level 9\nLaboratory `(x1)` : Level 9\nBarracks `(x4)` : Level 13\nBarracks (Dark) `(x2)` : Level 8\nSpell Factory `(x1)` : Level 5\nSpell Factory (Dark) `(x1)` : Level 5\nBarbarian King `(x1)` : Level 50\nArcher Queen `(x1)` : Level 50\nGrand Warden `(x1)` : Level 20")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x4)` : Level 12\nElixir Storage `(x4)` : Level 12\nElixir Storage (Dark) `(x1)` : Level 6\nGold Mine `(x7)` : Level 14\nElixir Collector `(x7)` : Level 14\nDark Elixir Drill  `(x3)` : Level 8");
            
              let th12 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 12__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711246843131986000.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(emo.Cannon) + " __Defensive buildings:__", "Wall `(x300)` : Level 13\nCannon `(x7)` : Level 17\nArcher Tower `(x8)` : Level 17\nMortar `(x4)` : Level 12\nAir Defense `(x4)` : Level 10\nWizard Tower `(x5)` : Level 11\nHiden Tesla `(x5)` : Level 10\nAir Sweeper `(x2)` : Level 7\nBomb Tower `(x2)` : Level 7\nX-Bow `(x4)` : Level 6\nInferno Tower `(x3)` : Level 6\nEagle Artillery `(x1)` : Level 3")
                .addField(emoji(emo.par) + " __Traps:__", "Spring Trap `(x8)` : Level 5\nBomb `(x6)` : Level 8\nGiant Bomb `(x6)` : Level \nAir Bombs `(x6)` : Level 6\nSeeking Air Mine `(x6)` : Level 3\nSkeleton Trap `(x3)` : Level 5\nTornado Trap `(x1)` : Level 3")
                .addField(emoji(emo.dirigeable) + " __Army:__", "Army Camp `(x4)` : Level 10\nLaboratory `(x1)` : Level 10\nBarracks `(x4)` : Level 14\nBarracks (Dark) `(x2)` : Level 8\nSpell Factory `(x1)` : Level 5\nSpell Factory (Dark) `(x1)` : Level 5\nWork Shop `(x1)` : Level 3\nBarbarian King `(x1)` : Level 65\nArcher Queen `(x1)` : Level 65\nGrand Warden `(x1)` : Level 40")
                .addField(emoji(emo.ren) + " __Resource buildings__", "Gold Storage`(x4)` : Level 13\nElixir Storage `(x4)` : Level 13\nElixir Storage (Dark) `(x1)` : Level 7\nGold Mine `(x7)` : Level 14\nElixir Collector `(x7)` : Level 14\nDark Elixir Drill  `(x3)` : Level 8");
        
              let th13 = new Discord.MessageEmbed()
                .setTitle("Informations sur les batiments - Town Hall")
                .setDescription("**__Town Hall - Level 13__**")
                .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/emojis/711246813113352202.png?v=1")
                .setColor("RANDOM")
                .addField(emoji(Cannon) + " __Defensive buildings:__", "Wall `(x300)` : Level 14\nCannon `(x7)` : Level 18\nArcher Tower `(x8)` : Level 18\nMortar `(x4)` : Level 13\nAir Defense `(x4)` : Level 11\nWizard Tower `(x5)` : Level 12\nHiden Tesla `(x5)` : Level 11\nAir Sweeper `(x2)` : Level 7\nBomb Tower `(x2)` : Level 8\nX-Bow `(x4)` : Level 7\nInferno Tower `(x3)` : Level 7\nEagle Artillery `(x1)` : Level 4\nScattershot `(x2)` : Level 2")
                .addField(emoji(par) + " __Traps:__", "Spring Trap `(x8)` : Level 5\nBomb `(x7)` : Level 9\nGiant Bomb `(x6)` : Level 6\nAir Bombs `(x6)` : Level 7\nSeeking Air Mine `(x7)` : Level 4\nSkeleton Trap `(x3)` : Level 4\nTornado Trap `(x1)` : Level 3")
                .addField(emoji(dirigeable) + " __Army:__", "Army Camp `(x4)` : Level \nLaboratory `(x1)` : Level \nBarracks `(x4)` : Level \nBarracks (Dark) `(x2)` : Level \nSpell Factory `(x1)` : Level \nSpell Factory (Dark) `(x1)` : Level \nWork Shop `(x1)` : Level 4\nBarbarian King `(x1)` : Level 70\nArcher Queen `(x1)` : Level 70\nGrand Warden `(x1)` : Level 50\nRoyal Champion `(x1)` : Level 20")
                .addField(emoji(ren) + " __Resource buildings__", "Gold Storage`(x4)` : Level 14\nElixir Storage `(x4)` : Level 14\nElixir Storage (Dark) `(x1)` : Level 8\nGold Mine `(x7)` : Level 14\nElixir Collector `(x7)` : Level 14\nDark Elixir Drill  `(x3)` : Level 8");
        
              if(reaction.emoji.name === "th2") {
                msg.edit(th2);
              };
              if(reaction.emoji.name === "th3") {
                msg.edit(th3);
              };
              if(reaction.emoji.name === "th4") {
                msg.edit(th4);
              };
              if(reaction.emoji.name === "th5") {
                msg.edit(th5);
              };
              if(reaction.emoji.name === "th6") {
                msg.edit(th6);
              };
              if(reaction.emoji.name === "th7") {
                msg.edit(th7);
              };
              if(reaction.emoji.name === "th8") {
                msg.edit(th8);
              };
              if(reaction.emoji.name === "th9") {
                msg.edit(th9);
              };
              if(reaction.emoji.name === "th10") {
                msg.edit(th10);
              };
              if(reaction.emoji.name === "th11") {
                msg.edit(th11);
              };
              if(reaction.emoji.name === "th12") {
                msg.edit(th12);
              };
              if(reaction.emoji.name === "th13") {
                msg.edit(th13);
              };
            };
        
          //Auto role hdv
          const embed3 = msg.embeds.find(msg => msg.title === "Rôles automatiques - Level d'Town Hall");
            if (embed3) {
        
              const member = msg.guild.members.cache.get(user.id)
        
              const id13 = msg.guild.roles.cache.find(r => r.name === ("Hdv13")).id;
              const id12 = msg.guild.roles.cache.find(r => r.name === ("Hdv12")).id;
              const id11 = msg.guild.roles.cache.find(r => r.name === ("Hdv11")).id;
              const id10 = msg.guild.roles.cache.find(r => r.name === ("Hdv10")).id;
              const id9 = msg.guild.roles.cache.find(r => r.name === ("Hdv9")).id;
              const id8 = msg.guild.roles.cache.find(r => r.name === ("Hdv8")).id;
              const id7 = msg.guild.roles.cache.find(r => r.name === ("Hdv7")).id;
              const id6 = msg.guild.roles.cache.find(r => r.name === ("Hdv6")).id;
              const id5 = msg.guild.roles.cache.find(r => r.name === ("Hdv5")).id;
              const id4 = msg.guild.roles.cache.find(r => r.name === ("Hdv4")).id;
              const id3 = msg.guild.roles.cache.find(r => r.name === ("Hdv3")).id;
              const id2 = msg.guild.roles.cache.find(r => r.name === ("Hdv2")).id;
        
              try{
                if(reaction.emoji.name === "th2") {
                  if(member.roles.cache.has(id2)) {
                    member.roles.remove(id2);
                  }
                  else {
                    member.roles.add(id2);
                  };
                };
        
                if(reaction.emoji.name === "th3") {
                  if(member.roles.cache.has(id3)) {
                    member.roles.remove(id3);
                  }
                  else {
                    member.roles.add(id3);
                  };
                };
        
                if(reaction.emoji.name === "th4") {
                  if(member.roles.cache.has(id4)) {
                    member.roles.remove(id4);
                  }
                  else {
                    member.roles.add(id4);
                  };
                };
        
                if(reaction.emoji.name === "th5") {
                  if(member.roles.cache.has(id5)) {
                    member.roles.remove(id5);
                  }
                  else {
                    member.roles.add(id5);
                  };
                };
        
                if(reaction.emoji.name === "th6") {
                  if(member.roles.cache.has(id6)) {
                    member.roles.remove(id6);
                  }
                  else {
                    member.roles.add(id6);
                  };
                };
        
                if(reaction.emoji.name === "th7") {
                  if(member.roles.cache.has(id7)) {
                    member.roles.remove(id7);
                  }
                  else {
                    member.roles.add(id7);
                  };
                };
        
                if(reaction.emoji.name === "th8") {
                  if(member.roles.cache.has(id8)) {
                    member.roles.remove(id8);
                  }
                  else {
                    member.roles.add(id8);
                  };
                };
        
                if(reaction.emoji.name === "th9") {
                  if(member.roles.cache.has(id9)) {
                    member.roles.remove(id9);
                  }
                  else {
                    member.roles.add(id9);
                  };
                };
        
                if(reaction.emoji.name === "th10") {
                  if(member.roles.cache.has(id10)) {
                    member.roles.remove(id10);
                  }
                  else {
                    member.roles.add(id10);
                  };
                };
        
                if(reaction.emoji.name === "th11") {
                  if(member.roles.cache.has(id11)) {
                    member.roles.remove(id11);
                  }
                  else {
                    member.roles.add(id11);
                  };
                };
        
                if(reaction.emoji.name === "th12") {
                  if(member.roles.cache.has(id12)) {
                    member.roles.remove(id12);
                  }
                  else {
                    member.roles.add(id12);
                  };
                };
        
                if(reaction.emoji.name === "th13") {
                  if(member.roles.cache.has(id13)) {
                    member.roles.remove(id13);
                  }
                  else {
                    member.roles.add(id13);
                  };
                };
              }catch{
                return
              }  
        
            };
        
          //Auto role mdo
          const embed4 = msg.embeds.find(msg => msg.title === "Rôles automatiques - Level de Maison des Ouvriers");
            if (embed4) {
        
              const member = msg.guild.members.cache.get(user.id)
        
              const id9 = msg.guild.roles.cache.find(r => r.name === ("Mdo9")).id;
              const id8 = msg.guild.roles.cache.find(r => r.name === ("Mdo8")).id;
              const id7 = msg.guild.roles.cache.find(r => r.name === ("Mdo7")).id;
              const id6 = msg.guild.roles.cache.find(r => r.name === ("Mdo6")).id;
              const id5 = msg.guild.roles.cache.find(r => r.name === ("Mdo5")).id;
              const id4 = msg.guild.roles.cache.find(r => r.name === ("Mdo4")).id;
              const id3 = msg.guild.roles.cache.find(r => r.name === ("Mdo3")).id;
              const id2 = msg.guild.roles.cache.find(r => r.name === ("Mdo2")).id;
        
        
              try{
                if(reaction.emoji.name === "mdo2") {
                  if(member.roles.cache.has(id2)) {
                    member.roles.remove(id2);
                  }
                  else {
                    member.roles.add(id2);
                  };
                };
        
                if(reaction.emoji.name === "mdo3") {
                  if(member.roles.cache.has(id3)) {
                    member.roles.remove(id3);
                  }
                  else {
                    member.roles.add(id3);
                  };
                };
        
                if(reaction.emoji.name === "mdo4") {
                  if(member.roles.cache.has(id4)) {
                    member.roles.remove(id4);
                  }
                  else {
                    member.roles.add(id4);
                  };
                };
        
                if(reaction.emoji.name === "mdo5") {
                  if(member.roles.cache.has(id5)) {
                    member.roles.remove(id5);
                  }
                  else {
                    member.roles.add(id5);
                  };
                };
        
                if(reaction.emoji.name === "mdo6") {
                  if(member.roles.cache.has(id6)) {
                    member.roles.remove(id6);
                  }
                  else {
                    member.roles.add(id6);
                  };
                };
        
                if(reaction.emoji.name === "mdo7") {
                  if(member.roles.cache.has(id7)) {
                    member.roles.remove(id7);
                  }
                  else {
                    member.roles.add(id7);
                  };
                };
        
                if(reaction.emoji.name === "mdo8") {
                  if(member.roles.cache.has(id8)) {
                    member.roles.remove(id8);
                  }
                  else {
                    member.roles.add(id8);
                  };
                };
        
                if(reaction.emoji.name === "mdo9") {
                  if(member.roles.cache.has(id9)) {
                    member.roles.remove(id9);
                  }
                  else {
                    member.roles.add(id9);
                  };
                };
              }catch{
                return
              }  
        
            };
    }
}