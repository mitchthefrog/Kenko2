module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Kenko2 Online, logged in as ${client.user.tag}`);
	},
};
