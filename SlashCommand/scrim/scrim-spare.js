const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimmmspare = {
    name:"scrim-spare",
    description:"To Send Scrim Spare",


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;

    Interaction.channel.send(`**
> @everyone
    
> <a:977003084054151198:1226882217544781885> تم فتح التسجيل الاحتياطي الرجاء الالتزام بالفورم المحددة

> <a:977003084054151198:1226882217544781885> 𝗥𝗲𝘀𝗲𝗿𝘃𝗲 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗼𝗽𝗲𝗻𝗲𝗱, 𝗽𝗹𝗲𝗮𝘀𝗲 𝗮𝗱𝗵𝗲𝗿𝗲 𝘁𝗼 𝘁𝗵𝗲 𝗳𝗼𝗿𝗺 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱**`);

    


      Interaction.reply({content: `Done`, ephemeral: true})
  }
};
 

module.exports = scrimmmspare;