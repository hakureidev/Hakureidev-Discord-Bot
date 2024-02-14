const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch')
require('dotenv').config()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime-pics')
        .setDescription('Get random anime pics'),
    async execute(interaction) {
        try {
            const response = await fetch(process.env.ANIME_PICS);
            const data = await response.json();
            const imageUrl = data.results[0].url
            await interaction.reply(imageUrl);
        } catch (error) {
            console.error('Error fetching data:', error);
            await interaction.reply('An error occurred while fetching data.');
        }
    },
};