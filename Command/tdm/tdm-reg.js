const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
        name: "tdm-reg",
        description: `تقدر تنزل طريقه التسجيل بي شكل حلو`,
        aliases: ["tg"],

/**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */

     run: async (client, Message, args) => {
             setTimeout(() => Message.delete(), 1000);   
             if(!Message.member.permissions.has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**");

        
   Message.channel.send(`**<a:emoji_23:1108301591393611796> __الرجاء الالتزام بالفورم المحددة__ <a:emoji_23:1108301591393611796>

> <a:emoji_23:1108301591393611796>・𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${Message.guild.name}

> <a:emoji_23:1108301591393611796>・𝐓𝐞𝐚𝐦 𝐋𝐞𝐚𝐝𝐞𝐫 :

> <a:emoji_23:1108301591393611796>・P1 :

> <a:emoji_23:1108301591393611796>・P2 :

> <a:emoji_23:1108301591393611796>・LOGO :

<a:977003084054151198:1226882217544781885> 𝐇𝐨𝐰 𝐓𝐨 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫

<a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915>
**`)
       

  }
};