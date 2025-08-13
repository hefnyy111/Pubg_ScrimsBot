const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const help = {
    name:"help",
    description:"To Show Help",


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;

const hefny = new MessageEmbed()
      .setColor('BLACK')
        .setAuthor(`${Interaction.user.username}`, Interaction.user.displayAvatarURL({ dynamic: true })) 

    .setDescription(`**
> <a:redcheckshield:1226863490493579306> /scrim-ann

لتنزيل اعلان اسكريم الكلاسيك عن طريق كتابة معاد الاسكريم ثم كتابة معاد فتح التسجيل

> <a:redcheckshield:1226863490493579306> /scrim-reg

فتح التسجيل لاسكريم الكلاسيك عن طريق كتابة معاد الاسكريم

> <a:redcheckshield:1226863490493579306> /scrim-rules

تقدر تنزل قوانين السكريم

> <a:redcheckshield:1226863490493579306> /scrim-poing

تقدر تنزل نقاط السكريم

> <a:redcheckshield:1226863490493579306> /scrim-left

لكتابة الوقت المتبقي لققل التسجيل

> <a:redcheckshield:1226863490493579306> /scrim-form

تقدر تنزل النموذج الخاص باسكريم الكلاسيك

> <a:redcheckshield:1226863490493579306> /scrim-list

تقدر تنزل اليست عن طريق كتابة اسماء التيمات

> <a:redcheckshield:1226863490493579306> /add-roles

تقدر توزع الرولات على الجميع

> <a:redcheckshield:1226863490493579306> /scrim-test

تقدر تنزل تيست لرول الايدي عن طريق منشن لرول الايدي

> <a:redcheckshield:1226863490493579306> /scrim-spare

تقدر تفتح تسجيل احتياطي الاسكريم عن طريق كتابة معاد الاسكريم

> <a:redcheckshield:1226863490493579306> /scrim-era

تقدر تنزل خريطة ارانغل عن طريق كتابة ايدى الروم + ووقت الروم + وقت الستارت والمنشن

> <a:redcheckshield:1226863490493579306> /scrim-mir

تقدر تنزل خريطة ميرامار عن طريق كتابة ايدى الروم + ووقت الروم + وقت الستارت والمنشن

> <a:redcheckshield:1226863490493579306> /scrim-san

تقدر تنزل خريطة سانهوك عن طريق كتابة ايدى الروم + ووقت الروم + وقت الستارت والمنشن

> <a:redcheckshield:1226863490493579306> /scrim-vik

تقدر تنزل خريطة فايكندي عن طريق كتابة ايدى الروم + ووقت الروم + وقت الستارت والمنشن

> <a:redcheckshield:1226863490493579306> /scrim-s1r

تقدر تنزل اول روم نزلت بطريقة رائعة

> <a:redcheckshield:1226863490493579306> /scrim-s2r

تقدر تنزل ثانى روم نزلت بطريقة رائعة

> <a:redcheckshield:1226863490493579306> /scrim-s3r

تقدر تنزل ثالث روم نزلت بطريقة رائعة

> <a:redcheckshield:1226863490493579306> line 

تقدر تبعت خط بايمبد
**`)

.setImage(`https://cdn.discordapp.com/attachments/1227398286676201494/1227422526439686224/20231001_182035.gif?ex=6628594e&is=6615e44e&hm=1063124c13cf7b7f0393040875e7522a09dd403be98186152b3aa1e8bf78e521&`)

  Interaction.reply({embeds: [hefny]})
  }
};
 

module.exports = help;