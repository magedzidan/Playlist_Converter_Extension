document.addEventListener('DOMContentLoaded', function() {
  const wikiTitleInput = document.getElementById('wikiTitle');
  const summarizeBtn = document.getElementById('summarizeBtn');
  const summaryElement = document.getElementById('summary');

  // Load the last searched title if it exists
  chrome.storage.local.get(['lastTitle'], function(result) {
    if (result.lastTitle) {
      wikiTitleInput.value = result.lastTitle;
      summarizeBtn.click();

    }
  });

  // Function to get Wikipedia summary
  async function getWikipediaSummary(title) {
    try {
      return new Promise((resolve) => {
        chrome.storage.local.get([title], function(result) {
          if (result[title]) {
            // Use cached summary
            resolve(result[title]);
            chrome.storage.local.set({ 'lastTitle': title });

            return;
          }

          // If not cached, fetch from Wikipedia API
          fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&explaintext=1&titles=${encodeURIComponent(title)}&origin=*`)
            .then(response => response.json())
            .then(data => {
              const pages = data.query.pages;
              const pageId = Object.keys(pages)[0];
              const summary = pages[pageId].extract;

              if (summary) {
                // Store the summary locally
                const storageData = {};
                storageData[title] = summary;
                chrome.storage.local.set(storageData);

                // Store the last searched title
                chrome.storage.local.set({ 'lastTitle': title });

                resolve(summary);
              } else {
                resolve('No summary found for this title.');
              }
            })
            .catch(error => {
              console.error('Error:', error);
              resolve('Error fetching summary. Please try again.');
            });
        });
      });
    } catch (error) {
      console.error('Error:', error);
      return 'Error fetching summary. Please try again.';
    }
  }

  // Event listener for the summarize button
  summarizeBtn.addEventListener('click', async function() {
    const title = wikiTitleInput.value.trim();
    if (title) {
      summaryElement.textContent = 'Loading...';
      const summary = await getWikipediaSummary(title);

      // Limit summary length
      if (summary.length > 800) {
        summaryElement.textContent = summary.substring(0, 800) + '...';
      } else {
        summaryElement.textContent = summary;
      }
    } else {
      summaryElement.textContent = 'Please enter a Wikipedia title.';
    }
  });

  // Event listener for Enter key
  wikiTitleInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      summarizeBtn.click();
    }
  });

});

