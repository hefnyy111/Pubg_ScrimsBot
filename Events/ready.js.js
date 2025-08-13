const ClientReady = async Client => {
    console.log(Client.user.username)

    Client.user.setStatus('online')

    setInterval(async() => {
        const Activity = [`/help`, `BLACK PANTHERSBLAC On Top 🔥`, `Dev By HeFny`]
        const Activities = Activity[Math.floor(Math.random() * Activity.length)]
        Client.user.setActivity(`${Activities}`, {
            type: 'PLAYING'
        })
    }, 1000 * 10)
}

module.exports = ClientReady;