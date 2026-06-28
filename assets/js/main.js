// Theme management and UI enhancements
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
      } else {
        progressBar.style.width = '0%';
      }
    });
  }

  // Copy Code Buttons
  const codeBlocks = document.querySelectorAll('div.highlighter-rouge');
  codeBlocks.forEach((codeBlock) => {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.type = 'button';
    copyButton.setAttribute('aria-label', 'Kodu kopyala');
    copyButton.innerText = 'Kopyala';

    // Ensure container has relative positioning
    codeBlock.style.position = 'relative';
    codeBlock.appendChild(copyButton);

    copyButton.addEventListener('click', () => {
      // Find the code element inside the highlighter block
      const codeElement = codeBlock.querySelector('code');
      if (codeElement) {
        // Retrieve code content
        const codeText = codeElement.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
          copyButton.innerText = 'Kopyalandı!';
          copyButton.classList.add('copied');
          setTimeout(() => {
            copyButton.innerText = 'Kopyala';
            copyButton.classList.remove('copied');
          }, 2000);
        }).catch((err) => {
          console.error('Kopyalama hatası:', err);
          copyButton.innerText = 'Hata!';
        });
      }
    });
  });

  // Client-side Live Search
  const searchInput = document.getElementById('search-input');
  const searchResultsContainer = document.getElementById('search-results-container');
  const searchResultsList = document.getElementById('search-results-list');
  const defaultPostList = document.getElementById('default-post-list');
  let searchIndex = null;

  if (searchInput && searchResultsContainer && searchResultsList && defaultPostList) {
    // Fetch search index file
    const fetchSearchIndex = async () => {
      if (searchIndex) return;
      try {
        const response = await fetch('/assets/js/search-data.json');
        searchIndex = await response.json();
      } catch (err) {
        console.error('Arama indeksi yüklenemedi:', err);
      }
    };

    // Load index when search input gets focus to make search instant later
    searchInput.addEventListener('focus', fetchSearchIndex);

    // Live search on type
    searchInput.addEventListener('input', async () => {
      const query = searchInput.value.toLowerCase().trim();
      
      if (!query) {
        searchResultsContainer.style.display = 'none';
        defaultPostList.style.display = 'block';
        return;
      }

      await fetchSearchIndex();

      if (!searchIndex) return;

      // Filter index
      const filtered = searchIndex.filter(post => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const excerptMatch = post.excerpt.toLowerCase().includes(query);
        const tagsMatch = post.tags && post.tags.some(tag => tag.toLowerCase().includes(query));
        return titleMatch || excerptMatch || tagsMatch;
      });

      // Clear previous results
      searchResultsList.innerHTML = '';

      if (filtered.length > 0) {
        filtered.forEach(post => {
          const li = document.createElement('li');
          li.className = 'post-item';
          li.style.marginBottom = '3.5rem';
          li.style.display = 'flex';
          li.style.flexDirection = 'column';

          let tagsHtml = '';
          if (post.tags && post.tags.length > 0) {
            tagsHtml = `
              <div class="post-tags" style="margin: 0.5rem 0 1rem 0;">
                ${post.tags.map(tag => `
                  <span class="label label-default">
                    <a href="/tags/#${tag}-ref">#${tag}</a>
                  </span>
                `).join('')}
              </div>
            `;
          }

          li.innerHTML = `
            <span class="post-meta">${post.date}</span>
            <h3>
              <a class="home-page-title" href="${post.url}">
                ${post.title}
              </a>
            </h3>
            <div class="home-page-desc">${post.excerpt}</div>
            ${tagsHtml}
          `;
          searchResultsList.appendChild(li);
        });
      } else {
        searchResultsList.innerHTML = `
          <li style="color: var(--muted-color); font-family: var(--font-sans); text-align: center; padding: 3rem 0; list-style: none;">
            Aramanıza uygun yazı bulunamadı.
          </li>
        `;
      }

      defaultPostList.style.display = 'none';
      searchResultsContainer.style.display = 'block';
    });
  }
});
