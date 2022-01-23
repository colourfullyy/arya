module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, messsage, args}) => {
        message.reply("Pong!")
    }
}