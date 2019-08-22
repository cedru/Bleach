const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class quote {
    constructor(){
            this.name = 'quote',
            this.alias = ['q'],
            this.usage = '.quote'
    }

    async run(bot, message, args) {
        await message.delete();
        console.log(`${message.author.tag} used the ${settings.botPREFIX}quote command!`);
        const fetchquote = require('snekfetch');
        fetchquote.get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en').then(quote => {
            if (quote.body.quoteText === undefined) {
                return message.reply('Something is messing up the API try again please!');
            }

            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'A smart guy said once:',
                  icon_url: 'http://pngimages.net/sites/default/files/right-double-quotation-mark-png-image-80280.png'
                },
                fields: [{
                    name: "Quote with source",
                    value: `"${quote.body.quoteText}"\n**Author:** ${quote.body.quoteAuthor}\n**Source:** ${quote.body.quoteLink}`
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© MatuBot"
                }
            }
        })
        });
    }
}
