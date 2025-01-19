const heart = document.getElementById("heart");
const message = document.getElementById("message");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

heart.addEventListener("click", () => {
    heart.style.animation = "none"; // Stop the heart movement
    setTimeout(() => heart.style.animation = "", 50); // Reset animation

    message.style.display = "block"; // Show the message box
});

// Yes button: Redirect to love note page
yesButton.addEventListener("click", () => {
    window.location.href = "love_note.html"; // Redirect to love note page
});

// No button: Move the "No..." button to a new random position each time clicked
noButton.addEventListener("click", () => {
    noButton.disabled = true; // Disable the button so it can't be clicked multiple times
    moveNoButton(); // Move the "No..." button to a new position on the screen


});

// Function to move the "No..." button to a new random position
function moveNoButton() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Set initial position (important for positioning)
    noButton.style.position = 'absolute';

    // Generate a random position on the screen
    const randomPosition = () => {
        const randomX = Math.random() * (screenWidth - buttonWidth);
        const randomY = Math.random() * (screenHeight - buttonHeight);
        return { x: randomX, y: randomY };
    };

    // Move the button to a random position each time it's clicked
    const position = randomPosition();
    noButton.style.left = `${position.x}px`;
    noButton.style.top = `${position.y}px`;

    // Re-enable the button after it moves
    noButton.disabled = false;
}
