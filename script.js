// script.js

// Full GitHub Pages URL of your PDF
const pdfFile = 'https://likith-3012-mac.github.io/Echoes-of-an-Unsaid-Goodbye-.pdf';

// Button references
const readBtn = document.getElementById('readBook');
const downloadBtn = document.getElementById('downloadBook');

// Open PDF in new tab
readBtn.addEventListener('click', () => {
  window.open(pdfFile, '_blank'); // Opens the PDF online
});

// Download PDF
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Echoes-of-an-Unsaid-Goodbye.pdf'; // Name it when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
