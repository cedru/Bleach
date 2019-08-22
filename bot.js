const settings = require("./settings.json");
const tokenfile = require("./token.json");
const Discord = require('discord.js');
const fs = require("fs");

var client = new Discord.Client();

const { CommandHandler } = require("djs-commands")


const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: [`${settings.botPREFIX}`]
  });
  let prefix = settings.botPREFIX;

let checks = require("./checks.json");

let statusArray = [
  `${settings.botPREFIX}help | ${client.guilds.size} servers!`,
  `${settings.botPREFIX}help | ${client.channels.size} channels!`,
  `${settings.botPREFIX}help | ${client.users.size} users!`
];

var test = 0;
var lastTime;
var key = 1;
var int1;
var NOTIFY_CHANNEL;
var FTOP_CHANNEL;


function msToTime(timeMS) {
  var timeString;
  var seconds = parseInt((timeMS/1000)%60)
      ,minutes = parseInt((timeMS/(1000*60))%60)
      ,hours = parseInt((timeMS/(1000*60*60))%24);
  if(hours > 0){
    timeString = hours + " hours"
  }else if (minutes > 0) {
    timeString = minutes + " minutes"
  }else if (seconds > 0) {
    timeString = seconds + " seconds"
  }
  return timeString;
}

client.on('ready', () => {


    var clientonmessage = `
    Logged in as ${client.user.tag}
    Working on ${client.guilds.size} servers!
    ${client.channels.size} channels and ${client.users.size} users cached!
    I am logged in and ready to roll!
    LET'S GO!`


    console.log(clientonmessage);

    NOTIFY_CHANNEL = client.channels.find("name", "wall-check");
    FTOP_CHANNEL = client.channels.find("id","605464176768319498");

    client.on("message", (message) => {
        if(message.channel.type === 'dm') return;
        if(message.author.type === 'client') return;
        let args = message.content.split(" ");
        let command = args[0];
        let cmd = CH.getCommand(command);
        if(!cmd) return;

        try{
            cmd.run(client,message,args)
        }catch(e){
            console.log(e)
        }

    });

    setInterval(function() {
    client.user.setActivity(`${statusArray[~~(Math.random() * statusArray.length)]}`, { type: settings.statusTYPE });
}, 100000);
});

client.on ('message', message => {
  if(message.content === prefix + "ftop")
  {


fs.writeFileSync('./client/Console/commands.txt', '/f top', 'utf8');
fs.truncate('./client/Console/output.txt', 0, function(){});
message.reply('*Gathering Faction Top Information*');

setTimeout(function () {

    var out18 = fs.readFileSync('./client/Console/output.txt', 'utf-8').split('\r\n');
    var out19 = out18.toString();
    var out20 = out19.split(",").join("\n");

    const outembed = new Discord.RichEmbed()
    .setColor(0xe580ff)
            .setTimestamp()
            .addField("Faction Top!", out20)
    FTOP_CHANNEL.sendEmbed(outembed)
    fs.truncate('./client/Console/output.txt', 0, function(){});


  }, 8000);
}});

//sets alert intveral
//int1 = setInterval(function steaming(){
//  if(test == 1 && (key != 0)){
//      NOTIFY_CHANNEL.send('Check now, @here!', {tts: false});
//      const embed = new Discord.RichEmbed()
//      .setColor(0xFFFF00)
//      .setTimestamp()
//      .setTitle(':no_entry:Time to check walls!:no_entry:')
//      .addField('Last checked', msToTime(Math.abs(new Date() - lastTime)) + " ago.");
//      NOTIFY_CHANNEL.send(embed)
//    }
//    else{
//      key = 1
//      test = 1}
//    }, 300000);
//1200000 = 20 mins 900000 = 15 mins  1500000 = 25 mins 1800000 = 30 mins https://www.timecalculator.net/seconds-to-milliseconds
//} //1 second = 1000 ms
//);
//!clear command
//client.on('message', message => {

//  if(!checks[message.author.id]){
//    checks[message.author.id] = {
  //    checks: 0
//    };
//  }
//  if (message.content == prefix + 'clear') {
  //  lastSender = message.guild.lastSender = message.author
  //  lastTime = new Date()
  //  checks[message.author.id] = {
  //   checks: checks[message.author.id].checks + 1
  //  };
  //  fs.writeFile("./checks.json", JSON.stringify(checks), (err) =>{
//      if (err) console.log(err)
//    });
//    const embed = new Discord.RichEmbed()
//    .setColor(0x00FF00)
//    .setTimestamp()
//    .setDescription(':white_check_mark: ' + message.author.toString() + " marked walls as clear using command **!clear**")
//    .addField('Checked By', message.author.toString())
//    .addField('Check again in', msToTime(10*60*1000 - Math.abs(new Date() - lastTime)))
  //  NOTIFY_CHANNEL.send(embed)
//    key = 0 }
//    else {
//      }
//});

//!weewoo north command
//client.on ('message', message => {
//  if (message.content === prefix + "weewoo") {
//    const embed = new Discord.RichEmbed()
//    .setColor(0xFF0000)
//    .setTimestamp()
//    .setTitle('Wall Checks!')
//    .addField('WEEWOO!', '**We are being raided! HELP!**')
//    .addField('Alerted By',  message.author.toString());
  //  NOTIFY_CHANNEL.send(embed)
  //  NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED!**');
  //  NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED!**');
  //  NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED!**');
//  }
//});

//!walls command
//client.on ('message', message => {
//  if (message.content === prefix + 'walls') {
//    if (message.guild.lastSender) {
//    const embed = new Discord.RichEmbed()
//    .setColor(0xFF0000)
//    .setTimestamp()
//    .setTitle('Wall Checks!')
//    .addField('Wall Status', 'Last checked by @'+ message.author.username)
//    .addField('Last  ```checked```', msToTime(Math.abs(new Date() - lastTime)) + " ago.")
//    .addField('Check again in', msToTime(10*60*1000 - Math.abs(new Date() - lastTime)))
//    .setURL("http://matu.ga")
//    .setThumbnail("https://i.imgur.com/EeC4k0a.png");
  //    NOTIFY_CHANNEL.send(embed)
//    }
  //  else {
  //    NOTIFY_CHANNEL.send("```Bot has just restarted! Please execute .clear for .walls to update again.```")
//    }
//  }
//});

//login token
client.login(tokenfile.token);
