const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const Scrimsan = {
    name:"scrim-san",
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
> | 𝗥𝗼𝗼𝗺 :

> | 𝗜𝗗 : **${Scrimid}**

> | 𝗣𝗮𝘀𝘀 : **${Scrimpass}**

> | 𝗦𝘁𝗮𝗿𝘁 : **${Scrimstart}**

`)
      .setAuthor(`${Interaction.user.username}`, Interaction.user.displayAvatarURL({ dynamic: true })) 
   
       
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
        
    await Interaction.channel.send({ content: `**<a:emoji_23:1108301591393611796> | 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 <a:m_444:1108301235657904138> : ${Mention}**`, embeds: [RulesEmbed] })

    Interaction.reply({content: `> <a:805076067030269992:1085696622601715784> __Done__`, ephemeral: true})
}
};  

module.exports = Scrimsan;