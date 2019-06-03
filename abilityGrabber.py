from bs4 import BeautifulSoup
import mechanize
import re
import urllib    
from hashlib import sha256

br = mechanize.Browser()
br.set_handle_robots(False)
br.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 6.1) \
    AppleWebKit/537.36 (KHTML, like Gecko) \
    Chrome/41.0.2228.0 Safari/537.36')]

out = open('abilities.csv', 'w')

def parseHero(heroLink):
    heroname = urllib.unquote(heroLink.split('/')[-1].replace('_', ' '))
    html = br.open(heroLink)
    soup = BeautifulSoup(html.read(), 'lxml')
    abilities = soup.find_all(lambda elem: elem.name == 'div' and 'style' in elem.attrs and 'flex: 0 1 450px' in elem.attrs['style'])
    print '%d abilities found' % (len(abilities),)
    ability_names = set()
    for ability in abilities:
        # get the ability sound file
        btn = ability.find('source', type='audio/mpeg')
        if btn is None:
            continue
        sndlink = btn.attrs['src']

        # get the ability icon
        icon = ability.find('img', width=128)
        iconlink = icon.attrs['src']

        # get the name of the ability
        name = ability.div.get_text('|').split('|')[0]

        if name in ['Cleave', 'Aegis of the Immortal', 'Telekinesis Land', 'Stop Sun Ray', 'Return Chakram',
                    'Illuminate (Spirit Form)', 'Split Earth', 'Shadow Poison Release', 'Unstable Concoction Throw',
                    'Release Illuminate (Spirit Form)', 'Break Tether', 'Trap', 'Release', 'Stop Rolling', 'Morph Replicate',
                    'Return Astral Spirit', 'Stop Icarus Dive', 'Consume', 'Boulder Smash', 'Cancel Dark Rift',
                    'Song of the Siren End', 'Eject', 'Unburrow', 'Return Chakram (Aghanim\'s Scepter)',
                    'Chakram (Aghanim\'s Scepter)', 'Return Chakram (Aghanim\'s Scepter)', 'Illuminate (Aghanim\'s Scepter)',
                    'Release Illuminate (Aghanim\'s Scepter)', 'Morph']:
            continue
        elif name == 'Blink':
            if heroname == 'Anti-Mage':
                name = 'Blink (AM)'
            elif heroname == 'Queen of Pain':
                name = 'Blink (QoP)'
        elif name == 'Hex':
            if heroname == 'Lion':
                name = 'Hex (Lion)'
            elif heroname == 'Shadow Shaman':
                name = 'Hex (Shaman)'
        elif name in ['Shadowraze (Near)', 'Shadowraze (Medium)', 'Shadowraze (Far)']:
            name = 'Shadowraze'
        elif name == 'Return':
            if heroname == "Kunkka":
                name = "Return (Kunkka)"
            elif heroname == "Lone Druid":
                name = "Return (LD)"

        # prevents Savage Roar, Cinder Brew from duplicating
        if name in ability_names:
            continue
        ability_names.add(name)

        line = name + ',' + heroname + '\n'
        print line
        out.write(line)

        dl = urllib.URLopener()
        dl.retrieve(sndlink, 'audio/'+name+'.mp3')
        dl.retrieve(iconlink, 'img/icons/'+name+'.png')

html = br.open('http://dota2.gamepedia.com/Heroes')
soup = BeautifulSoup(html.read(), 'lxml')
heroes = soup.find_all('img', width=150, height=84)
for hero in heroes:
    link = 'http://dota2.gamepedia.com' + hero.parent.attrs['href']
    print link
    parseHero(link)
