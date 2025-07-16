const playlists = [
  {
    name: "Ai Cũn Phải Bắt Đầu Từ Đâu Đó",
    image: "img/hieuthuhai.jpg",
    songs: [
      { name: "Mamma Mia", 
        artist: "HIEUTHUHAI",
        artist_img: "/img/hieuthuhaiii.webp",  
        file: "mammamia.mp3", 
        image: "images.jpg" 
      
      },
      { name: "Hẹn Gặp Em Dưới Ánh Trăng", 
        artist: "HIEUTHUHAI",
         artist_img: "HIEUTHUHAI", 
        file: "/music/hen_gap_em.mp3",
       image: "img/default.jpg"
,
        lyrics: `"Vì anh muốn vào ngày mai ta Cùng nhau sánh bước mặc bao ánh mắt
                Ngoài những lời nói làm đầy tai ra
                Em là duy nhất anh không thể đánh mất
                Đôi mắt hướng về em một chút thôi mà thời gian trôi em rạng ngời
                Ngắm nhìn em thêm một phút thôi mà đôi môi mang nụ cười”`,
      },
      { name: "Không Thể Say", 
        artist: "HIEUTHUHAI",
        artist_img: "/img/hieuthuhaiii.webp",  
        file: "/music/khong_the_say.mp3", 
       image: "img/default.jpg"
 },
      { name: 
        "Exit Sign", 
        artist: "HIEUTHUHAI",
         artist_img: "/img/hieuthuhaiii.webp",  
        file: "/music/exit_sign.mp3",
       image: "img/default.jpg"
 },

    ]
  },
  {
    name: "Gabriel",
    image: "img/Gabriel.webp",
    songs: [
      { name: "Somebody", 
        artist: "keshi",
        artist_img: "HIEUTHUHAI", 
        file: "/music/somebody.mp3", 
        lyrics: `"You're somebody I just met tonight…”`,
        credits: [
          { name: "Keshi", roles: "Artist / Producer / Writer" },
          { name: "Chloe George", roles: "Writer" }
        ],
       image: "img/default.jpg"
 },
      { name: "Westside", 
        artist: "keshi",
        artist_img: "HIEUTHUHAI", 
        file: "/music/westside.mp3", 
       image: "img/default.jpg"
 },
      { name: "Understand", 
        artist: "keshi",
        artist_img: "HIEUTHUHAI",  
        file: "/music/understand.mp3", 
       image: "img/default.jpg"
 },
      { name: "Limbo", 
        artist: "keshi",
         artist_img: "HIEUTHUHAI", 
        file: "/music/limbo.mp3", 
       image: "img/default.jpg"
 },
      ]
  },
  {
    name: "LOI CHOI: The Neo Pop Punk",
    image: "img/loichoi.webp",
    songs: [
      { name: "Phóng Đổ Tim Em", 
        artist: "Wren Evans & itsnk",
        artist_img: "HIEUTHUHAI",  
        file: "/music/phong_do_tim_em.mp3", 
       image: "img/default.jpg"
 },
      { name: "Call Me", 
        artist: "Wren Evans & itsnk", 
        artist_img: "HIEUTHUHAI", 
        file: "/music/call_me.mp3", 
       image: "img/default.jpg"
 },
      { name: "Cầu Vĩnh Tuy", 
        artist: "Wren Evans & itsnk", 
        artist_img: "HIEUTHUHAI", 
        file: "/music/cau_vinh_tuy.mp3", 
       image: "img/default.jpg"
 },
      { name: "Từng Quen", 
        artist: "Wren Evans & itsnk", 
        artist_img: "HIEUTHUHAI", 
        file: "/music/tung_quen.mp3", 
       image: "img/default.jpg"
 },
      { name: "Bé Ơi Từ Từ", 
        artist: "Wren Evans & itsnk", 
        artist_img: "HIEUTHUHAI", 
        file: "/music/be_oi_tu_tu.mp3", 
       image: "img/default.jpg"
 },
    ]
  },
  {
    name: "LAST SWEET",
    image: "img/sojulove.webp",
    songs: [
      { name: "Can We Love",
         artist: "Obito", 
         artist_img: "HIEUTHUHAI", 
         file: "/music/can_we_love.mp3",
         image: "img/default.jpg"
 }
      // Có thể thêm các track khác nếu có thông tin thêm
    ]
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
  const allSongsView = document.getElementById("all-songs-view");
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

  // Hiển thị danh sách bài hát
  document.getElementById("playlist-grid").style.display = "none";
  document.getElementById("song-view").classList.add("hidden");
  allSongsView.classList.remove("hidden");
}


function renderHomePlaylists() {
  const section = document.getElementById("playlist-grid");
  section.innerHTML = ""; // Clear cũ

  // Giả lập nhóm recently – bạn có thể thay bằng dữ liệu thực từ localStorage
  const recentlyPlayed = playlists.slice(0, 2);
  const trendingNow = playlists.slice().reverse();

  renderPlaylistGroup("🎧 Recently Played", recentlyPlayed);
  renderPlaylistGroup("🎵 Your Playlists", playlists);
  renderPlaylistGroup("🔥 Trending Now", trendingNow);
}

// Dùng lại hàm phụ:
function renderPlaylistGroup(title, playlistGroup) {
  const section = document.getElementById("playlist-grid");

  const group = document.createElement("div");
  group.className = "playlist-group";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const row = document.createElement("div");
  row.className = "playlist-row";

  playlistGroup.forEach((pl, idx) => {
    const card = document.createElement("div");
    card.className = "playlist-card";
    card.onclick = () => loadPlaylist(idx);
    card.innerHTML = `
      <img src="${pl.image}" alt="${pl.name}" />
      <div class="name">${pl.name}</div>
    `;
    row.appendChild(card);
  });

  group.appendChild(heading);
  group.appendChild(row);
  section.appendChild(group);
}

function playSong(song) {

   console.log("▶️ Playing:", song.name);

  // check phần panel
  const panel = document.getElementById("rightSongPanel");
  if (!panel) {
    console.error("❌ Không tìm thấy #rightSongPanel");
  } else {
    console.log("✅ Found panel");
    panel.classList.remove("hidden");
  }
  // Cập nhật thanh Now Playing
  document.getElementById("now-title").textContent = song.name;
  document.getElementById("now-artist").textContent = song.artist;
  document.getElementById("now-album").src = song.image;

  const audio = document.getElementById("player");
  audio.src = song.file;
  audio.play();

  // 👉 Hiển thị ở phần nội dung chính
  document.getElementById("song-img").src = song.image;
  document.getElementById("song-title").textContent = song.name;
  document.getElementById("song-artist").textContent = song.artist;
  document.getElementById("lyrics-text").textContent = song.lyrics;

  document.getElementById("song-view").classList.remove("hidden");
  document.getElementById("playlist-grid").style.display = "none";
  document.getElementById("all-songs-view")?.classList?.add("hidden");
  document.getElementById("main-heading")?.classList.add("hidden");

// Cập nhật panel bên phải
document.getElementById("right-banner-img").src = song.artist_img;
document.getElementById("right-song-title").textContent = song.name;
document.getElementById("right-song-artist").textContent = song.artist;
document.getElementById("right-lyrics").textContent = song.lyrics;
document.getElementById("rightSongPanel").classList.remove("hidden");

// Hiện panel
document.getElementById("rightSongPanel").classList.remove("hidden");


// Lưu trạng thái yêu thích
if (!window.favorites) window.favorites = new Set();
const favBtn = document.getElementById("song-fav-toggle");
if (favorites.has(song.name)) {
  favBtn.classList.remove("fa-plus-circle");
  favBtn.classList.add("fa-check-circle");
} else {
  favBtn.classList.remove("fa-check-circle");
  favBtn.classList.add("fa-plus-circle");
}
window.currentSongForFav = song;
}
function toggleFavorite() {
  const song = window.currentSongForFav;
  if (!song) return;

  const favBtn = document.getElementById("song-fav-toggle");

  if (favorites.has(song.name)) {
    favorites.delete(song.name);
    favBtn.classList.remove("fa-check-circle");
    favBtn.classList.add("fa-plus-circle");
  } else {
    favorites.add(song.name);
    favBtn.classList.remove("fa-plus-circle");
    favBtn.classList.add("fa-check-circle");
  }
}

function togglePanelSize() {
  const panel = document.getElementById("rightSongPanel");
  const icon = panel.querySelector(".expand-btn");

  panel.classList.toggle("expanded");
  icon.classList.toggle("fa-expand");
  icon.classList.toggle("fa-compress");
}

function loadPlaylist(index) {
  const pl = playlists[index];
  currentPlaylist = pl.songs; // 🔹 Lưu toàn bộ danh sách bài hát
  currentIndex = 0; // 🔹 Reset vị trí bài đầu

  // Cập nhật tiêu đề
  document.getElementById("playlist-title").innerText = pl.name;

  // Danh sách bài hát
  const list = document.getElementById("song-list");
  list.innerHTML = "";

  pl.songs.forEach((song, i) => {
    const li = document.createElement("li");
    li.innerText = `${song.name} – ${song.artist}`;
    li.onclick = () => {
      currentIndex = i;       // ✅ Lưu vị trí bài đang phát
      playSong(song);         // ✅ Phát bài
    };
    list.appendChild(li);
  });

  // Hiện phần danh sách bài hát
  document.getElementById("all-songs-view")?.classList.remove("hidden");

  // Ẩn các phần khác
  document.getElementById("playlist-grid").style.display = "none";
  document.getElementById("song-view")?.classList?.add("hidden");
  document.getElementById("rightSongPanel")?.classList?.add("hidden");
}

function playNextSong() {
  if (!currentPlaylist.length) return;
  currentIndex = (currentIndex + 1) % currentPlaylist.length;
  playSong(currentPlaylist[currentIndex]);
}

function playPreviousSong() {
  if (!currentPlaylist.length) return;
  currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  playSong(currentPlaylist[currentIndex]);
}


loadSidebar();
renderHomePlaylists();

function showTab(tabName) {
  const tabs = document.querySelectorAll('.tabs .tab');
  tabs.forEach(t => t.classList.remove('active'));

  const selected = Array.from(tabs).find(t => t.textContent.toLowerCase() === tabName.toLowerCase());
  if (selected) selected.classList.add('active');

  const grid = document.getElementById("playlist-grid");
  const songView = document.getElementById("song-view");
  const allSongsView = document.getElementById("all-songs-view"); // Thêm dòng này

  if (tabName === "playlists") {
    grid.style.display = "grid";
    songView.classList.add("hidden");
    allSongsView.classList.add("hidden"); // Ẩn all songs
  } else if (tabName === "songs") {
    renderAllSongs(); // Gọi hàm render
  } else {
    // Nếu sau này có artists
    grid.style.display = "none";
    songView.classList.add("hidden");
    allSongsView.classList.add("hidden");
  }
}
function renderSidebarArtists() {
  const artists = [
    { name: 'HIEUTHUHAI', avatar: '/img/hieuthuhaiii.webp' },
    { name: 'Sơn Tùng M-TP', avatar: '/img/sontung.jpg' },
    { name: 'JustaTee', avatar: '/img/tee.webp' }
  ];

  const list = document.getElementById('sidebar-artists-view');
  list.innerHTML = '';

  artists.forEach(artist => {
    const li = document.createElement('li');
    li.className = 'sidebar-artist-item';
    li.innerHTML = `
      <img class="sidebar-artist-avatar" src="${artist.avatar}" alt="${artist.name}">
      <span class="sidebar-artist-name">${artist.name}</span>
    `;
    li.onclick = () => showArtistProfile(artist);
    list.appendChild(li);
  });
}
function selectSidebarTab(tabName) {
  // 1. Reset trạng thái active cho nút tab
  const tabs = document.querySelectorAll('.sidebar-tabs-horizontal .tab');
  tabs.forEach(t => t.classList.remove('active'));

  const selected = Array.from(tabs).find(t => t.textContent.toLowerCase() === tabName.toLowerCase());
  if (selected) selected.classList.add('active');

  // 2. Ẩn hết các view sidebar
  ["playlist-sidebar", "sidebar-songs-view", "sidebar-artists-view"].forEach(id => {
    document.getElementById(id)?.classList.add("hidden");
  });

  // 3. Hiện đúng tab được chọn
  if (tabName === 'playlists') {
    document.getElementById("playlist-sidebar")?.classList.remove("hidden");
  } else if (tabName === 'songs') {
    document.getElementById("sidebar-songs-view")?.classList.remove("hidden");
  } else if (tabName === 'artists') {
    document.getElementById("sidebar-artists-view")?.classList.remove("hidden");
    renderSidebarArtists(); // 🟢 Phải gọi sau khi hiển thị
  }
}

function showArtistProfile(artist) {
  alert(`👤 Artist: ${artist.name}`);
  // sau này có thể hiển thị artist-view riêng
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
  // Ẩn các view phụ
  document.getElementById("createPlaylistPanel")?.classList.add("hidden");
  document.getElementById("song-view")?.classList.add("hidden");
  document.getElementById("rightSongPanel")?.classList.add("hidden");
  document.getElementById("all-songs-view")?.classList.add("hidden");

  // Hiện lại lưới playlist
  document.getElementById("playlist-grid").style.display = "grid";

  // Reset tab tiêu đề nếu có
  document.querySelectorAll(".tabs .tab").forEach(t => t.classList.remove("active"));
  const playlistTab = Array.from(document.querySelectorAll(".tabs .tab"))
    .find(t => t.textContent.toLowerCase() === "playlists");
  if (playlistTab) playlistTab.classList.add("active");

  // Đặt lại tiêu đề chính nếu cần
  const title = document.querySelector(".content h2");
  if (title) title.textContent = "All Playlists";
}

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
  const loginLink = document.getElementById("loginLink");

  loginLink.addEventListener("click", function (e) {
    e.preventDefault(); 
    loginPopup.classList.remove("hidden");
    popupContainer.classList.remove("active"); 
  });

  registerBtn.addEventListener("click", () => {
    popupContainer.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    popupContainer.classList.remove("active");
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
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("mainAudio");
  const playBtn = document.getElementById("playPauseBtn");
  const icon = playBtn.querySelector("i");
  const progressBar = document.getElementById("progressBar");
  const currentTimeText = document.getElementById("currentTime");
  const durationText = document.getElementById("duration");
  const volumeBar = document.getElementById("volumeBar");

  // Định dạng mm:ss
  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  // Khi nhấn nút Play/Pause
  playBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      icon.classList.remove("fa-play-circle");
      icon.classList.add("fa-pause-circle");
    } else {
      audio.pause();
      icon.classList.remove("fa-pause-circle");
      icon.classList.add("fa-play-circle");
    }
  });

  // Khi nhạc đang phát, cập nhật tiến độ
  audio.addEventListener("timeupdate", function () {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent || 0;
    currentTimeText.textContent = formatTime(audio.currentTime);
    durationText.textContent = formatTime(audio.duration);
  });

  // Kéo thanh tiến độ để tua
  progressBar.addEventListener("input", function () {
    const seekTime = (audio.duration * progressBar.value) / 100;
    audio.currentTime = seekTime;
  });

  // Điều chỉnh volume
  volumeBar.addEventListener("input", function () {
    audio.volume = volumeBar.value / 100;
  });
});
