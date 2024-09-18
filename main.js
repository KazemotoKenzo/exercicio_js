const form = document.getElementById('form')
const numA = document.getElementById('num-a');
const numB = document.getElementById('num-b');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemErro = `${numA.value} é maior que ${numB.value}`;
    const containerMensagemErro = document.querySelector('.error-message');

    if(parseFloat(numA.value)<parseFloat(numB.value)){
        document.querySelector('.success-message').style.display = 'block';
        
        containerMensagemErro.style.display = 'none';
        numA.classList.remove('error');
        numB.classList.remove('error');

        numA.value = ``;
        numB.value = ``;
    }
    else{
        numA.classList.add('error');
        numB.classList.add('error');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';


        document.querySelector('.success-message').style.display = 'none';
    }
});