const backBtn = document.getElementById("back-btn");
const playBtn = document.getElementById("play-btn");
const randomEmojiX = document.getElementById("emoji-x");
const randomEmojiO = document.getElementById("emoji-o");

let emojiX = getRandomEmoji();
let emojiO = getRandomEmoji();

function getRandomEmoji() {
  const emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤗",
    "🤭",
    "🤫",
    "🤔",
    "🤐",
    "🤨",
    "😐",
    "😑",
    "😶",
    "😏",
    "😒",
    "🙄",
    "😬",
    "😮",
    "😯",
    "😰",
    "😱",
    "😳",
    "🥺",
    "😖",
    "😞",
    "😟",
    "😠",
    "😡",
    "🤯",
    "😢",
    "😭",
    "😤",
    "😩",
    "😫",
    "😨",
    "😱",
    "😤",
    "😴",
    "💤",
    "😪",
    "🥴",
    "😵",
    "🤐",
    "🥳",
    "🥺",
    "🤬",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "🤠",
    "🤡",
    "🥶",
    "🥵",
    "🥱",
    "🤫",
    "👿",
    "💀",
    "👻",
    "👽",
    "🤖",
    "💩",
    "🙊",
    "🙉",
    "🙈",
    "👶",
    "👮",
    "💂",
    "🍕",
    "🍔",
    "🌮",
    "🌯",
    "🍿",
    "🍩",
    "🍪",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍦",
    "🥧",
    "🍣",
  ];
  const randomIndex = Math.floor(Math.random() * emojis.length);

  return emojis[randomIndex];
}

backBtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});

playBtn.addEventListener("click", () => {
  window.location.href = "./main.html";
});

window.addEventListener("load", () => {
  randomEmojiX.innerText = emojiX;
  randomEmojiO.innerText = emojiO;
});

randomEmojiX.addEventListener("click", () => {
  randomEmojiX.classList.add("selected");
  randomEmojiO.classList.remove("selected");
});

randomEmojiO.addEventListener("click", () => {
  randomEmojiX.classList.remove("selected");
  randomEmojiO.classList.add("selected");
});
