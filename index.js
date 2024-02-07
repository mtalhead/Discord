const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1204557066602156082')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=XbKLO9TbRRQ') //Must be a youtube video link 
    .setState('eeping')
    .setName('buu')
    .setDetails(`lalala`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1187549401971970140/1204580040487211048/me.gif?ex=65d53f95&is=65c2ca95&hm=8083a0ec43b23f079d2516022b6c4377974c0519accdf5cc64ca9499039304f6&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('petals') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1188625102305235054.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('hole') //Text when you hover the Small image
    .addButton('ωip', 'https://rentry.co/silentwatcher')
    .addButton('ωip', 'https://rentry.co/silentwatcher');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
