const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {

  const pinkcode = new Discord.MessageEmbed()
.setDescription(`
> **---------------| PuuB Genel Kayıt Botu |---------------**

> <:bosta:843506480728899623> Şuanda Kullanılan Prefixim: \`p.\`

> **----------|<:BelgePng:843506480639377428> Genel Komutlar <:BelgePng:843506480639377428>|----------**

> **<:bosta:843506480728899623> p.avatar ➼ Etiketlediğiniz Veya Kendi PP nizi Görürsünüz.**
> **<:bosta:843506480728899623> p.kullanıcı-bilgi ➼ Etiketlediğiniz Veya Kendi Bilgilerinize Bakarsınız.**
> **<:bosta:843506480728899623> p.istatistik ➼ **Botun İstatistiklerini Görürsünüz.**

> **----------|<:cekic:843506481100750850> Moderasyon Komutları <:cekic:843506481100750850>|----------**

> **<:bosta:843506480728899623> p.say ➼ Sunucunun Bilgilerini Gösterir.**
> **<:bosta:843506480728899623> p.slowmode ➼ Bulunduğunuz Kanalı Yavaş Moda Alır.**

> **----------|<:kitap:843506483924697098> Kayıt Komutları <:kitap:843506483924697098>|----------**

> **<:bosta:843506480728899623> p.kayıt ➼ Üyeyi Kayıt Etmenize Yarar.**

> **Bağlantılar**
> ➼ [Discord Sunucumuz](DAVETLİNKİ)
`)
    .setColor("RANDOM")
    .setFooter('Developer By ! Yasin.js#3974')
    .setThumbnail("https://images-ext-1.discordapp.net/external/rtdJSlAXy2RtMSEm_kyRQRn-EyjsGoXtv0y2rkqf5GA/https/cdn.discordapp.com/icons/820646204274376725/7b6e908440649d8d9cff28d1294e2b6c.webp")
 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
