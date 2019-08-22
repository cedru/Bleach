const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class info {
    constructor(){
            this.name = 'info',
            this.alias = ['i'],
            this.usage = '.info'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}info command!`);
    await message.delete();

    let bicon = bot.user.displayAvatarURL;

    message.channel.send({embed: {
        color: 3447003,
        title: "Info:",
        description: "This is the info about the bot",
        fields: [{
            name: "Created by:",
            value: "This bot created by [Matu](http://matu.ga)"
        },
        {
            name: "Made with:",
            value: "This bot made with [Discord.JS](http://discord.js.org)"
        },
        {
            name: "Contact me:",
            value: "_**matu#8072**_"
        },
        {
            name: "Social Media",
            value: "[Twitter](https://twitter.com/ignMatu) | [GitHub](https://github.com/PapaMatu)"
        },
        ],
        timestamp: new Date(),
        footer: {
        icon_url: bicon,
        text: "© MatuBot"
        }
    }
    });
}}
