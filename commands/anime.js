const Discord = require('discord.js');
const animesf = require('snekfetch');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class anime {
    constructor(){
            this.name = 'anime',
            this.alias = ['a'],
            this.usage = '.anime'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}anime command!`);
        await message.delete();
        const animesf = require('snekfetch');

        let res = await animesf.get('http://api.cutegirls.moe/json');
        if (res.body.status !== 200) {
            return message.channel.send('An error occurred while processing this command.');
        }
        let animepicembed = new Discord.RichEmbed()
        .setColor('#f266f9')
        .setTitle('Anime Picture')
        .setImage(res.body.data.image);

        message.channel.send(animepicembed);
}};
