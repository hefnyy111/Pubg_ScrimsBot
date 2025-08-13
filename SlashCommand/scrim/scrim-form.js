const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimform = {
    name:"scrim-form",
    description:"To Send Scrim Form",


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


    Interaction.channel.send(`> <a:emoji_23:1108301591393611796> | __𝐇𝐨𝐰 𝐓𝐨 𝐑𝐞𝐠𝐬𝐭𝐚𝐫 𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐒𝐜𝐫𝐢𝐦__

> <a:977003084054151198:1226882217544781885> | **𝗧𝗡** : \`𝗧𝗲𝗮𝗺 𝗡𝗮𝗺𝗲\`
> 
> <a:977003084054151198:1226882217544781885> | **𝗧𝗟** :  \`𝗧𝗲𝗮𝗺 𝗟𝗲𝗮𝗱𝗲𝗿\`
> 
> <a:977003084054151198:1226882217544781885> | **𝗟𝗼𝗴𝗼 𝗶𝗳 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲**
> 
|| @here||
`)

      Interaction.reply({content: `Done`, ephemeral: true})
  }
};
 

module.exports = scrimform;