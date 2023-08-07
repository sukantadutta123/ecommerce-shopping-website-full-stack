// redirect to homepage if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader'); 

//select inputs
const submitBtn = document.getElementById('RegSubmit')
const submitBtnLogIn = document.getElementById('LogSubmit')
const LoginEmail = document.querySelector('#logEmail')
const LoginPass = document.querySelector('#logPassword')
const name = document.querySelector('#regUser') || null;
const email = document.querySelector('#regEmail');
const password = document.querySelector('#regPassword');

submitBtn.addEventListener('click', () => {
            if(name.value.length < 3){
                showAlert('name must be 3 letters long');
                }else if(!email.value.length){
                    showAlert('enter your email');
               }    else if(password.value.length < 8){
                       showAlert('password should be 8 letters long');
               }
               else{
                   //submit form
                   loader.style.display = 'block';
                   sendData('/signup',{
                       name: name.value,
                       email: email.value,
                       password: password.value,
                       seller: false
                   })
           }
        
    
})

submitBtnLogIn.addEventListener('click',()=>{
        //login page
        if(!LoginEmail.value.length || !LoginPass.value.length){
            showAlert('fill all inputs');
        } else{
            loader.style.display = 'block';
               sendData('/login',{
                   email: LoginEmail.value,
                   password: LoginPass.value,
               })
        }
    
})
