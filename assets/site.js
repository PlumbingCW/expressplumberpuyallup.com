(function () {
  var BP = 768, d = document, root = d.documentElement;
  var tog = d.getElementById("mob-toggle"), dr = d.getElementById("mob-drawer"),
      ov = d.getElementById("mob-overlay"), cl = d.getElementById("drawer-close");
  function openMenu() {
    dr.hidden = false; ov.classList.add("visible");
    tog.setAttribute("aria-expanded", "true"); tog.setAttribute("aria-label", "Close navigation menu");
    root.style.overflow = "hidden"; cl.focus();
  }
  function closeMenu(returnFocus) {
    dr.hidden = true; ov.classList.remove("visible");
    tog.setAttribute("aria-expanded", "false"); tog.setAttribute("aria-label", "Open navigation menu");
    root.style.overflow = ""; if (returnFocus) { tog.focus(); }
  }
  if (tog && dr && ov && cl) {
    tog.addEventListener("click", function () { if (dr.hidden) { openMenu(); } else { closeMenu(true); } });
    cl.addEventListener("click", function () { closeMenu(true); });
    ov.addEventListener("click", function () { closeMenu(false); });
    dr.addEventListener("click", function (e) { if (e.target.closest("a")) { closeMenu(false); } });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape" && !dr.hidden) { closeMenu(true); } });
    window.addEventListener("resize", function () { if (window.innerWidth > BP && !dr.hidden) { closeMenu(false); } });
  }
  var items = d.querySelectorAll(".faq-item");
  Array.prototype.forEach.call(items, function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) { return; }
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();
