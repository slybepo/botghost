const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');

// Create the first bot client
const client1 = new Discord.Client();

intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
client1.once('ready', () => {
    console.log(`Logged in as ${client1.user.tag}`);
    
    // Set the first bot's status
    client1.user.setPresence({
        activity: {
            name: 'CosmoS Menu🌌',
            type: 'WATCHING' // Possible types: 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
        },
        status: 'idle' // Possible statuses: 'online', 'idle', 'dnd', 'invisible'
    });
});

// Run the first bot with its Discord bot token
client1.login(process.env.TOKEN);

// Create the second bot client
const client2 = new Discord.Client();

intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
client2.once('ready', () => {
    console.log(`Logged in as ${client2.user.tag}`);
    
    // Set the second bot's status
    client2.user.setPresence({
        activity: {
            name: 'CosmoS menu🌌 | UD',
            type: 'WATCHING' // Possible types: 'PLAYING', 'WATCHING', 'LISTENING', 'STREAMING'
        },
        status: 'idle' // Possible statuses: 'online', 'idle', 'dnd', 'invisible'
    });
});

// Run the second bot with its Discord bot token
client2.login(process.env.TOKEN5);
