const express = require('express')
const app = express()

app.get("/", (req,res) => {
  res.send(new Date())
})

app.listen(8000, () => {
  console.log('Server Started With Port : 3000')
})

const { Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu,  MessageAttachment,  TextInputComponent , Modal, Message, Interaction} = require('discord.js')

const client = new Client({ intents: 32767 })
const fs = require('fs')

const db = require('pro.db')

fs.readdirSync('./Handler/').forEach(async Handler => require(`./Handler/${Handler}`)(client))


client.Çɱɗ = new Collection()
client.Çʍɗ = new Collection()
client.PREFIX = '!';
client.database = db;

setTimeout(async() => {
    if(!client || !client.user) {
        process.kill(1)
    }
}, 3 * 1000 * 60)

client.login(`MTIyNzQyNzM1ODMzNjg3NjYxNA.G6yTXb._dRqFlxU319EwjnaHlAtuqfK8uW0BQ9-BMyeOA`)

const ms = require('ms');
const azkarChannel = '986670563290394644';

setInterval(function(){

const channel = client.channels.cache.get(azkarChannel);

  
if (!channel) return;
  const guild = channel.guild


azkar(guild,channel)

},ms('1h'))

const azkarr = require('azkar')
function azkar(server,channel) {
let zekr = azkarr.get()
let embed = new MessageEmbed()
.setColor('RED')
.setTitle(zekr.category)
.setDescription(zekr.zekr)
.setThumbnail(client.user.displayAvatarURL())
.setTimestamp()
.setFooter({ text: server.name, iconURL: server.iconURL()});
  
channel.send({embeds: [embed]})
}

client.on('messageCreate', async Message => {
  if(Message.content.startsWith('line') || Message.content.startsWith('خط')) {
    if(Message.author.bot) return;
    const embed = new MessageEmbed()
    .setColor('RED')
    // تغيير الصورة
    .setImage(`https://cdn.discordapp.com/attachments/1221276434685890560/1221276670489657404/20231001_182035-3.gif?ex=66247288&is=6611fd88&hm=ed6bf80ad244eb75afdd0b598c4f4aebf2501194d96ed72d0ee94e4eb54d49fc&`)

    Message.channel.send({embeds: [embed]})
  }
})


let channel = ['986670564645167140', '986670564829724768','1226594573825085480']
client.on('messageCreate', async Message => {
  if(Message.author.bot) return;
  if(channel.includes(Message.channel.id)) {
  const embed = new MessageEmbed()
  .setColor('RED')
  ///الوصف
  .setDescription(`<a:977003084054151198:1226882217544781885> Thanks For Giving { ${Message.guild.name} } Feedback <a:redcheckshield:1226863490493579306>

<a:977003084054151198:1226882217544781885> We Hope You Visit The Bloodz E-sports Again <:PlayerOne:1226882830311755827>`)
// تغيير الصورة
  .setImage(`https://cdn.discordapp.com/attachments/1221276434685890560/1221276670489657404/20231001_182035-3.gif?ex=66247288&is=6611fd88&hm=ed6bf80ad244eb75afdd0b598c4f4aebf2501194d96ed72d0ee94e4eb54d49fc&`)

  Message.channel.send({embeds: [embed]})
  }
})