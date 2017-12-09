import os
from hashlib import sha256

audio_dir = os.getcwd() + '/audio/'
for f in os.listdir(audio_dir):
    file = os.path.splitext(f)[0]
    hashed_filename = sha256(file.encode()).hexdigest() + '.mp3'
    os.rename(audio_dir + f, audio_dir + hashed_filename)