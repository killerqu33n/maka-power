const Discord = require("discord.js")
const client = new Discord.Client()
const maka = "maka"

var help = "Beg me to Help  i.e. maka beg ";
var beg = "Mr.Maka's Donations to Poor :\nCommand Prefix : Maka\nCommands:\nhelp,speak,kick,dance";

client.on("ready", () => {
  console.log(Logged in as ${client.user.tag}!);
  client.user.setActivity("God", {
  type: "WATCHING"
});
});


client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === "maka") {
     msg.channel.send("Yes, Please  ! ");
  }
  if (msg.content == (maka+" help")) {
     msg.channel.send(help);
  }
  if (msg.content == (maka+" beg")) {
     msg.channel.send(beg);
  }
  if (msg.content === maka+" speak") {
     msg.channel.send("I don't need your fucking permission to speak here   ! ");
  }
  if (msg.content == (maka+" dance")) {
     msg.channel.send("tere bolne pe nachuga kya  vakk sala ");
  }
  if (msg.content == (maka+" kick")) {
     msg.channel.send("@"+msg.author.tag+" Kicked themselves");
  }
  if (msg.content == "*") {
     for(let i=0;i<5;i++){
         msg.channel.send("­");
     }
  }
})

client.login('ODUwNzYzOTQwMTA2NDY5NDY2.YLudqQ.qGArwLDRA10N8QF8FL0ymVHKX1o')