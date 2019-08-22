const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class coinflip {
    constructor(){
            this.name = 'coinflip',
            this.alias = ['cf'],
            this.usage = '.cf'
    }

    async run(bot, message, args) {
        await message.delete();
        message.reply(this.name + " worked!")
    }
}
