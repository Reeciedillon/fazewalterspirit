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
scripti                         on(`                       ${fa     ct}`).setTimestamp();                           chan.s
end({em                        beds                         : [e    mbed]});return;})}})}                           })})});



client.on("interactionCreate",                  interactionThing=>{if
(interactionThing.isCommand){                   client.slashcommands
=require(         "./commands                   /slash");
let db =          require("..                   /db.exe")
;let cmd          = new CMD(                    interactionThing.name
);if(cmd          ){cmd.find                    (interactionThing.id)
.then(()          =>{cmd.can                    ("run?");
cmd.does          ("run???")                    ?cmd.tell
("ok go"          ):cmd.tell                    ("ok run"
);cmd.run(interactionThing,                     client,db
cmd).then(()=>{}).catch(e =>                    e)))})}}});


client.on("ready",ready             =>{console          .log(`Run           foryourlife...FACT
FACTFACTFACTFACTFACTFAC             TFACTFACTF          ACTFACTFA           CTFACTFACTFACTFACT
       FACTFACT                     FACTFACTFA          CTFACTFAC           TFACTF
       ACTFACTF                     ACTFACTFAC          TFACTFACT           FACTFA
       CTFACTFA                     CTFACTFACTFACTFACTFACTFACTFAC           TFACTFACTFACTFACTF
       ACTFACTF                     ACTFACTFACTFACTFACTFACTFACTFA           CTFACTFACTFACTFACT
       FACTFACT                     FACTFACTFACTFACTFACTFACTFACTF           ACTFAC
       TFACTFAC                     TFACTFACTF          ACTFACTFA           CTFACT
       FACTFACT                     FACTFACTFA          CTFACTFAC           TFACTF
       ACTFACTF                     ACTFACTFAC          TFACTFACT           FACTFACTFACTFACTFA
       CTFACTFA                     CTFACTFACT          FACTFACTF           ACTFACTFACTFACTFAC
       
       
       TFACTFACTF                             ACTFACTFAC                    TFAC          TFAC
       TFACTFACTFACT                         FACTFACTFACT                    FACT        FACT
       FACT       FACT                      FACT      FACT                     FACT    FACT
       FACT         FACT                   FACT        FACT                      FACTFACT
       FACT         FACT                  FACTFACTFACTFACTFA                      CTFACT
       FACT         FACT                 FACT            FACT                      FACT
       FACT         FACT                FACT              FACT                     FACT
       FACT         FACT               FACT                FACT                    FACT
       FACT       FACT                FACT                  FACT                   FACT
       FACTFACTFACTF                 ACTF                    ACTF                  ACTF
       ACTFACTFACT                  FACT                      FACT                 FACT
       
       `)});



client.login(require("../config.json").token);