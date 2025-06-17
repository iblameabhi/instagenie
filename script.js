
const captions = {
  happy: ["Smiling through the chaos.", "Sunshine mixed with a little bit of gold."],
  sad: ["Tears are words the heart can't say.", "Rainy days and silent nights."],
  confident: ["I don’t chase, I attract.", "Born to stand out."],
  lazy: ["Too lazy to come up with a caption.", "Just here… existing."],
  love: ["Heart full of you.", "Love looks good on me."],
  angry: ["Mood: volcano.", "Don’t test me today."],
  lonely: ["Alone, not lonely.", "Echoes of my own voice."],
  energetic: ["Let’s gooo!", "Hype mode: ON."],
  grateful: ["Thankful for every little thing.", "Gratitude is my vibe."],
  chill: ["Peace. Love. Chill.", "Floating through the day."],
  lost: ["Finding meaning in the mess.", "Wandering, but not aimless."]
};

const usernames = {
  aesthetic: ["moonblush", "lavender.dreams", "sunset.vibes"],
  cool: ["blaze_x", "shadowstrike", "ice_vortex"],
  funny: ["meme_lord", "toomuchsauce", "not_a_bot"],
  dark: ["voidwhisper", "darknova", "grim.echo"],
  anime: ["otaku_vibes", "senpai69", "kawaii_ghost"]
};

function generateCaption() {
  const emotion = document.getElementById('emotion').value;
  const options = captions[emotion];
  const result = options[Math.floor(Math.random() * options.length)];
  document.getElementById('captionResult').innerText = result;
}

function generateUsername() {
  const filter = document.getElementById('filter').value;
  const options = usernames[filter];
  const result = options[Math.floor(Math.random() * options.length)];
  document.getElementById('usernameResult').innerText = result;
}
