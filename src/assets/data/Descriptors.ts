const descriptorsRepository = [
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
      trained: ["Tasks related to enduring trials of mind and body"],
      inability: [
        "Sometimes you come across as so single-minded that you put people off. Persuasion tasks are hindered.",
      ],
    },
    abilities: ["Dedication Brings Rewards"],
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
    name: "Forward-thinking",
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
        "All tasks involving remembering or memorizing things you experience directly (rather than learnt from a book/were told)",
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
      might: 2,
      speed: 2,
    },
    skills: {
      trained: ["Knowing, understanding and interpreting laws"],
      inability: [
        "While in any activity that breaks the law, your intellect based rolls are hindered",
      ],
    },
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
    name: "Meddlesome",
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
  {
    name: "Persevering",
    sourcebook: "Numenera Destiny",
    page: 52,
    sources: [{ sourcebook: "Players Guide 2e", page: 55 }],
    stats: {
      points: 2,
    },
    skills: {
      trained: ["Endurance and keep an understanding in face of difficulties"],
    },
    extras: ["+2 to might or intellect pool"],
    abilities: ["Irrepressible Reaction"],
  },
  {
    name: "Prepared",
    sourcebook: "Numenera Destiny",
    page: 52,
    sources: [{ sourcebook: "Players Guide 2e", page: 55 }],
    stats: {
      speed: 4,
    },
    skills: {
      trained: ["Initiative"],
      inability: ["The first action after you being surprised is hindered"],
    },
    equipment: ["A bag of light tools"],
    abilities: ["Tool Aficionado"],
  },
  {
    name: "Protective",
    sourcebook: "Numenera Destiny",
    page: 52,
    sources: [{ sourcebook: "Players Guide 2e", page: 56 }],
    stats: {
      intellect: 4,
    },
    skills: {
      trained: ["Perception", "Healing"],
      inability: ["Knowledge based tasks"],
    },
    abilities: ["Step in Front"],
  },
  {
    name: "Relentless",
    sourcebook: "Numenera Destiny",
    page: 53,
    sources: [{ sourcebook: "Players Guide 2e", page: 56 }],
    stats: {
      might: 4,
    },
    skills: {
      trained: ["Finding food and water", "Healing"],
      inability: ["Social interaction tasks"],
    },
    abilities: ["Survivor`s Intuition"],
  },
  {
    name: "Risk-Taking",
    sourcebook: "Numenera Destiny",
    page: 53,
    sources: [{ sourcebook: "Players Guide 2e", page: 56 }],
    stats: {
      speed: 4,
    },
    skills: {
      trained: [
        "Tasks that involve elements of chance, such as playing games. Choose two or three equal options",
      ],
      inability: ["Tasks related to sneaking and stay quiet"],
    },
    abilities: ["Pressing Your Luck"],
  },
  {
    name: "Rugged",
    sourcebook: "Numenera Discovery",
    page: 56,
    sources: [{ sourcebook: "Players Guide", page: 56 }],
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
    name: "Serene",
    sourcebook: "Numenera Destiny",
    page: 54,
    sources: [{ sourcebook: "Players Guide", page: 56 }],
    stats: {
      intellect: 2,
    },
    skills: {
      trained: [
        "Intellect defense tasks",
        "Overcome or ignoring effects of fear, intimidation or panic",
      ],
    },
  },
  {
    name: "Stealthy",
    sourcebook: "Numenera Discovery",
    page: 56,
    stats: {
      speed: 2,
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 57 }],
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
    sourcebook: "Numenera Discovery",
    page: 57,
    stats: {
      might: 4,
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 57 }],
    skills: {
      trained: ["Breaking inanimate objects", "Jumping"],
      inability: ["Movement-related tasks"],
    },
    equipment: ["An extra medium or heavy weapon"],
  },
  {
    name: "Strong-Willed",
    sourcebook: "Numenera Discovery",
    page: 57,
    stats: {
      intellect: 4,
    },
    sources: [{ sourcebook: "Players Guide", page: 57 }],
    skills: {
      trained: [
        "Resisting mental effects",
        "Tasks requiring incredible focus or concentration",
      ],
      inability: [
        "Figuring out puzzles or problems, memorizing things or using lore",
      ],
    },
  },
  {
    name: "Swift",
    sourcebook: "Numenera Discovery",
    page: 57,
    stats: {
      speed: 4,
    },
    sources: [{ sourcebook: "Players Guide 2e", page: 58 }],
    skills: {
      trained: ["Initiative actions to determine combat order", "Running"],
      inability: ["Balancing"],
    },
  },
  {
    name: "Tough",
    sourcebook: "Numenera Discovery",
    page: 57,
    armor: 1,
    stats: {},
    sources: [{ sourcebook: "Players Guide 2e", page: 58 }],
    skills: {
      trained: ["Might defense"],
    },
    equipment: ["An extra light weapon"],
    abilities: ["Healthy: +1 to recovery rolls"],
  },
  {
    name: "Vicious",
    sourcebook: "Numenera Destiny",
    page: 54,
    sources: [{ sourcebook: "Players Guide 2e", page: 58 }],
    skills: {
      trained: ["Tracking creatures that wronged you"],
    },
    abilities: ["Bloodthirsty", "Berserk"],
    equipment: [
      "A book in which you've listed the names of those who've wronged you",
    ],
  },
  {
    name: "Mutant",
    sourcebook: "Numenera Corebook",
    page: 123,
    extras: ["Requires the Numenera Corebook to select mutations"],
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

type Descriptor = typeof descriptorsRepository[number];

export { descriptorsRepository };
export type { Descriptor };

