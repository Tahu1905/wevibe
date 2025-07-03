const playlists = [
  {
    name: "Chill Vibes",
    image: "download (1).jpg",
    songs: [
      {
        name: "Shape of You",
        artist: "Ed Sheeran",
        file: "/music/shape.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b2732c8a3db49f7dc0e3f0e5c8cf"
      },
      {
        name: "Blinding Lights",
        artist: "The Weeknd",
        file: "/music/blinding.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b273e0e197144582a6f3606b5c51"
      }
    ]
  },
  {
    name: "My Favorites",
    image: "pngtree-love-song-icon-png-image_2036603.jpg",
    songs: [
      {
        name: "Levitating",
        artist: "Dua Lipa",
        file: "/music/levitating.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b2737eac173c065d1d9ef0c39e9e"
      }
    ]
  },
   {
    name: "Focus Mode",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "EDM Hits",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Lo-fi Study",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Piano Classics",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Rainy Moods",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Jazz & Chill",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Kpop Top",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Vietnam Chill",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Pop 2024",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Rock Ballads",
    image: "download (1).jpg",
    songs: []
  },
  {
    name: "Sleep Sounds",
    image: "download (1).jpg",
    songs: []
  }
];


function loadSidebar() {
  const sidebar = document.getElementById("playlist-sidebar");
  playlists.forEach((pl, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${pl.image}" alt="${pl.name}" /><span>${pl.name}</span>`;
    li.onclick = () => loadPlaylist(idx);
    sidebar.appendChild(li);
  });
}
function renderAllSongs() {
  const songView = document.getElementById("song-view");
  const titleEl = document.getElementById("playlist-title");
  const list = document.getElementById("song-list");

  titleEl.innerText = "All Songs";
  list.innerHTML = "";

  playlists.forEach(pl => {
    pl.songs.forEach(song => {
      const li = document.createElement("li");
      li.innerText = `${song.name} – ${song.artist}`;
      li.onclick = () => playSong(song);
      list.appendChild(li);
    });
  });

  // Hiển thị danh sách
  document.getElementById("playlist-grid").style.display = "none";
  songView.classList.remove("hidden");
}


function renderPlaylistGrid() {
  const grid = document.getElementById("playlist-grid");
  grid.innerHTML = "";
  playlists.forEach((pl, idx) => {
    const card = document.createElement("div");
    card.className = "playlist-card";
    card.onclick = () => loadPlaylist(idx);
    card.innerHTML = `<img src="${pl.image}" alt="${pl.name}" /><div class="name">${pl.name}</div>`;
    grid.appendChild(card);
  });
}

function playSong(song) {
  // Now playing bar
  document.getElementById("now-title").textContent = song.name;
  document.getElementById("now-artist").textContent = song.artist;
  document.getElementById("now-album").src = song.image;

  const audio = document.getElementById("player");
  audio.src = song.file;
  audio.play();

  // 👉 Panel bên phải
  document.getElementById("right-song-img").src = song.image;
  document.getElementById("right-song-title").textContent = song.name;
  document.getElementById("right-song-artist").textContent = song.artist;
  document.getElementById("right-audio-player").src = song.file;

  document.getElementById("right-lyrics").textContent = getLyricsFor(song.name, song.artist);

  document.getElementById("rightSongPanel").classList.remove("hidden");
}

function getLyricsFor(name, artist) {
  if (name === "Shape of You") {
    return `The club isn't the best place to find a lover\nSo the bar is where I go...`;
  } else if (name === "Blinding Lights") {
    return `I said, ooh, I'm blinded by the lights\nNo, I can't sleep until I feel your touch`;
  } else if (name === "Levitating") {
    return `If you wanna run away with me\nI know a galaxy and I can take you for a ride`;
  }
  return "🎵 Lyrics not available.";
}


function loadPlaylist(index) {
  const pl = playlists[index];
  document.getElementById("playlist-title").innerText = pl.name;
  const list = document.getElementById("song-list");
  list.innerHTML = "";
  pl.songs.forEach(song => {
    const li = document.createElement("li");
    li.innerText = `${song.name} - ${song.artist}`;
    li.onclick = () => playSong(song, pl.image);
    list.appendChild(li);
  });
  document.getElementById("song-view").classList.remove("hidden");
  document.getElementById("playlist-grid").style.display = "none";
}

function backToPlaylists() {
  document.getElementById("song-view").classList.add("hidden");
  document.getElementById("playlist-grid").style.display = "grid";
}

loadSidebar();
renderPlaylistGrid();
function showTab(tabName) {
  const tabs = document.querySelectorAll('.tabs .tab');
  tabs.forEach(t => t.classList.remove('active'));

  const selected = Array.from(tabs).find(t => t.textContent.toLowerCase() === tabName.toLowerCase());
  if (selected) selected.classList.add('active');

  const grid = document.getElementById("playlist-grid");
  const songView = document.getElementById("song-view");

  if (tabName === "playlists") {
    grid.style.display = "grid";
    songView.classList.add("hidden");
  } else if (tabName === "songs") {
    renderAllSongs();
  } else {
    // Nếu có tab artists sau này
    grid.style.display = "none";
    songView.classList.add("hidden");
  }
}


function selectSidebarTab(tabName) {
  const tabs = document.querySelectorAll('.sidebar-tabs-horizontal .tab');
  tabs.forEach(t => t.classList.remove('active'));

  const selected = Array.from(tabs).find(t => t.textContent.toLowerCase() === tabName.toLowerCase());
  if (selected) selected.classList.add('active');

  // 👉 Chỉ ảnh hưởng sidebar — KHÔNG ảnh hưởng phần nội dung chính
  document.getElementById("playlist-sidebar").style.display = tabName === 'playlists' ? 'block' : 'none';

  // Bạn có thể thêm sidebar nội dung riêng cho songs, artists ở đây nếu muốn
}
function createPlaylist() {
  const name = document.getElementById("playlistName").value;
  fetch("http://localhost:8080/api/playlists", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name })
  }).then(res => {
    if (res.ok) alert("✅ Playlist created!");
    else alert("❌ Failed to create.");
  });
}
function toggleAddForm() {
  document.getElementById("createPlaylistPanel").classList.remove("hidden");
}

function submitNewPlaylist() {
  const name = document.getElementById("newPlaylistName").value.trim();
  const selectedSongs = Array.from(document.querySelectorAll('.song-select-list input:checked'))
    .map(input => input.value);

  if (!name) return alert("Please enter playlist name");

  // Gửi dữ liệu về backend (Spring Boot hoặc log test)
  console.log("🎵 Creating playlist:", name, selectedSongs);

  // Tùy: fetch POST về server nếu cần

  alert("✅ Playlist created!");
  document.getElementById("createPlaylistPanel").classList.add("hidden");
}
function goHome() {
  document.getElementById("createPlaylistPanel")?.classList.add("hidden");
}
const audio = document.getElementById("player");
const progressBar = document.getElementById("progress-bar");

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  progressBar.max = audio.duration;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

function toggleUserDropdown() {
  const dropdown = document.getElementById("userDropdown");
  dropdown.classList.toggle("hidden");
}

// Đóng dropdown khi click ngoài khu vực
window.addEventListener("click", function (e) {
  const avatar = document.querySelector(".user-avatar");
  const dropdown = document.getElementById("userDropdown");
  if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const loginPopup = document.getElementById("loginPopup");
  const popupContainer = document.getElementById("popupContainer");
  const registerBtn = document.getElementById("signUpToggle");
  const loginBtn = document.getElementById("signInToggle");

  // Mở popup mặc định Sign In
  function login() {
    loginPopup.classList.remove("hidden");
    popupContainer.classList.remove("active");
  }

  window.login = login;

  registerBtn.addEventListener("click", () => {
    popupContainer.classList.add("active"); // hiện Sign Up
  });

  loginBtn.addEventListener("click", () => {
    popupContainer.classList.remove("active"); // trở lại Sign In
  });

  window.addEventListener("click", function (e) {
    if (
      loginPopup &&
      !popupContainer.contains(e.target) &&
      !e.target.closest(".user-menu")
    ) {
      loginPopup.classList.add("hidden");
    }
  });
});
