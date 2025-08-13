const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')


const scrim = {
    name:"scrim-reg",
    description:"To Send Scrim Reg",
  
 options: [{
      name : "scrim-time",
      description: "Enter To Scrim Time",
      type: 3,
      required: true
    }],

    run: async (client, Interaction, args) => {
 if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;
     
   const time = Interaction.options.getString('scrim-time')
    if(!time) return;
      
       
const embed = new MessageEmbed()
.setColor('BLACK')
   .setDescription(`__ __`)
        
  Interaction.channel.send({content: `**> <a:977003084054151198:1226882217544781885> | Registration Has Been Opened For Scrim ${time} 
> 
> <a:977003084054151198:1226882217544781885> | I Hope You Commitment Registration Form Breaking the laws because this leads to Black List

> <a:977003084054151198:1226882217544781885> | التسجيل فتح لاسكريم ${time} 
> 
> <a:977003084054151198:1226882217544781885> | نحن نتمني الاتزام ب فورم التسجيل لان عند اختراق القوانين سوف تحصل علي بلاك ليست

Mention : @everyone**`, embeds: [embed] })

    Interaction.reply({content: 'Done', ephemeral: true})
 
    }
}
module.exports = scrim;