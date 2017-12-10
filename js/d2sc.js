var ABILITIES = [{"hero": "Abaddon", "value": "Mist Coil"}, {"hero": "Abaddon", "value": "Aphotic Shield"}, {"hero": "Abaddon", "value": "Borrowed Time"}, {"hero": "Alchemist", "value": "Acid Spray"}, {"hero": "Alchemist", "value": "Unstable Concoction"}, {"hero": "Alchemist", "value": "Chemical Rage"}, {"hero": "Alchemist", "value": "Aghanim's Scepter Synth"}, {"hero": "Axe", "value": "Berserker's Call"}, {"hero": "Axe", "value": "Battle Hunger"}, {"hero": "Axe", "value": "Counter Helix"}, {"hero": "Axe", "value": "Culling Blade"}, {"hero": "Beastmaster", "value": "Wild Axes"}, {"hero": "Beastmaster", "value": "Call of the Wild"}, {"hero": "Beastmaster", "value": "Primal Roar"}, {"hero": "Brewmaster", "value": "Thunder Clap"}, {"hero": "Brewmaster", "value": "Drunken Haze"}, {"hero": "Brewmaster", "value": "Drunken Brawler"}, {"hero": "Brewmaster", "value": "Primal Split"}, {"hero": "Brewmaster", "value": "Hurl Boulder"}, {"hero": "Brewmaster", "value": "Dispel Magic"}, {"hero": "Brewmaster", "value": "Cyclone"}, {"hero": "Brewmaster", "value": "Wind Walk"}, {"hero": "Bristleback", "value": "Viscous Nasal Goo"}, {"hero": "Bristleback", "value": "Quill Spray"}, {"hero": "Bristleback", "value": "Bristleback"}, {"hero": "Centaur Warrunner", "value": "Hoof Stomp"}, {"hero": "Centaur Warrunner", "value": "Double Edge"}, {"hero": "Centaur Warrunner", "value": "Stampede"}, {"hero": "Chaos Knight", "value": "Chaos Bolt"}, {"hero": "Chaos Knight", "value": "Reality Rift"}, {"hero": "Chaos Knight", "value": "Chaos Strike"}, {"hero": "Chaos Knight", "value": "Phantasm"}, {"hero": "Clockwerk", "value": "Battery Assault"}, {"hero": "Clockwerk", "value": "Power Cogs"}, {"hero": "Clockwerk", "value": "Rocket Flare"}, {"hero": "Clockwerk", "value": "Hookshot"}, {"hero": "Doom", "value": "Devour"}, {"hero": "Doom", "value": "Scorched Earth"}, {"hero": "Doom", "value": "Infernal Blade"}, {"hero": "Doom", "value": "Doom"}, {"hero": "Dragon Knight", "value": "Breathe Fire"}, {"hero": "Dragon Knight", "value": "Dragon Tail"}, {"hero": "Dragon Knight", "value": "Elder Dragon Form"}, {"hero": "Earth Spirit", "value": "Rolling Boulder"}, {"hero": "Earth Spirit", "value": "Geomagnetic Grip"}, {"hero": "Earth Spirit", "value": "Stone Remnant"}, {"hero": "Earth Spirit", "value": "Magnetize"}, {"hero": "Earth Spirit", "value": "Enchant Remnant"}, {"hero": "Earthshaker", "value": "Fissure"}, {"hero": "Earthshaker", "value": "Enchant Totem"}, {"hero": "Earthshaker", "value": "Echo Slam"}, {"hero": "Elder Titan", "value": "Echo Stomp"}, {"hero": "Elder Titan", "value": "Astral Spirit"}, {"hero": "Elder Titan", "value": "Earth Splitter"}, {"hero": "Huskar", "value": "Inner Vitality"}, {"hero": "Huskar", "value": "Burning Spear"}, {"hero": "Huskar", "value": "Life Break"}, {"hero": "Io", "value": "Tether"}, {"hero": "Io", "value": "Spirits"}, {"hero": "Io", "value": "Overcharge"}, {"hero": "Io", "value": "Relocate"}, {"hero": "Kunkka", "value": "Torrent"}, {"hero": "Kunkka", "value": "Tidebringer"}, {"hero": "Kunkka", "value": "X Marks the Spot"}, {"hero": "Kunkka", "value": "Return"}, {"hero": "Kunkka", "value": "Ghostship"}, {"hero": "Legion Commander", "value": "Overwhelming Odds"}, {"hero": "Legion Commander", "value": "Press the Attack"}, {"hero": "Legion Commander", "value": "Moment of Courage"}, {"hero": "Legion Commander", "value": "Duel"}, {"hero": "Lifestealer", "value": "Rage"}, {"hero": "Lifestealer", "value": "Open Wounds"}, {"hero": "Lifestealer", "value": "Infest"}, {"hero": "Lifestealer", "value": "Assimilate"}, {"hero": "Lycan", "value": "Summon Wolves"}, {"hero": "Lycan", "value": "Howl"}, {"hero": "Lycan", "value": "Shapeshift"}, {"hero": "Lycan", "value": "Cripple"}, {"hero": "Magnus", "value": "Shockwave"}, {"hero": "Magnus", "value": "Empower"}, {"hero": "Magnus", "value": "Skewer"}, {"hero": "Magnus", "value": "Reverse Polarity"}, {"hero": "Night Stalker", "value": "Void"}, {"hero": "Night Stalker", "value": "Crippling Fear"}, {"hero": "Night Stalker", "value": "Darkness"}, {"hero": "Omniknight", "value": "Purification"}, {"hero": "Omniknight", "value": "Repel"}, {"hero": "Omniknight", "value": "Guardian Angel"}, {"hero": "Phoenix", "value": "Icarus Dive"}, {"hero": "Phoenix", "value": "Fire Spirits"}, {"hero": "Phoenix", "value": "Launch Fire Spirit"}, {"hero": "Phoenix", "value": "Sun Ray"}, {"hero": "Phoenix", "value": "Supernova"}, {"hero": "Pudge", "value": "Meat Hook"}, {"hero": "Pudge", "value": "Rot"}, {"hero": "Pudge", "value": "Dismember"}, {"hero": "Sand King", "value": "Burrowstrike"}, {"hero": "Sand King", "value": "Sand Storm"}, {"hero": "Sand King", "value": "Caustic Finale"}, {"hero": "Sand King", "value": "Epicenter"}, {"hero": "Slardar", "value": "Guardian Sprint"}, {"hero": "Slardar", "value": "Slithereen Crush"}, {"hero": "Slardar", "value": "Bash of the Deep"}, {"hero": "Slardar", "value": "Corrosive Haze"}, {"hero": "Spirit Breaker", "value": "Charge of Darkness"}, {"hero": "Spirit Breaker", "value": "Empowering Haste"}, {"hero": "Spirit Breaker", "value": "Greater Bash"}, {"hero": "Spirit Breaker", "value": "Nether Strike"}, {"hero": "Sven", "value": "Storm Hammer"}, {"hero": "Sven", "value": "Great Cleave"}, {"hero": "Sven", "value": "Warcry"}, {"hero": "Sven", "value": "God's Strength"}, {"hero": "Tidehunter", "value": "Gush"}, {"hero": "Tidehunter", "value": "Kraken Shell"}, {"hero": "Tidehunter", "value": "Anchor Smash"}, {"hero": "Tidehunter", "value": "Ravage"}, {"hero": "Timbersaw", "value": "Whirling Death"}, {"hero": "Timbersaw", "value": "Timber Chain"}, {"hero": "Timbersaw", "value": "Chakram"}, {"hero": "Tiny", "value": "Avalanche"}, {"hero": "Tiny", "value": "Toss"}, {"hero": "Tiny", "value": "Tree Grab"}, {"hero": "Tiny", "value": "Tree Throw"}, {"hero": "Tiny", "value": "Grow"}, {"hero": "Treant Protector", "value": "Nature's Guise"}, {"hero": "Treant Protector", "value": "Leech Seed"}, {"hero": "Treant Protector", "value": "Living Armor"}, {"hero": "Treant Protector", "value": "Overgrowth"}, {"hero": "Treant Protector", "value": "Eyes In The Forest"}, {"hero": "Tusk", "value": "Ice Shards"}, {"hero": "Tusk", "value": "Snowball"}, {"hero": "Tusk", "value": "Frozen Sigil"}, {"hero": "Tusk", "value": "Walrus PUNCH!"}, {"hero": "Tusk", "value": "Walrus Kick"}, {"hero": "Underlord", "value": "Firestorm"}, {"hero": "Underlord", "value": "Pit of Malice"}, {"hero": "Underlord", "value": "Dark Rift"}, {"hero": "Undying", "value": "Decay"}, {"hero": "Undying", "value": "Soul Rip"}, {"hero": "Undying", "value": "Tombstone"}, {"hero": "Undying", "value": "Flesh Golem"}, {"hero": "Undying", "value": "Reincarnation"}, {"hero": "Wraith King", "value": "Wraithfire Blast"}, {"hero": "Wraith King", "value": "Mortal Strike"}, {"hero": "Wraith King", "value": "Reincarnation"}, {"hero": "Anti-Mage", "value": "Mana Break"}, {"hero": "Anti-Mage", "value": "Blink (AM)"}, {"hero": "Anti-Mage", "value": "Spell Shield"}, {"hero": "Anti-Mage", "value": "Mana Void"}, {"hero": "Arc Warden", "value": "Flux"}, {"hero": "Arc Warden", "value": "Magnetic Field"}, {"hero": "Arc Warden", "value": "Spark Wraith"}, {"hero": "Arc Warden", "value": "Tempest Double"}, {"hero": "Bloodseeker", "value": "Bloodrage"}, {"hero": "Bloodseeker", "value": "Blood Rite"}, {"hero": "Bloodseeker", "value": "Rupture"}, {"hero": "Bounty Hunter", "value": "Shuriken Toss"}, {"hero": "Bounty Hunter", "value": "Jinada"}, {"hero": "Bounty Hunter", "value": "Shadow Walk"}, {"hero": "Bounty Hunter", "value": "Track"}, {"hero": "Broodmother", "value": "Spawn Spiderlings"}, {"hero": "Broodmother", "value": "Spin Web"}, {"hero": "Broodmother", "value": "Insatiable Hunger"}, {"hero": "Clinkz", "value": "Strafe"}, {"hero": "Clinkz", "value": "Searing Arrows"}, {"hero": "Clinkz", "value": "Skeleton Walk"}, {"hero": "Clinkz", "value": "Death Pact"}, {"hero": "Drow Ranger", "value": "Frost Arrows"}, {"hero": "Drow Ranger", "value": "Gust"}, {"hero": "Ember Spirit", "value": "Searing Chains"}, {"hero": "Ember Spirit", "value": "Sleight of Fist"}, {"hero": "Ember Spirit", "value": "Flame Guard"}, {"hero": "Ember Spirit", "value": "Fire Remnant"}, {"hero": "Ember Spirit", "value": "Activate Fire Remnant"}, {"hero": "Faceless Void", "value": "Time Walk"}, {"hero": "Faceless Void", "value": "Time Dilation"}, {"hero": "Faceless Void", "value": "Time Lock"}, {"hero": "Faceless Void", "value": "Chronosphere"}, {"hero": "Gyrocopter", "value": "Rocket Barrage"}, {"hero": "Gyrocopter", "value": "Homing Missile"}, {"hero": "Gyrocopter", "value": "Flak Cannon"}, {"hero": "Gyrocopter", "value": "Call Down"}, {"hero": "Juggernaut", "value": "Blade Fury"}, {"hero": "Juggernaut", "value": "Healing Ward"}, {"hero": "Juggernaut", "value": "Blade Dance"}, {"hero": "Juggernaut", "value": "Omnislash"}, {"hero": "Lone Druid", "value": "Summon Spirit Bear"}, {"hero": "Lone Druid", "value": "Rabid"}, {"hero": "Lone Druid", "value": "Savage Roar"}, {"hero": "Lone Druid", "value": "True Form"}, {"hero": "Lone Druid", "value": "Druid Form"}, {"hero": "Lone Druid", "value": "Battle Cry"}, {"hero": "Lone Druid", "value": "Return"}, {"hero": "Lone Druid", "value": "Entangling Claws"}, {"hero": "Luna", "value": "Lucent Beam"}, {"hero": "Luna", "value": "Moon Glaives"}, {"hero": "Luna", "value": "Eclipse"}, {"hero": "Medusa", "value": "Split Shot"}, {"hero": "Medusa", "value": "Mystic Snake"}, {"hero": "Medusa", "value": "Mana Shield"}, {"hero": "Medusa", "value": "Stone Gaze"}, {"hero": "Meepo", "value": "Earthbind"}, {"hero": "Meepo", "value": "Poof"}, {"hero": "Meepo", "value": "Geostrike"}, {"hero": "Mirana", "value": "Starstorm"}, {"hero": "Mirana", "value": "Sacred Arrow"}, {"hero": "Mirana", "value": "Leap"}, {"hero": "Mirana", "value": "Moonlight Shadow"}, {"hero": "Monkey King", "value": "Boundless Strike"}, {"hero": "Monkey King", "value": "Tree Dance"}, {"hero": "Monkey King", "value": "Primal Spring"}, {"hero": "Monkey King", "value": "Jingu Mastery"}, {"hero": "Monkey King", "value": "Mischief"}, {"hero": "Monkey King", "value": "Revert Form"}, {"hero": "Monkey King", "value": "Wukong's Command"}, {"hero": "Morphling", "value": "Waveform"}, {"hero": "Morphling", "value": "Adaptive Strike (Agility)"}, {"hero": "Morphling", "value": "Adaptive Strike (Strength)"}, {"hero": "Morphling", "value": "Attribute Shift (Agility Gain)"}, {"hero": "Morphling", "value": "Attribute Shift (Strength Gain)"}, {"hero": "Naga Siren", "value": "Mirror Image"}, {"hero": "Naga Siren", "value": "Ensnare"}, {"hero": "Naga Siren", "value": "Rip Tide"}, {"hero": "Naga Siren", "value": "Song of the Siren"}, {"hero": "Nyx Assassin", "value": "Impale"}, {"hero": "Nyx Assassin", "value": "Mana Burn"}, {"hero": "Nyx Assassin", "value": "Spiked Carapace"}, {"hero": "Nyx Assassin", "value": "Vendetta"}, {"hero": "Nyx Assassin", "value": "Burrow"}, {"hero": "Pangolier", "value": "Swashbuckle"}, {"hero": "Pangolier", "value": "Shield Crash"}, {"hero": "Pangolier", "value": "Heartpiercer"}, {"hero": "Pangolier", "value": "Rolling Thunder"}, {"hero": "Phantom Assassin", "value": "Stifling Dagger"}, {"hero": "Phantom Assassin", "value": "Phantom Strike"}, {"hero": "Phantom Assassin", "value": "Coup de Grace"}, {"hero": "Phantom Lancer", "value": "Spirit Lance"}, {"hero": "Phantom Lancer", "value": "Doppelganger"}, {"hero": "Phantom Lancer", "value": "Phantom Rush"}, {"hero": "Phantom Lancer", "value": "Juxtapose"}, {"hero": "Razor", "value": "Plasma Field"}, {"hero": "Razor", "value": "Static Link"}, {"hero": "Razor", "value": "Unstable Current"}, {"hero": "Razor", "value": "Eye of the Storm"}, {"hero": "Riki", "value": "Smoke Screen"}, {"hero": "Riki", "value": "Blink Strike"}, {"hero": "Riki", "value": "Cloak and Dagger"}, {"hero": "Riki", "value": "Tricks of the Trade"}, {"hero": "Shadow Fiend", "value": "Shadowraze"}, {"hero": "Shadow Fiend", "value": "Requiem of Souls"}, {"hero": "Slark", "value": "Dark Pact"}, {"hero": "Slark", "value": "Pounce"}, {"hero": "Slark", "value": "Shadow Dance"}, {"hero": "Sniper", "value": "Shrapnel"}, {"hero": "Sniper", "value": "Assassinate"}, {"hero": "Spectre", "value": "Spectral Dagger"}, {"hero": "Spectre", "value": "Desolate"}, {"hero": "Spectre", "value": "Haunt"}, {"hero": "Spectre", "value": "Reality"}, {"hero": "Templar Assassin", "value": "Refraction"}, {"hero": "Templar Assassin", "value": "Meld"}, {"hero": "Templar Assassin", "value": "Psi Blades"}, {"hero": "Templar Assassin", "value": "Psionic Trap"}, {"hero": "Terrorblade", "value": "Reflection"}, {"hero": "Terrorblade", "value": "Conjure Image"}, {"hero": "Terrorblade", "value": "Metamorphosis"}, {"hero": "Terrorblade", "value": "Sunder"}, {"hero": "Troll Warlord", "value": "Berserker's Rage"}, {"hero": "Troll Warlord", "value": "Whirling Axes (Ranged)"}, {"hero": "Troll Warlord", "value": "Whirling Axes (Melee)"}, {"hero": "Troll Warlord", "value": "Battle Trance"}, {"hero": "Ursa", "value": "Earthshock"}, {"hero": "Ursa", "value": "Overpower"}, {"hero": "Ursa", "value": "Enrage"}, {"hero": "Vengeful Spirit", "value": "Magic Missile"}, {"hero": "Vengeful Spirit", "value": "Wave of Terror"}, {"hero": "Vengeful Spirit", "value": "Nether Swap"}, {"hero": "Venomancer", "value": "Venomous Gale"}, {"hero": "Venomancer", "value": "Plague Ward"}, {"hero": "Venomancer", "value": "Poison Nova"}, {"hero": "Viper", "value": "Poison Attack"}, {"hero": "Viper", "value": "Nethertoxin"}, {"hero": "Viper", "value": "Corrosive Skin"}, {"hero": "Viper", "value": "Viper Strike"}, {"hero": "Weaver", "value": "The Swarm"}, {"hero": "Weaver", "value": "Shukuchi"}, {"hero": "Weaver", "value": "Geminate Attack"}, {"hero": "Weaver", "value": "Time Lapse"}, {"hero": "Ancient Apparition", "value": "Cold Feet"}, {"hero": "Ancient Apparition", "value": "Ice Vortex"}, {"hero": "Ancient Apparition", "value": "Chilling Touch"}, {"hero": "Ancient Apparition", "value": "Ice Blast"}, {"hero": "Bane", "value": "Enfeeble"}, {"hero": "Bane", "value": "Brain Sap"}, {"hero": "Bane", "value": "Nightmare"}, {"hero": "Bane", "value": "Nightmare End"}, {"hero": "Bane", "value": "Fiend's Grip"}, {"hero": "Batrider", "value": "Sticky Napalm"}, {"hero": "Batrider", "value": "Flamebreak"}, {"hero": "Batrider", "value": "Firefly"}, {"hero": "Batrider", "value": "Flaming Lasso"}, {"hero": "Chen", "value": "Penitence"}, {"hero": "Chen", "value": "Test of Faith"}, {"hero": "Chen", "value": "Holy Persuasion"}, {"hero": "Chen", "value": "Hand of God"}, {"hero": "Crystal Maiden", "value": "Crystal Nova"}, {"hero": "Crystal Maiden", "value": "Frostbite"}, {"hero": "Crystal Maiden", "value": "Freezing Field"}, {"hero": "Dark Seer", "value": "Vacuum"}, {"hero": "Dark Seer", "value": "Ion Shell"}, {"hero": "Dark Seer", "value": "Surge"}, {"hero": "Dark Seer", "value": "Wall of Replica"}, {"hero": "Dark Willow", "value": "Bramble Maze"}, {"hero": "Dark Willow", "value": "Shadow Realm"}, {"hero": "Dark Willow", "value": "Cursed Crown"}, {"hero": "Dark Willow", "value": "Bedlam"}, {"hero": "Dark Willow", "value": "Terrorize"}, {"hero": "Dazzle", "value": "Poison Touch"}, {"hero": "Dazzle", "value": "Shallow Grave"}, {"hero": "Dazzle", "value": "Shadow Wave"}, {"hero": "Dazzle", "value": "Weave"}, {"hero": "Death Prophet", "value": "Crypt Swarm"}, {"hero": "Death Prophet", "value": "Silence"}, {"hero": "Death Prophet", "value": "Spirit Siphon"}, {"hero": "Death Prophet", "value": "Exorcism"}, {"hero": "Disruptor", "value": "Thunder Strike"}, {"hero": "Disruptor", "value": "Glimpse"}, {"hero": "Disruptor", "value": "Kinetic Field"}, {"hero": "Disruptor", "value": "Static Storm"}, {"hero": "Enchantress", "value": "Untouchable"}, {"hero": "Enchantress", "value": "Enchant"}, {"hero": "Enchantress", "value": "Nature's Attendants"}, {"hero": "Enchantress", "value": "Impetus"}, {"hero": "Enigma", "value": "Malefice"}, {"hero": "Enigma", "value": "Demonic Conversion"}, {"hero": "Enigma", "value": "Midnight Pulse"}, {"hero": "Enigma", "value": "Black Hole"}, {"hero": "Invoker", "value": "Invoke"}, {"hero": "Invoker", "value": "Cold Snap"}, {"hero": "Invoker", "value": "Ghost Walk"}, {"hero": "Invoker", "value": "Ice Wall"}, {"hero": "Invoker", "value": "EMP"}, {"hero": "Invoker", "value": "Tornado"}, {"hero": "Invoker", "value": "Alacrity"}, {"hero": "Invoker", "value": "Sun Strike"}, {"hero": "Invoker", "value": "Forge Spirit"}, {"hero": "Invoker", "value": "Chaos Meteor"}, {"hero": "Invoker", "value": "Deafening Blast"}, {"hero": "Jakiro", "value": "Dual Breath"}, {"hero": "Jakiro", "value": "Ice Path"}, {"hero": "Jakiro", "value": "Liquid Fire"}, {"hero": "Jakiro", "value": "Macropyre"}, {"hero": "Keeper of the Light", "value": "Illuminate"}, {"hero": "Keeper of the Light", "value": "Mana Leak"}, {"hero": "Keeper of the Light", "value": "Chakra Magic"}, {"hero": "Keeper of the Light", "value": "Spirit Form"}, {"hero": "Keeper of the Light", "value": "Recall"}, {"hero": "Keeper of the Light", "value": "Blinding Light"}, {"hero": "Leshrac", "value": "Diabolic Edict"}, {"hero": "Leshrac", "value": "Lightning Storm"}, {"hero": "Leshrac", "value": "Pulse Nova"}, {"hero": "Lich", "value": "Frost Blast"}, {"hero": "Lich", "value": "Ice Armor"}, {"hero": "Lich", "value": "Sacrifice"}, {"hero": "Lich", "value": "Chain Frost"}, {"hero": "Lina", "value": "Dragon Slave"}, {"hero": "Lina", "value": "Light Strike Array"}, {"hero": "Lina", "value": "Laguna Blade"}, {"hero": "Lion", "value": "Earth Spike"}, {"hero": "Lion", "value": "Hex (Lion)"}, {"hero": "Lion", "value": "Mana Drain"}, {"hero": "Lion", "value": "Finger of Death"}, {"hero": "Nature%27s Prophet", "value": "Sprout"}, {"hero": "Nature%27s Prophet", "value": "Teleportation"}, {"hero": "Nature%27s Prophet", "value": "Nature's Call"}, {"hero": "Nature%27s Prophet", "value": "Wrath of Nature"}, {"hero": "Necrophos", "value": "Death Pulse"}, {"hero": "Necrophos", "value": "Ghost Shroud"}, {"hero": "Necrophos", "value": "Reaper's Scythe"}, {"hero": "Ogre Magi", "value": "Fireblast"}, {"hero": "Ogre Magi", "value": "Ignite"}, {"hero": "Ogre Magi", "value": "Bloodlust"}, {"hero": "Ogre Magi", "value": "Multicast"}, {"hero": "Ogre Magi", "value": "Unrefined Fireblast"}, {"hero": "Oracle", "value": "Fortune's End"}, {"hero": "Oracle", "value": "Fate's Edict"}, {"hero": "Oracle", "value": "Purifying Flames"}, {"hero": "Oracle", "value": "False Promise"}, {"hero": "Outworld Devourer", "value": "Arcane Orb"}, {"hero": "Outworld Devourer", "value": "Astral Imprisonment"}, {"hero": "Outworld Devourer", "value": "Essence Aura"}, {"hero": "Outworld Devourer", "value": "Sanity's Eclipse"}, {"hero": "Puck", "value": "Illusory Orb"}, {"hero": "Puck", "value": "Ethereal Jaunt"}, {"hero": "Puck", "value": "Waning Rift"}, {"hero": "Puck", "value": "Phase Shift"}, {"hero": "Puck", "value": "Dream Coil"}, {"hero": "Pugna", "value": "Nether Blast"}, {"hero": "Pugna", "value": "Decrepify"}, {"hero": "Pugna", "value": "Nether Ward"}, {"hero": "Pugna", "value": "Life Drain"}, {"hero": "Queen of Pain", "value": "Shadow Strike"}, {"hero": "Queen of Pain", "value": "Blink (QoP)"}, {"hero": "Queen of Pain", "value": "Scream of Pain"}, {"hero": "Queen of Pain", "value": "Sonic Wave"}, {"hero": "Queen of Pain", "value": "Spell Block"}, {"hero": "Rubick", "value": "Telekinesis"}, {"hero": "Rubick", "value": "Fade Bolt"}, {"hero": "Rubick", "value": "Null Field"}, {"hero": "Rubick", "value": "Spell Steal"}, {"hero": "Shadow Demon", "value": "Disruption"}, {"hero": "Shadow Demon", "value": "Soul Catcher"}, {"hero": "Shadow Demon", "value": "Shadow Poison"}, {"hero": "Shadow Demon", "value": "Demonic Purge"}, {"hero": "Shadow Shaman", "value": "Ether Shock"}, {"hero": "Shadow Shaman", "value": "Hex (Shaman)"}, {"hero": "Shadow Shaman", "value": "Shackles"}, {"hero": "Shadow Shaman", "value": "Mass Serpent Ward"}, {"hero": "Silencer", "value": "Arcane Curse"}, {"hero": "Silencer", "value": "Glaives of Wisdom"}, {"hero": "Silencer", "value": "Last Word"}, {"hero": "Silencer", "value": "Global Silence"}, {"hero": "Skywrath Mage", "value": "Arcane Bolt"}, {"hero": "Skywrath Mage", "value": "Concussive Shot"}, {"hero": "Skywrath Mage", "value": "Ancient Seal"}, {"hero": "Skywrath Mage", "value": "Mystic Flare"}, {"hero": "Storm Spirit", "value": "Static Remnant"}, {"hero": "Storm Spirit", "value": "Electric Vortex"}, {"hero": "Storm Spirit", "value": "Overload"}, {"hero": "Storm Spirit", "value": "Ball Lightning"}, {"hero": "Techies", "value": "Proximity Mines"}, {"hero": "Techies", "value": "Stasis Trap"}, {"hero": "Techies", "value": "Blast Off!"}, {"hero": "Techies", "value": "Minefield Sign"}, {"hero": "Techies", "value": "Remote Mines"}, {"hero": "Techies", "value": "Focused Detonate"}, {"hero": "Techies", "value": "Pinpoint Detonate"}, {"hero": "Tinker", "value": "Laser"}, {"hero": "Tinker", "value": "Heat-Seeking Missile"}, {"hero": "Tinker", "value": "March of the Machines"}, {"hero": "Tinker", "value": "Rearm"}, {"hero": "Visage", "value": "Grave Chill"}, {"hero": "Visage", "value": "Soul Assumption"}, {"hero": "Visage", "value": "Summon Familiars"}, {"hero": "Visage", "value": "Stone Form"}, {"hero": "Warlock", "value": "Fatal Bonds"}, {"hero": "Warlock", "value": "Shadow Word"}, {"hero": "Warlock", "value": "Upheaval"}, {"hero": "Warlock", "value": "Chaotic Offering"}, {"hero": "Windranger", "value": "Shackleshot"}, {"hero": "Windranger", "value": "Powershot"}, {"hero": "Windranger", "value": "Windrun"}, {"hero": "Windranger", "value": "Focus Fire"}, {"hero": "Winter Wyvern", "value": "Arctic Burn"}, {"hero": "Winter Wyvern", "value": "Splinter Blast"}, {"hero": "Winter Wyvern", "value": "Cold Embrace"}, {"hero": "Winter Wyvern", "value": "Winter's Curse"}, {"hero": "Witch Doctor", "value": "Paralyzing Cask"}, {"hero": "Witch Doctor", "value": "Voodoo Restoration"}, {"hero": "Witch Doctor", "value": "Maledict"}, {"hero": "Witch Doctor", "value": "Death Ward"}, {"hero": "Zeus", "value": "Arc Lightning"}, {"hero": "Zeus", "value": "Lightning Bolt"}, {"hero": "Zeus", "value": "Static Field"}, {"hero": "Zeus", "value": "Thundergod's Wrath"}, {"hero": "Zeus", "value": "Nimbus"}]
var unplayed = ABILITIES.slice();

var curAbility;
var hidden;
var score;
var streak;
var misses;
var hintGiven;


var resetGame = function() {
	score = 0;
	streak = 0;
	misses = 0;
	unplayed = ABILITIES.slice();
	hidden = true;
	hintGiven = false;

	$('.reset').css('visibility', 'hidden');

	setNewAbility();
	updateScoreElements(0);
};

var setNewAbility = function() {
	var index = Math.floor(Math.random() * unplayed.length);
	curAbility = unplayed[index];

	// hash curAbility to prevent DOM inspection cheating
    var hashedAbility = sha256(curAbility.value);

	hidden = true;
	hintGiven = false;

	// Get rid of old hint
	$('#cheat').text('Give me a hint! (less points)');
	// hide ability icon
	$('#ability-icon').attr('src', 'img/icons/Unknown.png');
	//Set text to ???
	$('#ability-text').text('???');
	// set ability audio
	$('#ability-audio').attr('src', 'audio/'+hashedAbility+'.mp3');
	// load and play audio
	$('#ability-player').load();
	$('.typeahead').typeahead('val', '');
};

var giveHint = function() {
	if (hintGiven == true) {
		return;
	}
	var right = Math.floor(Math.random() * 4);
	var options = [];
	for (var i = 0; i <= 3; i++) {
		if (i == right) {
			options.push(" " + curAbility.value);
		}
		else {
			options.push(" " + ABILITIES[Math.floor(Math.random() * ABILITIES.length)].value);
		}
	}
	$('#cheat').text('It\'s one of these:' + options);
	hintGiven = true;
};

var revealAbility = function() {
	// reveal ability icon
	$('#ability-icon').attr('src', 'img/icons/'+curAbility.value+'.png');
	// set ability text
	$('#ability-text').text(curAbility.value);
};

var updateScore = function(correct) {
	var delta = 0;
	if(correct) {
		delta = 100 + 20 * streak;
		if(hintGiven) {
			delta /= 5;
		}
		score += delta;
		streak++;
		// create floating +score
	} else {
		misses++;
		streak = 0;
	}
	updateScoreElements(delta);
};

var updateScoreElements = function(delta) {
	$('#score-text').text("Score: "+score);
	$('#streak-text').text("Streak: "+streak);
	$('#misses-text').text("Misses: "+misses);
	if(delta != 0) {
		$('#score-text').prepend("<div class=\"score-popup\">+"+delta+"</div>");
		$(".score-popup").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", 
		function(){
			$('.score-popup').remove();
		});
	}

};

var submitAnswer = function(answer) {
	// console.log(answer)
	revealAbility();
	var correct = (answer === curAbility.value);
	updateScore(correct);
	unplayed.splice(unplayed.indexOf(curAbility.value), 1);
	if(misses < 3 && unplayed.length > 0) {
		setTimeout(function() {
			setNewAbility();
		}, 2000);
	} else {
		$('.reset').css('visibility', 'visible');
        if(unplayed.length == 0) {
            $('.reset').text('Complete victory! Play again?');
        } else {
            $('.reset').text('Game over! Play again?');
        }
	}

};

$(document).ready(function() {
	$('.reset').click(function() {
		resetGame();
	});
	resetGame();

    var hintbox = $('#cheat');
    hintbox.click(function(){
        giveHint();
    })
});
