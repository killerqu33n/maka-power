import discord
import aiml
import os
from dotenv import load_dotenv

client = discord.Client()

#AIML
kernel = aiml.Kernel()
kernel.learn('std-startup.xml')
kernel.respond('LOAD AIML B')

#ready
@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

#message
@client.event
async def on_message(message):
    sessionID = message.author.id
    text = message.content
    
    if message.author == client.user:
        return

    if message.content.startswith('Hello'):
        await message.channel.send('Hello, World!')

    try:
        aiml_response = kernel.respond(text, sessionID=sessionID)   #responds from aiml
        await message.channel.send(aiml_response)

    except:
        pass

load_dotenv()   #loads environment variables from .env
client.run(os.getenv('TOKEN'))  #run