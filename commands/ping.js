const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();
var msTOcolor = (client.ping > 100) ? "15158332":"3066993"

module.exports = class test {
    constructor(){
            this.name = 'ping',
            this.alias = ['p'],
            this.usage = '.ping'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}ping command!`);
        await message.delete();
        message.channel.send({embed: {
            color: msTOcolor,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Bot's ping:",
                value: `\`${client.ping}ms\``
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© MatuBot"
            }
          }
        });
    }
}
