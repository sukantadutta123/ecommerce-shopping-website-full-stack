let fullName=''
let eMail = ''
let User_Message = ''
const user_ = window.sessionStorage.getItem('user')
const user_obj = JSON.parse(user_)
let user_name=''
if(user_obj){
    user_name = user_obj.name

user_email = user_obj.email
}

const form = document.getElementById('contact_form')
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fullName = document.getElementById('fullName').value
    eMail = document.getElementById('eMail').value
    User_Message = document.getElementById('User_Message').value
    emailjs.send('service_w6k2uf8', 'template_421blj8', {name:fullName,email:eMail,message:User_Message,user_name:user_name})
    .then(res => {
                if(res.status === 200){
                    
                    alert('Your message has been sent. A reply will be sent within 24hrs');
                } 
            })

})

