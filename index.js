document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('color-box');
    const colorCode = document.getElementById('color-code');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for Generate button
    generateBtn.addEventListener('click', function () {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor;
    });

    // Event listener for Copy button
    copyBtn.addEventListener('click', function () {
        const textArea = document.createElement('textarea');
        textArea.value = colorCode.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Color code copied: ' + colorCode.textContent);
    });

    // Event listener for Reset button
    resetBtn.addEventListener('click', function () {
        colorBox.style.backgroundColor = '#FFFFFF';
        colorCode.textContent = '#FFFFFF';
    });
});
