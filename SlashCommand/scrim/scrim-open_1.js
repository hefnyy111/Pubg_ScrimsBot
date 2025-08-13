const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimopen = {
    name:"scrim-open",
    description:"To Send Scrim Rules",
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


     Interaction.channel.send(`**
𝗠𝗲𝗻𝘁𝗶𝗼𝗻 : @everyone
    
> <a:977003084054151198:1226882217544781885> | ${time} سيتم فتح التسجيل بعد

> <a:977003084054151198:1226882217544781885> | Registration Will Open Soon ${time}

`)
     Interaction.reply({content: `Done`, ephemeral: true})
      
  }
};
 

module.exports = scrimopen;