const { ChatInputCommandInteraction, ActionRow, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, WelcomeScreen } = require('discord.js');
const Discord = require('discord.js');
const { Welcome } = require('niby-welcomes');
module.exports = {
    name: 'guildMemberAdd',
    once: true,
    async execute(member, client){
        try{
            const { guild } = member;

            let canalBienvenida = guild.channels.cache.get('1033216478209646633');
            let welcomeImage = await new Welcome()
                .setWelcomeMessage('BIENVENID@')
                .setUsername(member.user.tag, {color: '#D3052D'})
                // .setMemberCount(`Eres el número #${member.guild.memberCount}`, {color: '#ffffff'})
                .setAvatar(member.user.displayAvatarURL({size: 512, extension: 'png'}))
                .setBackgroundUrl('https://imgur.com/a/YaosIV8', {opacity: 0.5})
                .setBorder(true, {color: '#D3052D', size: 15})
                .setStyle('koya')
                .build();

            let attachment = new Discord.AttachmentBuilder(welcomeImage, {name: `bienvenida-${member.user.tag}.png`});

            canalBienvenida.send({content: `Bienvenid@ ${member.user.tag}, espero te agrade la estadía en el servidor ${guild.name}.`,
            files: [attachment]
        }).catch((err) => {console.log(err)})
            console.log(`guildMemberAdd: ${member}`);
        } catch (err) {
            return console.log(err);
        }
    }
}