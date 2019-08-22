const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class avatar {
    constructor(){
            this.name = 'avatar',
            this.alias = ['av'],
            this.usage = '.avatar'
    }

    async run(bot, message, args) {
        await message.delete();
        console.log(`${message.author.tag} used the ${settings.botPREFIX}quote command!`);
        if(message.mentions.users.first()) {
            let user = message.mentions.users.first();
            let output = user.username + "#" + user.discriminator  +
            "\nAvatar URL: " + user.avatarURL;
            message.channel.sendMessage(output);
      } else {
            message.reply("Please mention someone :thinking:");
      }
    }
}
