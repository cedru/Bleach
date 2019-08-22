const dogsuperagent = require('superagent');
const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class dog {
    constructor(){
            this.name = 'dog',
            this.alias = ['d'],
            this.usage = '.dog'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}dog command!`);
        let {body} = await dogsuperagent
        .get(`https://random.dog/woof.json`);

        let dogpicembed = new Discord.RichEmbed()
        .setColor('#ff9900')
        .setTitle('Dog Picture')
        .setImage(body.url);

        message.channel.send(dogpicembed);
    }
}
