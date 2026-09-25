/* ================= 1. MARVEL CHARACTERS DATABASE ================= */
const MARVEL_USERS = {
  tulasi: {
    username: "tulasi_polireddy",
    name: "Tulasi Polireddy",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png/revision/latest/scale-to-width-down/1200?cb=20190316204818",
    bio: "🛡️ Captain America Vibranium Wielder\n⚡ Earth's Mightiest Avenger | Tactical Tech & UI Engineer\n📍 Avengers Compound, Upstate NY",
    website: "https://avengers.shield/tulasi",
    followersList: [], // Initialized at 0
    followingList: []  // Initialized at 0
  },
  tony: {
    username: "tony_stark",
    name: "Tony Stark 🦾",
    avatar: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=400&q=80",
    status: "none", // 'none' | 'requested' | 'following'
    followers: 8900000
  },
  peter: {
    username: "peter_parker",
    name: "Peter Parker 🕷️",
    avatar: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&w=400&q=80",
    status: "none",
    followers: 4200000
  },
  thor: {
    username: "thor_odinson",
    name: "Thor Odinson ⚡",
    avatar: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=400&q=80",
    status: "none",
    followers: 6500000
  },
  strange: {
    username: "dr_strange",
    name: "Stephen Strange 👁️",
    avatar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80",
    status: "none",
    followers: 2100000
  },
  wanda: {
    username: "wanda_maximoff",
    name: "Wanda Maximoff 🔮",
    avatar: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80",
    status: "none",
    followers: 5300000
  },
  natasha: {
    username: "natasha_romanoff",
    name: "Natasha Romanoff 🕷️",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "none",
    followers: 3900000
  },
  bruce: {
    username: "bruce_banner",
    name: "Bruce Banner 🧪",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "none",
    followers: 1800000
  }
};

/* ================= 2. GLOBAL STATE ================= */
const state = {
  currentUser: { ...MARVEL_USERS.tulasi },
  activeProfileTab: "posts",
  editingPostId: null,

  // Incoming follow requests to accept/decline
  pendingFollowRequests: [
    { id: "req_1", user: MARVEL_USERS.tony },
    { id: "req_2", user: MARVEL_USERS.wanda }
  ],

  // Custom Marvel Stories
  stories: [
    { 
      id: 101, 
      username: MARVEL_USERS.tony.username, 
      avatar: MARVEL_USERS.tony.avatar, 
      storyImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbstTe2HgW2u1lv5CrnWYxRtKRMieebZq1CtAYvPw5tlYiuUOmNfRHWAuV&s=10" // Tony Stark Story
    },
    { 
      id: 102, 
      username: MARVEL_USERS.peter.username, 
      avatar: MARVEL_USERS.peter.avatar, 
      storyImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpT0-EQVdT8RtpTIMEIftkmvuJGMtk3gG2GnHBV0HB2FK-H9ZiRnqYV0&s=10" // Peter Parker Story 1
    },
    { 
      id: 103, 
      username: MARVEL_USERS.peter.username, 
      avatar: MARVEL_USERS.peter.avatar, 
      storyImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscGfSvHiCqqtMcIOqXT2roTN4hd7ogJSR2e7xqymZF_R_Tw2ELYTD2GL7&s=10" // Peter Parker Story 2
    },
    { 
      id: 104, 
      username: MARVEL_USERS.strange.username, 
      avatar: MARVEL_USERS.strange.avatar, 
      storyImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" 
    }
  ],

  // Custom Marvel Posts Feed
  posts: [
    {
      id: 1,
      username: "tulasi_polireddy",
      avatar: MARVEL_USERS.tulasi.avatar,
      image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80",
      caption: "Vibranium shield inspected and battle-ready. Avengers Assemble! 🛡️⚡",
      likes: 2450,
      isLiked: false,
      isSaved: false,
      timestamp: "1 HOUR AGO",
      comments: [
        { id: 101, username: "tony_stark", text: "Don't scratch my paint job when you throw that thing.", likes: 14, isLiked: false },
        { id: 102, username: "peter_parker", text: "That shield does not obey the laws of physics at all! 🔥", likes: 28, isLiked: false }
      ]
    },
    {
      id: 2,
      username: "tony_stark",
      avatar: MARVEL_USERS.tony.avatar,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3pIbXvecBQVcUuN_wI-Ms3tl86uV8FEShmmsDUJIBE3sQnlJPGmI7IjO&s=10", // Tony Stark Custom Post
      caption: "New nanotech calibrations complete on Mark 85 armor. JARVIS says we're golden. 🦾✨",
      likes: 5890,
      isLiked: false,
      isSaved: true,
      timestamp: "3 HOURS AGO",
      comments: [
        { id: 104, username: "tulasi_polireddy", text: "Impressive upgrade Tony, ready for tomorrow's mission simulation.", likes: 45, isLiked: true }
      ]
    },
    {
      id: 3,
      username: "peter_parker",
      avatar: MARVEL_USERS.peter.avatar,
      image: "https://i.pinimg.com/736x/4a/b9/e4/4ab9e447e7b4d4d0df36c311dcf80c2e.jpg", // Peter Parker Custom Post
      caption: "Queens patrol complete! Staying vigilant for the neighborhood. 🕷️🕸️",
      likes: 3120,
      isLiked: false,
      isSaved: false,
      timestamp: "6 HOURS AGO",
      comments: [
        { id: 105, username: "natasha_romanoff", text: "Great positioning, kid. Stay alert.", likes: 8, isLiked: false }
      ]
    }
  ],

  // Notifications
  notifications: [
    { id: 1, username: "tony_stark", avatar: MARVEL_USERS.tony.avatar, text: "liked your vibranium shield post.", time: "5m ago" },
    { id: 2, username: "thor_odinson", avatar: MARVEL_USERS.thor.avatar, text: "commented on your intel.", time: "42m ago" }
  ],

  // Messages
  messages: {
    "tony_stark": [
      { sender: "tony_stark", text: "Tulasi, did you check the latest telemetry on the shield's kinetic return?" },
      { sender: "tulasi_polireddy", text: "Yes Tony, deflection rebound accuracy is up 25%." }
    ],
    "peter_parker": [
      { sender: "peter_parker", text: "Mr. Polireddy! Are we doing training session today?" }
    ]
  },
  activeChatUser: "tony_stark"
};

/* ================= 3. UI SYNC & INITIALIZATION ================= */
function syncCurrentUserUI() {
  document.querySelectorAll(".user-avatar-sync").forEach((img) => (img.src = state.currentUser.avatar));
  document.querySelectorAll(".user-username-sync").forEach((el) => (el.textContent = state.currentUser.username));
  document.querySelectorAll(".user-name-sync").forEach((el) => (el.textContent = state.currentUser.name));

  document.getElementById("profile-bio-text").innerText = state.currentUser.bio;
  const linkEl = document.getElementById("profile-website-link");
  linkEl.textContent = state.currentUser.website.replace(/^https?:\/\//, "");
  linkEl.href = state.currentUser.website;
  
  // Set accurate Followers & Following counts
  document.getElementById("profile-followers-count").textContent = state.currentUser.followersList.length;
  document.getElementById("profile-following-count").textContent = state.currentUser.followingList.length;

  // Update follow requests badge
  const reqCount = state.pendingFollowRequests.length;
  const badge = document.getElementById("nav-request-count");
  if (reqCount > 0) {
    badge.textContent = reqCount;
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
  document.getElementById("request-count-header").textContent = reqCount;
}

/* ================= 4. NAVIGATION ROUTER ================= */
document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
    document.querySelectorAll(".view-section").forEach((s) => s.classList.remove("active"));

    item.classList.add("active");
    const viewId = item.getAttribute("data-view");
    document.getElementById(viewId).classList.add("active");

    if (viewId === "profile-view") renderProfile();
    if (viewId === "notifications-view") renderNotifications();
  });
});

/* ================= 5. DARK MODE ================= */
const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggleBtn.innerHTML = isDark
    ? `<i class="fa-solid fa-sun"></i> <span>Light Mode</span>`
    : `<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>`;
});

/* ================= 6. STORIES ================= */
let activeStoryIndex = 0;
let storyTimer = null;

function renderStories() {
  const container = document.getElementById("stories-container");
  let html = `
    <div class="story-item" onclick="openAddStoryModal()">
      <div class="story-avatar-wrapper user-add-wrapper">
        <img src="${state.currentUser.avatar}" alt="Your Story" />
        <span class="add-story-badge"><i class="fa-solid fa-plus"></i></span>
      </div>
      <span>Your Story</span>
    </div>
  `;

  html += state.stories
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

  container.innerHTML = html;
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
  if (activeStoryIndex > 0) openStory(activeStoryIndex - 1);
}

function closeStory() {
  clearInterval(storyTimer);
  document.getElementById("story-viewer-modal").classList.remove("active");
}

document.getElementById("close-story-btn").addEventListener("click", closeStory);
document.getElementById("story-next-btn").addEventListener("click", nextStory);
document.getElementById("story-prev-btn").addEventListener("click", prevStory);

// Story Upload Modal
const addStoryModal = document.getElementById("add-story-modal");
const addStoryForm = document.getElementById("add-story-form");
let uploadedStorySrc = "";

function openAddStoryModal() {
  addStoryModal.classList.add("active");
}
document.getElementById("close-story-modal-btn").addEventListener("click", () => addStoryModal.classList.remove("active"));

document.getElementById("story-image-file").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      uploadedStorySrc = event.target.result;
      document.getElementById("story-preview").innerHTML = `<img src="${uploadedStorySrc}" />`;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("story-image-url").addEventListener("input", (e) => {
  if (e.target.value) {
    uploadedStorySrc = e.target.value;
    document.getElementById("story-preview").innerHTML = `<img src="${uploadedStorySrc}" />`;
  }
});

addStoryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const storyImg = uploadedStorySrc || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80";

  state.stories.unshift({
    id: Date.now(),
    username: state.currentUser.username,
    avatar: state.currentUser.avatar,
    storyImg: storyImg
  });

  renderStories();
  addStoryForm.reset();
  document.getElementById("story-preview").innerHTML = "";
  uploadedStorySrc = "";
  addStoryModal.classList.remove("active");
});

/* ================= 7. FEED POSTS & EDIT/DELETE ================= */
function renderFeed() {
  const feed = document.getElementById("posts-feed");
  feed.innerHTML = state.posts
    .map(
      (post) => `
      <article class="post-card" data-id="${post.id}">
        <!-- Header -->
        <header class="post-header">
          <div class="post-user-info">
            <img src="${post.avatar}" alt="${post.username}" class="post-avatar" />
            <strong>${post.username}</strong>
          </div>
          
          <div class="post-menu-container">
            <button onclick="togglePostMenu(${post.id})"><i class="fa-solid fa-ellipsis"></i></button>
            <div class="post-options-dropdown" id="dropdown-${post.id}">
              ${
                post.username === state.currentUser.username
                  ? `
                <button onclick="openEditPostModal(${post.id})"><i class="fa-solid fa-pen"></i> Edit</button>
                <button class="delete-btn" onclick="deletePost(${post.id})"><i class="fa-solid fa-trash"></i> Delete</button>
              `
                  : `
                <button onclick="alert('Post link copied!')"><i class="fa-regular fa-copy"></i> Copy Link</button>
                <button onclick="alert('Post reported.')"><i class="fa-solid fa-flag"></i> Report</button>
              `
              }
            </div>
          </div>
        </header>

        <!-- Image -->
        <div class="post-image-container" ondblclick="toggleLike(${post.id})">
          <img src="${post.image}" alt="Post" />
        </div>

        <!-- Actions -->
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

        <!-- Details -->
        <div class="post-details">
          <p class="post-likes"><span>${post.likes.toLocaleString()}</span> likes</p>
          <p class="post-caption"><strong>${post.username}</strong> ${post.caption}</p>
          
          <!-- Liked Comments List -->
          <div class="post-comments-list">
            ${post.comments
              .map(
                (c) => `
                <div class="post-comment-item">
                  <div class="comment-content">
                    <strong>${c.username}</strong>
                    <span>${c.text}</span>
                  </div>
                  <div class="comment-actions">
                    <button class="comment-like-btn ${c.isLiked ? "liked" : ""}" onclick="toggleCommentLike(${post.id}, ${c.id})">
                      <i class="${c.isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}"></i>
                      <span>${c.likes > 0 ? c.likes : ""}</span>
                    </button>
                    ${c.username === state.currentUser.username ? `<button class="delete-comment-btn" onclick="deleteComment(${post.id}, ${c.id})">Delete</button>` : ""}
                  </div>
                </div>
              `
              )
              .join("")}
          </div>

          <p class="post-time">${post.timestamp}</p>

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

function togglePostMenu(postId) {
  document.querySelectorAll(".post-options-dropdown").forEach((el) => {
    if (el.id !== `dropdown-${postId}`) el.classList.remove("show");
  });
  const menu = document.getElementById(`dropdown-${postId}`);
  if (menu) menu.classList.toggle("show");
}

window.addEventListener("click", (e) => {
  if (!e.target.closest(".post-menu-container")) {
    document.querySelectorAll(".post-options-dropdown").forEach((el) => el.classList.remove("show"));
  }
});

// Edit Post Modal
const editPostModal = document.getElementById("edit-post-modal");
const editPostForm = document.getElementById("edit-post-form");

function openEditPostModal(postId) {
  const post = state.posts.find((p) => p.id === postId);
  if (post) {
    state.editingPostId = postId;
    document.getElementById("edit-post-caption").value = post.caption;
    editPostModal.classList.add("active");
  }
}
document.getElementById("close-edit-post-btn").addEventListener("click", () => editPostModal.classList.remove("active"));

editPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const post = state.posts.find((p) => p.id === state.editingPostId);
  if (post) {
    post.caption = document.getElementById("edit-post-caption").value.trim();
    renderFeed();
    editPostModal.classList.remove("active");
  }
});

function deletePost(postId) {
  if (confirm("Are you sure you want to delete this post?")) {
    state.posts = state.posts.filter((p) => p.id !== postId);
    renderFeed();
    renderProfile();
  }
}

// Refresh Feed
function refreshFeed() {
  const refreshBtn = document.getElementById("refresh-feed-btn");
  refreshBtn.innerHTML = `<i class="fa-solid fa-arrows-rotate fa-spin"></i> Refreshing...`;
  setTimeout(() => {
    renderFeed();
    renderSuggestions();
    refreshBtn.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Refresh Feed`;
  }, 400);
}
document.getElementById("refresh-feed-btn").addEventListener("click", refreshFeed);
document.getElementById("sidebar-refresh-btn").addEventListener("click", refreshFeed);

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
    if (state.activeProfileTab === "saved") renderProfile();
  }
}

function toggleCommentLike(postId, commentId) {
  const post = state.posts.find((p) => p.id === postId);
  if (post) {
    const comment = post.comments.find((c) => c.id === commentId);
    if (comment) {
      comment.isLiked = !comment.isLiked;
      comment.likes += comment.isLiked ? 1 : -1;
      renderFeed();
    }
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
      text: input.value.trim(),
      likes: 0,
      isLiked: false
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

/* ================= 8. AUTOMATED FOLLOW / REQUEST ACCEPTANCE ================= */
function handleFollowAction(username) {
  const userKey = Object.keys(MARVEL_USERS).find((k) => MARVEL_USERS[k].username === username);
  if (!userKey) return;
  const targetUser = MARVEL_USERS[userKey];

  if (targetUser.status === "none") {
    // 1. Instantly set to "Requested"
    targetUser.status = "requested";
    renderSuggestions();
    renderSearch(document.getElementById("search-input").value);

    // 2. Automated simulated acceptance after 1.2 seconds
    setTimeout(() => {
      if (targetUser.status === "requested") {
        targetUser.status = "following";
        
        // Add to user following list if not already present
        if (!state.currentUser.followingList.some((u) => u.username === targetUser.username)) {
          state.currentUser.followingList.push(targetUser);
        }

        // Add acceptance notification
        state.notifications.unshift({
          id: Date.now(),
          username: targetUser.username,
          avatar: targetUser.avatar,
          text: "accepted your follow request.",
          time: "Just now"
        });

        syncCurrentUserUI();
        renderSuggestions();
        renderSearch(document.getElementById("search-input").value);
        renderNotifications();
      }
    }, 1200);

  } else if (targetUser.status === "requested") {
    // Cancel request
    targetUser.status = "none";
    syncCurrentUserUI();
    renderSuggestions();
    renderSearch(document.getElementById("search-input").value);

  } else if (targetUser.status === "following") {
    // Unfollow
    targetUser.status = "none";
    state.currentUser.followingList = state.currentUser.followingList.filter((u) => u.username !== targetUser.username);
    syncCurrentUserUI();
    renderSuggestions();
    renderSearch(document.getElementById("search-input").value);
  }
}

function renderSuggestions() {
  const container = document.getElementById("suggestions-list");
  const suggestedKeys = ["tony", "peter", "natasha", "wanda", "strange", "thor"];

  container.innerHTML = suggestedKeys
    .map((key) => {
      const user = MARVEL_USERS[key];
      let btnLabel = "Follow";
      let btnClass = "follow-toggle-btn";

      if (user.status === "requested") {
        btnLabel = "Requested";
        btnClass += " requested";
      } else if (user.status === "following") {
        btnLabel = "Following";
        btnClass += " following";
      }

      return `
      <div class="suggestion-item">
        <div class="suggestion-user-info">
          <img src="${user.avatar}" />
          <div>
            <strong>${user.username}</strong>
            <p style="font-size:12px; color:gray">${user.name}</p>
          </div>
        </div>
        <button class="${btnClass}" onclick="handleFollowAction('${user.username}')">
          ${btnLabel}
        </button>
      </div>
    `;
    })
    .join("");
}

/* ================= 9. NOTIFICATIONS & INCOMING REQUESTS ================= */
function renderNotifications() {
  const requestsList = document.getElementById("requests-list");
  if (state.pendingFollowRequests.length === 0) {
    requestsList.innerHTML = `<p style="color:gray; font-size:13px;">No pending follow requests.</p>`;
  } else {
    requestsList.innerHTML = state.pendingFollowRequests
      .map(
        (req) => `
        <div class="request-item">
          <div class="notification-user">
            <img src="${req.user.avatar}" />
            <div>
              <strong>${req.user.username}</strong>
              <p style="font-size:12px; color:gray">${req.user.name}</p>
            </div>
          </div>
          <div class="request-item-buttons">
            <button class="btn-confirm" onclick="acceptFollowRequest('${req.id}')">Confirm</button>
            <button class="btn-delete" onclick="declineFollowRequest('${req.id}')">Delete</button>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Regular Notifications List
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

  syncCurrentUserUI();
}

function acceptFollowRequest(requestId) {
  const req = state.pendingFollowRequests.find((r) => r.id === requestId);
  if (req) {
    state.currentUser.followersList.push(req.user);
    state.pendingFollowRequests = state.pendingFollowRequests.filter((r) => r.id !== requestId);
    state.notifications.unshift({
      id: Date.now(),
      username: req.user.username,
      avatar: req.user.avatar,
      text: "started following you.",
      time: "Just now"
    });
    renderNotifications();
    syncCurrentUserUI();
  }
}

function declineFollowRequest(requestId) {
  state.pendingFollowRequests = state.pendingFollowRequests.filter((r) => r.id !== requestId);
  renderNotifications();
  syncCurrentUserUI();
}

/* ================= 10. FOLLOWERS & FOLLOWING MODALS ================= */
const usersModal = document.getElementById("users-list-modal");
const usersModalTitle = document.getElementById("users-modal-title");
const usersModalList = document.getElementById("users-modal-list");

document.getElementById("stat-followers-btn").addEventListener("click", () => openUsersModal("Followers"));
document.getElementById("stat-following-btn").addEventListener("click", () => openUsersModal("Following"));
document.getElementById("close-users-modal-btn").addEventListener("click", () => usersModal.classList.remove("active"));

function openUsersModal(type) {
  usersModalTitle.textContent = type;
  const list = type === "Followers" ? state.currentUser.followersList : state.currentUser.followingList;

  if (list.length === 0) {
    usersModalList.innerHTML = `<p style="text-align:center; color:gray; padding:20px;">No ${type.toLowerCase()} yet.</p>`;
  } else {
    usersModalList.innerHTML = list
      .map(
        (user) => `
        <div class="user-list-item">
          <div class="suggestion-user-info">
            <img src="${user.avatar}" />
            <div>
              <strong>${user.username}</strong>
              <p style="font-size:12px; color:gray">${user.name}</p>
            </div>
          </div>
          <button class="btn-remove-user" onclick="${type === "Followers" ? `removeFollower('${user.username}')` : `unfollowUser('${user.username}')`}">
            ${type === "Followers" ? "Remove" : "Unfollow"}
          </button>
        </div>
      `
      )
      .join("");
  }
  usersModal.classList.add("active");
}

function removeFollower(username) {
  state.currentUser.followersList = state.currentUser.followersList.filter((u) => u.username !== username);
  openUsersModal("Followers");
  syncCurrentUserUI();
}

function unfollowUser(username) {
  state.currentUser.followingList = state.currentUser.followingList.filter((u) => u.username !== username);
  const userKey = Object.keys(MARVEL_USERS).find((k) => MARVEL_USERS[k].username === username);
  if (userKey) MARVEL_USERS[userKey].status = "none";
  openUsersModal("Following");
  renderSuggestions();
  syncCurrentUserUI();
}

/* ================= 11. SEARCH ================= */
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function renderSearch(query = "") {
  const cleanQuery = query.toLowerCase().trim();
  const allUsers = Object.values(MARVEL_USERS).filter((u) => u.username !== state.currentUser.username);

  const filtered = cleanQuery
    ? allUsers.filter((u) => u.username.toLowerCase().includes(cleanQuery) || u.name.toLowerCase().includes(cleanQuery))
    : allUsers;

  searchResults.innerHTML = filtered
    .map((user) => {
      let btnLabel = "Follow";
      let btnClass = "follow-toggle-btn";

      if (user.status === "requested") {
        btnLabel = "Requested";
        btnClass += " requested";
      } else if (user.status === "following") {
        btnLabel = "Following";
        btnClass += " following";
      }

      return `
      <div class="suggestion-item">
        <div class="suggestion-user-info">
          <img src="${user.avatar}" />
          <div>
            <strong>${user.username}</strong>
            <p style="font-size:12px; color:gray">${user.name} • ${user.followers.toLocaleString()} followers</p>
          </div>
        </div>
        <button class="${btnClass}" onclick="handleFollowAction('${user.username}')">
          ${btnLabel}
        </button>
      </div>
    `;
    })
    .join("");
}
searchInput.addEventListener("input", (e) => renderSearch(e.target.value));

/* ================= 12. PROFILE & EDIT PROFILE ================= */
function switchProfileTab(tab) {
  state.activeProfileTab = tab;
  document.getElementById("tab-posts-btn").classList.toggle("active", tab === "posts");
  document.getElementById("tab-saved-btn").classList.toggle("active", tab === "saved");
  renderProfile();
}

function renderProfile() {
  const grid = document.getElementById("profile-grid");
  const userPosts = state.posts.filter((p) => p.username === state.currentUser.username);
  const savedPosts = state.posts.filter((p) => p.isSaved);

  document.getElementById("profile-posts-count").textContent = userPosts.length;
  syncCurrentUserUI();

  if (state.activeProfileTab === "posts") {
    if (userPosts.length === 0) {
      grid.innerHTML = `<div class="empty-grid-msg"><i class="fa-solid fa-camera fa-2x"></i><br/>No Posts Yet</div>`;
      return;
    }
    grid.innerHTML = userPosts
      .map(
        (p) => `
        <div class="profile-grid-item" onclick="toggleLike(${p.id})">
          <img src="${p.image}" alt="Post" />
        </div>
      `
      )
      .join("");
  } else {
    if (savedPosts.length === 0) {
      grid.innerHTML = `<div class="empty-grid-msg"><i class="fa-regular fa-bookmark fa-2x"></i><br/>No Saved Posts Yet</div>`;
      return;
    }
    grid.innerHTML = savedPosts
      .map(
        (p) => `
        <div class="profile-grid-item" onclick="toggleSave(${p.id})">
          <img src="${p.image}" alt="Saved Post" />
        </div>
      `
      )
      .join("");
  }
}

// Edit Profile Modal
const editProfileModal = document.getElementById("edit-profile-modal");
const openEditProfileBtn = document.getElementById("open-edit-profile-btn");
const closeEditProfileBtn = document.getElementById("close-edit-profile-btn");
const editProfileForm = document.getElementById("edit-profile-form");
let editAvatarSrc = "";

openEditProfileBtn.addEventListener("click", () => {
  document.getElementById("edit-name-input").value = state.currentUser.name;
  document.getElementById("edit-username-input").value = state.currentUser.username;
  document.getElementById("edit-bio-input").value = state.currentUser.bio;
  document.getElementById("edit-website-input").value = state.currentUser.website;
  document.getElementById("edit-avatar-url").value = state.currentUser.avatar;
  editAvatarSrc = state.currentUser.avatar;
  editProfileModal.classList.add("active");
});

closeEditProfileBtn.addEventListener("click", () => editProfileModal.classList.remove("active"));

document.getElementById("edit-avatar-file").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => (editAvatarSrc = event.target.result);
    reader.readAsDataURL(file);
  }
});

document.getElementById("edit-avatar-url").addEventListener("input", (e) => {
  if (e.target.value.trim()) editAvatarSrc = e.target.value.trim();
});

editProfileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const oldUsername = state.currentUser.username;
  const newUsername = document.getElementById("edit-username-input").value.trim();

  state.currentUser.name = document.getElementById("edit-name-input").value.trim();
  state.currentUser.username = newUsername;
  state.currentUser.bio = document.getElementById("edit-bio-input").value.trim();
  state.currentUser.website = document.getElementById("edit-website-input").value.trim();
  state.currentUser.avatar = editAvatarSrc || state.currentUser.avatar;

  state.posts.forEach((p) => {
    if (p.username === oldUsername) {
      p.username = newUsername;
      p.avatar = state.currentUser.avatar;
    }
  });

  syncCurrentUserUI();
  renderFeed();
  renderStories();
  renderProfile();
  editProfileModal.classList.remove("active");
});

/* ================= 13. CREATE POST ================= */
const createModal = document.getElementById("create-modal");
const openCreateBtn = document.getElementById("open-create-btn");
const closeCreateBtn = document.getElementById("close-create-btn");
const createPostForm = document.getElementById("create-post-form");
let uploadedImageSrc = "";

openCreateBtn.addEventListener("click", () => createModal.classList.add("active"));
closeCreateBtn.addEventListener("click", () => createModal.classList.remove("active"));

document.getElementById("post-image-file").addEventListener("change", (e) => {
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

document.getElementById("post-image-url").addEventListener("input", (e) => {
  if (e.target.value) {
    uploadedImageSrc = e.target.value;
    document.getElementById("image-preview").innerHTML = `<img src="${uploadedImageSrc}" />`;
  }
});

createPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const caption = document.getElementById("post-caption-input").value;
  const image = uploadedImageSrc || "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80";

  state.posts.unshift({
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
  });

  renderFeed();
  createPostForm.reset();
  document.getElementById("image-preview").innerHTML = "";
  uploadedImageSrc = "";
  createModal.classList.remove("active");
});

/* ================= 14. MESSAGES ================= */
function renderChatSidebar() {
  const list = document.getElementById("chat-user-list");
  list.innerHTML = Object.keys(state.messages)
    .map((username) => {
      const user = Object.values(MARVEL_USERS).find((u) => u.username === username);
      return `
      <div class="chat-user-item ${username === state.activeChatUser ? "active" : ""}" onclick="switchChat('${username}')">
        <img src="${user ? user.avatar : ""}" />
        <div>
          <strong>${username}</strong>
          <p style="font-size:11px; color:gray">${user ? user.name : ""}</p>
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

    setTimeout(() => {
      let replyText = "Avengers comms received. Standby.";
      if (state.activeChatUser === "tony_stark") replyText = "Running telemetry on your coordinates now, Tulasi.";
      if (state.activeChatUser === "peter_parker") replyText = "On my way Mr. Polireddy! Web shooters reloaded!";

      state.messages[state.activeChatUser].push({
        sender: state.activeChatUser,
        text: replyText
      });
      renderChatMessages();
    }, 1000);
  }
});

/* ================= 15. INITIALIZE ================= */
function init() {
  syncCurrentUserUI();
  renderStories();
  renderFeed();
  renderSuggestions();
  renderSearch();
  renderNotifications();
  renderChatSidebar();
  renderChatMessages();
  renderProfile();
}

init();
