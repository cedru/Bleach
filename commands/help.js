const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class help {
    constructor(){
            this.name = 'help',
            this.alias = ['h'],
            this.usage = '.help'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}help command!`);
        let bicon = bot.user.displayAvatarURL;
        message.reply("Please check your direct messages :inbox_tray:");

        message.react('✅');

        message.author.send({embed: {
        color: 3447003,
        title: "Bot's commands",
        fields: [{
            name: "Regular commands",
            value: `**${settings.botPREFIX}help** - This message!\n\
**${settings.botPREFIX}ping** - How much ms?\n\
**${settings.botPREFIX}info** - Give you info about the bot\n\
**${settings.botPREFIX}8ball** - Ask the bot a (yes/no) question\n\
**${settings.botPREFIX}cf** - Flips a coin!\n\
**${settings.botPREFIX}avatar** - Get user's avatar\n\
**${settings.botPREFIX}serverinfo** - See server stats\n\
**${settings.botPREFIX}quote** - Quotes by people\n\
**${settings.botPREFIX}hugs** - I'll hug you\n\
**${settings.botPREFIX}roll** - Rolls a random number!\n\
**${settings.botPREFIX}dog** - Sends a picture of dog!\n\
**${settings.botPREFIX}anime** - Sends a anime picץ\n\
**${settings.botPREFIX}caps** - Random capsץ\n\
**${settings.botPREFIX}advice** - Gives you an adviceץ\n\
**${settings.botPREFIX}say** - Tell me what to say. \n\
**${settings.botPREFIX}ftop** - Sends Faction Top.`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bicon,
          text: "© MatuBot"
        }
      }
    });

    message.author.send('MatuBot | Made by Matu');
    }
    catch(err) {
        message.channel.send('I could not send you my commands!');
    }
    }
