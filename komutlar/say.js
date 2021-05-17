const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    let erkekRolü = "820646204744269827";
  let ekipRolü = "820646204773498883";

  console.log(message.guild.roles.cache)
  let guild = message.guild;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = ""
    const plasmic = new Discord.MessageEmbed()
            .setTitle(` ${message.author.tag} - **Tarafından istendi**.`)
    .setDescription(`
\`\`\` PuuB Kayıt Botu \`\`\`

**<:PuuB:843476752843407370> Toplam Üye: \`\`${message.guild.memberCount}\`\`**

**<:rahatsz:843507069126049802> Aktif Üye: \`\`${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\`\`**

**<:bosta:843506480728899623> Seslide Bulunan Üye Sayısı: \`\`${count}\`\`**

**<:cevrmds:843506483882229840> Sunucunun Boost Sayısı: \`\`${message.guild.premiumSubscriptionCount}\`\`**


\`\`\` \`\`\`
`)

        .setThumbnail(`https://images-ext-1.discordapp.net/external/rtdJSlAXy2RtMSEm_kyRQRn-EyjsGoXtv0y2rkqf5GA/https/cdn.discordapp.com/icons/820646204274376725/7b6e908440649d8d9cff28d1294e2b6c.webp`)
         .setColor("RANDOM")
	  message.channel.send(plasmic);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayy'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
}
