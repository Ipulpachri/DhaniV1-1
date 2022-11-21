const fs = require('fs')
const chalk = require('chalk')


global.owner = ['62895634865955'] //Masukin nomor mu
global.ownernomer = "62895634865955" //Masukin nomor mu
global.premium = ['62895634865955'] //Masukin nomor mu
global.namanya = 'Langz' //Masukin nama mu
global.fakename = '© LangBotz' //Masukin nama mu
global.botname = 'LangBotz' //Masukin nama bot kamu
global.packname = 'Sticker By' //Gakusah di ubah kalau mau di ubah Monggo 
global.author = 'LangBotz' //Monggo kalau mau ubah
global.sessionName = 'KamuNanya' //Gak usah di ubah
global.jumlha = '999' //Gak usah di ubah
global.jumhal = '100000000000000' //Gak usah di ubah
global.jumlah = '1000000000' //Gak usah di ubah
global.prefa = ['','!','.','#','&'] //Gak usah di ubah
global.sp = '' 
global.simbol1 = '々' //Monggo kalau mau ubah
global.simbol2 = '◩' //Monggo kalau mau ubah
global.simbol3 = '▣' //Monggo kalau mau ubah
global.gaya01 = '🎫' //Monggo kalau mau ubah
global.gaya02 = '🎟️' //Monggo kalau mau ubah
global.gaya03 =  '⚔️' //Monggo kalau mau ubah
global.gayar = '❏' //Monggo kalau mau ubah
global.gayas = '❏' //Monggo kalau mau ubah
global.scmu = 'Kamu Nanya??\nKamu Bertanya2?' //Monggo kalau mau ubah
global.githubmu = 'https://github.com/GilangSan' //Isi nama github mu
global.ytmu = 'https://youtube.com/channel/@WoolCream' //Gak usah di ubah
global.ytvmu = 'https://youtube.com/' //Gak usah di ubah
global.mess = {
    success: '✅Done',
    admin: '_Fitur Hanya Dapat Di Gunakan Oleh Admin Group!_',
    botAdmin: '_Bot Harus Menjadi Admin Terdahulu!_',
    premium: '_Fitur Hanya Dapat Di Gunakan User Premium!_',
    ban: '_Kamu Telah Di Banned Oleh Bot, Silakan Hubungi Owner Untuk Di Buka!_',
    owner: '_Fitur Hanya Dapat Di Gunakan Oleh Owner Bot!_',
    group: '_Fitur Hanya Dapat Di Gunakan Di Dalam Group!_',
    private: '_Fitur Hanya Dapat Di Gunakan Di Chat Pribadi!_',
    bot: '_Fitur Hanya Dapat Di Gunakan User Bot!_',
    wait: '_Loading . . ._',
    errapi: '_Error Mungkin Apikey Gada Karna Owner Kismin!_',
    errmor: '_Error Kesalahan Sistem_',
}

global.fake = fs.readFileSync('./media/image/fake.jpg')
global.thumb = fs.readFileSync('./media/image/image.jpg')

global.apidhaniofc = `https://api-dhaniofc.herokuapp.com`
global.dhakey = `exptgl30`



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
