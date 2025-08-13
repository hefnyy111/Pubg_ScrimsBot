const { Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js')
const { Modal, showModal, TextInputComponent } = require('discord-modals')
/**
 * @param { import('discord.js').Client } Client 
 * @param { import('discord.js').ButtonInteraction } Interaction 
 */
const db = require('pro.db')

const menu_apply = async (Client, Interaction, channel) => {
    switch (Interaction.values[0]) {
        case 'arabic-app': {
            const modd = new Modal()
                .setCustomId('arab-modal')
                .setTitle(`التقديم علي الكلان`)
                .addComponents(new TextInputComponent().setLabel('الاسم').setStyle('SHORT').setMinLength(2).setCustomId('name'),
                    new TextInputComponent().setLabel('العمر').setStyle('SHORT').setMinLength(1).setCustomId('age'),
                    new TextInputComponent().setLabel('فريم ( 40/60/90 )').setStyle('SHORT').setMinLength('2').setCustomId('fps'),
                    new TextInputComponent().setLabel(`كارت ايدي ( نعم / لا )`).setStyle('SHORT').setMinLength(2).setCustomId(`card`),
                    new TextInputComponent().setLabel(`ونوع الجهاز ومواصفاته`).setStyle('LONG').setMinLength(3).setCustomId('type'))

            showModal(modd, { interaction: Interaction, client: Client })
        }

            Client.on('interactionCreate', async Interaction => {
                if (Interaction.isModalSubmit()) {
                    if (Interaction.customId === 'arab-modal') {
                        const namme = Interaction.fields.getTextInputValue('name')
                        const agee = Interaction.fields.getTextInputValue('age')
                        const fpp = Interaction.fields.getTextInputValue('fps')
                        const cardd = Interaction.fields.getTextInputValue('card')
                        const typee = Interaction.fields.getTextInputValue('type')
                        db.set(`Name_${Interaction.user.id}`, { names: namme })
                        db.set(`age_${Interaction.user.id}`, { ages: agee })
                        db.set(`fps_${Interaction.user.id}`, { fps: fpp })
                        db.set(`Card_${Interaction.user.id}`, { cards: cardd })
                        db.set(`type_${Interaction.user.id}`, { types: typee })

                        db.set(`User_${Interaction.guild.id}`, {
                            Ticketuser: Interaction.user.id
                        })

                        const embed = new MessageEmbed()
                            .setColor('RED')
                            .setFooter(Interaction.user.username, Interaction.user.displayAvatarURL())
                            .setDescription(`**
> <a:redcheckshield:1226863490493579306> الاسم : \`\`\` ${namme} \`\`\`

> <a:redcheckshield:1226863490493579306> العمر : \`\`\` ${agee} \`\`\`

> <a:redcheckshield:1226863490493579306> فريم : \`\`\` ${fpp} \`\`\`

> <a:redcheckshield:1226863490493579306> كارت ايدي : \`\`\`  ${cardd} \`\`\`

> <a:redcheckshield:1226863490493579306> نوع الجهاز ومواصفاته : \`\`\` ${typee} \`\`\`**`)

                            .setImage(`https://cdn.discordapp.com/attachments/1208174078205108306/1220552831077978142/20231001_182035-3.gif?ex=6621d067&is=660f5b67&hm=c1bfb8b7c3646641a186df8cd01fc15e162f8f5a3d0572fa56df2be80602e8e6&`)

                        const butt = new MessageActionRow()
                            .addComponents(new MessageButton().setStyle(`SECONDARY`).setLabel(`منشن للأدارة`).setEmoji(`<a:6417redcrown:1226864238828585041>`).setCustomId(`mention`),
                                new MessageButton().setLabel(`قبول`).setStyle('SUCCESS').setCustomId(`Acceptance`),
                                new MessageButton().setLabel(`رفض`).setStyle('DANGER').setCustomId('refused'))
                        await Interaction.deferUpdate()
                        Interaction.editReply({ embeds: [embed], components: [butt] })
                    }
                }
            })

            break;
        case 'english-app': {
            const modd = new Modal()
                .setCustomId('arab-modal')
                .setTitle(`Apply to clan`)
                .addComponents(new TextInputComponent().setLabel('Name').setStyle('SHORT').setMinLength(2).setCustomId('name'),
                    new TextInputComponent().setLabel('Age').setStyle('SHORT').setMinLength(1).setCustomId('age'),
                    new TextInputComponent().setLabel('FPS ( 40/60/90 )').setStyle('SHORT').setMinLength('2').setCustomId('fps'),
                    new TextInputComponent().setLabel(`Id card ( Yes / No )`).setStyle('SHORT').setMinLength(2).setCustomId(`card`),
                    new TextInputComponent().setLabel(`Device type and specifications`).setStyle('LONG').setMinLength(3).setCustomId('type'))

            showModal(modd, { interaction: Interaction, client: Client })
        }

            Client.on('interactionCreate', async Interaction => {
                if (Interaction.isModalSubmit()) {
                    if (Interaction.customId === 'arab-modal') {
                        const namme = Interaction.fields.getTextInputValue('name')
                        const agee = Interaction.fields.getTextInputValue('age')
                        const fpp = Interaction.fields.getTextInputValue('fps')
                        const cardd = Interaction.fields.getTextInputValue('card')
                        const typee = Interaction.fields.getTextInputValue('type')
                        db.set(`Name_${Interaction.user.id}`, { names: namme })
                        db.set(`age_${Interaction.user.id}`, { ages: agee })
                        db.set(`fps_${Interaction.user.id}`, { fps: fpp })
                        db.set(`Card_${Interaction.user.id}`, { cards: cardd })
                        db.set(`type_${Interaction.user.id}`, { types: typee })

                        const embed = new MessageEmbed()
                            .setColor('RED')
                            .setFooter(Interaction.user.username, Interaction.user.displayAvatarURL())
                            .setDescription(`**
> <a:redcheckshield:1226863490493579306> Name : \`\`\` ${namme} \`\`\`

> <a:redcheckshield:1226863490493579306> Age : \`\`\` ${agee} \`\`\`

> <a:redcheckshield:1226863490493579306> FPS : \`\`\` ${fpp} \`\`\`

> <a:redcheckshield:1226863490493579306> Id card: \`\`\`  ${cardd} \`\`\`

> <a:redcheckshield:1226863490493579306> Device type and specifications : \`\`\` ${typee} \`\`\`**`)

                            .setImage(`https://cdn.discordapp.com/attachments/1208174078205108306/1220552831077978142/20231001_182035-3.gif?ex=6621d067&is=660f5b67&hm=c1bfb8b7c3646641a186df8cd01fc15e162f8f5a3d0572fa56df2be80602e8e6&`)

                        const butt = new MessageActionRow()
                            .addComponents(new MessageButton().setStyle(`SECONDARY`).setLabel(`Mention management`).setEmoji(`<a:6417redcrown:1226864238828585041>`).setCustomId(`mention1`),
                                new MessageButton().setLabel(`Acceptance`).setStyle('SUCCESS').setCustomId(`Acceptance1`),
                                new MessageButton().setLabel(`refuse`).setStyle('DANGER').setCustomId('refuse1'))
                        await Interaction.deferUpdate()
                        Interaction.editReply({ embeds: [embed], components: [butt] })
                    }
                }
            })

    }
}

module.exports = menu_apply;