const btnIndividuel = document.querySelector('.btn1');
const btnEntreprise = document.querySelector('.btn2');
const formIndividuel = document.querySelector('.reserv_ind');
const formEntreprise = document.querySelector('.reserv_entr');

btnEntreprise.addEventListener('click', () => {
        console.log(formEntreprise)
        formEntreprise.style.display="flex";
        formIndividuel.style.display="none";
        btnEntreprise.classList.add('focus');
        btnIndividuel.classList.remove('focus');
    })

btnIndividuel.addEventListener('click', () => {
        console.log(formIndividuel)
        formEntreprise.style.display="none";
        formIndividuel.style.display="flex";
        btnEntreprise.classList.remove('focus');
        btnIndividuel.classList.add('focus');
    })