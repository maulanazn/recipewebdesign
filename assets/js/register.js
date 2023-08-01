const registerDialog = document.querySelector('.form form #registerDialog');
const activateAccount = document.querySelector("#activate-account");
const accountActivated = document.querySelector("#account-activated");
const confirmBtn = activateAccount.querySelector("#confirmBtn")
const okBtn = accountActivated.querySelector("#okBtn")

registerDialog.addEventListener("click", (e) => {
    e.preventDefault();
    activateAccount.showModal();

})

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    activateAccount.close();
    
    setTimeout(() => {
        accountActivated.showModal();
    }, 3000);
})

okBtn.addEventListener('click', () => {
    accountActivated.close()
    window.location.replace('../../pages/auth/login.html')
});