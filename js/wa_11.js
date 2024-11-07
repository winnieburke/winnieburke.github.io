const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ["MeganConcert.jpg", "MeganTheeStallionBOABunny.jpg", "MeganTheeStallionPink.jpeg", "MeganTheeStallionRed.jpg", "tiger!.jpg"];

/* Declaring the alternative text for each image file */
const altArray = ["Sitting in our seats at Megan's Concert", "Megan in her BOA music video outfit", "Megan in a pink outfit", "Megan in a red outfit", "Cute tiger photo!"];

/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', '/img/' + imgArray[i]);
    newImage.setAttribute('alt', altArray[i]);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', function(e) {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
