// Handle background image selection
document.querySelectorAll('.image-option').forEach((item) => {
    item.addEventListener('click', () => {
        const selectedImage = item.dataset.image;
        const frames = document.querySelectorAll('.frame');
        frames.forEach((frame) => {
            frame.style.backgroundImage = `url('${selectedImage}')`;
            frame.style.backgroundSize = 'cover'; // Change this line to 'contain' to fit the image into the frame
            frame.style.backgroundPosition = 'center';
            frame.style.backgroundRepeat = 'y-repeat';
        });
    });
});

// Update frame dimensions based on user input
document.getElementById('update-dimensions').addEventListener('click', () => {
    const frameSelector = document.getElementById('frame-selector').value;
    const widthInput = document.getElementById('width-input').value;
    const heightInput = document.getElementById('height-input').value;

    if (frameSelector === 'left' || frameSelector === 'right') {
        document.getElementById(frameSelector).style.width = widthInput + 'px';
    } else if (frameSelector === 'top') {
        document.getElementById(frameSelector).style.height = heightInput + 'px';
    } else if (frameSelector === 'center') {
        document.getElementById(frameSelector).style.width = widthInput + 'px';
        document.getElementById(frameSelector).style.height = heightInput + 'px';
    }
});
