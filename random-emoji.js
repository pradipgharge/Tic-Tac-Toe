const emojiDiv = document.getElementById("emoji-div");
const singlePlayer = document.getElementById("single-player");
const MultiPlayer = document.getElementById("multi-player");

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

window.addEventListener("load", setEmoji);

singlePlayer.addEventListener("click", () => {
  window.location.assign("/pages/main.html");
});

function setEmoji() {
  //to avoid delay on navigating back to home page
  emojiDiv.innerText = getRandomEmoji();

  const interval = setInterval(() => {
    const randomEmoji = getRandomEmoji();
    emojiDiv.innerText = randomEmoji;
  }, 1200);

  // Return a function to clear the interval
  return function cleanup() {
    clearInterval(interval);
  };
}
