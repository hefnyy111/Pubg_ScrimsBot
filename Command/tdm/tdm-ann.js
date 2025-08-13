const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
        name: "tdm-ann",
        description: `تقدر تنزيل اعلان للاسكريم عن طريق كتابة معاد الاسكريم فقط`,
        aliases: ["a"],

/**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */

     run: async (client, Message, args) => {
             setTimeout(() => Message.delete(), 1000);    
             if(!Message.member.permissions.has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**");
 
    let time = args[0]
    let time2 = args[1]
    let type = args[2]
    if (!time) return  Message.channel.send(`**> <a:958879793087127592:1226882734119714816>  __يجب عليك كتابة معاد السكريم | نوع السكريم__**`);
       
      Message.channel.send({content:`**
SERVER NAME : __${Message.guild.name}__

𝗧𝗜𝗠𝗘 : __${time}__

𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡 : __OPEN__

𝗦𝗖𝗥𝗜𝗠 𝗧𝗬𝗣𝗘 : __${type}__

𝗟𝗜𝗡𝗞 : ${Message.guild.vanityURLCode || (await Message.channel.createInvite({ temporary: true, maxAge: 500000 })).url}

<a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915>
<a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915><a:awhiteline:1228287315567181915>

اسم السيرفر : __${Message.guild.name}__

معاد السكريم : __${time}__

__التسجيل : __مفتوح

نوع السكريم : __${type}__

لينك : <${Message.guild.vanityURLCode || (await Message.channel.createInvite({ temporary: true, maxAge: 500000 })).url}>

<a:emoji_23:1108301591393611796> ||@everyone|| <a:emoji_23:1108301591393611796>**`})

  }
};  