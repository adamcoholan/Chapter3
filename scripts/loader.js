function gifLoad() {
  setTimeout(showPage, 0);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content-wrapper").style.display = "block";
}