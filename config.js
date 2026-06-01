/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Ashley!",
  photo: "img/received_962041532826799.jpeg",       // Place your photo in the img/ folder
  music: "YouCut_20260601_074332450.mp4",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "Gwapa kayka hehe!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday!! :D",
    },
    {
      type: "chatbox",
      message:
        "happy birthday to you, lee! I wish you the best todayyyy, more birthdays to come, and more candles to blow. I love youu!",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "that's what I was about to do.",
        "but then I stopped.",
        "I realised, I wanted to do something <strong>special</strong>.",
        "because,",
        "you are special <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "The LORD bless thee, and keep thee; The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.",
      author: "Numbers 6:24-26 (KJV)",
    },
    {
      type: "stars",
      count: 80,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "confetti",
      count: 40,
    },
    {
      type: "profile",
      wishTitle: "happy birthday!",
      wishText: "happy birthday love! cheers to our ten years of friendship. enjoy your day, ha? daghan pa ta'g dreams nga i-achieve in the future, so we should never give up. God is there for us, guiding us, loving us, and protecting us. I pray na you'll receive what your heart truly desires. I pray na whatever crazy thing may come saimo way, you'll find courage in every bit of it. for me, nice kayka nga inspiration sa life, and I want you to know na you'll never be alone and you're always loved. be strong shley, love kaayo tika! once again, happy birthday! lovelots mylove!:)",
    },
    {
      type: "fireworks",
      count: 35,
    },
    {
      type: "chatbox",
      message:
        "happy birthday to you, lee! I wish you the best todayyyy, more birthdays to come, and more candles to blow. know that you'reee such a great person. I am so lucky to have met you in my life. thank you for being myyy guardian angel. I appreciate you so much! just know that I am always here for you, okay? you can always talk to me, rely on me, and more and more. I will always support you. I love youu!",
      buttonText: "Send",
    },
    {
      type: "confetti",
      count: 40,
    },
    {
      type: "closing",
      text: "okayy, now go back and tell me if you liked it 💜,",
      replayText: "back",
    },
  ],
};
