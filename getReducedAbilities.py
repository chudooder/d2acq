import json

abilitiesList = [line.strip() for line in open('abilities.txt')]
abilitiesDict = []

for line in open('abilities.csv'):
    ability, hero = line.strip().split(',')
    print(ability, hero)
    if ability in abilitiesList:
        abilitiesDict.append({'value': ability, 'hero': hero})

json.dump(abilitiesDict, open('abilities.json', 'w'))