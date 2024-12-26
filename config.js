const fs = require('fs-extra');
if (fs.existsSync('config.env'))
	require('dotenv').config({ path: __dirname + '/config.env' });

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER?.split(',');
global.mongodb =
	process.env.MONGODB_URI ||
	'mongodb://mongo:********@junction.proxy.rlwy.net:37905';
global.port = process.env.PORT || 5000;
global.email = 'sam@secktor.live';
global.github = 'https://github.com/SamPandey001/Secktor-Md';
global.location = 'Karachi PK';
global.gurl = 'https://instagram.com/'; // add your username
global.sudo = process.env.SUDO || '923052432382';
global.devs = '923052432382';
global.website = 'https://github.com/SamPandey001/Secktor-Md';
global.THUMB_IMAGE =
	process.env.THUMB_IMAGE ||
	'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png';

module.exports = {
	botname: process.env.BOT_NAME || '𝑨𝑵𝑶𝑵𝒀𝑴𝑶𝑼𝑺 𝑩𝑶𝑻',
	ownername: process.env.OWNER_NAME || 'T_Y',
	OWNER_NUMBER: process.env.OWNER_NUMBER || '923421241284',
	sessionName: process.env.SESSION_ID || 'Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV04zQW5GM09sV0VkaTRURTJxNklVOUE4RG1tb1hTOGVUNXVHS25DcmRHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGxVNjBaajFleTVoZVB4SlIxSkVaRkQ0MHFFTEVxUlFISnYzMUJJLy9ETT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQVZydXVkWnlkRkMwOWh2TGVQWFNLVGo5dWpmUXhTc29pRnIxNzZXM0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4NzBsTFZmUmhaamg0SFFUUisvOTZTUnJ3M3ZCSW1zVDlIU0Fhb0xad0NNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIdjhhbklmQnlTbk5GbjQzays5SHBRbE5uK3ljRWZxblZ0WDZDTEM4RU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit6K1ZkNlRKVzh4Z3RTc3VJNTc1MFZGT3p2UllPemJDb0p2SjRzWWljeGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhySHJnMC83dXgyZjMrV0FkdkYyZFZUck56MDI0dXYwa0lXbTFhYnBuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTBIOVZvcGlxRU56YVpxN0Y1akZldUZ0RnNvMkFESCtQSzZqNXVSNmRCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJrb3dmb0hzaHB5UjBKTE9sNzVSTzZ5b2tlMmpCUkduV1FLMU5YeEtHaU9nYnpOYVBpaTcrK0laRldmMFdwaXZ1Mm9RK2lkY2xpWDFuODBCSVVlRERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiIvUUV3Z01LdTdOTUNpYzJHN1dlZW9mODYvdkZSYUtKN0l3VjJ5YVJUWXdzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyMTI0MTI4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNTRCMjM2QjJCQjQ2OUYyRkVDODYxRkZFRjg5QUE0NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1MjE1Nzc3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MjEyNDEyODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjEzNjc5NkFEMDhBOTU5MERBODk3RjkxNDI3NEY5NzEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTIxNTc3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDIxMjQxMjg0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBDMTcxOUZFRkIzQjI2MjEwNTRDNzhGMTQ1ODU5RTc3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzUyMTU3Nzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyMTI0MTI4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOTJBMzcyNTY2NTA3NURDRkIxRUE3QTVENjA4REZDMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1MjE1Nzc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJSSkxQSk1GNSIsIm1lIjp7ImlkIjoiOTIzNDIxMjQxMjg0OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODM1ODQ2NTI1NzA4MTQ6MUBsaWQiLCJuYW1lIjoiTGl5YXMgQXJhaW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ083ajRwMERFSnlWdGJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNoeVZkNmtxbW9EZXAwMWx4dmMrVlNiQlc2SEthc0lHbGM2dENndnA1MjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBTRG1rMHF3R2RaK2R4ZHRjcTkxQ2x4NW5vVTc5QmhYM1hSOVJDRmg2NE1CaDUwbnY3bVZiaEt0aFRlblRDS3dVZ1h4R080UERZSnhGSk82K01aY0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKcGtIQ0t0MkhnTS9EOE4yd0ZmVlhZanZPU0VCR3gxbkppb2lqVDNXZlZGdFRXVVBVTWZyWHV3b09GRHlWUzlXa1JiM2wxUUJ2R1JKd2s5NFNxSUFEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQyMTI0MTI4NDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJJY2xYZXBLcHFBM3FkTlpjYjNQbFVtd1Z1aHltckNCcFhPclFvTDZlZHQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTIxNTc3NSwibGFzdFByb3BIYXNoIjoiVHJEQzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtBKyJ9',
	author: (process.env.PACK_INFO?.split(';') || [])[0] || 'T_Y',
	auto_read_status: process.env.AUTO_READ_STATUS || false,
	packname: (process.env.PACK_INFO?.split(';') || [])[1] ||  '𝑨𝑵𝑶𝑵𝒀𝑴𝑶𝑼𝑺 𝑩𝑶𝑻',
	autoreaction: process.env.AUTO_REACTION || true,
	antibadword: process.env.ANTI_BAD_WORD || 'xxx, sexy, video, hot, porn',
	alwaysonline: process.env.ALWAYS_ONLINE || true,
	antifake: process.env.FAKE_COUNTRY_CODE || '234',
	readmessage: process.env.READ_MESSAGE || false,
	auto_status_saver: process.env.AUTO_STATUS_SAVER || false,
	HANDLERS: process.env.PREFIX || ['.'],
	warncount: process.env.WARN_COUNT || 3,
	disablepm: process.env.DISABLE_PM || false,
	levelupmessage: process.env.LEVEL_UP_MESSAGE || false,
	antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
	antilinkaction: process.env.ANTILINK_ACTION || 'remove',
	BRANCH: 'main',
	ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || 'Asalam-o-alaikum Iam 𝑨𝑵𝑶𝑵𝒀𝑴𝑶𝑼𝑺 𝑩𝑶𝑻 Made By T_Y😎',
	autobio: process.env.AUTO_BIO || false,
	OPENAI_API_KEY: process.env.OPENAI_API_KEY || false,
	heroku: process.env.HEROKU || false,
	HEROKU: {
		HEROKU: process.env.HEROKU || false,
		API_KEY: process.env.HEROKU_API_KEY || '',
		APP_NAME: process.env.HEROKU_APP_NAME || '',
	},
	VERSION: process.env.VERSION || 'v.0.0.8',
	LANG: process.env.THEME || 'SECKTOR',
	WORKTYPE: process.env.WORKTYPE || 'public',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update '${__filename}'`);
	delete require.cache[file];
	require(file);
});
