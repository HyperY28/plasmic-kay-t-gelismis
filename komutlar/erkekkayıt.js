const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.cache.find(r => r.id === "820646204744269827"); //buraya erkek rolünüzün id'sini koyun
  const misafir = message.guild.roles.cache.find(r => r.id === "820646204722642977"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.cache.find(c => c.id === "820646205520216098"); //buraya kayıt log id koyun
  const tag = "";
  if(!message.member.roles.cache.array().filter(r => r.id === "820646204773498883")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu Komutu Kullanamazsın Bunu Sadece <@&820646204773498883> Yapabilir");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
      if(!nick) return message.channel.send("**Kayıt Edebilmem İçin Bir ``İsim`` Girmelisin.**")
    c.roles.add(kayıtlı)
    c.roles.remove(misafir)
    c.setNickname(`${tag} ${nick}`)
     const code = new Discord.MessageEmbed()
    .setDescription(`
<:tik:843506484393410561> **PuuB Kayıt Başarılı** <:tik:843506484393410561>

<:rahatsz:843507069126049802> Kaydı Yapılan Üye: **${c.user.tag}**
<:bosta:843506480728899623> Değiştirilen İsim: ${tag} ${nick}
<:cevrmds:843506483882229840> Verilen Rol: ${kayıtlı}
`)
         .setFooter('PuuB Kayıt Sistemi | Developer By ! Yasin.js#3974')
         .setColor("RANDOM")
     message.channel.send(code)


    //loga mesaj
    const sj = new Discord.MessageEmbed()
    .setDescription(`
**Bir Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**

<:rahatsz:843507069126049802> Kaydı Yapılan Üye: **${c.user.tag}**
<:bosta:843506480728899623> Kaydı Yapan Yetkili: **${message.author.tag}**
<:cevrmds:843506483882229840> Değiştirilen İsim: ${tag} ${nick}

**Rol Bilgileri Aşağıda Yazmakta.**

• Verilen Rol: ${kayıtlı}
• Alınan Rol: ${misafir}

`)
    .setFooter('PuuB Kayıt Sistemi | Developer By ! Yasin.js#3974')
     .setColor("RANDOM")

    log.send(sj)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","puub","üye"],
  permLevel: 0
};
exports.help = {
  name: "kayıt",
  description: "",
  usage: ""
};
