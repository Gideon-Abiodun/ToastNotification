let toastBox = document.getElementById('toastBox');
let successMessage = '<i class="bi bi-check-circle-fill"></i> Successfully submitted!';
let errorMessage = '<i class="bi bi-x-circle-fill"></i> Please, fix the error!';
let invalidMessage = '<i class="bi bi-exclamation-circle-fill"></i> Invalid details, check again!';

function showToast(message){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if(message.includes('error')){
        toast.classList.add('error');
    }
    if(message.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    }, 4000)
};