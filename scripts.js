/** Your Javascript must be executed only when the document is loaded  */

$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
});
			
// Fetch quotes and populate the webpage
$.ajax({
  url: 'https://smileschool-api.hbtn.info/quotes',
  method: 'GET',
  success: function (data) {
    const quoteContainer = document.getElementById('quoteContainer');

    // Loop through the quotes data
    for (let i = 0; i < data.length; i++) {
      const quote = data[i].text;
      const authorName = data[i].name;
      const authorTitle = data[i].title;
      const authorPic = data[i].pic_url;

      // Create elements to display the quote
      const quoteElement = document.createElement('div');
      quoteElement.classList.add('quote');

      const quoteText = document.createElement('p');
      quoteText.textContent = `"${quote}"`;

      const authorInfo = document.createElement('p');
      authorInfo.textContent = `${authorName}, ${authorTitle}`;

      const authorPicImg = document.createElement('img');
      authorPicImg.src = authorPic;
      authorPicImg.alt = `${authorName}'s profile`;

      // Append elements to the quote container
      quoteElement.appendChild(quoteText);
      quoteElement.appendChild(authorInfo);
      quoteElement.appendChild(authorPicImg);
      
      quoteContainer.appendChild(quoteElement);
    }
  },
  error: function (xhr, status, error) {
    // Handle errors
    console.error('Error:', error);
  }
});
