document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.btn');
    const colorSpan = document.querySelector(".color");

    btn.addEventListener('click', function(){
        const randomColor = getRandomColor();
        console.log(randomColor);

        document.body.style.backgroundColor = randomColor;
        colorSpan.textContent = randomColor;
    });

    function getRandomColor(){
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
