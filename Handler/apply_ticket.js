const { Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu,  MessageAttachment,  TextInputComponent , Modal, Message, Interaction} = require('discord.js')

const apply_ticket = async Client => {
    Client.on('channelCreate', async Channel => {
        const category = '986670565358174216';
        if(category.includes(Channel.parentId)) {
      
          const embed = new MessageEmbed()
          .setColor('RED')
          .setDescription(`**> <a:977003084054151198:1226882217544781885> Welcome to server ${Channel.guild.name}: ${Channel.author}
          
          > <a:958879793087127592:1226882734119714816> Please click the button below to apply**`)
      
          const menu = new MessageActionRow()
          .addComponents(new MessageSelectMenu() .setCustomId('option').setPlaceholder(`Select language`)
        .setOptions([
          {
             label: 'العربية',
             description: `للتقديم باللغة العربية اضغط هنا`,
             emoji: '🇪🇬',
             value: 'arabic-app'
          },{
            label: 'ENGLISH',
            description: 'To apply in English, click here',
            emoji: '🇬🇧',
            value: 'english-app'
          }
        ]))
setTimeout(() => {
        Channel.send({embeds: [embed], components: [menu]})
},2000)
    }
      })
}

module.exports = apply_ticket;