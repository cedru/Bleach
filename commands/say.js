const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();
module.exports = class test {
    constructor(){
            this.name = 'say',
            this.alias = ['s'],
            this.usage = '.say'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}say command!`);
        await message.delete();
        if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.reply(':lock: **You** need `MANAGE_MESSAGES` permissions to execute `say`');
        if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply(':lock: **I** need `MANAGE_MESSAGES` Permissions to execute `say`');
        const botsay = message.content.split(' ').slice(1).join(' ');

        if (!botsay) return message.channel.send('Please tell me what to say!');

            message.delete();
            message.channel.send(botsay);
    }
}
