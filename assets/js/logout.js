const showBtn = document.querySelector('.nav-top .mini-profile .logout-detail #logout-btn');
const favDialog = document.querySelector("#favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn")
const cancelBtn = favDialog.querySelector("#cancelBtn")

showBtn.addEventListener("click", () => {
    favDialog.showModal();
})

confirmBtn.addEventListener('click', () => {
    favDialog.close()
    window.location.replace('../../pages/auth/login.html')
});

cancelBtn.addEventListener('click', () => {
    favDialog.close()
});