const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
          name: "tdm-fb",
        description: `تقدر تنزيل و بكدا يكون الاسكريم خلصت بي طريقه حلوه`,
        aliases: [],

/**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */

     run: async (client, Message, args) => {
             setTimeout(() => Message.delete(), 1000);    
             if(!Message.member.permissions.  has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**");
  let met = args[0];
    if (!met) return  Message.channel.send(`> <a:958879793087127592:1226882734119714816> __اعمل منشن الي انشانل الفيدباك__
`);
       
          
      Message.channel.send(`**
> <a:emoji_23:1108301591393611796>・وبكده تكون سكريم المستودع بتاعتنا خلصت عاش لكل الأساطير  
>      
> <a:977003084054151198:1226882217544781885>・ياريت لو استمتعت معانا فى سكريم المستودع متنساش فيدباك __${met}__ لدعمنا 

<a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915>

> <a:977003084054151198:1226882217544781885>・I hope if you enjoyed with us in Tdm Scrim don't forget Vedback for our __${met}__ support 
> 
> <a:emoji_23:1108301591393611796>・And this way our Tdm Scrim is over long live all the legends **`)

 
  }
};