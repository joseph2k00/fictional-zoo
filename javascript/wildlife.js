document.addEventListener('DOMContentLoaded', function() {
    // Get all slider containers
    const sliderContainers = document.querySelectorAll('.animal-slider-container');
    
    sliderContainers.forEach(container => {
        const slider = container.querySelector('.animal-slider');
        const prevButton = container.querySelector('.prev-arrow');
        const nextButton = container.querySelector('.next-arrow');
        const cards = Array.from(slider.querySelectorAll('.Image-card'));
        
        // Function to rotate cards
        function rotateCards(direction) {
            cards[3].classList.remove("last-card");
            if (direction === 'next') {
                // Move first card to the end
                const firstCard = cards.shift();
                firstCard.classList.add("last-card");
                cards.push(firstCard);
            } else {
                // Move last card to the beginning
                const hiddenCard = cards.pop();
                const lastCard = cards.pop();
                lastCard.classList.add("last-card");
                cards.unshift(hiddenCard);
                cards.push(lastCard);
            }
            
            // Update the DOM
            cards.forEach(card => {
                slider.appendChild(card);
            });
        }
        
        // Add click event listeners to buttons
        prevButton.addEventListener('click', () => rotateCards('prev'));
        nextButton.addEventListener('click', () => rotateCards('next'));
    });
}); 