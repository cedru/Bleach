const Discord = require('discord.js');
const settings = require("../settings.json");
var client = new Discord.Client();
module.exports = class botinfo {
    constructor(){
            this.name = 'botinfo',
            this.alias = ['bi'],
            this.usage = '.botinfo'
    }

    async run(bot, message, args) {
      console.log(`${message.author.tag} used the ${settings.botPREFIX}botinfo command!`);
      await message.delete();
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created On", bot.user.createdAt);

      return message.channel.send(botembed);
}};
