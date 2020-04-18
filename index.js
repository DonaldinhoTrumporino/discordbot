// Load up the discord.js library
const Discord = require("discord.js");
const random = require("random");

/***** CHANNELS *****/
//shreks-fungeon
const sfID = "399718595724181513";
//the-deep-state
const tdsID = "131087537165959168";
//fake-news
const fnID = "547460828400451584";
//quad-squad
const qsID = "699819200725909527";
//donaldinho-dev
const ddID = "700028814402650262";
//Dagger Dark Skin Tone Dancer
const ddstdID = "131087538684166144";

/***** ROLES *****/
//blue (crusader)
const blueID = "628743541262123032";
//red (bootlicker)
const redID = "628743489546616833";
//purple (ephebophile)
const purpleID = "699805934490353715";
//yellow (sovereigncitizen)
const yellowID = "699806248228356146";
//green (furry)
const greenID = "699806549866053722";
//grill (centrist)
const grillID = "699808750005125160";
//black (unflaired)
const blackID = "699829579333763073";
//everyone
const everyoneID = "131087537165959168";


/***** USERS *****/
//Howard
const HowardID = "131237025251721216";
//Adam
const AdamID = "675736121967247372";
//Chauncer
const ChauncerID = "156127089907597312";
//Reed
const ReedID = "616615314850971658";
//Bryan
const BryanID = "131088438525952000";
//MichaelL
const ListiID = "131130843321073665";
//Will
const WillID = "131095841166327809";
//TaylorD
const DickensID = "131090455675928578";
//Max
const MaxID = "132516430452097024";
//Pat
const PatID = "102828388909072384";
//MichaelK
const KowpakID = "141019900993994753";
//Urbane
const UrbaneID = "257310330680639488";
//Travis
const TravisID = "243112729655640074";

/***** SOUNDS *****/
// china
const trump1 = "https://soundfrancisco.com/wp-content/uploads/2019/09/ibeatchina.mp3";
// horror of nuclear
const trump2 = "https://www.soundboard.com/sb/sound/956252";
// believe me
const trump3 = "https://www.soundboard.com/sb/sound/956258";
// rosie - fat ugly face
const trump4 = "https://www.soundboard.com/sb/sound/9409";
// mexico
const trump5 = "https://soundfrancisco.com/wp-content/uploads/2019/09/mbeatmexico.mp3";
// slaps
const moan1 = "https://soundfishing.eu/download.php?id=962";
// generic
const moan2 = "https://soundfishing.eu/download.php?id=953";
// generic
const moan3 = "https://soundfishing.eu/download.php?id=954";
// generic
const moan4 = "https://soundfishing.eu/download.php?id=955";
// generic
const moan5 = "https://soundfishing.eu/download.php?id=956";
// generic
const moan6 = "https://soundfishing.eu/download.php?id=958";

/********************************************** start code **********************************************/

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Update successful!`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Fox News`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Fox News`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Fox News`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  if(message.author.bot) return;

/***************************************** do not edit above this line ***************************************************/
/******************************************* add your functions here *****************************************************/
  
/***** templates (do not uncomment, only copy and paste) *****/
/*

// message if a messages appears in a channel

  if (message.channel.id.toString() === sfID) {
    message.channel.send("This is a test");
  }


// message if a user messages

  if (message.author.id.toString() === KowpakID) {
    message.channel.send("This is a test");
  }


// message if a user belongs to a role

  if (message.member.roles.cache.has(grillID)){
     message.channel.send('grill up bitches!!');
  }


// message if a user messages a word

  if ((message.author.id.toString() === KowpakID) &&
    (message.content.includes('test')) {
    message.channel.send("This is a test");
  }


// message a file if a user messages

  if (message.author.id.toString() == HowardID) {
      message.channel.send("this is a test", {file: "https://i.kym-cdn.com/entries/icons/original/000/002/679/Implications_everywhere.jpg"});
  }


// play a sound if a user messages

  if (message.author.id.toString() == KowpakID) {
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(trump1);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }


// play a sound if a word is messaged

  if (message.content.includes('china')) {
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(trump1);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }


// play a sound if a user messages a word

  if ((message.content.includes('test')) &&
    (message.author.id.toString() == KowpakID)) {
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(trump1);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }


// react with an emoji

  if ((message.author.id.toString() == KowpakID)) {
    message.react(client.emojis.cache.find(emoji => emoji.name === "mike"));
  }


// tag a user when a user messages

  if ((message.author.id.toString() == KowpakID)) {
    message.channel.send("<@" + PatID + "> " + "this is a test");
  }


// tag user when THAT user messages

  if (message.member.roles.cache.has(grillID) && message.content.includes('my')){
    message.reply('grill up bitches!!');
  }


// tag a user when a word is messaged

  if (message.content.includes('test')) {
    message.channel.send("<@" + KowpakID + "> " + "this is a test");
  }

*/

/***** current shenanigans *****/
// testing random functionality
random.int(min = 0, max = 100);
	
if (message.author.id.toString() === PatID) {
	int randOne = rand.nextInt(100);
	message.channel.send(randOne.toString());
}

  if (message.content.includes('china') ||
    message.content.includes('China')) {
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(trump1);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }
	
  if (message.content.includes('mexico') ||
    message.content.includes('Mexico')) {
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(trump5);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }

  if (message.content.includes('moan') ||
    message.content.includes('MOAN') ||
    message.content.includes('Moan')) {
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(moan1);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }

  if (message.content.includes('rosie') ||
    message.content.includes('Rosie')) {
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(trump4);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }

  if ((message.author.id.toString() == TravisID)) {
    message.react(client.emojis.cache.find(emoji => emoji.name === "theW"));
  }

  if ((message.author.id.toString() == DickensID)) {
    message.react(client.emojis.cache.find(emoji => emoji.name === "theD"));
  }

  if ((message.author.id.toString() == HowardID)) {
    message.react(client.emojis.cache.find(emoji => emoji.name === "authleft"));
  }

  if (message.content.includes('travis')) {
    message.channel.send('Travis is a furry!!!');
  }
  
  if (message.content.includes('trann') || message.content.includes('trans')) {
    message.channel.send("", {file: "https://i.imgur.com/L3nGm4X.png"});
  }
  
  if (message.content.includes('nigga')) {
    message.channel.send("", {file: "https://i.imgur.com/CcsdIVX.jpeg"});
  }

  if (message.content.includes('porn') ||
    message.content.includes('Porn')) {
      message.channel.send("", {file: "https://i.4cdn.org/gif/1586742606555.webm"});
  }
  
  if (message.content.includes('trump') || 
    message.content.includes('Trump') || 
    message.content.includes('donald') || 
    message.content.includes('Donald')) {
      message.channel.send("", {file: "https://i.imgur.com/MSotV1j.jpg"});
  }

  if (message.content.includes('age') || 
    message.content.includes('attractive') || 
    message.content.includes('Max') || 
    message.content.includes('max')) {
      message.channel.send("", {file: "https://i.imgur.com/LCKw4bf.png"});
  }
  
  if(message.content.includes('CP')) {
    message.channel.send('Max quit watching child porn');
  }
  
  if(message.content.includes('compass') ||
    message.content.includes('politic')) {
      message.channel.send('https://www.politicalcompass.org/');
  }
	
  if (((message.author.id.toString() == HowardID) || 
    (message.author.id.toString() == MaxID) || 
    (message.author.id.toString() == KowpakID)) &&
    message.content.includes('>')) {
      message.channel.send("", {file: "https://i.kym-cdn.com/entries/icons/original/000/002/679/Implications_everywhere.jpg"});
  }

  if (message.author.id.toString() === BryanID &&
    message.content.includes ('4chan')) {
      message.channel.send("Hey Boo Bear");
  }

  if (message.author.id.toString() === BryanID &&
    message.content.includes('www')) {
      message.channel.send("Fish Scott! Entertain Me!");
  }
  
  if (message.author.id.toString() === MaxID &&
    message.content.includes('www')) {
      message.channel.send("Fake News!");
  }
  
  if (message.author.id.toString() === HowardID &&
    message.content.includes('government')) {
      message.channel.send("That was probably the most liberal leaning bs I have ever read. Fucking boot");
  }

  if (message.author.id.toString() === KowpakID &&
    message.content.includes('www')) {
      message.channel.send("Never forget when Kowpak made Stephanie Matonic cry. That was Ah-mazing.");
  }

  if ((message.author.id.toString() === HowardID ||
    message.author.id.toString() === MaxID)
    && message.content.includes('every')) {
      message.channel.send("", {file: "https://i.kym-cdn.com/photos/images/original/000/528/302/85e.png"});	  
  }

  /*  
  // libleft
  if(message.member.roles.cache.has(greenID)){
	  message.channel.send('disgusting libleft');
  }
  // authright
  if(message.member.roles.cache.has(blueID)){
	  message.channel.send('chosen children');
  }
  // authleft
  if(message.member.roles.cache.has(redID)){
	  message.channel.send('fucking bootlicker');
  }
  // libright money
  if(message.member.roles.cache.has(yellowID)){
	  message.channel.send('money is king');
  }
  // libright cp
  if(message.member.roles.cache.has(purpleID)){
	  message.channel.send('CP');
  }
  */

  // centrist
  if (message.member.roles.cache.has(grillID) && message.content.includes('my')){
    message.reply('grill up bitches!!');
    message.channel.send("", {file: "https://media.giphy.com/media/26n7aLwSYp9jSdNss/giphy.gif"});
  }

/***************************************** do not edit below this line ***************************************************/
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.on("voiceStateUpdate", (oldState, newState) => {
  console.log("test");
  // this event triggers when a user enters or leave the voice channel.
  let newUserChannel = newState.channel;
  let oldUserChannel = oldState.channel;

  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    // User joins a voice channel
    const channel = client.channels.fetch(ddstdID)
      .then(channel => {
        channel.join()
          .then(connection => {
            const dispatcher = connection.play(moan2);
            dispatcher.on('finish', () => {channel.leave()});
          });
      });
  }

  /*else if(newUserChannel === undefined) {
    // User leaves a voice channel
  }*/
});

client.login(config.token);
