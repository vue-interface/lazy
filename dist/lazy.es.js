function s(t, a) {
  if (!(t.getAttribute("src") && t.getAttribute("src") === t.getAttribute("data-src")))
    if (t.getAttribute("data-src").match(/data\:/))
      t.src = t.getAttribute("data-src"), t.removeAttribute("data-src");
    else {
      t.dispatchEvent(new Event("loading"));
      const r = document.createElement("img");
      r.src = t.getAttribute("data-src"), r.addEventListener("load", (e) => {
        t.setAttribute("src", r.src), a.value instanceof Function && a.value(r), t.tagName !== "IMG" && t.dispatchEvent(new Event(e.type, e));
      }), t.tagName !== "IMG" && r.addEventListener("error", (e) => {
        t.dispatchEvent(new Event(e.type, e));
      });
    }
}
const i = {
  beforeMount(t, a, r) {
    const e = new IntersectionObserver((n) => {
      n.forEach(({ isIntersecting: c }) => {
        c && (s(t, a), e.disconnect());
      });
    });
    e.observe(t);
  }
};
export {
  i as Lazy
};
