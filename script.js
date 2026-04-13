// ====== SESSION CHECK ======
const loginTime = localStorage.getItem("loginTime");
if (loginTime && Date.now() - loginTime > 10 * 60 * 1000) {
  localStorage.clear();
  window.location.href = "login.html";
}

// ====== INDEX SAHIFA ======
const welcomeText = document.getElementById("welcomeText");
const userName = localStorage.getItem("userName");

if (welcomeText && userName) {
  welcomeText.innerText = "Salom " + userName;
}

const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.onsubmit = e => {
    e.preventDefault();
    const q = document.getElementById("query").value;
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(q);
  };
}

const luckyBtn = document.getElementById("luckyBtn");
if (luckyBtn) {
  luckyBtn.onclick = () =>
    window.location.href = "https://husamiddin34.github.io/Theluckyone/";
}

const arabLink = document.getElementById("arabLink");
if (arabLink) {
  arabLink.onclick = () =>
    window.location.href = "https://husamiddin34.github.io/Muallim/";
}

// ====== AI TIP ======
const query = document.getElementById("query");
const aiTip = document.getElementById("aiTip");

if (query) {
  query.oninput = () => {
    if (query.value.includes("arab")) {
      aiTip.innerText = "📘 Arab tili darslarini qidiryapsiz";
    } else if (query.value.includes("python")) {
      aiTip.innerText = "🐍 Python boshlovchilar uchun";
    } else {
      aiTip.innerText = "";
    }
  };
}

// ====== PROFILE ======
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");
const profileName = document.getElementById("profileName");
const logoutBtn = document.getElementById("logoutBtn");

if (profileBtn) {
  profileBtn.onclick = () =>
    profileMenu.style.display =
      profileMenu.style.display === "block" ? "none" : "block";
}

if (profileName && userName) {
  profileName.innerText = "Salom " + userName;
}

if (logoutBtn) {
  logoutBtn.onclick = () => {
    localStorage.clear();
    window.location.href = "login.html";
  };
}

// ====== LOGIN + EMAILJS ======
emailjs.init("7dw90rNlieeX8vpa9");

let generatedCode = "";

const sendCodeBtn = document.getElementById("sendCodeBtn");
const verifyBtn = document.getElementById("verifyBtn");
const continueBtn = document.getElementById("continueBtn");

if (sendCodeBtn) {
  sendCodeBtn.onclick = () => {
    const email = document.getElementById("email").value;
    if (!email) return;

    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated code:", generatedCode);

    emailjs.send("service_google", "template_3ri96nc", {
      email: email,
      code: generatedCode
    });

    document.getElementById("codeInput").style.display = "block";
    verifyBtn.style.display = "block";
  };
}

if (verifyBtn) {
  verifyBtn.onclick = () => {
    const code = document.getElementById("codeInput").value;
    if (code === generatedCode) {
      document.getElementById("nameBox").style.display = "block";
    } else {
      document.getElementById("error").innerText = "Kod xato";
    }
  };
}

if (continueBtn) {
  continueBtn.onclick = e => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    if (!firstName) return;

    localStorage.setItem("userName", firstName);
    localStorage.setItem("loginTime", Date.now());
    window.location.href = "index.html";
  };
}
