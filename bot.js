const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setGame(`AEDD COMMUNITY`, "http://twitch.tv/Streammingg")    
});


const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('$مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

client.on("message", function(message) {
	var prefix = "$";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

client.on('message', message => {
    if (message.content == "$quas") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});

 var fkk =[
    {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
    {f:"فكك باص",k:"ب ا ص"},
    {f:"فكك عربة ",k:"ع ر ب ة"},
    {f:"فكك سيارة",k:"س ي ا ر ة"},
    {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
    {f:"فكك العنود ",k:"ا ل ع ن و د"},
    {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
    {f:"فكك دحوم",k:"د ح و م"},
    {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
    {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
    {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
    {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
    {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
    {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
    {f:"فكك زنديق  ",k:"ز ن د ي ق"},
    {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
    {f:"فكك سوريا ",k:"س و ر ي ا"},
    {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
    {f:"فكك طماطم ",k:"ط م ا ط م"},
    {f:"فكك سارة ",k:"س ا ر ة"},
    {f:"فكك دراجون ",k:"د ر ا ج و ن"},
    {f:"فكك سيرفر ",k:"س ي ر ف ر"},
    {n:"فكك الجبل",m:"ا ل ج ب ل"},
    {n:"فكك هضبة",m:"ه ض ب ة"},
    {n:"فكك خواطر",m:"خ و ا ط ر"},
    {n:"فكك ارحبو",m:"ا ر ح ب و"},
    {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
    {n:"فكك احبك",m:"ا ح ب ك"},
    {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
    {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
    {n:"فكك الو محد",m:"ا ل و م ح م د"},


];


client.on("message", async message => {
   var prefix = "$";
if(message.content == prefix+"فكك"){
    if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
    UserBlocked.add(message.guild.id)
    var ask = fkk[Math.floor(Math.random() * fkk.length)];
    let embed = new Discord.RichEmbed()
    .setTitle('لعبة فكك')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(ask.f);
    message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
    const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
        UserBlocked.delete(message.guild.id)
    msgs.forEach(result => {
       if(result.author.id == client.user.id) return;
       if(result.content == "فكك") return
       if(result.content == ask.k){

         let embeds = new Discord.RichEmbed()
         .setTitle(':white_check_mark: اجابة صحيحة')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة صحيحة`);
            message.channel.sendEmbed(embeds);                return;
       } else {

                           var embedx = new Discord.RichEmbed()
         .setTitle(':x:خطاء')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة خاطئة`);

            message.channel.sendEmbed(embedx);
       }
 });
}
});

client.on("message", async message => {
var prefix = "$";
var aoasm =[
{q:"ما عاصمة **المغرب**",a:"الرباط"},
{q:"ما عاصمة **افغانستان**",a:"كبل"},
{q:"ما عاصمة ** البانيا**",a:"تيران"},
{q:"ما عاصمة **الجزائر **",a:"الجزائر"},
{q:"ما عاصمة ** **",a:"الجزائر"},
{q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
{q:"ما عاصمة **انجولا**",a:"لواندا"},
{q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
{q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
{q:"ما عاصمة **ارمينيا**",a:"يريفان"},
{q:"ما عاصمة ** مصر**",a:"القاهرة"},
{q:"ما عاصمة ** استراليا**",a:"كانبرا"},
{q:"ما عاصمة **النمسا**",a:"فيينا"},
{q:"ما عاصمة ** اذربيجان**",a:"باكو"},
{q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
{q:"ما عاصمة **البحرين**",a:"المنامة"},
{q:"ما عاصمة ** بنجلاد��ش**",a:"دكـا"},
{q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
{q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
{q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
{q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
{q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
{q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
{q:"ما عاصمة **بوليفيا **",a:"لاباز"},
{q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
{q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
{q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
{q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
{q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
{q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
{q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
{q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
{q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
{q:"ما عاصمة ** كندا**",a:"اوتاوا"},
{q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
{q:"ما عاصمة **تشاد **",a:"نجامينا"},
{q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
{q:"ما عاصمة **الصين **",a:"بكين"},
{q:"ما عاصمة ** **",a:"مورونى"},
{q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
{q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
{q:"ما عاصمة **كرواتيا **",a:"زغرب"},
{q:"ما عاصمة ** كوبا**",a:"هافانا"},
{q:"ما عاصمة ** قبرص**",a:" "},
{q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
{q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
{q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
{q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
{q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
{q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
{q:"ما عاصمة **قطر  **",a:"الدوحة"},
{q:"ما عاصمة **السعودية  **",a:"الرياض"},
{q:"ما عاصمة **سوريا  **",a:"دمشق"},
{q:"ما عاصمة **تركيا  **",a:"انقرة"},
{q:"ما عاصمة **العراق  **",a:"بغداد"},
{q:"ما عاصمة **البنان  **",a:"بيروت"},
{q:"ما عاصمة **فلسطين  **",a:"القدس"},
{q:"ما عاصمة **امريكا  **",a:"واشنطن"},
{q:"ما عاصمة **الاردن  **",a:"عمان"},    
{q:"ما عاصمة **السودان  **",a:"خرطوم"},
{q:"ما عاصمة **الما��يا  **",a:"برلين"},
{q:"ما عاصمة **كندا  **",a:"اوتاوا"},
{q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
];
if(message.content == prefix+"عواصم"){
    if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
    UserBlocked.add(message.guild.id)
    var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
    let embed = new Discord.RichEmbed()
    .setTitle('سؤال عواصم')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(ask.q);
    message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
    const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
        UserBlocked.delete(message.guild.id)
    msgs.forEach(result => {
       if(result.author.id == client.user.id) return;
       if(result.content == "عاصمة") return
       if(result.content == ask.a){
         let embeds = new Discord.RichEmbed()
         .setTitle(':white_check_mark: اجابة صحيحة')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة صحيحة`);
            message.channel.sendEmbed(embeds);                return;
       } else {

                              var embedx = new Discord.RichEmbed()
            .setTitle(':x:خطاء')
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(`**${result.author.username}** الإجابة خاطئة`);
            message.channel.sendEmbed(embedx);
       }
 });
}
});












client.login(process.env.BOT_TOKEN);
