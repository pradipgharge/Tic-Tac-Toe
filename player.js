const backBtn = document.getElementById("back-btn");
const playBtn = document.getElementById("play-btn");
const randomEmojiX = document.getElementById("emoji-x");
const randomEmojiO = document.getElementById("emoji-o");
const playerWarning = document.getElementById("player-warning");

let emojiX = getRandomEmoji();
let emojiO = getRandomEmoji();

localStorage.setItem("emojiX", emojiX);
localStorage.setItem("emojiO", emojiO);

window.addEventListener("load", () => {
  //to avoid using the previous selectedEmoji
  localStorage.setItem("selectedEmoji", "");

  randomEmojiX.innerText = emojiX;
  randomEmojiO.innerText = emojiO;
});

randomEmojiX.addEventListener("click", () => {
  localStorage.setItem("selectedEmoji", "X");
  randomEmojiX.classList.add("selected");
  randomEmojiO.classList.remove("selected");
});

randomEmojiO.addEventListener("click", () => {
  localStorage.setItem("selectedEmoji", "O");
  randomEmojiX.classList.remove("selected");
  randomEmojiO.classList.add("selected");
});

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
  const selectedEmoji = localStorage.getItem("selectedEmoji");
  if (!selectedEmoji) {
    playerWarning.style.display = "block";
    setTimeout(() => {
      playerWarning.style.display = "none";
    }, 2500);
    return;
  }

  window.location.href = "./main.html";
});
