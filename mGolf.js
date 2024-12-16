const fps = 60; // You can adjust this FPS value
const frameDuration = 1000 / fps; // Time per frame (in milliseconds)
let lastTimestamp = 0;
let elapsedTime = 0; // Track total elapsed time for frame updates

let currentAnimFrame = 0;
let animating = false;
let currAnimation = null;

// Sprite data (with positions and images)
let sprites = {
    hat: { id: 'hat', image: 'assets/GOLFER_HAT_1.png', position: { right: '26%', bottom: '42.5%' }, zIndex: 10 },
    head: { id: 'head', image: 'assets/GOLFER_HEAD_1.png', position: { right: '25%', bottom: '40%' }, zIndex: 9 },
    torso: { id: 'torso', image: 'assets/GOLFER_TORSO_1.png', position: { right: '23.25%', bottom: '31%' }, zIndex: 8 },
    upperLeftArm: { id: 'upperLeftArm', image: 'assets/GOLFER_LEFTUPPERARM_1.png', position: { right: '24%', bottom: '33%' }, zIndex: 9 },
    upperRightArm: { id: 'upperRightArm', image: 'assets/GOLFER_RIGHTUPPERARM_1.png', position: { right: '26.5%', bottom: '33%' }, zIndex: 7 },
    lowerLeftArm: { id: 'lowerLeftArm', image: 'assets/GOLFER_LEFTLOWERARM_1.png', position: { right: '26.25%', bottom: '28.25%' }, zIndex: 9 },
    lowerRightArm: { id: 'lowerRightArm', image: 'assets/GOLFER_RIGHTLOWERARM_1.png', position: { right: '27.5%', bottom: '29%' }, zIndex: 7, transform: 'rotate(-10deg) scale(2)' },
    leftHand: { id: 'leftHand', image: 'assets/GOLFER_BIGHAND.png', position: { right: '27.5%', bottom: '26.5%' }, zIndex: 9, transform: 'scale(2)' },
    rightHand: { id: 'rightHand', image: 'assets/GOLFER_SMALLHAND.png', position: { right: '28.25%', bottom: '26.5%' }, zIndex: 7, transform: 'scale(2)' },
    upperLegs: { id: 'upperLegs', image: 'assets/GOLFER_UPPERLEGS_1.png', position: { right: '22.5%', bottom: '23%' }, zIndex: 7, transform: 'scale(2)' },
    lowerLeftLeg: { id: 'lowerLeftLeg', image: 'assets/GOLFER_LEFTLOWERLEG_1.png', position: { right: '22.5%', bottom: '16.5%' }, zIndex: 6, transform: 'scale(2)' },
    lowerRightLeg: { id: 'lowerRightLeg', image: 'assets/GOLFER_RIGHTLOWERLEG_1.png', position: { right: '24.5%', bottom: '16.5%' }, zIndex: 5, transform: 'scale(2)' },
    leftFoot: { id: 'leftFoot', image: 'assets/GOLFER_BIGFOOT.png', position: { right: '23%', bottom: '12.5%' }, zIndex: 6, transform: 'scale(2)' },
    rightFoot: { id: 'rightFoot', image: 'assets/GOLFER_SMALLFOOT.png', position: { right: '25%', bottom: '13.75%' }, zIndex: 6, transform: 'scale(2)' },
    club: { id: 'club', image: 'assets/GOLFER_CLUB_1.png', position: { right: '29.25%', bottom: '14.5%' }, zIndex: 8, transform: 'scale(2)' }
};

const exampleAnimation = [
    { frame: 0, sprites: { club: { position: { right: '29.25%', bottom: '14.5%' }, transform: 'rotate(0deg) scale(2)' } } }, 
    { frame: 1, sprites: { club: { position: { right: '29.25%', bottom: '14.5%' }, transform: 'rotate(45deg) scale(2)' } } },
    { frame: 2, sprites: { club: { position: { right: '29.25%', bottom: '14.5%' }, transform: 'rotate(90deg) scale(2)' } } },
    { frame: 3, sprites: { club: { position: { right: '29.25%', bottom: '14.5%' }, transform: 'rotate(135deg) scale(2)' } } },
    { frame: 4, sprites: { club: { position: { right: '29.25%', bottom: '14.5%' }, transform: 'rotate(180deg) scale(2)' } } },
    { frame: 5, sprites: { club: { position: { right: '29.25%', bottom: '14.5%' }, transform: 'rotate(225deg) scale(2)' } } } // just a test forn ow
]

function start() {
    requestAnimationFrame(update);
}

function update(timestamp) {
    requestAnimationFrame(update);
    
    // Calculate time difference between current and last frame
    let delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    // Accumulate elapsed time
    elapsedTime += delta;

    // If enough time has passed, move to the next frame
    if (elapsedTime >= frameDuration) {
        if (animating) {
            animateFrame(currAnimation, currentAnimFrame);
            currentAnimFrame++;

            if (currentAnimFrame >= currAnimation.length) {
                currentAnimFrame = 0;
                animating = false;
                currAnimation = null;
            }
        }

        // Reset the elapsed time for the next frame
        elapsedTime = 0;
    }
}

function updateSprites() {
    for (let sprite in sprites) {
        let spriteElement = document.getElementById(sprites[sprite].id);
        spriteElement.style.right = sprites[sprite].position.right;
        spriteElement.style.bottom = sprites[sprite].position.bottom;
        spriteElement.style.zIndex = sprites[sprite].zIndex;
        if (sprites[sprite].transform) {
            spriteElement.style.transform = sprites[sprite].transform;
        }
    }
}

function animateFrame(animation, frame) {
    for (let sprite in animation[frame].sprites) {
        sprites[sprite].position = animation[frame].sprites[sprite].position;
        sprites[sprite].transform = animation[frame].sprites[sprite].transform;
        if (animation[frame].image) {
            let spriteElementID = document.getElementById(sprites[sprite].id);
            spriteElementID = spriteElementID + "-img";
            let spriteElement = document.getElementById(spriteElementID);
            spriteElement.src = animation[frame].image;
        }
    }
    updateSprites();
}

document.addEventListener('click', function() {
    currAnimation = swingAnimation;
    animating = true;
});

start();