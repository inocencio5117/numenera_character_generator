const descriptors = [
  {
    name: "Adaptable",
    sourcebook: "Numenera Destiny",
    page: 40,
    sources: [{ sourcebook: "Players Guide 2e", page: 42 }],
    stats: {
      points: 2,
    },
    skills: {
      trained: [
        "All pleasant social interactions",
        "All actions that involve overcoming or ignoring the effects of deprivation, sorrow, or pain",
      ],
    },
  },
  {
    name: "Articulate",
    sourcebook: "Numenera Destiny",
    page: 41,
    sources: [{ sourcebook: "Players Guide 2e", page: 42 }],
    stats: {
      intellect: 2,
    },
    shins: 10,
    skills: {
      trained: [
        "Persuasion",
        "Trained in all actions that involve making plans, explaining plans, and convincing others to accept your plans",
      ],
    },
  },
  {
    name: "Beneficent",
    sourcebook: "Numenera Destiny",
    page: 41,
    sources: [{ sourcebook: "Players Guide 2e", page: 43 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "Allies who have spent the last day with you add +1 to their recovery rolls.",
        "All pleasant social interactions, putting together people at ease, and gaining others' trust",
      ],
    },
  },
  {
    name: "Charming",
    sourcebook: "Numenera Discovery",
    page: 53,
    sources: [{ sourcebook: "Players Guide", page: 43 }],
    stats: {
      intellect: 2,
    },
    shins: 10,
    skills: {
      trained: [
        "Positive or pleasant social interactions",
        "Using esoteries or abilities to influence the minds of others",
      ],
      inability: ["Studying or retaining facts", "Resisting mental attacks"],
    },
    extras: [
      "Contact: you have an important contact in a influential position.",
    ],
  },
  {
    name: "Cheerful",
    sourcebook: "Numenera Destiny",
    page: 42,
    sources: [{ sourcebook: "Players Guide", page: 44 }],
    stats: {
      intellect: 4,
    },
    skills: {
      trained: [
        "Trained in one activity that most would consider a hobby",
        "Trained in tasks related to making friends, ending conflicts, and making a positive first impression",
      ],
      inability: ["Detect falsehood and disguises"],
    },
  },
  {
    name: "Civic",
    sourcebook: "Numenera Destiny",
    page: 42,
    sources: [{ sourcebook: "Players Guide", page: 44 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "You add +1 to the health of any community you currently live in",
        "Find about current events and secrets of the community",
        "All tasks to aiding the community",
      ],
    },
    equipment: ["A numenera plan for your installation"],
  },
  {
    name: "Clever",
    sourcebook: "Numenera Discovery",
    page: 54,
    sources: [{ sourcebook: "Players Guide", page: 45 }],
    stats: {
      intellect: 2,
    },
    shins: 10,
    skills: {
      trained: [
        "All interactions involving lies or trickery",
        "Defense against mental effects",
      ],
      inability: [
        "All tasks involving, identifying or assessing danger, lies, quality, importance, function or power.",
        "Any task involving lore, knowledge or understanding",
      ],
    },
  },
  {
    name: "Committed",
    sourcebook: "Numenera Destiny",
    page: 42,
    sources: [{ sourcebook: "Players Guide", page: 45 }],
    stats: {
      might: 4,
    },
    shins: 10,
    skills: {
      trained: [
        "All interactions involving lies or trickery",
        "Defense against mental effects",
      ],
      inability: [
        "All tasks involving, identifying or assessing danger, lies, quality, importance, function or power.",
        "Any task involving lore, knowledge or understanding",
      ],
    },
  },
  {
    name: "Confident",
    sourcebook: "Numenera Destiny",
    page: 43,
    sources: [{ sourcebook: "Players Guide", page: 45 }],
    stats: {
      might: 1,
      intellect: 1,
      speed: 1,
    },
    skills: {
      trained: ["Trained in three non-combat, non-Physical skills"],
      inability: ["On a d20 roll of 1 or 2 you trigger a GM intrusion"],
    },
    abilities: ["Confident Outlook"],
  },
  {
    name: "Cultured",
    sourcebook: "Numenera Destiny",
    page: 43,
    sources: [{ sourcebook: "Players Guide", page: 46 }],
    stats: {},
    skills: {
      trained: [
        "Trained in all tasks related to perception, detecting differences, and noticing minor flaws",
        "Trained in all tasks related to knowledge of current events and history",
      ],
      inability: ["Any task involving getting people to believe you"],
    },
    abilities: ["Learned"],
    equipment: ["A book of a topic of your choice"],
  },
  {
    name: "Curious",
    sourcebook: "Numenera Destiny",
    page: 43,
    sources: [{ sourcebook: "Players Guide 2e", page: 46 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "Perception",
        "Detecting falsehood, piercing illusions or disguises and seeing past facades",
      ],
    },
    equipment: ["Three books on whatever subject you choose"],
  },
  {
    name: "Earnest",
    sourcebook: "Numenera Destiny",
    page: 44,
    sources: [{ sourcebook: "Players Guide 2e", page: 46 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "Perception",
        "Trained in one area of knowledge",
        "Trained in defense rolls to resist diseases and poison",
        "Trained in providing consolation and emotional support",
      ],
      inability: ["Seeing through lies and trickery"],
    },
    equipment: ["An additional expensive item worth up to 10 shins"],
  },
  {
    name: "Empirical",
    sourcebook: "Numenera Destiny",
    page: 45,
    sources: [{ sourcebook: "Players Guide 2e", page: 47 }],
    stats: {
      intellect: 4,
    },
    skills: {
      trained: [
        "Conduct tests to find proof, discern the truth or glean information",
      ],
      inability: [
        "When you receive a GM intrusion, any action you take is hindered",
      ],
    },
    abilities: ["Quick Study"],
  },
  {
    name: "Exacting",
    sourcebook: "Numenera Destiny",
    page: 45,
    sources: [{ sourcebook: "Players Guide 2e", page: 47 }],
    stats: {
      might: 4,
    },
    skills: {
      trained: [
        "Trained in persuasion and intimidation",
        "Detecting if someone if not telling the truth",
      ],
      inability: ["Positive interactions", "Intellect defense rolls"],
    },
  },
  {
    name: "Foward-thinking",
    sourcebook: "Numenera Destiny",
    page: 45,
    sources: [{ sourcebook: "Players Guide 2e", page: 48 }],
    stats: {
      intellect: 4,
    },
    shins: 30,
    skills: {
      trained: [
        "Initiative",
        "Trained in tasks that involve some element of chance",
      ],
    },
  },
  {
    name: "Graceful",
    sourcebook: "Numenera Discovery",
    page: 52,
    sources: [{ sourcebook: "Players Guide 2e", page: 48 }],
    stats: {
      speed: 2,
    },
    skills: {
      trained: [
        "Balance and careful movement",
        "Physical performing arts",
        "Speed defense",
      ],
    },
  },
  {
    name: "Gregarious",
    sourcebook: "Numenera Destiny",
    page: 46,
    sources: [{ sourcebook: "Players Guide 2e", page: 48 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "Balance and careful movement",
        "Physical performing arts",
        "Speed defense",
      ],
    },
    abilities: ["People Person", "Getting the Word"],
  },
  {
    name: "Heroic",
    sourcebook: "Numenera Destiny",
    page: 46,
    sources: [{ sourcebook: "Players Guide 2e", page: 49 }],
    stats: {
      might: 2,
    },
    skills: {
      trained: [
        "All social interactions",
        "Perception and finding hidden things",
      ],
      inability: ["Detecting falsehood"],
    },
    abilities: ["Hero's Companion"],
  },
  {
    name: "Imaginative",
    sourcebook: "Numenera Destiny",
    page: 47,
    sources: [{ sourcebook: "Players Guide 2e", page: 49 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "One of the following: painting, drawing, singing, poetry, writing, sculpting, playing a style of musical instrument, or something similar  ",
      ],
    },
    abilities: ["Imaginative Solution"],
  },
  {
    name: "Industrious",
    sourcebook: "Numenera Destiny",
    page: 47,
    sources: [{ sourcebook: "Players Guide 2e", page: 49 }],
    stats: {
      speed: 4,
    },
    skills: {
      trained: [],
      inability: ["All movement related tasks "],
    },
    extras: ["Add +1 to your recovery rolls"],
    abilities: ["Imaginative Solution"],
  },
  {
    name: "Intelligent",
    sourcebook: "Numenera Discovery",
    page: 54,
    sources: [{ sourcebook: "Players Guide 2e", page: 49 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "An area of knowledge of your choice",
        "All tasks involving remembering or memorising things you experience directly (rather than learnt from a book/were told)",
      ],
    },
  },
  {
    name: "Intimidating",
    sourcebook: "Numenera Destiny",
    page: 47,
    sources: [{ sourcebook: "Players Guide 2e", page: 50 }],
    stats: {
      points: 2,
    },
    skills: {
      trained: ["Intimidation"],
      inability: ["Tasks related to knowledge"],
    },
    extras: ["Add +2 to might or intellect, or +1 in both pools"],
    abilities: ["Threaten", "Menace"],
  },
  {
    name: "Intuitive",
    sourcebook: "Numenera Destiny",
    page: 48,
    sources: [{ sourcebook: "Players Guide 2e", page: 50 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: ["Perception"],
    },
    abilities: ["Know What To Do"],
  },
  {
    name: "Irresponsible",
    sourcebook: "Numenera Destiny",
    page: 48,
    sources: [{ sourcebook: "Players Guide 2e", page: 50 }],
    stats: {
      might: 4,
    },
    skills: {
      trained: ["Positive social interactions"],
      inability: ["Intellect defense tasks"],
    },
    extras: ["Add +1 to your recovery rolls"],
  },
  {
    name: "Lawful",
    sourcebook: "Numenera Destiny",
    page: 49,
    sources: [{ sourcebook: "Players Guide 2e", page: 51 }],
    stats: {
      points: 4,
    },
    skills: {
      trained: ["Knowing, understanding and interpreting laws"],
      inability: [
        "While in any activity that breaks the law, your intellect based rolls are hindered",
      ],
    },
    extras: ["+2 to might or speed pool"],
  },
  {
    name: "Learned",
    sourcebook: "Numenera Discovery",
    page: 55,
    sources: [{ sourcebook: "Players Guide 2e", page: 51 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: ["Three areas of knowledge of your choice"],
      inability: ["Any task involving charm, persuasion or etiquette"],
    },
    equipment: ["Two books on topics of your choice"],
  },
  {
    name: "Loyal",
    sourcebook: "Numenera Destiny",
    page: 49,
    sources: [{ sourcebook: "Players Guide 2e", page: 51 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [],
    },
    abilities: ["Devoted", "Faithful"],
  },
  {
    name: "Middlesome",
    sourcebook: "Numenera Destiny",
    page: 50,
    sources: [{ sourcebook: "Players Guide 2e", page: 52 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "Perception and detecting falsehood",
        "Stealth tasks",
        "Remember pertinent details on a topic you once heard about",
      ],
    },
  },
  {
    name: "Mechanical",
    sourcebook: "Numenera Discovery",
    page: 55,
    sources: [{ sourcebook: "Players Guide 2e", page: 52 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: ["Identifying or understanding numenera"],
      inability: ["Tasks involving charm, persuasion or deception"],
    },
    equipment: ["An additional oddity determined by the GM"],
    abilities: ['Sense "magic"', "Hedge Magic"],
  },
  {
    name: "Mystical",
    sourcebook: "Numenera Discovery",
    page: 55,
    sources: [{ sourcebook: "Players Guide 2e", page: 52 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: ["Identifying or understanding numenera"],
      inability: ["Tasks involving charm, persuasion or deception"],
    },
    equipment: ["An additional oddity determined by the GM"],
    abilities: ['Sense "magic"', "Hedge Magic"],
  },
  {
    name: "Nurturing",
    sourcebook: "Numenera Destiny",
    page: 50,
    sources: [{ sourcebook: "Players Guide 2e", page: 53 }],
    stats: {
      might: 2,
    },
    skills: {
      trained: ["Healing tasks"],
    },
    abilities: ["Nurturing"],
  },
  {
    name: "Obsessive",
    sourcebook: "Numenera Destiny",
    page: 50,
    sources: [{ sourcebook: "Players Guide 2e", page: 53 }],
    stats: {},
    skills: {
      trained: [],
    },
    abilities: ["Your Obsession", "Enthralled", "Preoccupied"],
  },
  {
    name: "Optimistic",
    sourcebook: "Numenera Destiny",
    page: 51,
    sources: [{ sourcebook: "Players Guide 2e", page: 53 }],
    stats: {
      intellect: 4,
    },
    skills: {
      trained: ["Intellect defense tasks"],
      inability: ["Might defense tasks"],
    },
    abilities: ["Shrugs of Disappointment"],
  },
  {
    name: "Organized",
    sourcebook: "Numenera Destiny",
    page: 51,
    sources: [{ sourcebook: "Players Guide 2e", page: 54 }],
    stats: {
      intellect: 4,
    },
    skills: {
      trained: [],
      inability: ["Intellect defense tasks when in messy location"],
    },
    abilities: ["Benefits of Organization"],
    equipment: ["Explore's pack with extra pockets"],
  },
  {
    name: "Passionate",
    sourcebook: "Numenera Destiny",
    page: 52,
    sources: [{ sourcebook: "Players Guide 2e", page: 54 }],
    stats: {},
    skills: {
      trained: ["Running", "Climbing", "Swimming"],
      inability: ["Restrain or subtlety including Sneaking or lying"],
    },
    abilities: ["Fever", "Fire Inside"],
  },
  // -------
  {
    name: "Rugged",
    sourcebook: "Numenera Corebook",
    page: 49,
    sources: [{ sourcebook: "Players Guide", page: 36 }],
    skills: {
      trained: [
        "Swimming",
        "Climbing",
        "Jumping",
        "Running",
        "Training, riding or placating natural animals",
        "Identifying or using natural plants",
      ],
      inability: [
        "Any tasks involving charm, persuasion, etiquette or deception",
      ],
    },
    equipment: [
      "An explorer’s pack or the following: additional 50 feet of rope, two days rations and an extra ranged weapon",
    ],
  },
  {
    name: "Stealthy",
    sourcebook: "Numenera Corebook",
    page: 50,
    stats: {
      speed: 2,
    },
    sources: [{ sourcebook: "Players Guide", page: 36 }],
    skills: {
      trained: [
        "All stealthy tasks",
        "All interactions involving lies or trickery",
        "All esoteries or abilities involving illusions or trickery",
      ],
      inability: ["Movement-related tasks"],
    },
  },
  {
    name: "Strong",
    sourcebook: "Numenera Corebook",
    page: 50,
    stats: {
      might: 2,
    },
    sources: [{ sourcebook: "Players Guide", page: 37 }],
    skills: {
      trained: ["Breaking inanimate objects", "Jumping"],
      inability: ["Movement-related tasks"],
    },
    equipment: ["An extra medium or heavy weapon"],
  },
  {
    name: "Strong-Willed",
    sourcebook: "Numenera Corebook",
    page: 50,
    stats: {
      intellect: 4,
    },
    sources: [{ sourcebook: "Players Guide", page: 37 }],
    skills: {
      trained: [
        "Resisting mental effects",
        "Tasks requiring incredible focus or concentration",
      ],
      inability: [
        "Figuring out puzzles or problems, memorising things or using lore",
      ],
    },
  },
  {
    name: "Swift",
    sourcebook: "Numenera Corebook",
    page: 51,
    stats: {
      speed: 4,
    },
    sources: [{ sourcebook: "Players Guide", page: 37 }],
    skills: {
      trained: ["Initiative actions to determine combat order", "Running"],
      inability: ["Balancing"],
    },
  },
  {
    name: "Tough",
    sourcebook: "Numenera Corebook",
    page: 51,
    armor: 1,
    stats: {
      speed: 4,
    },
    sources: [{ sourcebook: "Players Guide", page: 37 }],
    skills: {
      trained: ["Might defense"],
    },
    equipment: ["An extra light weapon"],
    abilities: ["Healthy: +1 to recovery rolls"],
  },
  {
    name: "Mutant",
    sourcebook: "Numenera Corebook",
    page: 123,
    extras: "Requires the Numenera Corebook to select mutations",
  },
  {
    name: "Varjellan",
    sourcebook: "Numenera Corebook",
    page: 121,
    stats: {
      points: -3,
    },
    skills: {
      trained: ["Numenera", "Visual perception"],
      inability: ["History", "Poetry and oration", "Hearing"],
    },
    abilities: ["Reforging", "Slow to recover"],
  },
  {
    name: "Lattimor",
    sourcebook: "Numenera Corebook",
    page: 122,
    stats: {
      might: 4,
    },
    abilities: ["Change state"],
    skills: {
      trained: [
        "Perception (when in Fugue state)",
        "Attacks in one weapon type (when in Bursk state)",
        "Breaking things (when in Bursk state)",
        "All interactions with others (when in Neem state)",
        "All tasks involving studying, contemplation or mental concentration, including esoteries (when in Neem state)",
      ],
      inability: [
        "Lore, knowledge or understanding tasks (when in Bursk state)",
        "Interacting with others in a pleasant manner (when in Bursk state)",
        "Concentration or study - including using esoteries (when in Bursk state)",
        "Attack and defense (when in Neem state)",
        "Perception (when in Neem state)",
      ],
    },
  },
];

const types = [
  {
    name: "Glaive",
    sourcebook: "Numenera Discovery",
    page: 28,
    stats: {
      might: 11,
      speed: 10,
      intellect: 7,
      points: 6,
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 16 }],
    edges: {
      might: 1,
      speed: 1,
    },
    shins: 5,
    cypherlimit: 2,
    abilities: [
      "Aggression",
      "Fleet of Foot",
      "Impressive Display",
      "Misdirect",
      "No Need for weapons",
      "Trained Without Armor",
    ],
    skills: {
      trained: ["One of: Balancing, Climbing, Jumping, Swimming"],
      practiced: ["Using All Armor", "All Weapons"],
    },
    equipment: [
      "Clothing",
      "Two weapons (or one weapon and a shield)",
      "Light or medium armor",
      "An explorer’s pack",
    ],
    cyphers: ["Two cyphers (chosen for you by the GM)"],
    oddities: ["One oddity (chosen for you by the GM)"],
  },
  {
    name: "Nano",
    sourcebook: "Numenera Discovery",
    page: 36,
    stats: {
      might: 7,
      speed: 9,
      intellect: 12,
      points: 6,
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 23 }],
    edges: {
      intellect: 1,
    },
    shins: 4,
    cypherlimit: 3,
    abilities: ["Hedge Magic", "Onslaught", "Push", "Scan", "Ward"],
    skills: {
      trained: ["Understanding and identifying numenera"],
      practiced: ["Light Weapons"],
    },
    equipment: ["Clothing", "One weapon", "A book about the numenera"],
    cyphers: ["Three cyphers (chosen for you by the GM)"],
    oddities: ["One oddity (chosen for you by the GM)"],
  },
  {
    name: "Jack",
    sourcebook: "Numenera Discovery",
    page: 44,
    stats: {
      might: 10,
      speed: 10,
      intellect: 10,
      points: 6,
    },
    sources: [{ sourcebook: "Players Guide", page: 24 }],
    edges: {
      points: 1,
    },
    shins: 8,
    cypherlimit: 2,
    abilities: [
      "Flex Skill",
      "Trained in Armor",
      "Create Deadly Poison",
      "Critter Companion",
      "Face Morph",
      "Fleet of Foot",
      "Late Inspiration",
      "Link Senses",
      "Phased Pocket",
      "Vanish",
    ],
    skills: {
      trained: ["Any one non-attack/defense task of your choosing"],
      practiced: ["Light Weapons"],
    },
    equipment: [
      "Clothing",
      "Two weapons",
      "Light Armor",
      "An explorers pack",
      "A pack of light tools",
    ],
    cyphers: ["Two cyphers (chosen for you by the GM)"],
    oddities: ["One oddity (chosen for you by the GM)"],
  },
  {
    name: "Arkhus",
    sourcebook: "Numenera Destiny",
    page: 7,
    stats: {
      might: 8,
      speed: 9,
      intellect: 11,
      points: 6,
    },
    sources: [{ sourcebook: "Players Guide", page: 28 }],
    edges: {
      intellect: 1,
    },
    shins: 9,
    cypherlimit: 2,
    abilities: [
      "Anectode",
      "Babel",
      "Connection With an Organization",
      "Goad",
      "Powerful Rhetoric",
      "Trained Without Armor",
      "Understanding",
    ],
    skills: {
      trained: [
        "Persuasion",
        "Choose one more from the following: negotiation, deceiving, public speaking, intimidation, or seeing through deception",
      ],
      inability: [
        "Crafting numenera",
        "Salvaging numenera",
        "Understanding numenera",
      ],
      practiced: ["Light and Medium Weapons"],
    },
    equipment: [
      "Clothing",
      "Two weapons",
      "Light Armor",
      "An explorers pack",
      "A pack of light tools",
    ],
    cyphers: ["Two cyphers (chosen for you by the GM)"],
    oddities: ["One oddity (chosen for you by the GM)"],
  },
  {
    name: "Wright",
    sourcebook: "Numenera Destiny",
    page: 18,
    stats: {
      might: 9,
      speed: 7,
      intellect: 12,
      points: 6,
    },
    sources: [{ sourcebook: "Players Guide", page: 36 }],
    edges: {
      intellect: 1,
    },
    shins: 5,
    cypherlimit: 3,
    abilities: [
      "Additional Numenera Plans",
      "Deconstruct",
      "Extra Use",
      "Natural Crafter",
      "Right Tool for The Job",
      "Scan for Iotum",
      "Scramble Machine",
      "Trained in Armor",
      "Trigger Iotum Ray",
    ],
    skills: {
      trained: [
        "Crafting numenera",
        "In addition, choose one of the following that you are not trained in: Salvaging numenera, understanding numenera, engineering, woodcrafting, armoring, weaponsmithing, or another craft skill ",
      ],
      inability: ["Salvaging numenera", "Understanding numenera"],
      practiced: ["Light Weapons"],
    },
    equipment: [
      "Clothing",
      "Two weapons",
      "Light Armor",
      "An explorers pack",
      "A box of crafting tools",
      "2 numenera plans",
      "4 units of io and 4 units of responsive synth",
      "6 units of parts",
    ],
    cyphers: ["Three cyphers (chosen for you by the GM)"],
    oddities: ["One oddity (chosen for you by the GM)"],
  },
  {
    name: "Delve",
    sourcebook: "Numenera Destiny",
    page: 29,
    stats: {
      might: 9,
      speed: 9,
      intellect: 10,
      points: 6,
    },
    sources: [{ sourcebook: "Players Guide", page: 40 }],
    edges: {
      intellect: 1,
      speed: 1,
    },
    shins: 3,
    cypherlimit: 2,
    abilities: [
      "Additional Training",
      "Familiarize",
      "Find the Way",
      "Right Tool for The Job",
      "Skill With Defense",
      "Trained In Armor",
      "Trained With Armor",
    ],
    skills: {
      trained: [
        "Salvaging numenera",
        "In addition, choose one of the following that you are not trained in: navigation, perception, sensing danger, creature knowledge, initiative, peacefully opening communications with strangers or tracking",
      ],
      inability: ["Crafting numenera", "Understanding numenera"],
      practiced: ["Light and Medium Weapons"],
    },
    equipment: [
      "Clothing",
      "Two weapons",
      "Light Armor",
      "An explorers pack",
      "One extra unit of responsive synth",
    ],
    cyphers: ["Two cyphers (chosen for you by the GM)"],
    oddities: ["One oddity (chosen for you by the GM)"],
  },
];

const foci = [
  {
    name: "Absorbs Energy",
    sourcebook: "Numenera Destiny",
    page: 55,
    equipment: [null],
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
    equipment: [null],
    abilities: ["Adjures Creature", "Ninth World Bestiary Knowledge"],
    sources: [{ sourcebook: "Players Guide 2e", page: 60 }],
  },
  {
    name: "Augment Flesh With Grafts",
    sourcebook: "Numenera Destiny",
    page: 59,
    equipment: [null],
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
    equipment: [null],
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
  // {
  //   name: "Carries a Quiver",
  //   sourcebook: "Numenera Corebook",
  //   page: 54,
  //   equipment: ["A well-made bow", "Two-dozen arrows"],
  //   abilities: ["Archer"],
  //   skills: {
  //     trained: ["Making arrows"],
  //   },
  //   sources: [{ sourcebook: "Players Guide", page: 40 }],
  // },
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
  // {
  //   name: "Crafts Unique Objects",
  //   sourcebook: "Numenera Corebook",
  //   page: 58,
  //   equipment: [
  //     "A bag of light tools",
  //     "Tools required to make the two kinds of items you know how to make",
  //     "Any normal level 1 or 2 item you are able to make",
  //   ],
  //   oddities: ["An oddity chosen by the GM"],
  //   skills: {
  //     trained: [
  //       "Creating 2 types of items",
  //       "Identifying the function of any kind of device",
  //     ],
  //   },
  //   sources: [{ sourcebook: "Players Guide", page: 44 }],
  // },
  {
    name: "Dances With Dark Matter",
    sourcebook: "Numenera Destiny",
    page: 69,
    equipment: [null],
    abilities: ["Ribbons of Dark Matter"],
    skills: {
      trained: [null],
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
      trained: [null],
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
      trained: [null],
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 68 }],
  },
  // ---
  // {
  //   name: "Employs Magnetism",
  //   sourcebook: "Numenera Corebook",
  //   page: 59,
  //   abilities: ["Move Metal"],
  //   sources: [{ sourcebook: "Players Guide", page: 45 }],
  // },
  {
    name: "Entertains",
    sourcebook: "Numenera Corebook",
    page: 60,
    equipment: ["A musical instrument or tools you need to perform"],
    abilities: ["Levity"],
    skills: {
      trained: ["All social interactions except coercion or intimidation"],
    },
    sources: [{ sourcebook: "Players Guide", page: 46 }],
  },
  {
    name: "Exists Partially Out of Phase",
    sourcebook: "Numenera Corebook",
    page: 60,
    abilities: ["Walk Through Walls"],
    sources: [{ sourcebook: "Players Guide", page: 46 }],
  },
  {
    name: "Explores Dark Places",
    sourcebook: "Numenera Corebook",
    page: 61,
    equipment: [
      "An explorers pack or the following: 50ft rope, 2 days rations, two minor glowglobes",
    ],
    abilities: ["Dark esoteries"],
    skills: {
      trained: ["Searching", "Listening", "Climbing", "Balancing", "Jumping"],
    },
    sources: [{ sourcebook: "Players Guide", page: 47 }],
  },
  {
    name: "Fights with Panache",
    sourcebook: "Numenera Corebook",
    page: 62,
    equipment: ["Extremely stylish clothing", "A jeweled weapon"],
    abilities: ["Attack Flourish"],
    sources: [{ sourcebook: "Players Guide", page: 47 }],
  },
  {
    name: "Focuses Mind over Matter",
    sourcebook: "Numenera Corebook",
    page: 63,
    abilities: ["Deflect Attacks"],
    sources: [{ sourcebook: "Players Guide", page: 48 }],
  },
  {
    name: "Fuses Flesh and Steel",
    sourcebook: "Numenera Corebook",
    page: 64,
    stats: {
      might: 3,
      speed: 3,
    },
    armor: 1,
    equipment: ["A bag of light tools", "Parts to repair yourself with"],
    abilities: ["Special Healing"],
    sources: [{ sourcebook: "Players Guide", page: 49 }],
  },
  {
    name: "Howls at the Moon",
    sourcebook: "Numenera Corebook",
    page: 64,
    artifacts: [
      "A chronometer artifact that lets you know when the next change is coming",
    ],
    abilities: ["Beast Form"],
    sources: [{ sourcebook: "Players Guide", page: 50 }],
  },
  {
    name: "Hunts with Great Skill",
    sourcebook: "Numenera Corebook",
    page: 65,
    equipment: ["Boots that muffle footsteps, granting +1 the sneaky tasks"],
    skills: {
      trained: [
        "Following and identifying tracks",
        "All types of movement tasks",
      ],
    },
    sources: [{ sourcebook: "Players Guide", page: 50 }],
  },
  {
    name: "Leads",
    sourcebook: "Numenera Corebook",
    page: 66,
    artifacts: [
      "A device that can tag up to 7 followers and show their relative distance and direction from you",
    ],
    skills: {
      trained: ["Social interactions"],
    },
    abilities: ["Good advice"],
    sources: [{ sourcebook: "Players Guide", page: 51 }],
  },
  {
    name: "Lives in the Wilderness",
    sourcebook: "Numenera Corebook",
    page: 67,
    equipment: ["A directional compass"],
    skills: {
      trained: [
        "Climbing",
        "Swimming",
        "Wilderness navigation",
        "Identifying plants and creatures",
      ],
    },
    sources: [{ sourcebook: "Players Guide", page: 52 }],
  },
  {
    name: "Masters Defense",
    sourcebook: "Numenera Corebook",
    page: 68,
    equipment: ["A shield"],
    abilities: ["Shield Master"],
    sources: [{ sourcebook: "Players Guide", page: 52 }],
  },
  {
    name: "Masters Weaponry",
    sourcebook: "Numenera Corebook",
    page: 69,
    equipment: ["A high-quality weapon of your choosing"],
    abilities: ["Weapon Esoteries", "Weapon Master"],
    sources: [{ sourcebook: "Players Guide", page: 53 }],
  },
  {
    name: "Murders",
    sourcebook: "Numenera Corebook",
    page: 70,
    equipment: [
      "A disguise kit",
      "Three doses of a level 2 blade poison that deals 5 damage",
    ],
    abilities: ["Surprise Attack"],
    skills: {
      trained: ["Stealth and disguise"],
    },
    sources: [{ sourcebook: "Players Guide", page: 54 }],
  },
  {
    name: "Rages",
    sourcebook: "Numenera Corebook",
    page: 71,
    abilities: ["Frenzy"],
    sources: [{ sourcebook: "Players Guide", page: 54 }],
  },
  {
    name: "Rides the Lightning",
    sourcebook: "Numenera Corebook",
    page: 71,
    equipment: ["A bag of misc power cells"],
    abilities: ["Electrical esoteries", "Shock", "Charge"],
    sources: [{ sourcebook: "Players Guide", page: 55 }],
  },
  {
    name: "Talks to Machines",
    sourcebook: "Numenera Corebook",
    page: 72,
    equipment: ["A bag of small tools"],
    abilities: ["Distant Activation"],
    skills: {
      trained: ["All tasks involving electrical machines"],
    },
    sources: [{ sourcebook: "Players Guide", page: 56 }],
  },
  {
    name: "Wears a Sheen of Ice",
    sourcebook: "Numenera Corebook",
    page: 73,
    equipment: ["A bladed weapon made of stronglass which looks like ice"],
    abilities: ["Ice Armor", "Ice Esoteries"],
    sources: [{ sourcebook: "Players Guide", page: 57 }],
  },
  {
    name: "Wields Power with Precision",
    sourcebook: "Numenera Corebook",
    page: 74,
    stats: {
      intellect: 5,
    },
    equipment: ["A book on the numenera"],
    sources: [{ sourcebook: "Players Guide", page: 57 }],
  },
  {
    name: "Wields Two Weapons at Once",
    sourcebook: "Numenera Corebook",
    page: 75,
    equipment: ["A light melee weapon"],
    abilities: ["Dual Light Wield"],
    sources: [{ sourcebook: "Players Guide", page: 58 }],
  },
  {
    name: "Works Miracles",
    sourcebook: "Numenera Corebook",
    page: 75,
    abilities: ["Healing Touch"],
    sources: [{ sourcebook: "Players Guide", page: 59 }],
  },
  {
    name: "Works the Back Alleys",
    sourcebook: "Numenera Corebook",
    page: 76,
    equipment: ["A bag of light tools"],
    skills: {
      trained: ["Sneaking", "Pickpocketing", "Lockpicking"],
    },
    sources: [{ sourcebook: "Players Guide", page: 60 }],
  },
];

export { descriptors, foci, types };
