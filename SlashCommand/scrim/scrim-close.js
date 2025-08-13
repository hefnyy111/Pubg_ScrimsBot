const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimclose = {
    name:"scrim-close",
    description:"To Send Scrim Rules",


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


    Interaction.channel.send({ content: `**@everyone
    > <a:977003084054151198:1226882217544781885> | The registration for the scrim has been closed 
    > 
    > <a:977003084054151198:1226882217544781885> | Minutes and the list will be downloaded 
    > 
    > <a:977003084054151198:1226882217544781885> | Please Adhere to the specified places 
       
          
    > <a:977003084054151198:1226882217544781885> | تم قفل التسجيل للاسكريم 
    > 
    > <a:977003084054151198:1226882217544781885> | دقايق و سيتم تنزيل الليست 
    > 
    > <a:977003084054151198:1226882217544781885> | الرجاء الالتزام بي الاماكن المحدده **`});

      Interaction.reply({content: `Done`, ephemeral: true})
  }
};
 

module.exports = scrimclose;