const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
        name: "tdm-4r",
        description: `تقدر تنزيل اول روم نزلت عن طريق عمل منشن للرول فقط`,
        aliases: [],

        /**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */
     run: async (client, Message, args) => {
             setTimeout(() => Message.delete(), 1000);    
             if(!Message.member.permissions.has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**");
  let met = args[0];
    if (!met) return  Message.channel.send(`>>> <a:958879793087127592:1226882734119714816> __اعمل منشن للرول__
`);
       
          Message.channel.send(`**<a:emoji_23:1108301591393611796> ||${met}|| <a:emoji_23:1108301591393611796>
          
> <a:emoji_23:1108301591393611796>・تم تنزيل رابع روم مستودع الرجاء دخول سريع 

> <a:emoji_23:1108301591393611796>・𝗧𝗵𝗲 𝗙𝗼𝘂𝗿 𝗗𝗲𝗽𝗼𝘁 𝗥𝗢𝗢𝗠 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱, 𝗽𝗹𝗲𝗮𝘀𝗲 𝗹𝗼𝗴 𝗶𝗻 𝗾𝘂𝗶𝗰𝗸𝗹𝘆

<a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915>**`)

       
   
  }
};