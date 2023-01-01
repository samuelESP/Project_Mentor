
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.errorMsg');



function setError(index){
    campos[index].style.border = '2px solid hsl(354, 100%, 66%)';
    campos[index].style.color = 'hsl(354, 100%, 66%)';
    span[index].style.display = 'block';
}

function removerError(index){
    campos[index].style.border = '2px solid #12e607';
    span[index].style.display = 'none';
    campos[index].style.color = '#12e607';
}



function emailValidator() {
    if(!emailRegex.test(campos[0].value)){
        setError(0);
    }else{
        removerError(0)
    }
}





