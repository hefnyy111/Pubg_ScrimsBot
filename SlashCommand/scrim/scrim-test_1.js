const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimtesst = {
    name:"scrim-test",
    description:"To Send Scrim Test",


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


     await Interaction.channel.send(`** __𝗔𝗧𝗧𝗘𝗡𝗧𝗜𝗢𝗡 𝗛𝗘𝗥𝗘__ 

> <a:977003084054151198:1226882217544781885> 𝗬𝗼𝘂 𝗠𝘂𝘀𝘁 𝗣𝗿𝗲𝘀𝘀 𝗧𝗵𝗶𝘀 𝗦𝗶𝗴𝗻 [ <a:megaright:1130346781612449902> ] 𝘁𝗼 𝗘𝗻𝘀𝘂𝗿𝗲 𝘁𝗵𝗮𝘁 𝗧𝗵𝗲 𝗥𝗮𝗻𝗸 𝗶𝘀 𝗪𝗶𝘁𝗵 𝗬𝗼𝘂 

> <a:977003084054151198:1226882217544781885> يجب عليك الضغط علي هذه العلامه [ <a:megaright:1130346781612449902> ] للتأكد من ان الرتبه معك 

||@here||
**`).then((msg) => {
        msg.react('<a:megaright:1130346781612449902>');
     

    


      Interaction.reply({content: `Done`, ephemeral: true})
        });
  }
};
 

module.exports = scrimtesst;