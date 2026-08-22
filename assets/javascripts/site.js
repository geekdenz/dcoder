document$.subscribe(() => {
  const searchForm = document.querySelector("[data-dcoder-search]");
  if (!searchForm || searchForm.dataset.ready === "true") return;

  searchForm.dataset.ready = "true";
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = new FormData(searchForm).get("q");
    if (!value) return;
    const target = new URL(searchForm.action, window.location.href);
    target.searchParams.set("q", value.toString());
    window.location.assign(target.href);
  });
});
