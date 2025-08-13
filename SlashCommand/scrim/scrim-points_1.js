const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimpoin = {
    name:"scrim-points",
    description:"To Send Scrim Points",


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


        const RulesEmbed = new MessageEmbed()
                .setColor('BLACK')              
        .setDescription(` **__Scrim Points__** 

> <a:redcheckshield:1226863490493579306> **1st Place  : 20 Point**

> <a:redcheckshield:1226863490493579306> **2nd Place  14 Point**

> <a:redcheckshield:1226863490493579306> **3rd Place  10 Points**

> <a:redcheckshield:1226863490493579306> **4th Place  8 Points**

> <a:redcheckshield:1226863490493579306> **5th Place  7 Points**

> <a:redcheckshield:1226863490493579306> **6th Place  6 Points**

> <a:redcheckshield:1226863490493579306> **7th Place  5 Points**

> <a:redcheckshield:1226863490493579306> **8th place  4 points**

> <a:redcheckshield:1226863490493579306> **9th Place  3 Points**

> <a:redcheckshield:1226863490493579306> **10th Place 2 Points**

> <a:redcheckshield:1226863490493579306> **11th to 16 1 Point**

> <a:redcheckshield:1226863490493579306> **Kill 1 Point**
`)
.setAuthor({ name: Interaction.guild.name, iconURL: Interaction.guild.iconURL()  })
.setThumbnail(Interaction.guild.iconURL())
       
  
        
 Interaction.channel.send({ content: `<a:emoji_23:1108301591393611796>  𝗠𝗲𝗻𝘁𝗶𝗼𝗻 : @everyone`, embeds: [RulesEmbed] })

  Interaction.reply({content: `Done`, ephemeral: true})
  }
};
 

module.exports = scrimpoin;