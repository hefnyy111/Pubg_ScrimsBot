const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
        name: "tdm-rules",
        description: `تقدر تنزل قواعد الاسكريم`,
        aliases: ["tr"],
/**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */


     run: async (client, Message, args) => {
             setTimeout(() => Message.delete(), 1000);    
             if(!Message.member.permissions.has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**")
 

        
        //
        const RulesEmbed = new MessageEmbed()

        .setColor('#1200ff')  
       
          .setTitle('<a:emoji_23:1108301591393611796> __**Tdm Rules**__ <a:emoji_23:1108301591393611796>')
        .setDescription(`**\`\`\` ENGLISH \`\`\`

> <a:redcheckshield:1226863490493579306> It is forbidden to use boxes and pans

> <a:redcheckshield:1226863490493579306> No Compress In The Base For More Than 10 Seconds

> <a:redcheckshield:1226863490493579306> No piste

> <a:redcheckshield:1226863490493579306> No slipping - no delay from the room for more than 5 minutes

> <a:redcheckshield:1226863490493579306> It is forbidden to open the public mike or the alliance

> <a:redcheckshield:1226863490493579306> No use glitch

> <a:redcheckshield:1226863490493579306> Nids allowed

> <a:redcheckshield:1226863490493579306> Shield and helmet allowed Level 3

> <a:redcheckshield:1226863490493579306> Pistol and M4 allowed only

> <a:redcheckshield:1226863490493579306> Photography required from all players

> <a:redcheckshield:1226863490493579306> Use M4 and pistol only     
\`\`\` العربية \`\`\`
> <a:redcheckshield:1226863490493579306> ممنوع استخدام البوكسات والطاوات

> <a:redcheckshield:1226863490493579306> لأكثر من 10 ثوانى BASEممنوع الكمبرة فى ال 

> <a:redcheckshield:1226863490493579306> ممنوع الزحلقة

> <a:redcheckshield:1226863490493579306> ممنوع التأخير عن الروم اكتر من 5 دقايق

> <a:redcheckshield:1226863490493579306> ممنوع فتح مايك العام او التحالف

> <a:redcheckshield:1226863490493579306> ممنوع استخدام الجليتش

> <a:redcheckshield:1226863490493579306> مسموح استخدام النيدات

> <a:redcheckshield:1226863490493579306> مسموح استخدام درع و خوذة لفل 3

> <a:redcheckshield:1226863490493579306> مسموح استخدام المسدس والامفور فقط

> <a:redcheckshield:1226863490493579306> مطلوب التصوير من جميع اللاعبين

> <a:redcheckshield:1226863490493579306> استخدام امفور و مسدس فقط وممنوع استخدام الامفور الثلجي لفل 5**`)
       
  .setImage(`https://cdn.discordapp.com/attachments/1227398286676201494/1227614404800024676/20231001_182035.gif?ex=66290c02&is=66169702&hm=46380798344e2c0a3af01215a8aa409db0603846f47ea4ffd5ced9c7120ff54e&`)

        
    await Message.channel.send({ embeds: [RulesEmbed] })
  }
};