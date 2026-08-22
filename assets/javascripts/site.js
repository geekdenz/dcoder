document$.subscribe(() => {
  const searchForm = document.querySelector("[data-dcoder-search]");
  if (!searchForm || searchForm.dataset.ready === "true") return;

  searchForm.dataset.ready = "true";
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = new FormData(searchForm).get("q");
    if (!value) return;
    window.location.assign(`/?q=${encodeURIComponent(value.toString())}`);
  });
});

