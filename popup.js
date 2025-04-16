document.getElementById('summarizeBtn').addEventListener('click', async () => {
    const title = document.getElementById('wikiTitle').value;
    const summary = await getWikipediaSummary(title);
    document.getElementById('summary').innerText = summary || 'No summary found.';
  });
  
  async function getWikipediaSummary(title) {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
    const data = await response.json();
    return data.extract;
  }