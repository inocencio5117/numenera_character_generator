interface ICharacterData {
  name: string;
  sourcebook: string;
  page: number;
  stats: {
    might: number;
    speed: number;
    intellect: number;
    points: number;
  };
  sources: [{ sourcebook: string; page: number }];
  edges: {
    points: number;
  };
  shins: number;
  cypherlimit: number;
  abilities: string[];
  skills: {
    trained: string[];
    practiced: string[];
  };
  equipment: string[];
  cyphers: string[];
  oddities: string[];
}

export type { ICharacterData };
