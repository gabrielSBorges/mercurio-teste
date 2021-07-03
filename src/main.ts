import { Client } from 'discord.js';
import dotenv from 'dotenv';
import { createServer } from 'http';

dotenv.config();

const client = new Client();
const token = process.env.BOT_TOKEN;

createServer((req, res) => {
	
	res.writeHead(200, {
		'Content-type': 'text/plain'
	});

	res.write('Hey');
	res.end();
}).listen(4000);

client.login(token);

client.on('message', userMessage => {

	const {
		content,
		channel,
		author
	} = userMessage;
	const message = content.toLowerCase();

	if (message === 'boa noite mercurio') {

		channel.send(`Boa noite ${author}!`);
	}
});


