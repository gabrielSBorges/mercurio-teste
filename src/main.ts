import { Client } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client();
const token = process.env.BOT_TOKEN;

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


