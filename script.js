// Handle background image selection
document.querySelectorAll('.image-option').forEach((item) => {
    item.addEventListener('click', () => {
        const selectedImage = item.dataset.image;
        const frames = document.querySelectorAll('.frame');
        frames.forEach((frame) => {
            frame.style.backgroundImage = `url('${selectedImage}')`;
            frame.style.backgroundImage = `url('${selectedImage}')`;
            frame.style.backgroundSize = 'cover';
            frame.style.backgroundPosition = 'center';
        });
    });
});

// Update frame dimensions based on user input
document.getElementById('update-dimensions').addEventListener('click', () => {
    const leftWidth = document.getElementById('left-width').value;
    const topHeight = document.getElementById('top-height').value;
    const centerWidth = document.getElementById('center-width').value;
    const centerHeight = document.getElementById('center-height').value;
    const rightWidth = document.getElementById('right-width').value;

    document.getElementById('left').style.width = leftWidth + 'px';
    document.getElementById('top').style.height = topHeight + 'px';
    document.getElementById('center').style.width = centerWidth + 'px';
    document.getElementById('center').style.height = centerHeight + 'px';
    document.getElementById('right').style.width = rightWidth + 'px';
});
