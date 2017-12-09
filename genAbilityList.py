import os

out = open('abilities.txt', 'w')

for f in os.listdir(os.getcwd()+'/img/icons'):
    out.write(os.path.splitext(f)[0]+'\n')

out.close()