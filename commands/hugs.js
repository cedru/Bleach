const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();

module.exports = class hugs {
    constructor(){
            this.name = 'hugs',
            this.alias = ['h'],
            this.usage = '.hugs'
    }

    async run(bot, message, args) {
        console.log(`${message.author.tag} used the ${settings.botPREFIX}hugs command!`);
        await message.delete();
        var hugs = [
            "`＼(^o^)／`",
            "`d=(´▽｀)=b`",
            "`⊂((・▽・))⊃`",
            "`⊂( ◜◒◝ )⊃`",
            "`⊂（♡⌂♡）⊃`",
            "`⊂(◉‿◉)つ`"
        ];
        message.reply(`${hugs[~~(Math.random() * hugs.length)]}`);
    }
}
