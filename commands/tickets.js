const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

if (message.author.bot) return;

if (message.channel.type !== 'text') {

module.exports = class ticket {
    constructor(){
            this.name = 'ticket',
            this.alias = ['t'],
            this.usage = '.ticket'
    }

    async run(bot, message, args) {
        message.reply(this.name + "Please check your direct messages :inbox_tray:")

        message.react('✅');

        message.author.send({embed: {
            color: 3447003,
            title: "Ticket"
        }
    }
        )}};
        };
