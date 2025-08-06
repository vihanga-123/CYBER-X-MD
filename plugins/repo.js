const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    desc: "get bot repo.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const channel = 'SULA-MD';
        const repolink = `⭕ *𝐒𝐔𝐋𝐀-𝐌𝐃 Github Repository*

> https://github.com/sula011/SULA-MD

⭕ *𝐒𝐔𝐋𝐀-𝐌𝐃 DIPLOY HEROKU*

> https://dashboard.heroku.com/new?template=https://github.com/sula011/SULA-MD

⭕ *𝐒𝐔𝐋𝐀-𝐌𝐃 WEB 📍*

> https://sula-md-g5sp.onrender.com

⭕ *WHATSAPP CHANNEL :*

> https://whatsapp.com/channel/0029Vb65iOZKwqSNKecV8V07

⭕ *Contact Owner :*

> wa.me/94760663483
            
⭕ *𝐒𝐔𝐋𝐀-𝐌𝐃 Talkdrove Diploy*
 
*ඔය Link එකෙන් ගිහින් Account එකක් හදාගන්න👇*

> https://host.talkdrove.com/auth/signup?ref=D664187C

*මේ Link එකෙන් ගිහින් Bot ව Diploy කරගන්න👇*

> COMING SOON`;

        return await conn.sendMessage(from, { 
            image: { url: "https://i.ibb.co/dHwhYTC/SulaMd.jpg" },
            caption: repolink,contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363385281017920@newsletter',
                    newsletterName: '𝐒𝐔𝐋𝐀-𝐌𝐃',
                    serverMessageId: -1
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
