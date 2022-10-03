const navList = document.querySelectorAll(".primary-navigate li");

const registerModal = document.querySelector("#registerModal");
const openRModal = document.querySelector(".open-register-modal");
const closeRModal = document.querySelector(".close-register-modal");

openRModal.addEventListener("click", () => {
    registerModal.showModal();
});

closeRModal.addEventListener("click", () => {
    registerModal.close();
});

navList.forEach((list) => {
    list.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
        } else {
            e.target.classList.add('active');
        }
    });
});

