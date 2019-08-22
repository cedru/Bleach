const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class shutdown {
    constructor(){
            this.name = 'shutdown',
            this.alias = ['sd'],
            this.usage = '.shutdown'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}shutdown command!`);
        if (message.author.id == settings.ownerID) {
            const filterYes = m => m.content.startsWith('yes');
            message.reply('Shutting down... :skull:')
            .then(m => {
                process.exit()
            });
    } else {
        message.react('❌');
        message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
    }
    }
}
