const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const help = {
    name:"help",
    description:"To Show Help",


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;
const button = new MessageActionRow()
.addComponents(new MessageButton() .setLabel('SCRIMS').setStyle('SECONDARY').setCustomId('scrims'),
new MessageButton() .setLabel('TDM').setStyle('SECONDARY').setCustomId('tdm'))

Interaction.reply({components: [button]})

  }
};
 

module.exports = help;