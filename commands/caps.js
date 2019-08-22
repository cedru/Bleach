const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class caps {
    constructor(){
            this.name = 'caps',
            this.alias = ['ca'],
            this.usage = '.caps'
    }

    async run(bot, message, args) {
        await message.delete();
        console.log(`${message.author.tag} used the ${settings.botPREFIX}caps command!`);


                const sponge = require('spongeuscator');

                if (message.content.split(' ').slice(1).join(' ').length < 4) return message.channel.send('Please give a message with more than 4 chars');
                message.channel.send(sponge(message.content.split(' ').slice(1).join(' ')));
                break;



    }
}
