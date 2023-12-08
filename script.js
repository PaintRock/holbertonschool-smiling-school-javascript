/** Your Javascript must be executed only when the document is loaded  */

// Function to fetch quotes from the API
function fetchQuotes() {
    // Show loader while fetching data
    document.getElementById('loader').style.display = 'block';
    
    // Make an AJAX request to fetch quotes
    fetch('https://smileschool-api.hbtn.info/quotes')
      .then(response => response.json())
      .then(data => {
        // Hide loader after fetching data
        document.getElementById('loader').style.display = 'none';
        
        // Update the quotes section with the fetched quotes
        const quotesContainer = document.getElementById('quotes');
        quotesContainer.innerHTML = '';
  
        // Iterate through the fetched quotes and display them
        data.forEach(quote => {
          quotesContainer.innerHTML += `<div>${quote.text} - ${quote.name}</div>`;
        });
      })
      .catch(error => {
        // Handle errors if any
        console.error('Error fetching quotes:', error);
      });
  }
  
  // Call fetchQuotes function to load quotes when the page loads
  fetchQuotes();