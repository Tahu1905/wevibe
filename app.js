const playlists = [
  {
    name: "Ai Cũn Phải Bắt Đầu Từ Đâu Đó",
    image: "img/hieuthuhai.jpg",
    songs: [
      { name: "Mamma Mia", 
        artist: "HIEUTHUHAI", 
        file: "/music/mamma_mia.mp3", 
        image: "…" 
      
      },
      { name: "Hẹn Gặp Em Dưới Ánh Trăng", 
        artist: "HIEUTHUHAI",
        file: "/music/hen_gap_em.mp3",
        image: "…",
        lyrics: `"Vì anh muốn vào ngày mai ta Cùng nhau sánh bước mặc bao ánh mắt
                Ngoài những lời nói làm đầy tai ra
                Em là duy nhất anh không thể đánh mất
                Đôi mắt hướng về em một chút thôi mà thời gian trôi em rạng ngời
                Ngắm nhìn em thêm một phút thôi mà đôi môi mang nụ cười”`,
        credits: [
        { name: "HIEUTHUHAI", roles: "Performer" },
        { name: "HURRYKNG", roles: "Performer" },
        { name: "MANBO", roles: "Performer" },
        { name: "Lam Bach Phuc Hau", roles: "Songwriter" },
        { name: "Trần Minh Hiếu", roles: "Songwriter" },
        { name: "Pham Bao Khang", roles: "Songwriter" },
        ] 
      },
      { name: "Không Thể Say", 
        artist: "HIEUTHUHAI",
        file: "/music/khong_the_say.mp3", 
        image: "…" },
      { name: 
        "Exit Sign", 
        artist: "HIEUTHUHAI",
        file: "/music/exit_sign.mp3",
        image: "…" },

    ]
  },
  {
    name: "Gabriel",
    image: "img/Gabriel.webp",
    songs: [
      { name: "Somebody", 
        artist: "keshi",
        file: "/music/somebody.mp3", 
        lyrics: `"You're somebody I just met tonight…”`,
        credits: [
          { name: "Keshi", roles: "Artist / Producer / Writer" },
          { name: "Chloe George", roles: "Writer" }
        ],
        image: "…" },
      { name: "Westside", 
        artist: "keshi", 
        file: "/music/westside.mp3", 
        image: "…" },
      { name: "Understand", 
        artist: "keshi", 
        ile: "/music/understand.mp3", 
        image: "…" },
      { name: "Limbo", 
        artist: "keshi", 
        file: "/music/limbo.mp3", 
        image: "…" },
      ]
  },
  {
    name: "LOI CHOI: The Neo Pop Punk",
    image: "img/loichoi.webp",
    songs: [
      { name: "Phóng Đổ Tim Em", 
        artist: "Wren Evans & itsnk", 
        file: "/music/phong_do_tim_em.mp3", 
        image: "…" },
      { name: "Call Me", 
        artist: "Wren Evans & itsnk", 
        file: "/music/call_me.mp3", 
        image: "…" },
      { name: "Cầu Vĩnh Tuy", 
        artist: "Wren Evans & itsnk", 
        file: "/music/cau_vinh_tuy.mp3", 
        image: "…" },
      { name: "Từng Quen", 
        artist: "Wren Evans & itsnk", 
        file: "/music/tung_quen.mp3", 
        image: "…" },
      { name: "Bé Ơi Từ Từ", 
        artist: "Wren Evans & itsnk", 
        file: "/music/be_oi_tu_tu.mp3", 
        image: "…" },
    ]
  },
  {
    name: "LAST SWEET",
    image: "/img/sojulove.webp",
    songs: [
      { name: "Can We Love", artist: "Obito", file: "/music/can_we_love.mp3", image: "…" }
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
  document.getElementById("lyrics-text").textContent = song.lyrics || getLyricsFor(song.name, song.artist);


  document.getElementById("song-view").classList.remove("hidden");
  document.getElementById("playlist-grid").style.display = "none";
  document.getElementById("all-songs-view")?.classList?.add("hidden");
  document.getElementById("main-heading")?.classList.add("hidden");

// Cập nhật panel bên phải
document.getElementById("right-banner-img").src = song.image;
document.getElementById("right-song-title").textContent = song.name;
document.getElementById("right-song-artist").textContent = song.artist;
document.getElementById("right-lyrics").textContent = song.lyrics || getLyricsFor(song.name, song.artist);
document.getElementById("rightSongPanel").classList.remove("hidden");

// Hiện panel
document.getElementById("rightSongPanel").classList.remove("hidden");

// 👉 Cập nhật phần Credits
const creditList = document.getElementById("credits-list");
creditList.innerHTML = ""; // Xóa cũ

if (song.credits && song.credits.length > 0) {
  song.credits.forEach(credit => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${credit.name}</strong> – ${credit.roles}`;
    creditList.appendChild(li);
  });
} else {
  creditList.innerHTML = "<li>No credits available</li>";
}

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

  // Cập nhật tiêu đề
  document.getElementById("playlist-title").innerText = pl.name;

  // Danh sách bài hát
  const list = document.getElementById("song-list");
  list.innerHTML = "";

  pl.songs.forEach(song => {
    const li = document.createElement("li");
    li.innerText = `${song.name} – ${song.artist}`;
    li.onclick = () => playSong(song); // Click vào bài nào mới phát bài đó
    list.appendChild(li);
  });

  // Hiện phần danh sách bài hát
  document.getElementById("all-songs-view")?.classList.remove("hidden");

  // Ẩn các phần khác
  document.getElementById("playlist-grid").style.display = "none";
  document.getElementById("song-view")?.classList?.add("hidden");
  document.getElementById("rightSongPanel")?.classList?.add("hidden");
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
  if (title) title.textContent = "ALL Playlists";
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
