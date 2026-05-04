console.log(anime);
//had to get chat to help on this :( the button kept giving up on it's grand escape whenever anything else on the page was interacted with
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("remDonation"); //grabs the remove button for the donation specifically

  if (!button) return;

  let ghost = null;

  //setup
  // ===============================
  // 1. OVERLAY LAYER (keeps the cart layout in tact while preparing to free the button)
  // ===============================
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.pointerEvents = "none";
  overlay.style.zIndex = "9999";
  document.body.appendChild(overlay);

  function createGhost() {
    const btn = document.querySelector("#remDonation");
    if (!btn) return;

    // prevent duplicate ghosts
    overlay.innerHTML = "";

    const rect = btn.getBoundingClientRect();

    ghost = btn.cloneNode(true);
    ghost.style.position = "fixed";
    ghost.style.left = rect.left + "px";
    ghost.style.top = rect.top + "px";
    ghost.style.margin = "0";
    ghost.style.pointerEvents = "auto";

    overlay.appendChild(ghost);

    // hide original ONLY after ghost exists
    btn.style.visibility = "hidden";
  }

  // ===============================
  // 3. MOUSE TRACKING (this is pretty self explanatory)
  // ===============================
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let animating = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  //function that controls the movement
  function loop() {
    if (!ghost) {
      requestAnimationFrame(loop);
      return;
    }

    const r = ghost.getBoundingClientRect();

    const dx = mouseX - (r.left + r.width / 2);
    const dy = mouseY - (r.top + r.height / 2);

    const distance = Math.sqrt(dx * dx + dy * dy); // <--- theres a reason i dropped out of stem...

    if (distance < 50 && !animating) {
      animating = true;

      const r = ghost.getBoundingClientRect();

//selects a random x and y coord in a large radius around the mouse
      let moveX = (Math.random() * 2 - 1) * (600 + Math.random() * 600);
      let moveY = (Math.random() * 2 - 1) * (600 + Math.random() * 600);

      const nextLeft = r.left + moveX;
      const nextTop = r.top + moveY;

      const clampedLeft = Math.min(
        Math.max(nextLeft, 0),
        window.innerWidth - r.width
      );

      const clampedTop = Math.min(
        Math.max(nextTop, 0),
        window.innerHeight - r.height
      );

      const finalX = clampedLeft - r.left;
      const finalY = clampedTop - r.top;

      anime.remove(ghost);

//actually moves the button
      anime({
        targets: ghost,
        translateX: `+=${finalX}`,
        translateY: `+=${finalY}`,
        duration: 150, //150 ms movement time
        easing: "easeOutCirc",
        complete: () => {
          animating = false;
        }
      });
    }

    requestAnimationFrame(loop);
  }

  // ===============================
  // FIXED OBSERVER (final patch that was added, fixed a bug that would cause the previously mentioned second remove button to appear)
  // ===============================
  const cartContainer = document.querySelector("#cart-area"); //prevents a DOM loop that prevents the page from loading

  const observer = new MutationObserver(() => { //activates whenever the cart layout is modified (specifically, whener an item is removed and the cart is re-rendered)
    createGhost(); // always rebuild safely when cart changes
  });

  if (cartContainer) {
    observer.observe(cartContainer, {
      childList: true,
      subtree: true
    });
  }

  createGhost();

  loop();
});