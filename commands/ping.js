const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong'),
	async execute(interaction) {
		await interaction.reply('Pong');
		await wait(2000);
		await interaction.editReply('Pong the Sequel');
		await wait(3000);
		await interaction.followUp({ content: 'Pong 3: The Return of Pong', ephemeral: true });
	},
};