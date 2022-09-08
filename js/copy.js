function copyText(){
    let input = document.querySelector('#copyRef').value;

    navigator.clipboard.writeText(input).then(()=>{
        alert("copiado!");
    })
}