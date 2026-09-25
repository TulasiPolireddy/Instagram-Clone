/* ================= 1. MARVEL USERS DATABASE ================= */
const MARVEL_USERS = {
  tulasi: {
    username: "tulasi_polireddy",
    name: "Tulasi Polireddy",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png/revision/latest/scale-to-width-down/1200?cb=20190316204818",
    bio: "🛡️ Captain America Vibranium Wielder\n⚡ Earth's Mightiest Avenger | Tactical Tech & UI Engineer\n📍 Avengers Compound, Upstate NY",
    website: "https://avengers.shield/tulasi",
    followers: 3420,
    following: 18
  },
  tony: {
    username: "tony_stark",
    name: "Tony Stark 🦾",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20231025175916",
    isFollowing: true,
    followers: 8900000
  },
  peter: {
    username: "peter_parker",
    name: "Peter Parker 🕷️",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/87/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20231025183307",
    isFollowing: true,
    followers: 4200000
  },
  thor: {
    username: "thor_odinson",
    name: "Thor Odinson ⚡",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor_Love_and_Thunder_profile.jpg/revision/latest?cb=20231025183424",
    isFollowing: false,
    followers: 6500000
  },
  strange: {
    username: "dr_strange",
    name: "Stephen Strange 👁️",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/dd/Doctor_Strange_profile.jpg/revision/latest?cb=20230713024825",
    isFollowing: false,
    followers: 2100000
  },
  wanda: {
    username: "wanda_maximoff",
    name: "Wanda Maximoff 🔮",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0c/Scarlet_Witch_profile.jpg/revision/latest?cb=20230713024419",
    isFollowing: false,
    followers: 5300000
  },
  natasha: {
    username: "natasha_romanoff",
    name: "Natasha Romanoff 🕷️",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/Black_Widow_D23_Banner.jpg/revision/latest?cb=20190825171731",
    isFollowing: false,
    followers: 3900000
  },
  bruce: {
    username: "bruce_banner",
    name: "Bruce Banner 🧪",
    avatar: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/BruceBanner-EndgameProfile.jpg/revision/latest?cb=20231025180047",
    isFollowing: false,
    followers: 1800000
  }
};

/* ================= 2. GLOBAL APPLICATION STATE ================= */
const state = {
  currentUser: { ...MARVEL_USERS.tulasi },
  activeProfileTab: "posts",
  
  // Stories
  stories: [
    { 
      id: 101, 
      username: MARVEL_USERS.tony.username, 
      avatar: MARVEL_USERS.tony.avatar, 
      storyImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 102, 
      username: MARVEL_USERS.peter.username, 
      avatar: MARVEL_USERS.peter.avatar, 
      storyImg: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 103, 
      username: MARVEL_USERS.strange.username, 
      avatar: MARVEL_USERS.strange.avatar, 
      storyImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 104, 
      username: MARVEL_USERS.wanda.username, 
      avatar: MARVEL_USERS.wanda.avatar, 
      storyImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80" 
    }
  ],

  // Posts Feed with Liked Comments
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
        { id: 102, username: "peter_parker", text: "That shield does not obey the laws of physics at all! 🔥", likes: 28, isLiked: false },
        { id: 103, username: "thor_odinson", text: "A FINE WEAPON FOR A NOBLE WARRIOR!", likes: 9, isLiked: false }
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
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      caption: "Queens sunset patrol view! Best city in the universe 🕷️🕸️🗽",
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
    { id: 2, username: "thor_odinson", avatar: MARVEL_USERS.thor.avatar, text: "commented: 'A FINE WEAPON FOR A NOBLE WARRIOR!'", time: "42m ago" },
    { id: 3, username: "wanda_maximoff", avatar: MARVEL_USERS.wanda.avatar, text: "started following you.", time: "2h ago" }
  ],

  // Messages
  messages: {
    "tony_stark": [
      { sender: "tony_stark", text: "Tulasi, did you check the latest telemetry on the shield's kinetic return?" },
      { sender: "tulasi_polireddy", text: "Yes Tony, deflection rebound accuracy is up 25%. Perfect for the field." }
    ],
    "dr_strange": [
      { sender: "dr_strange", text: "The Mirror Dimension is secure for tomorrow's defensive practice." }
    ],
    "wanda_maximoff": [
      { sender: "wanda_maximoff", text: "Thank you for the support on the mission briefing, Tulasi." }
    ],
    "peter_parker": [
      { sender: "peter_parker", text: "Mr. Polireddy! Are we doing training session with Cap's shield today?" }
    ]
  },
  activeChatUser: "tony_stark"
};

/* ================= 3. SYNC USER PROFILE IN DOM ================= */
function syncCurrentUserUI() {
  document.querySelectorAll(".user-avatar-sync").forEach((img) => (img.src = state.currentUser.avatar));
  document.querySelectorAll(".user-username-sync").forEach((el) => (el.textContent = state.currentUser.username));
  document.querySelectorAll(".user-name-sync").forEach((el) => (el.textContent = state.currentUser.name));

  document.getElementById("profile-bio-text").innerText = state.currentUser.bio;
  const linkEl = document.getElementById("profile-website-link");
  linkEl.textContent = state.currentUser.website.replace(/^https?:\/\//, "");
  linkEl.href = state.currentUser.website;
  document.getElementById("profile-followers-count").textContent = state.currentUser.followers.toLocaleString();
  document.getElementById("profile-following-count").textContent = state.currentUser.following;
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

/* ================= 6. STORIES (VIEW & POST) ================= */
let activeStoryIndex = 0;
let storyTimer = null;

function renderStories() {
  const container = document.getElementById("stories-container");
  
  // "Add Your Story" circular button
  let html = `
    <div class="story-item" onclick="openAddStoryModal()">
      <div class="story-avatar-wrapper user-add-wrapper">
        <img src="${state.currentUser.avatar}" alt="Your Story" />
        <span class="add-story-badge"><i class="fa-solid fa-plus"></i></span>
      </div>
      <span>Your Story</span>
    </div>
  `;

  // Render Friend Stories
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

// Add Story Modal Logic
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

/* ================= 7. FEED POSTS & LIKED COMMENTS ================= */
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
          <button><i class="fa-solid fa-ellipsis"></i></button>
        </header>

        <!-- Media -->
        <div class="post-image-container" ondblclick="toggleLike(${post.id})">
          <img src="${post.image}" alt="Post image" />
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
          
          <!-- Comments List with Liked Comments -->
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

          <!-- Add Comment -->
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

/* ================= 8. FOLLOW / UNFOLLOW SYSTEM ================= */
function toggleFollowUser(username) {
  const userKey = Object.keys(MARVEL_USERS).find((k) => MARVEL_USERS[k].username === username);
  if (!userKey) return;

  const user = MARVEL_USERS[userKey];
  user.isFollowing = !user.isFollowing;

  if (user.isFollowing) {
    state.currentUser.following += 1;
    user.followers += 1;
  } else {
    state.currentUser.following = Math.max(0, state.currentUser.following - 1);
    user.followers = Math.max(0, user.followers - 1);
  }

  syncCurrentUserUI();
  renderSuggestions();
  renderSearch(document.getElementById("search-input").value);
}

function renderSuggestions() {
  const container = document.getElementById("suggestions-list");
  const suggestedKeys = ["natasha", "wanda", "strange", "bruce", "thor"];

  container.innerHTML = suggestedKeys
    .map((key) => {
      const user = MARVEL_USERS[key];
      return `
      <div class="suggestion-item">
        <div class="suggestion-user-info">
          <img src="${user.avatar}" />
          <div>
            <strong>${user.username}</strong>
            <p style="font-size:12px; color:gray">${user.name}</p>
          </div>
        </div>
        <button class="follow-toggle-btn ${user.isFollowing ? "following" : ""}" onclick="toggleFollowUser('${user.username}')">
          ${user.isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    `;
    })
    .join("");
}

/* ================= 9. SEARCH WITH FOLLOW / UNFOLLOW ================= */
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function renderSearch(query = "") {
  const cleanQuery = query.toLowerCase().trim();
  const allUsers = Object.values(MARVEL_USERS).filter((u) => u.username !== state.currentUser.username);

  const filtered = cleanQuery
    ? allUsers.filter((u) => u.username.toLowerCase().includes(cleanQuery) || u.name.toLowerCase().includes(cleanQuery))
    : allUsers;

  searchResults.innerHTML = filtered
    .map(
      (user) => `
      <div class="suggestion-item">
        <div class="suggestion-user-info">
          <img src="${user.avatar}" />
          <div>
            <strong>${user.username}</strong>
            <p style="font-size:12px; color:gray">${user.name} • ${user.followers.toLocaleString()} followers</p>
          </div>
        </div>
        <button class="follow-toggle-btn ${user.isFollowing ? "following" : ""}" onclick="toggleFollowUser('${user.username}')">
          ${user.isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    `
    )
    .join("");
}
searchInput.addEventListener("input", (e) => renderSearch(e.target.value));

/* ================= 10. PROFILE TABS & EDIT PROFILE ================= */
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
    // Saved Tab
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

  // Update existing user posts with new username and avatar
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

/* ================= 11. CREATE POST MODAL ================= */
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

/* ================= 12. NOTIFICATIONS & MESSAGES ================= */
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
      let replyText = "Understood. Avengers standby.";
      if (state.activeChatUser === "tony_stark") replyText = "JARVIS, run telemetry on Tulasi's coordinates.";
      if (state.activeChatUser === "dr_strange") replyText = "The astral plane confirms our next move. Proceed.";
      if (state.activeChatUser === "wanda_maximoff") replyText = "I've got the perimeter covered with chaos hexes.";
      if (state.activeChatUser === "peter_parker") replyText = "On my way Mr. Polireddy! Web shooters reloaded!";

      state.messages[state.activeChatUser].push({
        sender: state.activeChatUser,
        text: replyText
      });
      renderChatMessages();
    }, 1000);
  }
});

/* ================= 13. INITIALIZE APP ================= */
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
