const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimleft = {
    name:"scrim-left",
    description:"To Send Scrim Left",
 options: [{
      name : "scrim-time",
      description: "Enter To Scrim Time",
      type: 3,
      required: true
    }],

    run: async (client, Interaction, args) => {
   const time = Interaction.options.getString('scrim-time')
    if(!time) return;
      
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


    Interaction.channel.send(`**> <a:977003084054151198:1226882217544781885> | Registration Will Close After ${time}
 
> <a:977003084054151198:1226882217544781885> | ${time} سيتم إغلاق التسجيل بعد 

> <a:977003084054151198:1226882217544781885> | Mention <a:shmT:1102631561314181120> : @everyone

`)

      Interaction.reply({content: `Done`, ephemeral: true})
  }
};
 

module.exports = scrimleft;