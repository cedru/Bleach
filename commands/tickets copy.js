const Discord = require('discord.js');
const db = require('quick.db');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class ticket {
    constructor(){
            this.name = 'ticket',
            this.alias = ['t'],
            this.usage = '.ticket'
    }

    async run(bot, message, args) {
        message.reply(this.name + "Please enter your problem :notepad_spiral: ")

        message.reply({embed: {

            color: 3447003,
            title: "Ticket"
        }
    }
    )}};
    
    
