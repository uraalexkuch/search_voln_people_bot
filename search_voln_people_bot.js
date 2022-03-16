process.env.NTBA_FIX_319 = 1;
const  TelegramBot = require( "node-telegram-bot-api");
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5220460129:AAEKnEij6gPDNxh-pmeUcR1ri5HHqftqxVk')
/*const TOKEN ='5220460129:AAEKnEij6gPDNxh-pmeUcR1ri5HHqftqxVk';
const bot= new TelegramBot(TOKEN, {
    polling : true
});*/
const data= require("./datapeople.json")


bot.start( ctx => ctx.reply(
   "Вітаємо, " +  ctx.from.first_name +'.'+ ' Цей бот полегшує пошук осіб, які евакуювалися з м.Волновахи.' +'\n' + 'Для пошуку наберіть прізвище українською!' + '\n' + 'База данних - близько 6068 осіб ',


))



bot.on('text', async (ctx) => {

        const userText = ctx.message.text
        console.log(`имя ${userText.toLowerCase()}`)
    const result=data.filter((dat) => {
        // console.log(dat.PIB.toLowerCase())
        if (dat.PIB.toLowerCase().includes(userText.toLowerCase())) {
            console.log([dat.PIB])
            return ctx.reply(  `Прізвище:   ${ dat.PIB}`,
            )
        }
        /*else {
            ctx.reply('Такого прізвища не знайдено, на жаль.')
        }*/
    })
    try {data.filter((dat) => {
                // console.log(dat.PIB.toLowerCase())
                if (dat.PIB.toLowerCase()==userText.toLowerCase()) {
                    console.log([dat.PIB])
                    return ctx.reply(  `Прізвище:   ${ dat.PIB}`,
                        )
                }

                /*else {
                    ctx.reply('Такого прізвища не знайдено, на жаль.')
                }*/
            }
        )
    } catch(e) {
        ctx.reply('Такого прізвища не знайдено, на жаль.')
    }
    if(result.length===0){ return ctx.reply('Такого прізвища не знайдено, на жаль.')}
})

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
/*
bot.on("message",(msg) => {
    console.log("My msg object",msg);
    bot.sendMessage(msg.chat.id, "Вітаємо, " +  msg.chat.first_name +'.'+ ' Цей бот полегшує пошук осіб, які евакуювалися з м.Волновахи.' + 'Для пошуку наберіть прізвище українською! ',
        options);
            });


bot.on("callback_query", (callbackQuery) => {
    const message = callbackQuery.message;
    switch (callbackQuery.data) {

        case 'start':
            bot.sendMessage(message.chat.id, ' Цей бот полегшує пошук осіб, які евакуювалися з м.Волновахи.' + 'Для пошуку наберіть прізвище українською! ',   options);
            break;

        case 'search':
            const userText = callbackQuery.message.text.toLowerCase()
            console.log(`имя ${userText.toLowerCase()}`)
            console.log(data.map((t)=>{ return t.PIB.toLowerCase()==userText.toLowerCase()}));
            const covidData = data.find(userText.toLowerCase()).toLowerCase()
            data.filter((dat) => {
                // console.log(dat.PIB.toLowerCase())
                if (dat.PIB.toLowerCase().includes(userText.toLowerCase())) {
                    console.log([dat.PIB])
                    return [`Прізвище:${ dat.PIB}`]
                }
            }
        ))
            console.log(covidData)
            const formatData = ` Страна: ${covidData}`
            //callbackQuery.reply(formatData)
            bot.sendMessage(message.chat.id, {covidData},   options);
            break;

        default:
            bot.sendMessage(message.chat.id, 'I am sorry, this action is not implemented!');
            break;
    }*/


