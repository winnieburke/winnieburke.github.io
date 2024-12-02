//Game idea: Help the kitty find the lost toy under the bed while avoiding dust bunnies!
//Need to do: Make dust bunnies move left to right at different times, seperate levels, make different "cards" for each stage of game
//like start screen, win screen, lose screen, end screen, etc



// Declaring kitty's position and movement variables
let kitty = document.getElementById("kitty");
let kittyPosition = kitty.getBoundingClientRect();

// Declaring bunnies and their positions
let bunnies = document.querySelectorAll(".bunnies");

// Setting the initial toy position
let toy = document.getElementById("toy");
let toyPosition = toy.getBoundingClientRect();

// Speed and movement variables for the kitty
let speed = 5;

//"Lives" for the game
let lives = 3;

//Level declaration
let level = 1;
//Probably change to true false for each level instead of decrememnting to change levels


// Function to update the kitty's position based on key press
document.addEventListener("keydown", e => {
    let newTop = kitty.offsetTop;
    let newLeft = kitty.offsetLeft;

    if (e.code === "ArrowUp") {
        newTop -= speed; // Move up
    }
    if (e.code === "ArrowDown") {
        newTop += speed; // Move down
    }
    if (e.code === "ArrowLeft") {
        newLeft -= speed; // Move left
    }
    if (e.code === "ArrowRight") {
        newLeft += speed; // Move right
    }

    // Keep the kitty within bounds 
    const container = document.getElementById("container").getBoundingClientRect();
    if (newTop >= container.top && newTop + kitty.offsetHeight <= container.bottom) {
        kitty.style.top = `${newTop}px`;
    }
    if (newLeft >= container.left && newLeft + kitty.offsetWidth <= container.right) {
        kitty.style.left = `${newLeft}px`;
    }

    // Update kitty's position
    kittyPosition = kitty.getBoundingClientRect();

    // Check for collisions with bunnies
    checkCollisions();

    // Check if kitty reaches the toy
    if (isColliding(kittyPosition, toyPosition)) {
        console.log("You found the toy!");
        alert("you win!");
        level = level + 1; //go on to level 2 GUESS CODE
        relocateToy();
    }
});

function checkCollisions() {
    bunnies.forEach(bunny => {
        let bunnyPosition = bunny.getBoundingClientRect();
        if (isColliding(kittyPosition, bunnyPosition)) {
            console.log("Oh no you hit a dust bunny!");
            lives -= 1; // Reduce lives by 1
            alert(`You have ${lives} lives left!`);

            if (lives == 0) {
                alert("Game Over! You lose this level :C");
                window.location.reload(); // Reload the page to restart the game
            } 
        }
    });
}


// Function to determine if two elements are colliding
function isColliding(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

// Function to relocate the toy to a random position within the container
function relocateToy() {
    const container = document.getElementById("container").getBoundingClientRect();
    const toyWidth = toy.offsetWidth;
    const toyHeight = toy.offsetHeight;

    const randomX = Math.random() * (container.width - toyWidth);
    const randomY = Math.random() * (container.height - toyHeight);

    toy.style.left = `${randomX}px`;
    toy.style.top = `${randomY}px`;

    // Update toy position
    toyPosition = toy.getBoundingClientRect();
}

// Initialize game elements and spawn toy every 8 seconds
setInterval(relocateToy, 8000);
// Will play around with time to relocate toy

