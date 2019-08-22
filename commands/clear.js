const Discord = require('discord.js');
const settings = require("../settings.json");
const moment = require("moment");
var client = new Discord.Client();

module.exports = class test {
    constructor(){
            this.name = 'clear',
            this.alias = ['c'],
            this.usage = '.clear'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}clear command!`);
        await message.delete();
      if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.reply(':lock: **You** need `MANAGE_MESSAGES` permissions to execute `clear`');
      const firstUserClear = message.mentions.users.first();
      const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
      if (!amount) return message.reply('Must specify an amount to delete!');
      if (!amount && !firstUserClear) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
      message.channel.fetchMessages({
          limit: amount,
      }).then((messages) => {
          if (firstUserClear) {
              const filterBy = firstUserClear ? firstUserClear.id : client.user.id;
              messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
          }
          message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
      });
    }
}
