import os

out = open('abilities.txt', 'w')

for f in os.listdir(os.getcwd()+'/icons'):
	out.write(f+'\n')

out.close()