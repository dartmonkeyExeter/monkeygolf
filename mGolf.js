// JavaScript source code
const fps = 60;
const interval = 1000 / fps;
let lastTime = 0;

function gameLoop(timestamp) {
    // Only proceed if enough time has passed to match the FPS cap
    if (timestamp - lastTime >= interval) {
        const deltaTime = (timestamp - lastTime) / 1000; // Convert to seconds
        lastTime = timestamp;

        update(deltaTime);
        render();
    }

    // Loop again
    requestAnimationFrame(gameLoop);
}

// Start the loop
requestAnimationFrame(gameLoop);

function update(deltaTime) {
    console.log("Updating with deltaTime:", deltaTime);
}

function render() {
    console.log("Rendering frame...");
}
