const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Préfixe de commande personnalisable

// Commande pour ajouter un nouvel objet sur le marché
client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(`${prefix}additem`)) {
    // Vous pouvez ajouter ici le code pour ajouter un objet au marché
    // Par exemple, enregistrer l'objet dans une base de données ou un tableau
    // Assurez-vous de vérifier les autorisations de l'utilisateur
    message.reply('L\'objet a été ajouté sur le marché.');
  }
});

// Commande pour afficher la liste des objets disponibles sur le marché
client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(`${prefix}market`)) {
    // Vous pouvez ajouter ici le code pour afficher la liste des objets sur le marché
    // Par exemple, parcourir la base de données ou le tableau d'objets
    // et les afficher dans le chat
    message.channel.send('Voici la liste des objets sur le marché :');
    // Insérez ici la liste des objets
  }
});

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

// Remplacez 'TOKEN' par le token de votre bot
client.login('TOKEN');
