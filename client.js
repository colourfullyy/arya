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
})

client.on("ready", () => {
    client.user.setActivity(`arya help`);
    console.log(`${client.user.tag} is now online!`);
});

client.on("messageCreate", (message) => {
    if(message.content == config.prefix + "hi") {
        message.reply("Hello!");
    }
})

client.login(config.token);