const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrim2r = {
    name:"scrim-s2r",
    description:"To Send Scrim S2r",
 options: [{
      name : "mention",
      description: "Enter To Mention Role",
      type: 3,
      required: true
    }],

    run: async (client, Interaction, args) => {
      if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;
   const mention = Interaction.options.getString('mention')
    if(!mention) return;

    Interaction.channel.send(`
> 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 : ${mention}

> <a:977003084054151198:1226882217544781885> | تم تنزيل ثانى روم الرجاء دخول سريع 

> <a:977003084054151198:1226882217544781885> | 𝗧𝗵𝗲 Two 𝗥𝗢𝗢𝗠 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱, 𝗽𝗹𝗲𝗮𝘀𝗲 𝗹𝗼𝗴 𝗶𝗻 𝗾𝘂𝗶𝗰𝗸𝗹𝘆`);


      Interaction.reply({content: `Done`, ephemeral: true})
  }
};
 

module.exports = scrim2r;