// Load up the discord.js library
const Discord = require("discord.js");

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
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`CNN`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`CNN`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`CNN`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  if(message.author.bot) return;

/***************************************** do not edit above this line ***************************************************/
/******************************************* add your functions here *****************************************************/
  
  if(message.author.id === michaelk){
	  message.channel.send('testing');
  }
	
  if(message.content.includes('furry')) {
    message.channel.send('Travis is a faggot');
  }

  if(message.content.includes('travis')) {
    message.channel.send('Travis is a furry!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  }
  
  if(message.content.includes('tranny') || message.content.includes('trannie')) {
    message.channel.send("", {file: "https://i.imgur.com/L3nGm4X.png"});
  }
  
  if(message.content.includes('gay')) {
    message.channel.send('Not gay. Fag you uncultured swine');
  }
  
  if(message.content.includes('nigga') || message.content.includes('nigger')) {
    message.channel.send("", {file: "https://i.imgur.com/CcsdIVX.jpeg"});
  }

  if(message.content.includes('child porn') || message.content.includes('CHILD PORN')) {
    message.channel.send('CHILD PORN!!!!!', {file: "https://i.imgur.com/LCKw4bf.png"}); return;
  }

  if(message.content.includes('porn') || message.content.includes('Porn')) {
    message.channel.send("", {file: "https://i.4cdn.org/gif/1586742606555.webm"});
  }
  
  if(message.content.includes('trump') || message.content.includes('Trump') || message.content.includes('donald') || message.content.includes('Donald')) {
    message.channel.send("", {file: "https://i.imgur.com/MSotV1j.jpg"});
  }

  if(message.content.includes('age') || message.content.includes('attractive') || message.content.includes('Max') || message.content.includes('max')) {
    message.channel.send("", {file: "https://i.imgur.com/LCKw4bf.png"});
  }
  
  if(message.content.includes('CP')) {
    message.channel.send('Max quit watching child porn');
  }
  
  if(message.content.includes('compass') || message.content.includes('politic')) {
    message.channel.send('https://www.politicalcompass.org/');
  }
  
  /*  
  // libleft
  if(message.member.roles.equals("699806549866053722")){
	  message.channel.send('disgusting libleft');
  }
  // authright
  if(message.member.roles.get("628743541262123032")){
	  message.channel.send('chosen children');
  }
  // authleft
  if(message.member.roles.get("628743489546616833")){
	  message.channel.send('fucking bootlicker');
  }
  // libright money
  if(message.member.roles.get("699806248228356146")){
	  message.channel.send('money is king');
  }
  // libright cp
  if(message.member.roles.get("699805934490353715")){
	  message.channel.send('CP');
  }
  */
  // centrist
  if(message.member.roles.get("699808750005125160")){
	  if(!message.author.bot){
		message.reply('grill up bitches!!');
	  }
  }

/***************************************** do not edit above this line ***************************************************/
  
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

client.login(config.token);
