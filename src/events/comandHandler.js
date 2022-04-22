const client = global.client;
const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");
const db = require("quick.db");
const ms = require('ms');

const iltifatlar = [
      "Mucizelerden bahsediyordum. Tam o sırada gözlerin geldi aklıma.",
      "Benim için mutluluğun tanımı, seninle birlikteyken geçirdiğim vakittir.",
      "Mavi gözlerin, gökyüzü oldu dünyamın.",
      "Seni gören kelebekler, narinliğin karşısında mest olur.",
      "Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.",
      "Sabah olmuş. Sen mi uyandın yoksa gönlüme güneş mi doğdu.",
      "Huzur kokuyor geçtiğin her yer.",
      "En güzel manzaramsın benim, seyretmeye doyamadığım.",
      "Sen benim düşlerimin surete bürünmüş halisin.",
      "Bir sahil kasabasının huzuru birikmiş yüzüne.",
      "Gülüşünde nice ilaçlar var yarama merhem olan.",
      "Gece nasıl sabahı bekliyorsa aydınlanmak için ben de seni öyle bekliyorum.",
      "Işığınla gecemi aydınlatıyorsun.",
      "Yağmurdan sonra açan gök kuşağı gibisin, öyle güzel ve özel!",
      "Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.",
      "Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.",
      "Seni kelimeler ile anlatmak çok zor. Muhteşem desem yine eksik kalıyor anlamın.",
      "Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.",
      "Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.",
      "Bu kadar muhteşem olamaz bir insan. Bu kadar kusursuz bu kadar mükemmel.. Kirpiklerinin dizilişi bile sırayla senin.",
      "Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.",
      "Senin güzelliğini anlatmaya dünyalar değil, lisanlar bile yetmez.",
      "Etkili gülüş kavramını ben senden öğrendim.",
      "Seni yanlışlıkla cennetten düşürmüşler. Dünyada yaşayan bir meleksin sen.",
      "Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.",
      "Gözlerinin gördüğü her yer benimdir. Bakışına şahit olan her toprak benim de vatanımdır.",
      "Gözlerinle baharı getirdin garip gönlüme.",
      "Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.",
      "Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.",
      "Seni de bu dünyada görünce yaşama sebebimi anladım. Meğer senmişsin beni dünyada yaşamaya zorlayan.",
      "Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.",
      "Sen benim yanımda olduğun sürece benim nerde olduğum hiç önemli değil .Kokunu aldığım her yer cennet bana.",
      "Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.",
      "Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.",
      "Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.",
      "Aynı zaman diliminde yaşamak benim için büyük ödüldür.",
      "Seninle aşkı yaşamak çok güzel bir şey ama sensiz kalma korkusunu düşünmek korkutuyor beni.",
      "Seni severek meslek sahibi oldum ben. Seni sevmeye başladıkça şair oldum.",
      "Gülüşün güzelliğine anlam katıyor. Gamzelerin ise bambaşka diyarların kapılarını açıyor.",
      "Senin gülüşünü gördüğüm günden beri ağlamalarımı unuttum.",
      "Kimse konuşmasın yalnız sen konuş bana. Yalnız sen bak gözlerimin içine. Kimse olmasın yalnızca sen ol benim hayatımda.",
      "Ben seninle birlikte yaşayabilmek için ikinci kere geldim hayata.",
      "Senin attığın adımlarda seni korumak için geçtiğin yol olmak isterdim. Seni emniyete alan ve sonsuz bir yolculuğa çıkaran bir yol.",
      "Aklıma sevmek geldiğinde, gözlerimin önüne sen geliyorsun. Günün her saati canım sevmek istiyor ve seni düşünüyor kalbim",
      "Tak jileti dudağına şah damarımdan öp beni!"
];
var iltifatSayi = 0;

module.exports = async (message) => {
    if (!message.guild || message.author.bot) return
      const owner = client.users.cache.get("947112924441346098");
    if ([".tag", "!tag", "tag"].some(x => message.content === x)) {
        message.channel.send(`\`${config.registration.GuilDTag}\``)
    }
    if (message.channel.id === config.channels.chat) {
        iltifatSayi++
        if (iltifatSayi >= config.bot.iltifatsize) {
            iltifatSayi = 0;
            message.reply(`**${(iltifatlar)[Math.floor(Math.random() * ((iltifatlar).length - 1) + 1)]}**`);
        }
    }
      const ownerr = client.users.cache.get("947112924441346098");
    const afkembed = new MessageEmbed()
        .setColor(message.member.displayHexColor)
        .setAuthor(message.member.displayName)
        .setFooter("$into Gang")
        .setTimestamp()
    const etiket = message.mentions.users.first()
    const uye = db.fetch(`user_${message.author.id}_${message.guild.id}`)
    const nickk = db.fetch(`nick_${message.author.id}_${message.guild.id}`)
    if (etiket) {
        const reason = db.fetch(`sebep_${etiket.id}_${message.guild.id}`)
        const uye2 = db.fetch(`user_${etiket.id}_${message.guild.id}`)
        if (message.content.includes(uye2)) {
            const time = db.fetch(`afktime_${message.guild.id}`);
            const timeObj = ms(Date.now() - time);
            message.channel.send(afkembed.setDescription(`${etiket} üyesi **${reason}** sebebiyle \`${timeObj}\` boyunca afk.`).setColor("RANDOM"))
        }
    }
    if (message.author.id === uye) {
        message.member.setNickname(nickk).catch(err => console.log(" "))
        db.delete(`sebep_${message.author.id}_${message.guild.id}`)
        db.delete(`user_${message.author.id}_${message.guild.id}`)
        db.delete(`nick_${message.author.id}_${message.guild.id}`)
        db.delete(`user_${message.author.id}_${message.guild.id}`);
        db.delete(`afktime_${message.guild.id}`)
        message.channel.send(afkembed.setDescription(`Başarıyla afk modundan çıkış yaptın.`))
    }
    if (!message.content.startsWith(config.bot.prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    const author = message.author
    const channel = message.channel
    const guild = message.guild
    const embed = new MessageEmbed()
        .setColor(message.member.displayHexColor)
        .setAuthor(message.member.displayName, author.avatarURL({ dynamic: true, size: 2048 }))
        .setFooter("$into Gang")
    if (cmd) {
        if (cmd.owner && config.bot.owner !== author.id) return
        if (cmd.guildowner && config.bot.owner !== author.id && guild.owner.id !== author.id) return
        if (client.cooldown.has(author.id) === config.bot.cooldown) {
            client.commandblocked.push(author.id)
            channel.send(embed.setDescription(`${author} Komutları kötüye kullandığın için engellendin.`))
        }
        if (client.commandblocked.includes(message.author.id)) return
        cmd.execute(client, message, args, embed, author, channel, guild);
        if (config.bot.owner !== author.id && guild.owner.id !== author.id) {
            if (!client.cooldown.has(author.id)) client.cooldown.set(author.id, 1);
            else client.cooldown.set(author.id, client.cooldown.get(author.id) + 1);
        }
        setTimeout(() => {
            if (client.cooldown.has(author.id)) {
                client.cooldown.delete(author.id)
            }
        }, 1000 * 60 * 5);
    }
}

module.exports.conf = {
    name: "message"
}