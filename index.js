const Discord  = require("discord.js")
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

let config = require("./config.json")

const client = new Discord.Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
})

client.on("ready", () => {
	console.log(`${client.user.username} is up!`);
})

client.on('message', async message => {
	try{
		if (message.attachments.size > 0) {
		await message.react('🇦');
		await message.react('🇧');
		await message.react('🇨');
		await message.react('🇩');
		await message.react('🇪');
		}
	}
	catch (error) {
		console.error('One of the emojis failed to react but app is still working!');
	}
});

client.login(config.token)