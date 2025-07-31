function zobrazOkna(event) {
  event.preventDefault(); // Zabrání skoku na #
  const okno = document.getElementById("biographie-okna");
  if (okno) {
    okno.style.display = "flex";
  }
}

function zavritOkna() {
  const okno = document.getElementById("biographie-okna");
  if (okno) {
    okno.style.display = "none";
  }
}
