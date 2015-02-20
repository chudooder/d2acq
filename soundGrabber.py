from bs4 import BeautifulSoup
import mechanize
import re
import urllib	

br = mechanize.Browser()
br.set_handle_robots(False)
br.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 6.1) \
                    AppleWebKit/537.36 (KHTML, like Gecko) \
                    Chrome/41.0.2228.0 Safari/537.36')]

def parseHero(heroLink):
	html = br.open(heroLink)
	soup = BeautifulSoup(html.read())
	abilities = soup.find_all('table', class_ = 'abilitytable')
	for ability in abilities:
		# get the ability sound file
		btn = ability.find('a', title='Play', class_='sm2_button')
		if btn is None:
			continue
		sndlink = btn.attrs['href']

		# get the ability icon
		icon = ability.find('img', width=128)
		iconlink = icon.attrs['src']

		# get the name of the ability
		match = re.search(r'/([\w\d%_-]+)\.mp3$', sndlink)
		name = re.sub('_', ' ', urllib.unquote(match.group(1)).encode('ascii', 'ignore'))

		print name

		dl = urllib.URLopener()
		dl.retrieve(sndlink, 'sounds/'+name+'.mp3')
		dl.retrieve(iconlink, 'icons/'+name+'.png')


html = br.open('http://dota2.gamepedia.com/Heroes')
soup = BeautifulSoup(html.read())
heroes = soup.find_all('img', width=80, height=45)
start = False
for hero in heroes:
	link = 'http://dota2.gamepedia.com/'+re.sub(' ', '_', hero.attrs['alt'])
	print link
	if 'Tinker' in link:
		start = True

	if start == True:
		parseHero(link)
