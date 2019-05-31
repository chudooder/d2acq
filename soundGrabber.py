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

def parseHero(heroLink):
    html = br.open(heroLink)
    soup = BeautifulSoup(html.read(), 'lxml')
    abilities = soup.find_all(lambda elem: elem.name == 'div' and 'style' in elem.attrs and 'flex: 0 1 450px' in elem.attrs['style'])
    print '%d abilities found' % (len(abilities),)
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

        if name == 'Cleave':
            continue
        if name == 'Aegis of the Immortal':
            continue

        print name

        dl = urllib.URLopener()
        dl.retrieve(sndlink, 'audio/'+sha256(name.encode()).hexdigest() +'.mp3')
        dl.retrieve(iconlink, 'img/icons/'+name+'.png')

html = br.open('http://dota2.gamepedia.com/Heroes')
soup = BeautifulSoup(html.read(), 'lxml')
heroes = soup.find_all('img', width=150, height=84)
for hero in heroes:
    link = 'http://dota2.gamepedia.com' + hero.parent.attrs['href']
    print link
    parseHero(link)
