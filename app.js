/* ================= GLOBAL STATE ================= */
const state = {
  currentUser: {
    username: "sarah_dev",
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    followers: 1240,
    following: 380,
    isFollowing: false
  },
  stories: [
    { id: 1, username: "alex_travel", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", storyImg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" },
    { id: 2, username: "julia_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", storyImg: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
    { id: 3, username: "mark_code", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", storyImg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" }
  ],
  posts: [
    {
      id: 1,
      username: "alex_travel",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      caption: "Serene landscapes and endless horizons 🏔️✨",
      likes: 124,
      isLiked: false,
      isSaved: false,
      timestamp: "2 HOURS AGO",
      comments: [
        { id: 101, username: "julia_design", text: "Stunning view!" },
        { id: 102, username: "sarah_dev", text: "Incredible shot! Where is this?" }
      ]
    },
    {
      id: 2,
      username: "julia_design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
      caption: "Workspace aesthetics today ☕💡 Clean vibes only.",
      likes: 89,
      isLiked: false,
      isSaved: false,
      timestamp: "5 HOURS AGO",
      comments: [
        { id: 103, username: "mark_code", text: "Love this minimal setup!" }
      ]
    }
  ],
  notifications: [
    { id: 1, username: "alex_travel", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", text: "liked your post.", time: "10m ago" },
    { id: 2, username: "mark_code", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", text: "started following you.", time: "2h ago" },
    { id: 3, username: "julia_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", text: "commented: 'Nice work!'", time: "1d ago" }
  ],
  messages: {
    "alex_travel": [
      { sender: "alex_travel", text: "Hey Sarah! How's the project going?" },
      { sender: "sarah_dev", text: "Hey! Going great, wrapping up the frontend today!" }
    ],
    "julia_design": [
      { sender: "julia_design", text: "Did you check the new Figma designs?" }
    ]
  },
  activeChatUser: "alex_travel"
};

/* ================= 1. VIEW NAVIGATION ROUTER ================= */
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

/* ================= 2. DARK MODE TOGGLE ================= */
const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggleBtn.innerHTML = isDark
    ? `<i class="fa-solid fa-sun"></i> <span>Light Mode</span>`
    : `<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>`;
});

/* ================= 3. STORIES RENDER & VIEWER ================= */
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

/* ================= 4. FEED POSTS RENDER ================= */
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

        <!-- Post Media -->
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
          <p class="post-likes"><span>${post.likes}</span> likes</p>
          <p class="post-caption"><strong>${post.username}</strong> ${post.caption}</p>
          
          <!-- Comments Section -->
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
            <input type="text" placeholder="Add a comment..." required />
            <button type="submit">Post</button>
          </form>
        </div>
      </article>
    `
    )
    .join("");
}

/* Like Toggle */
function toggleLike(postId) {
  const post = state.posts.find((p) => p.id === postId);
  if (post) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    renderFeed();
  }
}

/* Save Toggle */
function toggleSave(postId) {
  const post = state.posts.find((p) => p.id === postId);
  if (post) {
    post.isSaved = !post.isSaved;
    renderFeed();
  }
}

/* Comment Add/Delete */
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

/* ================= 5. CREATE POST MODAL ================= */
const createModal = document.getElementById("create-modal");
const openCreateBtn = document.getElementById("open-create-btn");
const closeCreateBtn = document.getElementById("close-create-btn");
const postImageFileInput = document.getElementById("post-image-file");
const postImageUrlInput = document.getElementById("post-image-url");
const createPostForm = document.getElementById("create-post-form");
let uploadedImageSrc = "";

openCreateBtn.addEventListener("click", () => createModal.classList.add("active"));
closeCreateBtn.addEventListener("click", () => createModal.classList.remove("active"));

// File upload preview
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

// URL Preview
postImageUrlInput.addEventListener("input", (e) => {
  if (e.target.value) {
    uploadedImageSrc = e.target.value;
    document.getElementById("image-preview").innerHTML = `<img src="${uploadedImageSrc}" />`;
  }
});

createPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const caption = document.getElementById("post-caption-input").value;
  const image = uploadedImageSrc || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";

  const newPost = {
    id: Date.now(),
    username: state.currentUser.username,
    avatar: state.currentUser.avatar,
    image: image,
    caption: caption,
    likes: 0,
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

/* ================= 6. SEARCH FUNCTIONALITY ================= */
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const allUsers = [
    { username: "alex_travel", name: "Alex Rover", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" },
    { username: "julia_design", name: "Julia Roberts", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
    { username: "mark_code", name: "Mark Vance", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" }
  ];

  const filtered = allUsers.filter((u) => u.username.includes(query) || u.name.toLowerCase().includes(query));

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
        <button class="follow-toggle-btn">View</button>
      </div>
    `
    )
    .join("");
});

/* ================= 7. PROFILE PAGE ================= */
function renderProfile() {
  const userPosts = state.posts.filter((p) => p.username === state.currentUser.username);
  document.getElementById("profile-posts-count").textContent = userPosts.length;
  document.getElementById("profile-followers-count").textContent = state.currentUser.followers;
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

const profileFollowBtn = document.getElementById("profile-follow-btn");
profileFollowBtn.addEventListener("click", () => {
  state.currentUser.isFollowing = !state.currentUser.isFollowing;
  if (state.currentUser.isFollowing) {
    profileFollowBtn.textContent = "Following";
    profileFollowBtn.classList.add("following");
    state.currentUser.followers += 1;
  } else {
    profileFollowBtn.textContent = "Follow";
    profileFollowBtn.classList.remove("following");
    state.currentUser.followers -= 1;
  }
  document.getElementById("profile-followers-count").textContent = state.currentUser.followers;
});

/* ================= 8. NOTIFICATIONS ================= */
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

/* ================= 9. CHAT & MESSAGES ================= */
function renderChatSidebar() {
  const list = document.getElementById("chat-user-list");
  list.innerHTML = Object.keys(state.messages)
    .map(
      (username) => `
      <div class="chat-user-item ${username === state.activeChatUser ? "active" : ""}" onclick="switchChat('${username}')">
        <img src="${username === "alex_travel" ? "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"}" />
        <strong>${username}</strong>
      </div>
    `
    )
    .join("");
}

function switchChat(username) {
  state.activeChatUser = username;
  renderChatSidebar();
  renderChatMessages();
}

function renderChatMessages() {
  document.getElementById("chat-header").textContent = state.activeChatUser;
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

    // Auto simulated reply after 1s
    setTimeout(() => {
      state.messages[state.activeChatUser].push({
        sender: state.activeChatUser,
        text: "Sounds great! Let's connect soon."
      });
      renderChatMessages();
    }, 1000);
  }
});

/* ================= 10. INITIALIZATION ================= */
function init() {
  renderStories();
  renderFeed();
  renderNotifications();
  renderChatSidebar();
  renderChatMessages();
  renderProfile();
}

init();
