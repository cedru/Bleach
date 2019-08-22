const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class owhelp {
    constructor(){
            this.name = 'ownerhelp',
            this.alias = ['owh'],
            this.usage = '.ownerhelp'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}ownerhelp command!`);
      let bicon = bot.user.displayAvatarURL;
      let binon = bot.user.username;
      let binog = bot.user.avatarURL
        if (message.author.id == settings.ownerID) {
            message.react('✅');

            message.reply("Please check your direct messages :inbox_tray: (Owner commands.)");

            message.author.send({embed: {
                color: 3447003,
                author: {
                  name: binon,
                  icon_url: binog
                },
                title: "Bot's commands",
                fields: [{
                    name: "Bot's owner commands",
                    value: `**${settings.botPREFIX}botname** - Changes the bot's username. **Usage: ${settings.botPREFIX}botname [NAME]**\n\
        **${settings.botPREFIX}botavatar** - Changes the bot's avatar. **Usage: ${settings.botPREFIX}botavatar [LINK]**\n\
        **${settings.botPREFIX}botnick** - Changed the nickname in a server. **Usage: ${settings.botPREFIX}botnick [NICKNAME]**\n\
        **${settings.botPREFIX}eval** - Evaluates a code. **Usage: ${settings.botPREFIX}eval [CODE]**\n\
        **${settings.botPREFIX}shutdown** - Closes the CMD window!\n\
        **${settings.botPREFIX}botstatus** - Change the bot's status! **Usage: ${settings.botPREFIX}botstats [STATUS]**`
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: bicon,
                  text: "© MatuBot"
                }
              }
            });
    }
}};
