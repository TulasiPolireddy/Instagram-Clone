/* ================= MARVEL CHARACTERS DATABASE ================= */
const MARVEL_USERS = {
  tulasi: {
    username: "tulasi_polireddy",
    name: "Tulasi Polireddy",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png/revision/latest/scale-to-width-down/1200?cb=20190316204818",
    followers: 3420,
    following: 18
  },
  tony: {
    username: "tony_stark",
    name: "Tony Stark 🦾",
    avatar: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=200&q=80"
  },
  peter: {
    username: "peter_parker",
    name: "Peter Parker 🕷️",
    avatar: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&w=200&q=80"
  },
  thor: {
    username: "thor_odinson",
    name: "Thor Odinson ⚡",
    avatar: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=80"
  },
  natasha: {
    username: "natasha_romanoff",
    name: "Natasha Romanoff 🕷️",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  strange: {
    username: "dr_strange",
    name: "Stephen Strange 👁️",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  wanda: {
    username: "wanda_maximoff",
    name: "Wanda Maximoff 🔮",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  bruce: {
    username: "bruce_banner",
    name: "Bruce Banner 🧪",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
};

/* ================= GLOBAL APP STATE ================= */
const state = {
  currentUser: MARVEL_USERS.tulasi,
  
  // 1. Stories list with Marvel character stories
  stories: [
    { 
      id: 1, 
      username: MARVEL_USERS.tony.username, 
      avatar: MARVEL_USERS.tony.avatar, 
      storyImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 2, 
      username: MARVEL_USERS.peter.username, 
      avatar: MARVEL_USERS.peter.avatar, 
      storyImg: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      username: MARVEL_USERS.thor.username, 
      avatar: MARVEL_USERS.thor.avatar, 
      storyImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 4, 
      username: MARVEL_USERS.strange.username, 
      avatar: MARVEL_USERS.strange.avatar, 
      storyImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 5, 
      username: MARVEL_USERS.wanda.username, 
      avatar: MARVEL_USERS.wanda.avatar, 
      storyImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80" 
    }
  ],

  // 2. Feed Posts
  posts: [
    {
      id: 1,
      username: "tulasi_polireddy",
      avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png/revision/latest/scale-to-width-down/1200?cb=20190316204818",
      image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80",
      caption: "Vibranium shield inspected and battle-ready. Avengers Assemble! 🛡️⚡",
      likes: 2450,
      isLiked: false,
      isSaved: false,
      timestamp: "1 HOUR AGO",
      comments: [
        { id: 101, username: "tony_stark", text: "Don't scratch my paint job when you throw that thing." },
        { id: 102, username: "peter_parker", text: "That shield does not obey the laws of physics at all! 🔥" },
        { id: 103, username: "thor_odinson", text: "A FINE WEAPON FOR A NOBLE WARRIOR!" }
      ]
    },
    {
      id: 2,
      username: "tony_stark",
      avatar: MARVEL_USERS.tony.avatar,
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      caption: "New nanotech calibrations complete on Mark 85 armor. JARVIS says we're golden. 🦾✨",
      likes: 5890,
      isLiked: false,
      isSaved: false,
      timestamp: "3 HOURS AGO",
      comments: [
        { id: 104, username: "tulasi_polireddy", text: "Impressive upgrade Tony, ready for tomorrow's mission simulation." },
        { id: 105, username: "bruce_banner", text: "Remember to keep the gamma energy output stable." }
      ]
    },
    {
      id: 3,
      username: "peter_parker",
      avatar: MARVEL_USERS.peter.avatar,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      caption: "Queens sunset patrol view! Best city in the universe 🕷️🕸️🗽",
      likes: 3120,
      isLiked: false,
      isSaved: false,
      timestamp: "6 HOURS AGO",
      comments: [
        { id: 106, username: "natasha_romanoff", text: "Great positioning, kid. Stay alert." }
      ]
    }
  ],

  // 3. Notifications
  notifications: [
    { 
      id: 1, 
      username: "tony_stark", 
      avatar: MARVEL_USERS.tony.avatar, 
      text: "liked your vibranium shield post.", 
      time: "5m ago" 
    },
    { 
      id: 2, 
      username: "thor_odinson", 
      avatar: MARVEL_USERS.thor.avatar, 
      text: "commented: 'A FINE WEAPON FOR A NOBLE WARRIOR!'", 
      time: "42m ago" 
    },
    { 
      id: 3, 
      username: "peter_parker", 
      avatar: MARVEL_USERS.peter.avatar, 
      text: "started following you.", 
      time: "2h ago" 
    },
    { 
      id: 4, 
      username: "wanda_maximoff", 
      avatar: MARVEL_USERS.wanda.avatar, 
      text: "sent you a direct message from the Sanctum.", 
      time: "4h ago" 
    }
  ],

  // 4. Marvel Direct Messages
  messages: {
    "tony_stark": [
      { sender: "tony_stark", text: "Tulasi, did you check the latest telemetry on the shield's kinetic return?" },
      { sender: "tulasi_polireddy", text: "Yes Tony, deflection rebound accuracy is up 25%. Perfect for the field." }
    ],
    "peter_parker": [
      { sender: "peter_parker", text: "Mr. Polireddy! Are we doing training session with Cap's shield today?" },
      { sender: "tulasi_polireddy", text: "Be at the training facility at 15:00 sharp, Peter." }
    ],
    "thor_odinson": [
      { sender: "thor_odinson", text: "FELLOW WARRIOR! Shall we feast on shawarma after saving Midgard?" }
    ],
    "dr_strange": [
      { sender: "dr_strange", text: "I looked into 14,000,605 outcomes. Your defense strategy works in all of them." }
    ]
  },
  activeChatUser: "tony_stark"
};

/* ================= VIEW NAVIGATION ROUTER ================= */
document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
    document.querySelectorAll(".view-section").forEach((s) => s.classList.remove("active"));

    item.classList.add("active");
    const viewId = item.getAttribute("data-view");
    document.getElementById(viewId).classList.add("active");

    if (viewId === "profile-view") renderProfile();
  });
});

/* ================= DARK MODE TOGGLE ================= */
const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggleBtn.innerHTML = isDark
    ? `<i class="fa-solid fa-sun"></i> <span>Light Mode</span>`
    : `<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>`;
});

/* ================= STORIES LOGIC ================= */
let activeStoryIndex = 0;
let storyTimer = null;

function renderStories() {
  const container = document.getElementById("stories-container");
  container.innerHTML = state.stories
    .map(
      (story, index) => `
      <div class="story-item" onclick="openStory(${index})">
        <div class="story-avatar-wrapper">
          <img src="${story.avatar}" alt="${story.username}" />
        </div>
        <span>${story.username}</span>
      </div>
    `
    )
    .join("");
}

function openStory(index) {
  activeStoryIndex = index;
  const modal = document.getElementById("story-viewer-modal");
  const story = state.stories[index];

  document.getElementById("story-user-img").src = story.avatar;
  document.getElementById("story-user-name").textContent = story.username;
  document.getElementById("story-active-image").src = story.storyImg;

  modal.classList.add("active");
  startStoryProgress();
}

function startStoryProgress() {
  const progressBar = document.getElementById("story-progress");
  progressBar.style.width = "0%";
  clearInterval(storyTimer);

  let width = 0;
  storyTimer = setInterval(() => {
    width += 2;
    progressBar.style.width = `${width}%`;
    if (width >= 100) {
      clearInterval(storyTimer);
      nextStory();
    }
  }, 100);
}

function nextStory() {
  if (activeStoryIndex < state.stories.length - 1) {
    openStory(activeStoryIndex + 1);
  } else {
    closeStory();
  }
}

function prevStory() {
  if (activeStoryIndex > 0) {
    openStory(activeStoryIndex - 1);
  }
}

function closeStory() {
  clearInterval(storyTimer);
  document.getElementById("story-viewer-modal").classList.remove("active");
}

document.getElementById("close-story-btn").addEventListener("click", closeStory);
document.getElementById("story-next-btn").addEventListener("click", nextStory);
document.getElementById("story-prev-btn").addEventListener("click", prevStory);

/* ================= FEED POSTS ================= */
function renderFeed() {
  const feed = document.getElementById("posts-feed");
  feed.innerHTML = state.posts
    .map(
      (post) => `
      <article class="post-card" data-id="${post.id}">
        <!-- Post Header -->
        <header class="post-header">
          <div class="post-user-info">
            <img src="${post.avatar}" alt="${post.username}" class="post-avatar" />
            <strong>${post.username}</strong>
          </div>
          <button><i class="fa-solid fa-ellipsis"></i></button>
        </header>

        <!-- Post Image -->
        <div class="post-image-container" ondblclick="toggleLike(${post.id})">
          <img src="${post.image}" alt="Post image" />
        </div>

        <!-- Post Action Bar -->
        <div class="post-actions">
          <div class="post-actions-left">
            <button class="${post.isLiked ? "liked" : ""}" onclick="toggleLike(${post.id})">
              <i class="${post.isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}"></i>
            </button>
            <button><i class="fa-regular fa-comment"></i></button>
            <button><i class="fa-regular fa-paper-plane"></i></button>
          </div>
          <button class="${post.isSaved ? "saved" : ""}" onclick="toggleSave(${post.id})">
            <i class="${post.isSaved ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}"></i>
          </button>
        </div>

        <!-- Post Details -->
        <div class="post-details">
          <p class="post-likes"><span>${post.likes.toLocaleString()}</span> likes</p>
          <p class="post-caption"><strong>${post.username}</strong> ${post.caption}</p>
          
          <!-- Comments List -->
          <div class="post-comments-list">
            ${post.comments
              .map(
                (c) => `
                <div class="post-comment-item">
                  <p><strong>${c.username}</strong> ${c.text}</p>
                  ${c.username === state.currentUser.username ? `<button class="delete-comment-btn" onclick="deleteComment(${post.id}, ${c.id})">Delete</button>` : ""}
                </div>
              `
              )
              .join("")}
          </div>

          <p class="post-time">${post.timestamp}</p>

          <!-- Add Comment Form -->
          <form class="post-add-comment" onsubmit="handleAddComment(event, ${post.id})">
            <input type="text" placeholder="Add a comment to Avengers log..." required />
            <button type="submit">Post</button>
          </form>
        </div>
      </article>
    `
    )
    .join("");
}

function toggleLike(postId) {
  const post = state.posts.find((p) => p.id === postId);
  if (post) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    renderFeed();
  }
}

function toggleSave(postId) {
  const post = state.posts.find((p) => p.id === postId);
  if (post) {
    post.isSaved = !post.isSaved;
    renderFeed();
  }
}

function handleAddComment(e, postId) {
  e.preventDefault();
  const input = e.target.querySelector("input");
  const post = state.posts.find((p) => p.id === postId);
  if (post && input.value.trim()) {
    post.comments.push({
      id: Date.now(),
      username: state.currentUser.username,
      text: input.value.trim()
    });
    input.value = "";
    renderFeed();
  }
}

function deleteComment(postId, commentId) {
  const post = state.posts.find((p) => p.id === postId);
  if (post) {
    post.comments = post.comments.filter((c) => c.id !== commentId);
    renderFeed();
  }
}

/* ================= RIGHT SIDEBAR SUGGESTIONS ================= */
function renderSuggestions() {
  const container = document.getElementById("suggestions-list");
  const suggested = [MARVEL_USERS.natasha, MARVEL_USERS.wanda, MARVEL_USERS.strange, MARVEL_USERS.bruce];

  container.innerHTML = suggested
    .map(
      (user) => `
      <div class="suggestion-item">
        <div class="suggestion-user-info">
          <img src="${user.avatar}" />
          <div>
            <strong>${user.username}</strong>
            <p style="font-size:12px; color:gray">${user.name}</p>
          </div>
        </div>
        <button class="follow-toggle-btn">Follow</button>
      </div>
    `
    )
    .join("");
}

/* ================= CREATE POST MODAL ================= */
const createModal = document.getElementById("create-modal");
const openCreateBtn = document.getElementById("open-create-btn");
const closeCreateBtn = document.getElementById("close-create-btn");
const postImageFileInput = document.getElementById("post-image-file");
const postImageUrlInput = document.getElementById("post-image-url");
const createPostForm = document.getElementById("create-post-form");
let uploadedImageSrc = "";

openCreateBtn.addEventListener("click", () => createModal.classList.add("active"));
closeCreateBtn.addEventListener("click", () => createModal.classList.remove("active"));

postImageFileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      uploadedImageSrc = event.target.result;
      document.getElementById("image-preview").innerHTML = `<img src="${uploadedImageSrc}" />`;
    };
    reader.readAsDataURL(file);
  }
});

postImageUrlInput.addEventListener("input", (e) => {
  if (e.target.value) {
    uploadedImageSrc = e.target.value;
    document.getElementById("image-preview").innerHTML = `<img src="${uploadedImageSrc}" />`;
  }
});

createPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const caption = document.getElementById("post-caption-input").value;
  const image = uploadedImageSrc || "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80";

  const newPost = {
    id: Date.now(),
    username: state.currentUser.username,
    avatar: state.currentUser.avatar,
    image: image,
    caption: caption,
    likes: 1,
    isLiked: false,
    isSaved: false,
    timestamp: "JUST NOW",
    comments: []
  };

  state.posts.unshift(newPost);
  renderFeed();
  createPostForm.reset();
  document.getElementById("image-preview").innerHTML = "";
  uploadedImageSrc = "";
  createModal.classList.remove("active");
});

/* ================= SEARCH AVENGERS ================= */
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const allUsers = Object.values(MARVEL_USERS);

  const filtered = allUsers.filter(
    (u) => u.username.toLowerCase().includes(query) || u.name.toLowerCase().includes(query)
  );

  searchResults.innerHTML = filtered
    .map(
      (user) => `
      <div class="suggestion-item">
        <div class="suggestion-user-info">
          <img src="${user.avatar}" />
          <div>
            <strong>${user.username}</strong>
            <p style="font-size:12px; color:gray">${user.name}</p>
          </div>
        </div>
        <button class="follow-toggle-btn">View Intel</button>
      </div>
    `
    )
    .join("");
});

/* ================= PROFILE PAGE ================= */
function renderProfile() {
  const userPosts = state.posts.filter((p) => p.username === state.currentUser.username);
  document.getElementById("profile-posts-count").textContent = userPosts.length;
  document.getElementById("profile-followers-count").textContent = state.currentUser.followers.toLocaleString();
  document.getElementById("profile-following-count").textContent = state.currentUser.following;

  const grid = document.getElementById("profile-grid");
  grid.innerHTML = userPosts
    .map(
      (p) => `
      <div class="profile-grid-item">
        <img src="${p.image}" alt="User post" />
      </div>
    `
    )
    .join("");
}

/* ================= NOTIFICATIONS ================= */
function renderNotifications() {
  const container = document.getElementById("notifications-list");
  container.innerHTML = state.notifications
    .map(
      (n) => `
      <div class="notification-item">
        <div class="notification-user">
          <img src="${n.avatar}" />
          <p><strong>${n.username}</strong> ${n.text} <span style="color:gray; font-size:12px">${n.time}</span></p>
        </div>
      </div>
    `
    )
    .join("");
}

/* ================= CHAT / MESSAGING ================= */
function renderChatSidebar() {
  const list = document.getElementById("chat-user-list");
  list.innerHTML = Object.keys(state.messages)
    .map((username) => {
      const user = Object.values(MARVEL_USERS).find((u) => u.username === username);
      return `
      <div class="chat-user-item ${username === state.activeChatUser ? "active" : ""}" onclick="switchChat('${username}')">
        <img src="${user ? user.avatar : ''}" />
        <div>
          <strong>${username}</strong>
          <p style="font-size:11px; color:gray">${user ? user.name : ''}</p>
        </div>
      </div>
    `;
    })
    .join("");
}

function switchChat(username) {
  state.activeChatUser = username;
  renderChatSidebar();
  renderChatMessages();
}

function renderChatMessages() {
  document.getElementById("chat-header").textContent = `Direct Comms: ${state.activeChatUser}`;
  const messagesContainer = document.getElementById("chat-messages");
  const currentMessages = state.messages[state.activeChatUser] || [];

  messagesContainer.innerHTML = currentMessages
    .map(
      (msg) => `
      <div class="chat-bubble ${msg.sender === state.currentUser.username ? "sent" : "received"}">
        ${msg.text}
      </div>
    `
    )
    .join("");
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Interactive chat reply with Marvel character dialogue
document.getElementById("chat-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const text = input.value.trim();

  if (text) {
    state.messages[state.activeChatUser].push({
      sender: state.currentUser.username,
      text: text
    });
    input.value = "";
    renderChatMessages();

    // Simulated character replies
    setTimeout(() => {
      let replyText = "Understood. Avengers standby.";
      if (state.activeChatUser === "tony_stark") replyText = "JARVIS, run a simulation on Tulasi's coordinates.";
      if (state.activeChatUser === "thor_odinson") replyText = "BY ODIN'S BEARD! We shall celebrate with victory!";
      if (state.activeChatUser === "peter_parker") replyText = "Awesome Mr. Polireddy! I'll be there right after school!";
      if (state.activeChatUser === "dr_strange") replyText = "The astral plane confirms our strategy. Proceed.";

      state.messages[state.activeChatUser].push({
        sender: state.activeChatUser,
        text: replyText
      });
      renderChatMessages();
    }, 1000);
  }
});

/* ================= INITIALIZATION ================= */
function init() {
  renderStories();
  renderFeed();
  renderSuggestions();
  renderNotifications();
  renderChatSidebar();
  renderChatMessages();
  renderProfile();
}

init();
