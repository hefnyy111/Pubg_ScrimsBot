const { Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js')
/**
 * @param { import('discord.js').Client } Client 
 * @param { import('discord.js').ButtonInteraction } Interaction 
 */

const db = require('pro.db')
const menu_apply = async (Client, Interaction, channel) => {
    switch (Interaction.customId) {
        case 'mention': {
            Interaction.channel.send({ content: `> <a:977003084054151198:1226882217544781885> <@&1225127482043273328> | <@&986670563252658242>` })
            Interaction.reply({ content: `**Done**`, ephemeral: true })
        }
            break;
        case 'Acceptance': {
            await Interaction.deferUpdate()
            const embed_ac = new MessageEmbed()
                .setColor('RED')
                .setFooter(Interaction.user.username, Interaction.user.displayAvatarURL())
                .setDescription(`**
> <a:redcheckshield:1226863490493579306> الاسم : \`\`\` ${db.get(`Name_${Interaction.user.id}`).names} \`\`\`

> <a:redcheckshield:1226863490493579306> العمر : \`\`\` ${db.get(`age_${Interaction.user.id}`).ages} \`\`\`

> <a:redcheckshield:1226863490493579306> فريم : \`\`\` ${db.get(`fps_${Interaction.user.id}`).fps} \`\`\`

> <a:redcheckshield:1226863490493579306> كارت ايدي : \`\`\`  ${db.get(`Card_${Interaction.user.id}`).cards} \`\`\`

> <a:redcheckshield:1226863490493579306> نوع الجهاز ومواصفاته : \`\`\` ${db.get(`type_${Interaction.user.id}`).types} \`\`\`**`)

                .setImage(`https://cdn.discordapp.com/attachments/1208174078205108306/1220552831077978142/20231001_182035-3.gif?ex=6621d067&is=660f5b67&hm=c1bfb8b7c3646641a186df8cd01fc15e162f8f5a3d0572fa56df2be80602e8e6&`)

            const butt_ac = new MessageActionRow()
                .addComponents(new MessageButton().setStyle(`SECONDARY`).setLabel(`منشن للأدارة`).setEmoji(`<a:6417redcrown:1226864238828585041>`).setCustomId(`mention`),
                    new MessageButton().setLabel(`قبول`).setStyle('SUCCESS').setCustomId(`Acceptance`).setDisabled(true),
                    new MessageButton().setLabel(`رفض`).setStyle('DANGER').setCustomId('refused').setDisabled(true))


            Interaction.editReply({ embeds: [embed_ac], components: [butt_ac] })
            Interaction.channel.send({
                content: `**> <a:977003084054151198:1226882217544781885> مبروك تم قبولك في الكلان `
            })
            db.delete(`Name_${Interaction.user.id}`)
            db.delete(`age_${Interaction.user.id}`)
            db.delete(`fps_${Interaction.user.id}`)
            db.delete(`Card_${Interaction.user.id}`)
            db.delete(`type_${Interaction.user.id}`)
        }
            break;
        case 'refused': {
            await Interaction.deferUpdate()
            const embed_re = new MessageEmbed()
                .setColor('RED')
                .setFooter(Interaction.user.username, Interaction.user.displayAvatarURL())
                .setDescription(`**
> <a:redcheckshield:1226863490493579306> الاسم : \`\`\` ${db.get(`Name_${Interaction.user.id}`).names} \`\`\`

> <a:redcheckshield:1226863490493579306> العمر : \`\`\` ${db.get(`age_${Interaction.user.id}`).ages} \`\`\`

> <a:redcheckshield:1226863490493579306> فريم : \`\`\` ${db.get(`fps_${Interaction.user.id}`).fps} \`\`\`

> <a:redcheckshield:1226863490493579306> كارت ايدي : \`\`\`  ${db.get(`Card_${Interaction.user.id}`).cards} \`\`\`

> <a:redcheckshield:1226863490493579306> نوع الجهاز ومواصفاته : \`\`\` ${db.get(`type_${Interaction.user.id}`).types} \`\`\`**`)

                .setImage(`https://cdn.discordapp.com/attachments/1208174078205108306/1220552831077978142/20231001_182035-3.gif?ex=6621d067&is=660f5b67&hm=c1bfb8b7c3646641a186df8cd01fc15e162f8f5a3d0572fa56df2be80602e8e6&`)

            const butt_re = new MessageActionRow()
                .addComponents(new MessageButton().setStyle(`SECONDARY`).setLabel(`منشن للأدارة`).setEmoji(`<a:6417redcrown:1226864238828585041>`).setCustomId(`mention`),
                    new MessageButton().setLabel(`قبول`).setStyle('SUCCESS').setCustomId(`Acceptance`).setDisabled(true),
                    new MessageButton().setLabel(`رفض`).setStyle('DANGER').setCustomId('refused').setDisabled(true))


            Interaction.editReply({ embeds: [embed_re], components: [butt_re] })
            Interaction.channel.send({

                content: `**> <a:958879793087127592:1226882734119714816> تم رفضك في التفديم`
            })
            db.delete(`Name_${Interaction.user.id}`)
            db.delete(`age_${Interaction.user.id}`)
            db.delete(`fps_${Interaction.user.id}`)
            db.delete(`Card_${Interaction.user.id}`)
            db.delete(`type_${Interaction.user.id}`)

        }
        break;
        ////////////////////////////////////////
        case 'Acceptance1': {
            const embed_a1 = new MessageEmbed()
                .setColor('RED')
                .setFooter(Interaction.user.username, Interaction.user.displayAvatarURL())
                .setDescription(`**
            > <a:redcheckshield:1226863490493579306> Name : \`\`\` ${db.get(`Name_${Interaction.user.id}`).names} \`\`\`
            
            > <a:redcheckshield:1226863490493579306> Age : \`\`\` ${db.get(`age_${Interaction.user.id}`).ages} \`\`\`
            
            > <a:redcheckshield:1226863490493579306> Fps : \`\`\` ${db.get(`fps_${Interaction.user.id}`).fps} \`\`\`
            
            > <a:redcheckshield:1226863490493579306> Id card : \`\`\`  ${db.get(`Card_${Interaction.user.id}`).cards} \`\`\`
            
            > <a:redcheckshield:1226863490493579306> Device type and specifications : \`\`\` ${db.get(`type_${Interaction.user.id}`).types} \`\`\`**`)

                .setImage(`https://cdn.discordapp.com/attachments/1208174078205108306/1220552831077978142/20231001_182035-3.gif?ex=6621d067&is=660f5b67&hm=c1bfb8b7c3646641a186df8cd01fc15e162f8f5a3d0572fa56df2be80602e8e6&`)

            const butt_a1 = new MessageActionRow()
                .addComponents(new MessageButton().setStyle(`SECONDARY`).setLabel(`Mention management`).setEmoji(`<a:6417redcrown:1226864238828585041>`).setCustomId(`mention`),
                    new MessageButton().setLabel(`Acceptance1`).setStyle('SUCCESS').setCustomId(`Acceptance`).setDisabled(true),
                    new MessageButton().setLabel(`refuse1`).setStyle('DANGER').setCustomId('refused').setDisabled(true))
            await Interaction.deferUpdate()
            Interaction.editReply({ embeds: [embed_a1], components: [butt_a1] })

            Interaction.channel.send({
                content: `**> <a:977003084054151198:1226882217544781885> Congratulations, you have been accepted into the clan**`
            })
            db.delete(`Name_${Interaction.user.id}`)
            db.delete(`age_${Interaction.user.id}`)
            db.delete(`fps_${Interaction.user.id}`)
            db.delete(`Card_${Interaction.user.id}`)
            db.delete(`type_${Interaction.user.id}`)
        }
        break;
        case 'refuse1': {
            const embed_a1 = new MessageEmbed()
            .setColor('RED')
            .setFooter(Interaction.user.username, Interaction.user.displayAvatarURL())
            .setDescription(`**
        > <a:redcheckshield:1226863490493579306> Name : \`\`\` ${db.get(`Name_${Interaction.user.id}`).names} \`\`\`
        
        > <a:redcheckshield:1226863490493579306> Age : \`\`\` ${db.get(`age_${Interaction.user.id}`).ages} \`\`\`
        
        > <a:redcheckshield:1226863490493579306> Fps : \`\`\` ${db.get(`fps_${Interaction.user.id}`).fps} \`\`\`
        
        > <a:redcheckshield:1226863490493579306> Id card : \`\`\`  ${db.get(`Card_${Interaction.user.id}`).cards} \`\`\`
        
        > <a:redcheckshield:1226863490493579306> Device type and specifications : \`\`\` ${db.get(`type_${Interaction.user.id}`).types} \`\`\`**`)

            .setImage(`https://cdn.discordapp.com/attachments/1208174078205108306/1220552831077978142/20231001_182035-3.gif?ex=6621d067&is=660f5b67&hm=c1bfb8b7c3646641a186df8cd01fc15e162f8f5a3d0572fa56df2be80602e8e6&`)

        const butt_a1 = new MessageActionRow()
            .addComponents(new MessageButton().setStyle(`SECONDARY`).setLabel(`Mention management`).setEmoji(`<a:6417redcrown:1226864238828585041>`).setCustomId(`mention`),
                new MessageButton().setLabel(`Acceptance1`).setStyle('SUCCESS').setCustomId(`Acceptance`).setDisabled(true),
                new MessageButton().setLabel(`refuse1`).setStyle('DANGER').setCustomId('refused').setDisabled(true))
        await Interaction.deferUpdate()
        Interaction.editReply({ embeds: [embed_a1], components: [butt_a1] })

        Interaction.channel.send({
            content: `**> <a:977003084054151198:1226882217544781885> Congratulations, you have been refused into the clan** `
        })
        db.delete(`Name_${Interaction.user.id}`)
        db.delete(`age_${Interaction.user.id}`)
        db.delete(`fps_${Interaction.user.id}`)
        db.delete(`Card_${Interaction.user.id}`)
        db.delete(`type_${Interaction.user.id}`)
        }
        break;

        case 'mention1': {
            Interaction.channel.send({ content: `> <a:977003084054151198:1226882217544781885> <@&1225127482043273328> | <@&986670563252658242>` })
            Interaction.reply({ content: `**Done**`, ephemeral: true })
        }
        break;
        case 'scrims': {
            const hefny = new MessageEmbed()
      .setColor('RED')
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

  Interaction.reply({embeds: [hefny], ephemeral: true})
        }
        break;
        case 'tdm': {
            const td = new MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setAuthor(`By : ${Interaction.user.username}`, Interaction.user.displayAvatarURL({dynamic: true}))
            .setDescription(`**
            > <a:redcheckshield:1226863490493579306>*tdm-ann
            
تقدر تنزل اعلان عن المستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-reg
            
تقدر تنزل التسجيل عن المستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-close
            
لغلق تسجيل اسكريم المستودع
            
            > <a:redcheckshield:1226863490493579306> *tdm-rules
            
تقدر تنزل قوانين المستودع
            
            > <a:redcheckshield:1226863490493579306> *tdm-left
            
لكتابة الوقت المتبقى لقفل المستودع
            
            > <a:redcheckshield:1226863490493579306>*tdm-4lish
            
تقدر تنزل ليست ل 4 تيمات عن طريق كتابة اسم التيم واترك مسافة وال ضدده
            
            > <a:20230501_055136:1110552147235450931> *tdm-6lish
            
تقدر تنزل ليست ل 6 تيمات عن طريق كتابة اسم التيم واترك مسافة وال ضدده
            
            > <a:20230501_055136:1110552147235450931> *tdm-8lish
            
تقدر تنزل ليست ل 8 تيمات عن طريق كتابة اسم التيم واترك مسافة وال ضدده
            
            > <a:redcheckshield:1226863490493579306> *tdm-1r
            
تقدر تنزل تم تنزيل اول سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-2r
            
تقدر تنزل تم تنزيل ثانى سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-3r
            
تقدر تنزل تم تنزيل ثالث سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-4r
            
تقدر تنزل تم تنزيل رابع سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-5r
            
تقدر تنزل تم تنزيل خامس سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-6r
            
تقدر تنزل تم تنزيل سادس سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-7r
            
تقدر تنزل تم تنزيل سابع سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-8r
            
تقدر تنزل تم تنزيل ثامن سكريم مستودع بطريقة حلوة
            
            > <a:redcheckshield:1226863490493579306> *tdm-fb
            
تقدر تعمل تقيم للسكريم عن طريق منشن للتشنل
            **`)
            
            .setImage(`https://cdn.discordapp.com/attachments/1227398286676201494/1227422526439686224/20231001_182035.gif?ex=6628594e&is=6615e44e&hm=1063124c13cf7b7f0393040875e7522a09dd403be98186152b3aa1e8bf78e521&`)
            
            Interaction.reply({embeds: [td], ephemeral: true})
        }
    }
}

module.exports = menu_apply;