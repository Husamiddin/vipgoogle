function verify() {
  const code = document.getElementById("code").value;
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;

  if (code !== localStorage.getItem("code")) {
    show("Kod xato");
    return;
  }

  if (!name || !surname) {
    show("Ism va familiya kiriting");
    return;
  }

  localStorage.setItem("user", name);
  location.href = "index.html";
}

function show(msg) {
  const e = document.getElementById("error");
  e.innerText = msg;
  e.style.display = "block";
}
