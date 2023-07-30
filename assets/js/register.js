const showBtn = document.querySelector('.form form #showDialog');
const favDialog = document.querySelector("#favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn")

showBtn.addEventListener("click", (e) => {
    e.preventDefault();
    favDialog.showModal();
})

confirmBtn.addEventListener('click', () => {
    favDialog.close()
    window.location.replace('../../pages/auth/login.html')
});