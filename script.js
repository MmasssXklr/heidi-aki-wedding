const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("2026-08-21T14:00:00").getTime();

function timer() {

    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance < 0) {
        Days.innerHTML = 0;
        Hours.innerHTML = 0;
        Minutes.innerHTML = 0;
        Seconds.innerHTML = 0;
        return;
    }

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

timer();
setInterval(timer, 1000);

/* RSVP */

const WEBAPP_URL =
"https://script.google.com/macros/s/AKfycbzea-2rcfK0C6HQB80rTJi-esO3ct0nCvPA_9TfgZjkeHYOu3U3uevgxAP4WvrwqGPLYQ/exec";

const params = new URLSearchParams(window.location.search);
const guestId = params.get("id");
const token = params.get("token");

let currentRSVP = null;



function loadGuest() {

  fetch(`${WEBAPP_URL}?id=${guestId}&token=${token}`)
    .then(res => res.json())
    .then(data => {

      if (data.status !== "success") {

        document.getElementById("guest").innerText =
          "Invalid invitation";

        return;
      }

      document.getElementById("guest").innerText =
        `Welcome, ${data.name}`;

      currentRSVP = data.rsvp;

      updateUI();

    })
    .catch(() => {

      document.getElementById("guest").innerText =
        "Unable to load invitation";

    });
}

function updateUI() {

  const btn =
    document.getElementById("rsvpBtn");

  if (currentRSVP === "Yes") {

    document.getElementById("message").innerText =
      "✓ You are attending.";

    document.getElementById("helper").innerText =
      "Need to change your RSVP? Click again.";

    btn.innerText =
      "✓ Attending";

  } else {

    document.getElementById("message").innerText =
      "We're excited to celebrate with you!";

    document.getElementById("helper").innerText =
      "";

    btn.innerText =
      "Accept Invitation";
  }
}


function toggleRSVP() {

const session = JSON.parse(sessionStorage.getItem("rsvp_session"));

if (!session || session.guestId !== guestId) {
  alert("Session expired. Please reopen your invite link.");
  return;
}

  const btn =
    document.getElementById("rsvpBtn");

  btn.disabled = true;

  btn.innerHTML =
    "⏳ Processing...";

  setTimeout(() => {

    const newRSVP =
      currentRSVP === "Yes"
        ? "No"
        : "Yes";

    fetch(WEBAPP_URL, {
      method: "POST",
      body: JSON.stringify({
        guestId: guestId,
        rsvp: newRSVP,
        token: token
      })
    })
    .then(res => res.json())
    .then(() => {

      currentRSVP = newRSVP;

      btn.disabled = false;

      updateUI();

    })
    .catch(() => {

      btn.disabled = false;

      btn.innerText =
        "Try Again";
    });

  }, 180);
}

/**session */
const SESSION_KEY = "rsvp_session";
const ONE_HOUR = 60 * 60 * 1000;

function initSession() {

  const now = Date.now();

  const existing = JSON.parse(sessionStorage.getItem(SESSION_KEY));

  // check existing session
  if (existing && existing.expires > now && existing.guestId === guestId) {
    return true;
  }

  // no valid session → require token
  if (!token) {
    alert("Access denied. Missing token.");
    return false;
  }

  // create new session
  const newSession = {
    guestId: guestId,
    expires: now + ONE_HOUR
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(newSession));

  return true;
}
initSession();
loadGuest();
setInterval(() => {

  const session = JSON.parse(sessionStorage.getItem(SESSION_KEY));

  if (!session) return;

  if (Date.now() > session.expires) {

    sessionStorage.removeItem(SESSION_KEY);

    alert("Session expired. Please reopen your invitation link.");

    window.location.href = "about:blank"; // or redirect to home page
  }

}, 10000);

function login() {

  fetch(`${WEBAPP_URL}?id=${guestId}&token=${token}`)
    .then(res => res.json())
    .then(data => {

      if (data.status !== "success") {
        document.body.innerHTML = "❌ Invalid invitation";
        return;
      }

      // LOGIN SUCCESS
      document.getElementById("guest").innerText =
        `Welcome, ${data.name}`;

      currentRSVP = data.rsvp;

      updateUI();
    })
    .catch(() => {
      document.body.innerHTML = "❌ Login failed";
    });
}
login();