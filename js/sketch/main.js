define([
    "json!./settings.json"

    // Separated logic files
],
function (
    settings
    // Any other logic
) {
    const sketch = function (p5) {
        
        function updateElements() {
            // Update the sketch status for the current frame
        }

        function drawFrame() {
            // Draw the current frame

            if (p5.mouseIsPressed) {
                p5.fill(0);
            } else {
                p5.fill(255);
            }
            p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
        }

        p5.preload = function () {
            // Load in advance any font or asset needed
        };

        p5.setup = function () {
            const canvas = p5.createCanvas(settings.canvas.width, settings.canvas.height);
            // Initialization Logic
        };

        p5.draw = function () {
            updateElements();
            drawFrame();
        };

        p5.keyPressed = function () {
            if (p5.keyCode === p5.UP_ARROW) {
                // Do something on arrow up
                return false;
            } else if (p5.keyCode === p5.DOWN_ARROW) {
                // Do something on arrow down
                return false;
            } else if (p5.keyCode === p5.LEFT_ARROW) {
                // Do something on arrow left
                return false;
            } else if (p5.keyCode === p5.RIGHT_ARROW) {
                // Do something on arrow right
                return false;
            }
            return true; // Dont capture the event and allow it to bubble
        };
    };

    return {
        sketch
    };
});
