
export type Card = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  affirmation: string;
  description: string;
  shadow: string;
  question: string;
  accent: string;
  imagePath: string;
};

export interface DailyState {
  slug: string;
  date: string;
}
