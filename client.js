const Discord = require("discord.js");
const config = require("./config/config.json");
const client = new Discord.Client({
    intents: [
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILDS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_INVITES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "GUILD_PRESENCES",
        "GUILD_SCHEDULED_EVENTS",
        "GUILD_VOICE_STATES",
        "GUILD_WEBHOOKS"
    ]
});

let bot = {
    client,
    prefix: "arya.",
    owners: ["437282728656896011"]
}

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events") (bot, reload);
client.loadCommands = (bot, reload) => require("./handlers/commands") (bot, reload);

client.loadEvents(bot, false);
client.loadCommands(bot, false);

module.exports = bot

// client.on("ready", () => {
//     client.user.setActivity(`arya help`);
//     console.log(`${client.user.tag} is now online!`);
// });

// client.on("messageCreate", (message) => {
//     if(message.content == config.prefix + "hi") {
//         message.reply("Hello!");
//     }

//     if(message.content == config.prefix + "video") {
//         message.reply("https://cdn.discordapp.com/attachments/914243931905097728/926533619604922438/88088a56c2004d2b0a324bdeea00be0b.mp4");
//     }

//     if(message.content == config.prefix + "suck") {
//         message.reply("https://tenor.com/view/i-show-speed-speed-shake-now-suck-that-sucking-gif-24039341");
//     }

//     if(message.content == config.prefix + "speed") {
//         message.reply("https://tenor.com/view/insomnia-gif-24320126");
//     }

//     if(message.content == config.prefix + "jingle") {
//         message.reply("https://cdn.discordapp.com/attachments/786059644342239233/926547051678933022/v12044gd0000c75m2q3c77u7psr82tpg_2_2.mov");
//     }

//     if(message.content == config.prefix + "monkey") {
//         message.reply("https://media.discordapp.net/attachments/619690317620183064/847703188337328128/stare.gif");
//     }
// });

// const welcomeChannelId = "926600325316640789"
// client.on("guildMemberAdd", (member) => {
//     member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!!`);
// });

client.login(config.token);