const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
module.exports = {
        name: "tdm-8list",
        description: `تقدر تنزل ليسته 4 تيمات عن طريق كتابة اسم التيم و سيب مسافه لو اسم التيم في مسافه استخدم-بين اسم التيم عشان.اليست تظبط معاك`,
        aliases: [],
/**
   * @param { import('discord.js').Client } Client
   * @param { import('discord.js').Message } Message
   */

     run: async (client, Message, args) => {
               
             if(!Message.member.permissions.has("ADMINISTRATOR")) return Message.reply("<a:958879793087127592:1226882734119714816> **__You don't have permission to use this command__**")
    let name0  = args[0]
    let name1 = args[1]
    let name2 = args[2]
    let name3 = args[3]
    let name4 = args[4]
    let name5 = args[5]
    let name6 = args[6]
    let name7 = args[7] 
    let name8 = args[8] 
    let name9 = args[9] 
    let name10 = args[10] 
    let name11 = args[11]
    let name12 = args[12]
    let name13 = args[13]
    let name14 = args[14]
    let name15 = args[15] 
    if (!name0) return  Message.channel.send('<a:958879793087127592:1226882734119714816> **يرجى كتابة التيم الاول وال ضده**');
    if (!name1) team1 = '𝐄𝐌𝐏𝐓𝐘'
    if (!name2) team2 = '𝐄𝐌𝐏𝐓𝐘'
    if (!name3) team3 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name4) team4 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name5) team5 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name6) team6 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name7) team7 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name8) team8 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name9) team9 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name10) team10 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name11) team11 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name12) team12 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name13) team13 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name14) team14 = '𝐄𝐌𝐏𝐓𝐘'
    if(!name15) team15 = '𝐄𝐌𝐏𝐓𝐘'
  

            
        //
        const RulesEmbed = new MessageEmbed()
        
        .setColor('#1200ff')            

      .setAuthor(`${Message.author.username}`, Message.author.displayAvatarURL({ dynamic: true })) 
      .setDescription(`_ _`)
      .setImage(`https://media.discordapp.net/attachments/1036059322217676920/1036065044682768512/Picsart_22-10-30_00-11-12-739.jpg`)      
       
         
        
 Message.channel.send({ content: `**
> <a:emoji_23:1108301591393611796>・Game 1 : ${name0} <a:1M_VS:1228288598197932084> ${name1}

> <a:emoji_23:1108301591393611796>・Game 2 : ${name2} <a:1M_VS:1228288598197932084> ${name3}

> <a:emoji_23:1108301591393611796>・Game 3 : ${name4} <a:1M_VS:1228288598197932084> ${name5}

> <a:emoji_23:1108301591393611796>・Game 4 : ${name6} <a:1M_VS:1228288598197932084> ${name7}
    
> <a:emoji_23:1108301591393611796>・Game 4 : ${name8} <a:1M_VS:1228288598197932084> ${name9}

> <a:emoji_23:1108301591393611796>・Game 4 : ${name10} <a:1M_VS:1228288598197932084> ${name11}

> <a:emoji_23:1108301591393611796>・Game 4 : ${name12} <a:1M_VS:1228288598197932084> ${name13}

> <a:emoji_23:1108301591393611796>・Game 4 : ${name14} <a:1M_VS:1228288598197932084> ${name15}** `, embeds: [RulesEmbed] })
  }
};