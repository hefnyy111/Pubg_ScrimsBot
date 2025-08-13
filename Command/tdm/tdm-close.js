const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
        name: "tdm-close",
        description: `تقدر تنزل تم قفل التسجيل للاسكريم بطريقة حلوه`,
        aliases: ["tc"],

/**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */

     run: async (client, Message, args) => {
             setTimeout(() => Message.delete(), 1000);    
             if(!Message.member.permissions.has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**")

       
    Message.channel.send({ content: `**
> <a:958879793087127592:1226882734119714816>・Minutes and list Go Down You must read the laws well so that you do not face you penalties <a:emoji_23:1108301591393611796>

<a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915>

<a:emoji_23:1108301591393611796>・دقائق واليست تنزل يجب قراءة القوانين جيدا حتي لا تقع عليك العقوبات <a:958879793087127592:1226882734119714816>**`});

       
  }
};