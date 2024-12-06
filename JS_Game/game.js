//Game idea: Help the kitty find the lost toy under the bed while avoiding dust bunnies!

//Need to do: Seems to be an issue with container and bunnies
//Since adding images for sprites the container is acting werid and will not let sprites go to the top of the container


// Declaring kitty's position and movement variables
let kitty = document.getElementById("kitty");
let kittyPosition = kitty.getBoundingClientRect();

// Declaring bunnies and their positions
let bunnies = document.querySelectorAll(".bunnies");

// Setting the initial toy position
let toy = document.getElementById("toy");
let toyPosition = toy.getBoundingClientRect();

// Speed and movement variables for the kitty
let speed = 7;

// "Lives" for the game
let lives = 3;

// Level declaration
let level = 1;
const maxLevel = 5;



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
    if (newTop >= 0 && newTop + kitty.offsetHeight <= container.height) {
        kitty.style.top = `${newTop}px`;
    }
    if (newLeft >= 0 && newLeft + kitty.offsetWidth <= container.width) {
        kitty.style.left = `${newLeft}px`;
    }

    // Update kitty's position
    kittyPosition = kitty.getBoundingClientRect();

    // Check for collisions with bunnies
    checkCollisions();

    // Check if kitty reaches the toy
    if (isColliding(kittyPosition, toyPosition)) {
        console.log("You found the toy!");
        alert("You win this level!");
        relocateToy();
        nextLevel();
    }
});

// Function to handle collisions with dust bunnies
function checkCollisions() {
    bunnies.forEach(bunny => {
        let bunnyPosition = bunny.getBoundingClientRect();
        if (isColliding(kittyPosition, bunnyPosition)) {
            console.log("Oh no you hit a dust bunny!");
            lives -= 1; // Reduce lives by 1
            alert(`You have ${lives} lives left!`);

            if (lives <= 0) {
                alert("Game Over! You lose this level :C");
                window.location.reload(); // Reload the page to restart the game
            } else {
                handleKittyCollision(bunnyPosition);
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

// Function to push kitty slightly away from a dust bunny after collision
function handleKittyCollision(bunnyPosition) {
    const container = document.getElementById("container").getBoundingClientRect();

    if (kittyPosition.left < bunnyPosition.left) {
        kitty.style.left = `${Math.max(0, kitty.offsetLeft - 20)}px`; // Move left and ensure within bounds
    }
    if (kittyPosition.left > bunnyPosition.left) {
        kitty.style.left = `${Math.min(container.width - kitty.offsetWidth, kitty.offsetLeft + 20)}px`; // Move right
    }
    if (kittyPosition.top < bunnyPosition.top) {
        kitty.style.top = `${Math.max(0, kitty.offsetTop - 20)}px`; // Move up
    }
    if (kittyPosition.top > bunnyPosition.top) {
        kitty.style.top = `${Math.min(container.height - kitty.offsetHeight, kitty.offsetTop + 20)}px`; // Move down
    }

    // Update kitty's position after moving
    kittyPosition = kitty.getBoundingClientRect();
}

// Function to progress to the next level
function nextLevel() {
    level += 1;
    speed += 1; // Increase kitty speed
    spawnAdditionalBunny(); // Add more bunnies

    if (level > maxLevel) {
        alert("Congratulations! You completed all levels! If you wish to play again press 'ok' if not please close this tab.");
        
        window.location.reload(); // May change this to something else or move to a
    } else {
        alert(`Level ${level} - Watch out for more dust bunnies!`);
    }
}

// Function to initialize and spawn multiple bunnies with random starting positions
function initializeBunnies(numBunnies = 3) {
    const container = document.getElementById("container");
    const containerRect = container.getBoundingClientRect();

    for (let i = 0; i < numBunnies; i++) {
        const newBunny = document.createElement("div");
        newBunny.classList.add("bunnies"); // Add the bunnies class
        const randomX = Math.random() * (containerRect.width - 50); // Avoid overflow
        const randomY = Math.random() * (containerRect.height - 50);

        newBunny.style.left = `${randomX}px`;
        newBunny.style.top = `${randomY}px`;

        container.appendChild(newBunny);
    }

    // Update the `bunnies` to include the newly added bunnies
    bunnies = document.querySelectorAll(".bunnies");
    moveDustBunnies(); // Start moving the dust bunnies
}

// Function to spawn an additional dust bunny
function spawnAdditionalBunny() {
    const newBunny = document.createElement("div");
    newBunny.classList.add("bunnies");
    newBunny.style.left = `${Math.random() * 90}vw`; // Random position
    newBunny.style.top = `${Math.random() * 90}vh`;
    document.getElementById("container").appendChild(newBunny);

    // Update bunnies collection and move the new bunny
    bunnies = document.querySelectorAll(".bunnies");
    moveDustBunnies();
}

// Keep track of active intervals for each bunny
let bunnyIntervals = new Map();

function moveDustBunnies() {
    // Clear existing intervals to avoid stacking
    bunnyIntervals.forEach(intervalId => clearInterval(intervalId));
    bunnyIntervals.clear();

    bunnies.forEach(bunny => {
        let direction = 1; // 1 for right, -1 for left
        let speed = Math.random() * 4+ 4; // Random speed 

        // Create a movement interval for each bunny
        const intervalId = setInterval(() => {
            const container = document.getElementById("container").getBoundingClientRect();
            const bunnyRect = bunny.getBoundingClientRect();
            let newLeft = bunny.offsetLeft + direction * speed;

            // Reverse direction if bunny hits container boundaries
            if (newLeft <= 0 || newLeft + bunnyRect.width >= container.width) {
                direction *= -1;
                newLeft = Math.max(0, Math.min(newLeft, container.width - bunnyRect.width)); // Keep within bounds
            }

            bunny.style.left = `${newLeft}px`; 
        }, 50);

        // Store the interval ID for this bunny
        bunnyIntervals.set(bunny, intervalId);
    });
}



// Initialize game elements and start bunny movement
initializeBunnies(4); // Start with 4 bunnies increased from 3 
relocateToy();
moveDustBunnies();
setInterval(relocateToy, 3000); // Relocate toy every 3 seconds

// Changed to increase general difficulty 


