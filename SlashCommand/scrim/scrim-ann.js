const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const Scriman = {
    name:"scrim-ann",
    description:"To Send Announment",
    options: [{
      name : "scrim-time",
      description: "Enter To Scrim Time",
      type: 3,
      required: true
    } , {
      name : "scrim-reg",
      description: "Enter To Scrim Reg",
      type: 3,
      required: true
    }],


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


const ScrimTime = Interaction.options.getString('scrim-time')
if(!ScrimTime) return;

const Scrimreg = Interaction.options.getString('scrim-reg')
if(!Scrimreg) return;

    Interaction.channel.send(`**
SERVER NAME : ${Interaction.guild.name}

𝗧𝗜𝗠𝗘 : ${ScrimTime}

𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡 : ${Scrimreg}

𝗦𝗖𝗥𝗜𝗠 𝗧𝗬𝗣𝗘 : MIXED

𝗟𝗜𝗡𝗞 : ${Interaction.guild.vanityURLCode || (await Interaction.channel.createInvite({ temporary: true, maxAge: 500000 })).url}

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

اسم السيرفر : ${Interaction.guild.name}

معاد السكريم : ${ScrimTime}

التسجيل : ${Scrimreg}

نوع السكريم : MIXED

لينك : <${Interaction.guild.vanityURLCode || (await Interaction.channel.createInvite({ temporary: true, maxAge: 500000 })).url}>

||@everyone|| **`)


Interaction.reply({content: `Done`, ephemeral: true})
}
};  

module.exports = Scriman;