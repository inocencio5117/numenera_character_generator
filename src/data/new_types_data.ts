const types = [
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
    sources: [{ sourcebook: "Players Guide 2e", page: 28 }],
    edges: {
      intellect: 1,
    },
    shins: 5,
    cypherlimit: 2,
    abilities: [
      "Anecdote",
      "Babel",
      "Connection with an Organization",
      "Goad",
      "Powerful Rhetoric",
      "Trained Without Armor",
      "Understanding",
    ],
    skills: {
      trained: [
        "One of: Negotiation, Public Speaking, Intimidation, Deceiving or Seeing Through Deception",
      ],
      practiced: [
        "Persuasion",
        "Another interaction skill (negotiation, public speaking, intimidation, deceiving or seeing through deception)",
      ],
    },
    equipment: [
      "Stylish clothing",
      "A light weapon",
      "Light or medium armor",
      "An explorer’s pack",
    ],
    cyphers: ["Two cyphers (chosen for you by the GM)"],
    oddities: ["One oddity (chosen for you by the GM)"],
  },
];

export { types };
