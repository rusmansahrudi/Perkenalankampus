const headers = document.querySelectorAll(".day-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Tutup semua konten lain
    document.querySelectorAll(".day-content").forEach(c => {
      if (c !== content) {
        c.style.maxHeight = null;
      }
    });

    // Toggle buka/tutup
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

window.addEventListener("load", () => {
  gsap.from(".container", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });
});
