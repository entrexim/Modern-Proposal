const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
let hoverCount = 0; // Counter to track the number of hovers

yesButton.addEventListener("click", () => {
    const result1 = document.createElement('div');
    result1.textContent = "Awwww Cutie I love u tooooo ❤️";
    result1.classList.add("js");
    document.body.appendChild(result1);
});

// Add hover functionality for the No button
noButton.addEventListener("mouseenter", () => {
    hoverCount++; // Increment hover count

    // Generate random positions for the No button
    const randomTop = Math.random() * (window.innerHeight - noButton.offsetHeight);
    const randomLeft = Math.random() * (window.innerWidth - noButton.offsetWidth);

    // Update the No button's position
    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}px`;
    noButton.style.left = `${randomLeft}px`;

    // After 7 hovers, display the message
    if (hoverCount == 5) {
        const result = document.createElement('div');
        result.textContent = "Are cutie maan bhi jao na yrrr kitna tadpaogi ❤️";
        result.classList.add("js2");
        document.body.appendChild(result);

        // Reset hover count to prevent repeated messages
        
    }

    if (hoverCount == 15) {
        const result = document.createElement('div');
        result.textContent = "Arre bas bhi karo yrr";
        result.classList.add("js");
        document.body.appendChild(result);

        // Reset hover count to prevent repeated messages
       
    }
    if (hoverCount == 8) {
        const result = document.createElement('div');
        result.textContent = "Itna gussa motiiii";
        result.classList.add("js");
        document.body.appendChild(result);

        // Reset hover count to prevent repeated messages
       
    }
});
