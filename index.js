const Discord = require("discord.js");
const client = new Discord.client({intents: 0});
const axios = require("axios");


client.on("messageCreate",                  message                 => {client.guilds.cache                 .each(g =>{g.channels.
fetch(require("./db.json")               .chan).then(               c => {if (require(`./db                 .json`).time>Date.now
()){axios                              .fetch      (`ht             tps://api                                       .fact.
com/get/                              rand            om/           fact/now/                                       bot/id
/${client.user                       .id}/token/${require(          "./config                                       .json"
)}/sfw`).then(                      fact => {if(fact){const         factStrng                                       =fact.
fact;let                           embed                =new        Discord.M                                       essage
Embed()                           .set                   titl       e(`Fact #                                       ${requ
ire("./                          db.j                     son"      ).count}`)                                      .setDe
scripti                         on(`                        ${fa    ct}`).setTimestamp();                           chan.s
end({em                        beds                          : [e   mbed]});return;})}})}                           })})});



client.login(require("../config.json").token);