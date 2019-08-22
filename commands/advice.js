const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class advice {
    constructor(){
            this.name = 'advice',
            this.alias = ['ad'],
            this.usage = '.advice'
    }

    async run(bot, message, args) {
        await message.delete();
        console.log(`${message.author.tag} used the ${settings.botPREFIX}advice command!`);

        const advicesf = require('snekfetch');

            let r = await advicesf.get('http://api.adviceslip.com/advice');

            let advice = JSON.parse(r.body).slip.advice;

            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Advice:",
                    value: `\`${advice}\``
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
