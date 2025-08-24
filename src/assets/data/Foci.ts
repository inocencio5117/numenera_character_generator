const fociRepository = [
  {
    name: "Absorbs Energy",
    sourcebook: "Numenera Destiny",
    page: 55,
    equipment: [],
    abilities: ["Absorb Kinect Energy", "Release Energy"],
    sources: [{ sourcebook: "Players Guide 2e", page: 59 }],
  },
  {
    name: "Acts Without Consequences",
    sourcebook: "Numenera Destiny",
    page: 57,
    equipment: [
      `Deck of cards and a
    “lucky” oddity of the GM’s choice.`,
    ],
    abilities: ["Slip Into Shadow", "Blameless"],
    sources: [{ sourcebook: "Players Guide 2e", page: 60 }],
  },
  {
    name: "Adjures The Leviathan",
    sourcebook: "Numenera Destiny",
    page: 58,
    equipment: [],
    abilities: ["Adjures Creature", "Ninth World Bestiary Knowledge"],
    sources: [{ sourcebook: "Players Guide 2e", page: 60 }],
  },
  {
    name: "Augment Flesh With Grafts",
    sourcebook: "Numenera Destiny",
    page: 59,
    equipment: [],
    abilities: ["Autodoctor", "Surgical Graft"],
    sources: [{ sourcebook: "Players Guide 2e", page: 61 }],
  },
  {
    name: "Battles Automatons",
    sourcebook: "Numenera Destiny",
    page: 61,
    equipment: [
      "Bits and pieces that you tore from the husks of automatons you have destroyed in the past",
    ],
    abilities: ["Machine Vulnerabilities"],
    sources: [{ sourcebook: "Players Guide 2e", page: 62 }],
  },
  {
    name: "Bears a Halo of Fire",
    sourcebook: "Numenera Discovery",
    page: 58,
    equipment: [
      "An artifact that sprays inanimate objects to make them fire-resistant",
    ],
    abilities: ["Fire esoteries", "Shroud of Flame"],
    sources: [{ sourcebook: "Players Guide 2e", page: 62 }],
  },
  {
    name: "Brandishes an Exotic Shield",
    sourcebook: "Numenera Destiny",
    page: 63,
    equipment: [],
    abilities: ["Force Field Shield", "Force Bash"],
    sources: [{ sourcebook: "Players Guide 2e", page: 63 }],
  },
  {
    name: "Breaks Down Walls",
    sourcebook: "Numenera Destiny",
    page: 64,
    equipment: [
      "A mechanism of some sort is fused with your flesh. You think it might have something to do with your ability to pierce solid material.",
    ],
    abilities: ["Breaker", "Hard Synthsteel"],
    sources: [{ sourcebook: "Players Guide 2e", page: 64 }],
  },
  {
    name: "Builds Tomorrow",
    sourcebook: "Numenera Destiny",
    page: 66,
    equipment: [
      "You begin with one numenera plan for an installation or cypher of your choice and a bag of light tools. You also have 3 units of io, 3 units of responsive synth, and 3 units of parts.",
    ],
    abilities: ["Natural Crafter", "Seeds of a Plan", "Starting Iotum"],
    sources: [{ sourcebook: "Players Guide 2e", page: 64 }],
  },
  {
    name: "Carries a Quiver",
    sourcebook: "Numenera Corebook",
    page: 54,
    equipment: ["A well-made bow", "Two-dozen arrows"],
    abilities: ["Archer"],
    skills: {
      trained: ["Making arrows"],
    },
    sources: [{ sourcebook: "Players Guide", page: 40 }],
  },
  {
    name: "Commands Mental Powers",
    sourcebook: "Numenera Discovery",
    page: 60,
    equipment: [
      "Psionic Crystal/Jewel artifact. +1 Int when worn, -5 Int when without it",
    ],
    skills: {
      trained: ["Mind Control esoteries", "Mind Reading esoteries"],
    },
    abilities: ["Telepathic"],
    sources: [{ sourcebook: "Players Guide 2e", page: 65 }],
  },
  {
    name: "Controls Beasts",
    sourcebook: "Numenera Discovery",
    page: 62,
    equipment: ["3 days of animal feed", "Animal harness/collar/etc"],
    abilities: ["Beast Companion"],
    sources: [{ sourcebook: "Players Guide 2e", page: 66 }],
  },
  {
    name: "Controls Gravity",
    sourcebook: "Numenera Discovery",
    page: 63,
    oddities: [
      "Pen-sized oddity that displays the weight of objects it is pointed at in symbols only you can read",
    ],
    abilities: ["Hover"],
    sources: [{ sourcebook: "Players Guide", page: 66 }],
  },
  {
    name: "Crafts Illusions",
    sourcebook: "Numenera Discovery",
    page: 65,
    oddities: [
      "Oddity that looks like a clear glass panel. Manipulating switches on it shows strange, moving images",
    ],
    abilities: ["Psychedelic esoteries", "Minor Illusion"],
    sources: [{ sourcebook: "Players Guide", page: 67 }],
  },
  {
    name: "Crafts Unique Objects",
    sourcebook: "Numenera Corebook",
    page: 58,
    equipment: [
      "A bag of light tools",
      "Tools required to make the two kinds of items you know how to make",
      "Any normal level 1 or 2 item you are able to make",
    ],
    oddities: ["An oddity chosen by the GM"],
    skills: {
      trained: [
        "Creating 2 types of items",
        "Identifying the function of any kind of device",
      ],
    },
    sources: [{ sourcebook: "Players Guide", page: 44 }],
  },
  {
    name: "Dances With Dark Matter",
    sourcebook: "Numenera Destiny",
    page: 69,
    equipment: [],
    abilities: ["Ribbons of Dark Matter"],
    skills: {
      trained: [],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 68 }],
  },
  {
    name: "Defends The Gate",
    sourcebook: "Numenera Destiny",
    page: 71,
    equipment: [
      "You have a strange device, either handheld or fused to your forearm. It might be purely decorative, or it might be related to your connection to the numenera.",
    ],
    abilities: ["Fortified Position", "Rally to Me"],
    skills: {
      trained: [],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 68 }],
  },
  {
    name: "Defends The Weak",
    sourcebook: "Numenera Destiny",
    page: 72,
    equipment: ["You have a shield"],
    abilities: ["Courageous", "Warding Shield"],
    skills: {
      trained: [],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 68 }],
  },
  // ---

  {
    name: "Emerged from The Obelisk",
    sourcebook: "Numenera Destiny",
    page: 75,
    equipment: ["A 1-pound chunk of inert amber crystal"],
    abilities: ["Crystalline Body", "Special Healing"],
    stats: {
      might: 4,
    },
    armor: 1,
    skills: {
      trained: ["Immune to  diseases and poison"],
      inability: ["Speed defense tasks"],
    },
    extras: ["+1 to armor"],
    sources: [{ sourcebook: "Players Guide 2e", page: 70 }],
  },
  {
    name: "Employs Magnetism",
    sourcebook: "Numenera Discovery",
    page: 67,
    abilities: ["Move Metal"],
    sources: [{ sourcebook: "Players Guide 2e", page: 71 }],
  },
  {
    name: "Entertains",
    sourcebook: "Numenera Discovery",
    page: 68,
    equipment: ["A musical instrument or tools you need to perform"],
    abilities: ["Levity"],
    skills: {
      trained: ["All social interactions except coercion or intimidation"],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 71 }],
  },
  {
    name: "Exists Partially Out of Phase",
    sourcebook: "Numenera Discovery",
    page: 69,
    abilities: ["Walk Through Walls"],
    sources: [{ sourcebook: "Players Guide 2e", page: 72 }],
  },
  {
    name: "Explores Dark Places",
    sourcebook: "Numenera Discovery",
    page: 71,
    equipment: [
      "An explorers pack or the following: 50ft rope, 2 days rations, two minor glowglobes",
    ],
    abilities: ["Dark esoteries"],
    skills: {
      trained: ["Searching", "Listening", "Climbing", "Balancing", "Jumping"],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 72 }],
  },
  {
    name: "Explores Yesterday",
    sourcebook: "Numenera Destiny",
    page: 77,
    equipment: ["Bag of excavation tools"],
    abilities: ["Trained Excavator"],
    skills: {
      trained: ["Perception", "Salvaging numenera", "Climbing"],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 72 }],
  },
  {
    name: "Fights with A Horde",
    sourcebook: "Numenera Destiny",
    page: 72,
    abilities: ["Teamwork"],
    skills: {
      trained: [],
    },
    sources: [{ sourcebook: "Players Guide", page: 73 }],
  },
  {
    name: "Fights with Panache",
    sourcebook: "Numenera Discovery",
    page: 72,
    skills: {
      trained: [],
    },
    equipment: ["Extremely stylish clothing", "A jeweled weapon"],
    abilities: ["Attack Flourish"],
    sources: [{ sourcebook: "Players Guide 2e", page: 74 }],
  },
  {
    name: "Focuses Mind over Matter",
    sourcebook: "Numenera Discovery",
    page: 73,
    skills: {
      trained: [],
    },
    abilities: ["Deflect Attacks"],
    sources: [{ sourcebook: "Players Guide", page: 74 }],
  },
  {
    name: "Fuses Flesh and Steel",
    sourcebook: "Numenera Discovery",
    page: 74,
    stats: {
      might: 3,
      speed: 3,
    },
    armor: 1,
    skills: {
      trained: [],
    },
    equipment: ["A bag of light tools", "Parts to repair yourself with"],
    abilities: ["Special Healing"],
    sources: [{ sourcebook: "Players Guide 2e", page: 75 }],
  },
  {
    name: "Fuses Mind And Machine",
    sourcebook: "Numenera Destiny",
    page: 79,
    stats: {
      intellect: 4,
    },
    skills: {
      trained: [],
    },
    abilities: ["Mechanical Assistance", "Stored Memories"],
    sources: [{ sourcebook: "Players Guide 2e", page: 75 }],
  },
  {
    name: "Howls at the Moon",
    sourcebook: "Numenera Discovery",
    page: 76,
    artifacts: [
      "A chronometer artifact that lets you know when the next change is coming",
    ],
    abilities: ["Beast Form"],
    sources: [{ sourcebook: "Players Guide 2e", page: 76 }],
  },
  {
    name: "Hunts",
    sourcebook: "Numenera Discovery",
    page: 77,
    equipment: ["Boots that muffle footsteps, granting +1 the sneaky tasks"],
    skills: {
      trained: [
        "Following and identifying tracks",
        "All types of movement tasks",
      ],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 76 }],
  },
  {
    name: "Hunts Abhumans",
    sourcebook: "Numenera Destiny",
    page: 81,
    skills: {
      trained: ["Tracking, interacting and hiding from abhumans"],
    },
    abilities: ["Tracker and Hunter", "Abhuman Fighter"],
    sources: [{ sourcebook: "Players Guide 2e", page: 77 }],
  },
  {
    name: "Imparts Wisdom",
    sourcebook: "Numenera Destiny",
    page: 82,
    skills: {
      trained: ["Two areas of knowledge"],
    },
    abilities: ["Learning The Path", "Philosophy"],
    sources: [{ sourcebook: "Players Guide 2e", page: 77 }],
  },
  {
    name: "Leads",
    sourcebook: "Numenera Destiny",
    page: 83,
    artifacts: [
      "A device that can tag up to 7 followers and show their relative distance and direction from you",
    ],
    skills: {
      trained: ["Social interactions"],
    },
    abilities: ["Good advice"],
    sources: [{ sourcebook: "Players Guide 2e", page: 78 }],
  },
  {
    name: "Learns From Adversity",
    sourcebook: "Numenera Destiny",
    page: 85,
    equipment: ["A book filled with knowledge"],
    stats: {
      might: 3,
    },
    skills: {
      trained: ["Initiative", "Seeing underling patterns", "Solving puzzles"],
    },
    abilities: ["Quicker than most", "Toughened up"],
    sources: [{ sourcebook: "players guide 2e", page: 78 }],
  },
  {
    name: "Lives in the Wilderness",
    sourcebook: "Numenera Discovery",
    page: 83,
    equipment: ["A directional compass"],
    skills: {
      trained: [
        "Climbing",
        "Swimming",
        "Wilderness navigation",
        "Identifying plants and creatures",
      ],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 79 }],
  },

  {
    name: "Masters Defense",
    sourcebook: "Numenera Discovery",
    page: 80,
    equipment: ["A shield"],
    abilities: ["Shield Master"],
    sources: [{ sourcebook: "Players Guide 2e", page: 79 }],
  },
  {
    name: "Metes Out Justice",
    sourcebook: "Numenera Destiny",
    page: 86,
    skills: {
      trained: [
        "Discerning the truth",
        "Seeing through lies",
        "Overcoming deception",
      ],
    },
    abilities: ["Make Judgement", "Designation"],
    sources: [{ sourcebook: "players Guide 2e", page: 80 }],
  },
  {
    name: "Masters Weaponry",
    sourcebook: "Numenera Discovery",
    page: 80,
    equipment: ["A high-quality weapon of your choosing"],
    abilities: ["Weapon Esoteries", "Weapon Master"],
    sources: [{ sourcebook: "Players Guide 2e", page: 79 }],
  },
  {
    name: "Moves Like A Cat",
    sourcebook: "Numenera Destiny",
    page: 87,
    skills: {
      trained: ["Balance"],
    },
    stats: {
      speed: 5,
    },
    abilities: ["Reflexes", "Balance"],
    sources: [{ sourcebook: "Players Guide 2e", page: 81 }],
  },
  {
    name: "Murders",
    sourcebook: "Numenera Destiny",
    page: 87,
    equipment: [
      "A disguise kit",
      "Three doses of a level 2 blade poison that deals 5 damage",
    ],
    abilities: ["Surprise Attack"],
    skills: {
      trained: ["Stealth and disguise"],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 81 }],
  },
  {
    name: "Needs No Weapon",
    sourcebook: "Numenera Destiny",
    page: 88,
    armor: 1,
    abilities: ["Fists Of Fury", "Flesh of Stone"],
    skills: {
      trained: [],
    },
    extras: ["2 additional points  of damage"],
    sources: [{ sourcebook: "Players Guide 2e", page: 54 }],
  },
  {
    name: "Never Says Die",
    sourcebook: "Numenera Destiny",
    page: 89,
    abilities: ["Rapid Recovery", "Push to Through"],
    skills: {
      trained: [],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 82 }],
  },
  {
    name: "Possesses A Shard Of The Sun",
    sourcebook: "Numenera Destiny",
    page: 90,
    equipment: ["A crystal lens"],
    abilities: ["Enlightened", "Illuminating Touch", "Radiant Abilities"],
    skills: {
      trained: ["Tasks involving sight"],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 82 }],
  },
  {
    name: "Radiates Vitality",
    sourcebook: "Numenera Destiny",
    page: 92,
    equipment: ["A small metallic pendant that always seems to turn up"],
    stats: {
      might: 6,
    },
    abilities: ["Mighty"],
    skills: {
      trained: [],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 83 }],
  },
  {
    name: "Rages",
    sourcebook: "Numenera Discovery",
    page: 83,
    abilities: ["Frenzy"],
    sources: [{ sourcebook: "Players Guide 2e", page: 84 }],
  },
  {
    name: "Rides the Lightning",
    sourcebook: "Numenera Discovery",
    page: 83,
    equipment: ["A bag of misc power cells"],
    abilities: ["Electrical esoteries", "Shock", "Charge"],
    sources: [{ sourcebook: "Players Guide", page: 84 }],
  },
  {
    name: "Sees Beyond",
    sourcebook: "Numenera Destiny",
    page: 94,
    equipment: ["A single item of your choice"],
    abilities: ["See The Unseen"],
    sources: [{ sourcebook: "Players Guide 2e", page: 55 }],
  },
  {
    name: "Shepherds The Community",
    sourcebook: "Numenera Destiny",
    page: 96,
    skills: {
      trained: [
        "Trained in persuasion and intimidation in topics related to the community",
      ],
    },
    abilities: ["Community Knowledge", "Community Activist"],
    sources: [{ sourcebook: "Players Guide 2e", page: 85 }],
  },
  {
    name: "Sheds The Walls Of The World",
    sourcebook: "Numenera Destiny",
    page: 97,
    skills: {
      trained: [],
    },
    abilities: ["Phase Sprint", "Disrupting Touch"],
    sources: [{ sourcebook: "Players Guide 2e", page: 85 }],
  },
  {
    name: "Speaks With a Silver Tongue",
    sourcebook: "Numenera Discovery",
    page: 85,
    skills: {
      trained: [
        "Trained in all social interactions",
        "Speaks two languages other than Truth",
      ],
    },
    abilities: ["Poetic License"],
    sources: [{ sourcebook: "Players Guide 2e", page: 86 }],
  },
  {
    name: "Talks to Machines",
    sourcebook: "Numenera Discovery",
    page: 86,
    equipment: ["A bag of small tools"],
    abilities: ["Distant Activation"],
    skills: {
      trained: ["All tasks involving electrical machines"],
    },
    sources: [{ sourcebook: "Players Guide", page: 86 }],
  },
  {
    name: "Thunders",
    sourcebook: "Numenera Destiny",
    page: 99,
    skills: {
      trained: [],
    },
    abilities: ["Thunder Beam"],
    sources: [{ sourcebook: "Players Guide 2e", page: 87 }],
  },
  {
    name: "Touches The Sky",
    sourcebook: "Numenera Destiny",
    page: 101,
    skills: {
      trained: [],
    },
    equipment: ["A device that crackles with electricity"],
    abilities: ["Weather Abilities", "Hover"],
    sources: [{ sourcebook: "Players Guide 2e", page: 87 }],
  },
  {
    name: "Wears a Sheen of Ice",
    sourcebook: "Numenera Discovery",
    page: 87,
    equipment: ["A bladed weapon made of stronglass which looks like ice"],
    abilities: ["Ice Armor", "Ice Esoteries"],
    sources: [{ sourcebook: "Players Guide", page: 88 }],
  },
  {
    name: "Wields Power with Precision",
    sourcebook: "Numenera Discovery",
    page: 89,
    stats: {
      intellect: 5,
    },
    equipment: ["A book on the numenera"],
    sources: [{ sourcebook: "Players Guide 2e", page: 88 }],
  },
  {
    name: "Wields Two Weapons at Once",
    sourcebook: "Numenera Discovery",
    page: 90,
    equipment: ["A light melee weapon"],
    abilities: ["Dual Light Wield"],
    sources: [{ sourcebook: "Players Guide 2e", page: 89 }],
  },
  {
    name: "Wields Words Like Weapons",
    sourcebook: "Numenera Destiny",
    page: 103,
    skills: {
      trained: [
        "One of the following: persuasion, deception or detecting falsehoods",
      ],
    },
    abilities: ["How Others Think", "Misdirect Blame"],
    sources: [{ sourcebook: "Players Guide 2e", page: 58 }],
  },
  {
    name: "Works Miracles",
    sourcebook: "Numenera Discovery",
    page: 92,
    abilities: ["Healing Touch"],
    sources: [{ sourcebook: "Players Guide 2e", page: 90 }],
  },
  {
    name: "Works the Back Alleys",
    sourcebook: "Numenera Discovery",
    page: 91,
    equipment: ["A bag of light tools"],
    skills: {
      trained: ["Sneaking", "Pickpocketing", "Lockpicking"],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 90 }],
  },
];

type Foci = typeof fociRepository[number];

export { fociRepository };
export type { Foci };
