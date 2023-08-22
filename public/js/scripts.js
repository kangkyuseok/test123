document.addEventListener('DOMContentLoaded', function() {
    let contentDisplay = document.querySelector('.content-display');

    let links = document.querySelectorAll('.spa-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작(페이지 전환) 방지
            
            let href = e.currentTarget.getAttribute('href');
            fetch(href)
                .then(response => response.text())
                .then(data => {
                    contentDisplay.innerHTML = data;
                });
        });
    });
});

AOS.init();


