const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const Scriera = {
    name:"scrim-era",
    description:"To Send Map Erangel",
    options: [{
      name : "scrim-id",
      description: "Enter To Scrim id",
      type: 3,
      required: true
    } , {
      name : "scrim-password",
      description: "Enter To Scrim password",
      type: 3,
      required: true
    },  {
    name : "scrim-start",
    description: "Enter To Scrim start",
    type: 3,
    required: true
  } ,  {
    name : "mention",
    description: "Enter To Scrim Mention",
    type: 3,
    required: true
  }
],


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


    const Scrimid = Interaction.options.getString('scrim-id')
    if(!Scrimid) return;
    
    const Scrimpass = Interaction.options.getString('scrim-password')
    if(!Scrimpass) return;
    const Scrimstart = Interaction.options.getString('scrim-start')
    if(!Scrimstart) return;
    const Mention = Interaction.options.getString('mention')
    if(!Mention) return;
        //
        const RulesEmbed = new MessageEmbed()
        
                .setColor('BLACK')              
        .setDescription(`
> <a:977003084054151198:1226882217544781885> | 𝗜𝗗 : **${Scrimid}**

> <a:977003084054151198:1226882217544781885> | 𝗣𝗮𝘀𝘀 : **${Scrimpass}**

> <a:977003084054151198:1226882217544781885> | 𝗦𝘁𝗮𝗿𝘁 : **${Scrimstart}**

`)
      .setAuthor(`${Interaction.user.username}`, Interaction.user.displayAvatarURL({ dynamic: true })) 
   
      .setImage(`https://media.discordapp.net/attachments/988044735040065557/1036334862354882681/wp7255871-erangel-pubg-wallpapers.jpg`)      
       
         
        
    await Interaction.channel.send({ content: `**<a:emoji_23:1108301591393611796> | 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 : ${Mention}**`, embeds: [RulesEmbed] })

    Interaction.reply({content: `> __Done__`, ephemeral: true})
}
};  

module.exports = Scriera;