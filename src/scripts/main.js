const navList = document.querySelectorAll(".primary-navigate li");

navList.forEach((list) => {
    list.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
        } else {
            e.target.classList.add('active');
        }
    });
});