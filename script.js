let currentSlide = 0; // Initial slide index
const slides = document.querySelectorAll('.slide'); // Get all slides

// Function to display a slide based on index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hide all slides
        slide.classList.add('hidden'); // Add hidden class to all slides
        if (i === index) {
            slide.classList.add('active'); // Show the active slide
            slide.classList.remove('hidden'); // Remove hidden class from the active slide
        }
    });
}

// Function to go to Slide 7 (the certificate content)
function goToCertificateSlide() {
    currentSlide = 1; // Slide 7 is index 1
    showSlide(currentSlide); // Display Slide 7
}

// Event listener for each "Next" button
document.querySelectorAll('.nextButton').forEach((button) => {
    button.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide += 1; // Move to the next slide
        } else {
            alert("You've reached the last slide!"); // Alert when trying to go beyond the last slide
        }
        showSlide(currentSlide); // Display the new slide
    });
});

// Function to unlock memories on Slide 4 (Lock slide)
function unlockMemories() {
    const birthdaySong = document.getElementById('birthday-song'); // Reference to the birthday song audio

    // Play the birthday song
    birthdaySong.play();

    currentSlide += 1; // Move to the next slide (Slide 5)
    showSlide(currentSlide); // Show the memories slide (Slide 5)
}

// Function to open the envelope and show the love letter
function openEnvelope() {
    const envelopeBody = document.getElementById('envelopeBody');
    const loveLetterContainer = document.getElementById('loveLetterContainer');
    const navigationSlide10 = document.getElementById('navigationSlide10');

    // Show body of the envelope
    envelopeBody.style.display = 'block';
    
    // Show love letter after the envelope body appears
    setTimeout(() => {
        loveLetterContainer.style.display = 'block'; // Show love letter container
        navigationSlide10.style.display = 'block'; 
    }, 200); // Delay a bit before showing the love letter
}

// Function to close the love letter
function closeLoveLetter() {
    const loveLetterContainer = document.getElementById('loveLetterContainer');
    loveLetterContainer.style.display = 'none'; // Hide the love letter container
}

// Display the first slide on page load
showSlide(currentSlide);

// Prevent showing love letter in other slides
document.querySelectorAll('.slide').forEach(slide => {
    // Ensure love letter only appears in the correct slide
    if (slide.id === 'slideWithLoveLetter') { // Change to the actual ID of your slide with the love letter
        slide.querySelector('.openEnvelopeButton').addEventListener('click', openEnvelope); // Add click event for opening the envelope
    }
});
