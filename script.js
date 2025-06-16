function showInvitation() {
  document.getElementById('hero').style.display = 'none';
  document.getElementById('opening').style.display = 'block';
  document.getElementById('opening').scrollIntoView({ behavior: 'smooth' });
}

// Fungsi scroll ke bagian tertentu
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
