const menuWrap = document.getElementById("menuWrap");
const menuButton = document.getElementById("menuButton");
const menuItems = document.querySelectorAll(".menu-item");

let isOpen = false;

function openMenu() {
  if (isOpen) return;

  isOpen = true;
  menuWrap.classList.add("open");

  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close menu");
}

function closeMenu() {
  if (!isOpen) return;

  isOpen = false;
  menuWrap.classList.remove("open");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
}

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  isOpen ? closeMenu() : openMenu();
});

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-2px) translateX(3px)" },
        { transform: "translateY(0)" }
      ],
      {
        duration: 280,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );
  });

  item.addEventListener("click", (event) => {
    event.preventDefault();
    menuItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
    setTimeout(closeMenu, 160);
  });
});

document.addEventListener("click", (event) => {
  if (isOpen && !menuWrap.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
