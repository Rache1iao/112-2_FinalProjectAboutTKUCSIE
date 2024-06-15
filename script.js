document.addEventListener('DOMContentLoaded', () => {
    // 點擊事件
    document.querySelector('h1').addEventListener('click', () => {
        alert('歡迎來到淡江大學資工系！');
    });

    // 滑鼠移入事件
    document.querySelector('nav ul li a').addEventListener('mouseover', (event) => {
        event.target.style.color = 'yellow';
    });

    document.querySelector('nav ul li a').addEventListener('mouseout', (event) => {
        event.target.style.color = 'white';
    });

    // 表單提交事件
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('表單已提交！');
    });
});

// 首頁圖

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
