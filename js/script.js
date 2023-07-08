// select html elsments

const unreadMsg = document.querySelector(".unreads");
const button = document.querySelector(".btn");
const notifications = document.querySelector(".notifications");
const profiles = [...document.querySelectorAll(".profile")];
const unreadIcon = [...document.querySelectorAll(".unread-dot")].length;

window.addEventListener("DOMContentLoaded", () => {
  unreadMsg.textContent = unreadIcon;
});

// toggle between mark all as read/unread
function markAllRead(btn) {
  btn.addEventListener("click", () => {
    notifications.classList.toggle("read");
    if (notifications.classList.contains("read")) {
      unreadMsg.textContent = 0;
      profiles.forEach(function (profile) {
        profile.classList.remove("read");
      });
    } else {
      unreadMsg.textContent = unreadIcon;
    }

    if (unreadMsg.textContent == 0) {
      btn.textContent = "Mark all as Unread";
    } else {
      btn.textContent = "Mark all as read";
    }
  });
}

// mark each profile as read
profiles.forEach(function (profile) {
  profile.addEventListener("click", () => {
    if (!notifications.classList.contains("read")) {
      profile.classList.add("read");
      const newUnreadMsg = [...notifications.querySelectorAll(".read")].length;
      unreadMsg.textContent = unreadIcon - newUnreadMsg;
    }
    if (unreadMsg.textContent == 0) {
      button.textContent = "Mark all as Unread";
      profiles.forEach(function (profile) {
        notifications.classList.add("read");
        profile.classList.remove("read");
        markAllRead(button);
      });
    }
    markAllRead(button);
  });
  markAllRead(button);
});

// display private messages.
profiles.forEach(function (profile) {
  const privateMsg = profile.querySelector(".message p:first-of-type");
  profile.addEventListener("click", () => {
    profiles.forEach(function (profile2) {
      if (profile2 !== profile) {
        profile2.classList.remove("show-msg");
      }
    });
    if (privateMsg.textContent.includes("private message")) {
      profile.classList.add("show-msg");
    }
  });
});
