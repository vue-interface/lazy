function a(t, s) {
  if (t.getAttribute("src") && t.getAttribute("src") === t.getAttribute("data-src"))
    return;
  let r = t.getAttribute("data-src");
  if (r != null && r.match(/data\:/))
    t.setAttribute("src", r), t.removeAttribute("data-src");
  else if (r) {
    t.dispatchEvent(new Event("loading"));
    const e = document.createElement("img");
    e.setAttribute("src", r), e.addEventListener("load", (n) => {
      t.setAttribute("src", e.src), s.value instanceof Function && s.value(e), t.tagName !== "IMG" && t.dispatchEvent(new Event(n.type, n));
    }), t.tagName !== "IMG" && e.addEventListener("error", (n) => {
      t.dispatchEvent(new Event(n.type, n));
    });
  }
}
const c = {
  beforeMount(t, s, r) {
    const e = new IntersectionObserver((n) => {
      n.forEach(({ isIntersecting: i }) => {
        i && (a(t, s), e.disconnect());
      });
    });
    e.observe(t);
  }
};
export {
  c as Lazy
};
//# sourceMappingURL=lazy.js.map
