export type PostState =
  | "preview"
  | "locked"
  | "pending"
  | "failed"
  | "subscribed"
  | "expired";

export interface Post {
  title: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
  duration: string;
  tags: string[];
  likes: number;
  comments: number;
  tierName: string;
  tierPrice: string;
}

export const samplePost: Post = {
  title: "Scoring a Rainy Night: Writing the Theme for ‘Harbor Lamps’",
  excerpt:
    "A behind-the-scenes studio session where I rebuild the main theme from a 3-note phrase into a full cue, including the mistake that almost killed the piece.",
  body: [
    "I started this one at 2 a.m. with coffee going cold and the window open on a wet street. The idea was simple: three notes, descending, like the way a lamp outside a shophouse flickers when it rains harder.",
    "I’ll walk you through the full session: the first sketch in the piano roll, why I threw out the strings on take six, and how the sub bass finally made the room feel like it was underwater instead of just damp.",
    "There’s also the mistake. I nearly committed to the wrong key for the bridge. I kept it in the final cut because you can hear the moment I catch it, and honestly, that half-second of hesitation is the most honest part of the song.",
    "Full stems, the Ableton project file, and a short PDF of the chord sheet are attached at the bottom of this post for members.",
  ],
  publishedAt: "Oct 11, 2026",
  duration: "14 min read + 22 min video",
  tags: ["Studio Diary", "Scoring", "Ableton"],
  likes: 1284,
  comments: 96,
  tierName: "Lamplight tier",
  tierPrice: "€5 / month",
};

export const CREATOR = {
  name: "Mira Haikal",
  handle: "@mirahaikal",
  role: "Composer & field recordist",
  members: "3,412 members",
};
