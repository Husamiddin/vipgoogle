const user = localStorage.getItem("user");

if (user) {
  document.getElementById("welcome").innerText = "Salom " + user;
  document.getElementById("loginLink").hidden = true;
  document.getElementById("logoutBtn").hidden = false;
}

function logout() {
  localStorage.clear();
  location.reload();
}

function doSearch() {
  const q = document.getElementById("query").value;
  if (q.trim()) {
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(q);
  }
}
