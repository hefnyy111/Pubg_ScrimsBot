const { MessageEmbed , MessageActionRow , MessageButton , MessageSelectMenu} = require('discord.js')

const scrimlist = {
    name:"scrim-list",
    description:"To Send List",
    options: [{
      name : "team1",
      description: "Enter To Team1",
      type: 3,
      required: true
    } , {
      name : "team2",
      description: "Enter To Team2",
      type: 3,
      required: true
    },  {
    name : "team3",
    description: "Enter To Team3",
    type: 3,
    required: true
  } ,  {
    name : "team4",
    description: "Enter To Team4",
    type: 3,
    required: true
  },  {
    name : "team5",
    description: "Enter To Team5",
    type: 3,
    required: true
  },  {
    name : "team6",
    description: "Enter To Team6",
    type: 3,
    required: true
  },  {
    name : "team7",
    description: "Enter To Team7",
    type: 3,
    required: true
  },  {
    name : "team8",
    description: "Enter To Team8",
    type: 3,
    required: true
  },  {
    name : "team9",
    description: "Enter To Team9",
    type: 3,
    required: true
  },  {
    name : "team10",
    description: "Enter To Team10",
    type: 3,
    required: true
  },  {
    name : "team11",
    description: "Enter To Team11",
    type: 3,
    required: true
  },  {
    name : "team12",
    description: "Enter To Team12",
    type: 3,
    required: true
  },  {
    name : "team13",
    description: "Enter To Team13",
    type: 3,
    required: true
  },  {
    name : "team14",
    description: "Enter To Team14",
    type: 3,
    required: true
  },  {
    name : "team15",
    description: "Enter To Team15",
    type: 3,
    required: true
  },  {
    name : "team16",
    description: "Enter To Team16",
    type: 3,
    required: true
  },  {
    name : "team17",
    description: "Enter To Team17",
    type: 3,
    required: true
  },  {
    name : "team18",
    description: "Enter To Team18",
    type: 3,
    required: true
  },  {
    name : "team19",
    description: "Enter To Team19",
    type: 3,
    required: true
  },  {
    name : "team20",
    description: "Enter To Team20",
    type: 3,
    required: true
  },  {
    name : "team21",
    description: "Enter To Team21",
    type: 3,
    required: true
  },  {
    name : "team22",
    description: "Enter To Team22",
    type: 3,
    required: true
  },  {
    name : "team23",
    description: "Enter To Team23",
    type: 3,
    required: true
  },  {
    name : "team24",
    description: "Enter To Team24",
    type: 3,
    required: true
  },  {
    name : "team25",
    description: "Enter To Team25",
    type: 3,
    required: true
  }
],


    run: async (client, Interaction, args) => {
if (!Interaction.member.permissions.has("MANAGE_ROLES")) return;


 const team1 = Interaction.options.getString('team1')
    if(!team1) return;
 const team2 = Interaction.options.getString('team2')
    if(!team2) return;     
 const team3 = Interaction.options.getString('team3')
    if(!team3) return;
 const team4 = Interaction.options.getString('team4')
    if(!team4) return;
 const team5 = Interaction.options.getString('team5')
    if(!team5) return;
 const team6 = Interaction.options.getString('team6')
    if(!team6) return;
 const team7 = Interaction.options.getString('team7')
    if(!team7) return;
 const team8 = Interaction.options.getString('team8')
    if(!team8) return;
 const team9 = Interaction.options.getString('team9')
    if(!team9) return;
 const team10 = Interaction.options.getString('team10')
    if(!team10) return;
 const team11 = Interaction.options.getString('team11')
    if(!team11) return;
 const team12 = Interaction.options.getString('team12')
    if(!team12) return;
 const team13 = Interaction.options.getString('team13')
    if(!team13) return;
  const team14 = Interaction.options.getString('team14')
    if(!team14) return;
 const team15 = Interaction.options.getString('team15')
    if(!team15) return;
 const team16 = Interaction.options.getString('team16')
    if(!team16) return;
 const team17 = Interaction.options.getString('team17')
    if(!team17) return;
 const team18 = Interaction.options.getString('team18')
    if(!team18) return;
 const team19 = Interaction.options.getString('team19')
    if(!team19) return;
 const team20 = Interaction.options.getString('team20')
    if(!team20) return;
 const team21 = Interaction.options.getString('team21')
    if(!team21) return;
 const team22 = Interaction.options.getString('team22')
    if(!team22) return;
 const team23 = Interaction.options.getString('team23')
    if(!team23) return;
 const team24 = Interaction.options.getString('team24')
    if(!team24) return;
 const team25 = Interaction.options.getString('team25')
    if(!team25) return;


Interaction.channel.send({content: `**
> <a:app:1226864173527601244> | 𝐂𝐨𝐦𝐦𝐢𝐭𝐦𝐞𝐧𝐭 𝐭𝐨 𝐭𝐡𝐞 𝐞𝐱𝐚𝐜𝐭 𝐥𝐨𝐜𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐞𝐚𝐜𝐡 𝐬𝐪𝐮𝐚𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐫𝐨𝐨𝐦 𝐬𝐨 𝐭𝐡𝐚𝐭 𝐢𝐭 𝐝𝐨𝐞𝐬 𝐧𝐨𝐭 𝐥𝐞𝐚𝐝 𝐭𝐨 𝐞𝐱𝐜𝐥𝐮𝐬𝐢𝐨𝐧p𝗶𝗻

> <a:app:1226864173527601244> | عدم الحضور بدون عذر سوف يعرضك  للحظر من المشاركة في السكريمات القادمة

<a:977003084054151198:1226882217544781885> TEAM 1 : ${team1}
<a:977003084054151198:1226882217544781885> TEAM 2 : ${team2}
<a:977003084054151198:1226882217544781885> TEAM 3 : ${team3}
<a:977003084054151198:1226882217544781885> TEAM 4 : ${team4}
<a:977003084054151198:1226882217544781885> TEAM 5 : ${team5}
<a:977003084054151198:1226882217544781885> TEAM 6 : ${team6}
<a:977003084054151198:1226882217544781885> TEAM 7 : ${team7}
<a:977003084054151198:1226882217544781885> TEAM 8 : ${team8}
<a:977003084054151198:1226882217544781885> TEAM 9 : ${team9}
<a:977003084054151198:1226882217544781885> TEAM 10 : ${team10}
<a:977003084054151198:1226882217544781885> TEAM 11 : ${team11}
<a:977003084054151198:1226882217544781885> TEAM 12 : ${team12}
<a:977003084054151198:1226882217544781885> TEAM 13 : ${team13}
<a:977003084054151198:1226882217544781885> TEAM 14 : ${team14}
<a:977003084054151198:1226882217544781885> TEAM 15 : ${team15}
<a:977003084054151198:1226882217544781885> TEAM 16 : ${team16}
<a:977003084054151198:1226882217544781885> TEAM 17 : ${team17}
<a:977003084054151198:1226882217544781885> TEAM 18 : ${team18}
<a:977003084054151198:1226882217544781885> TEAM 19 : ${team19}
<a:977003084054151198:1226882217544781885> TEAM 20 : ${team20}
<a:977003084054151198:1226882217544781885> TEAM 21 : ${team21}
<a:977003084054151198:1226882217544781885> TEAM 22 : ${team22}
<a:977003084054151198:1226882217544781885> TEAM 23 : ${team23}
<a:977003084054151198:1226882217544781885> TEAM 24 : ${team24}
<a:977003084054151198:1226882217544781885> TEAM 25 : ${team25}

> <a:app:1226864173527601244> Room ID At :
> <a:app:1226864173527601244> Start At :

<@&1076577139157114991>
**`})

Interaction.reply({content: `Done`, ephemeral: true})
}
};  

module.exports = scrimlist;