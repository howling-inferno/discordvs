token = os.environ['DISCORD_BOT_TOKEN']

const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const allInvites = {}
const client = new Discord.Client()





client.on('ready', message =>
{
  client.user.setPresence({ game: { name: 'with discord.js' } });  
  console.log('botが起動してます,,,');
         
///////////////  console.log(`Logged in as ${client.user.tag}!`)
  console.log(`Logged in as ${client.user.tag}!`)

   client.guilds.cache.forEach(guild => {
     guild.fetchInvites().then(invites => {
       allInvites[guild.id] = invites
     })
   })
  });


 client.on('guildMemberAdd', member => {
   // メンバーが参加したサーバーの招待コードを全て取得する
   member.guild.fetchInvites().then(invites => {
     // 以前に取得したサーバーの招待コードを変数に入れて保持する
     const oldInvites = allInvites[member.guild.id]
     // 新たに取得した招待コードに置き換え
     allInvites[member.guild.id] = invites
     // 以前に取得した招待コードと新たに取得したので、使用回数が増えたものを探す
     const invite = invites.find(i => oldInvites.get(i.code).uses < i.uses)
     // ログに出す
    client.channels.cache.get('726417727551438858').send(`${member.user.tag} は ${invite.code} を使ってサーバーに参加しました`)
   })
 })









client.on('message', message =>
{

client.user.setActivity("!e helpでヘルプを表示するよ!");
});


 

///////////////







	client.on('message', async (message) => {
   // メッセージが "hi" で、送信されたのがサーバー内だったら実行する(DMだと役職が取得できないので)
   if (message.content === '!e help' && message.guild) {
     // 名前が "member" の役職を取得する
 
     message.channel.send('このBOTの紹介をするね！\nこのBOTはハウリングインフェルノによって2020/7/12日\nにできた新米だよ\n開発言語はC#,python,js,javaです詳しい説明は!開発で\nではこのBOTでできるこまんどを説明です!\nコマンド集\n1.!ping でpingを図れるよ\n2,!add channel 雑談 で雑談カテゴリを作るよ\n3,!e help 今表示している奴だよ\n4,!管理者 このサーバーの管理者を表示するよ\n5,!アンケート よくわからないよ\n6,!デバイス 今ログインしているデバイスを表示するよ\n7,コマンドはなくて自動で出るよ例えば\nサーバー入ったときなど\n追加されたらたまに更新するかも')
   }
 })







 client.on('guildMemberAdd', member => {
	      client.channels.cache.get('726417727551438858').send(`${member.guild.name} に ${member.displayName} が参加しました`)
 })
 
 client.on('guildMemberRemove', member => {
	      client.channels.cache.get('726417727551438858').send(`${member.guild.name} から ${member.displayName} が退出しました`)
 })










 

/////////

      client.on('message', message => {
  // If the message is '!rip'



  if (message.content === '!add channel 雑談') 
{
  	 message.guild.channels.create('雑談', { parent: message.channel.parent })
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://assets.st-note.com/production/uploads/images/12431411/rectangle_large_type_2_07060b499085c1e578ca6b8e37be6281.png?fit=bounds&quality=60&width=1280');
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author},`, attachment);
  }

});


client.on('message', async message => {
   // サーバー内ので'!permission'が送信されたとき
   if (message.content === '!管理者' && message.guild) {
     // メッセージが送信されたサーバーにいる全てのメンバーを取得する
     const members = await message.guild.members.fetch()
     // 管理者権限を持ったメンバーのみを絞り込む
     const admins = members.filter(member => member.permissions.has('ADMINISTRATOR'))
     // 絞り込んだメンバーのタグを取得する
     const tags = admins.map(member => member.user.tag)
     // タグの配列を', 'でつなげて返信する
     message.reply(tags.join(', '))
   }
 })




 client.on('message', async message => {
   if (message.content === '!アンケート') {
     message.channel.send('yes か no を送信してください')
     const filter = msg => msg.author.id === message.author.id
     const collected = await message.channel.awaitMessages(filter, { max: 1, time: 10000 })
     const response = collected.first()
     if (!response) return message.channel.send('タイムアウト')
     if (!['yes', 'no'].includes(response.content)) return message.channel.send('正しくありません')
     message.channel.send(`${response.content} が送信されました`)
   }
 })



 client.on("guildMemberRemove", member => {
   const period = Math.round((Date.now() - member.joinedAt) / 86400000) // サーバーに居た期間を日数にして計算
 
  client.channels.cache.get('726417727551438858').send(`${member.user.tag}は${member.guild.name}に約${period}日間サーバーに参加していました。`)
 })



 
 client.on('message', message => {
   if (message.content === '!デバイス') {
     const userStatus = message.author.presence.clientStatus
 
     if (!userStatus) {
       return message.channel.send('どのデバイスからもアクセスされていません。')
     }
 
     message.channel.send(
       [
         'ソフト: ' + (userStatus.desktop || 'offline'),
         'モバイル: ' + (userStatus.mobile || 'offline'),
         'web: ' + (userStatus.web || 'offline'),
       ].join('\n')
     )
   }
 })
 





 
 client.on('message', message => {
   if (message.content === '!ping') {
     message.reply(client.ws.ping)
   }
 })




client.login('token')