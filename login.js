// ====== EMAILJS INIT ======
emailjs.init("7dw90rNlieeX8vpa9");

// ====== VARIABLES ======
let generatedCode = "";

const sendCodeBtn = document.getElementById("sendCodeBtn");
const verifyBtn = document.getElementById("verifyBtn");
const continueBtn = document.getElementById("continueBtn");

const emailInput = document.getElementById("email");
const codeInput = document.getElementById("codeInput");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

const nameBox = document.getElementById("nameBox");
const errorBox = document.getElementById("error");

// ====== SEND CODE BUTTON ======
if (sendCodeBtn) {
  sendCodeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    if (!email) {
      errorBox.style.display = "block";
      errorBox.innerText = "Iltimos, emailingizni kiriting.";
      return;
    }
    errorBox.style.display = "none";

    // Random 6-raqamli kod
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated code:", generatedCode);

    // Email yuborish
    emailjs.send("service_google", "template_3ri96nc", {
      email: email,
      code: generatedCode
    }).then(() => {
      codeInput.style.display = "block";
      verifyBtn.style.display = "block";
      errorBox.style.display = "none";
    }).catch(err => {
      errorBox.style.display = "block";
      errorBox.innerText = "Xatolik yuz berdi. Iltimos, emailingizni tekshiring.";
      console.error(err);
    });
  });
}

// ====== VERIFY CODE BUTTON ======
if (verifyBtn) {
  verifyBtn.addEventListener("click", () => {
    const code = codeInput.value.trim();
    if (code === generatedCode) {
      nameBox.style.display = "block";
      errorBox.style.display = "none";
    } else {
      errorBox.style.display = "block";
      errorBox.innerText = "Kod xato!";
    }
  });
}

// ====== CONTINUE BUTTON ======
if (continueBtn) {
  continueBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (!firstName || !lastName) {
      errorBox.style.display = "block";
      errorBox.innerText = "Iltimos, ism va familiyani kiriting.";
      return;
    }

    // LocalStorage ga saqlash
    localStorage.setItem("userName", firstName);
    localStorage.setItem("loginTime", Date.now());

    // 1-sahifaga yo'naltirish
    window.location.href = "index.html";
  });
}
  