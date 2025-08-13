const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
  name: "tdm-left",
  description: `تقدر تنزيل كام فاضل علي قفل التسجيل عن طريقة كتابة الوقت فقط`,
  aliases: ["l"],

/**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */

  run: async (client, Message, args) => {
    setTimeout(() => Message.delete(), 1000);
    if (!Message.member.permissions.has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**");
    let time = args[0];
    if (!time) return Message.channel.send(`> <a:958879793087127592:1226882734119714816> __يرجى كتابة الوقت المتبقى باللغة الأنجليزية او باللغة العربية__
`);


    Message.channel.send(`**<a:emoji_23:1108301591393611796> ||@everyone|| <a:emoji_23:1108301591393611796>
    
> <a:emoji_23:1108301591393611796>・ Registration Will Close For Warehouse After ${time}
 
> <a:emoji_23:1108301591393611796>・ ${time} سيتم إغلاق التسجيل للمستودع بعد 

<a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915>**`)
}
};