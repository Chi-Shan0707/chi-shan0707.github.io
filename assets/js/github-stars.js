(function () {
  const starNodes = Array.from(document.querySelectorAll("[data-github-stars]"));
  if (!starNodes.length || !window.fetch) {
    return;
  }

  const uniqueRepos = [...new Set(starNodes.map((node) => node.dataset.githubStars).filter(Boolean))];
  const formatStars = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "")}k`;
    }
    return String(count);
  };

  uniqueRepos.forEach((repo) => {
    fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((data) => {
        const label = `★ ${formatStars(data.stargazers_count || 0)}`;
        starNodes
          .filter((node) => node.dataset.githubStars === repo)
          .forEach((node) => {
            node.textContent = label;
            node.title = `${repo} GitHub stars`;
          });
      })
      .catch(() => {});
  });
}());
