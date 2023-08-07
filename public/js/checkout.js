// window.onload = () => {
//     if(!sessionStorage.user){
//         location.replace('/login');
//     }
// }
const user_ = window.sessionStorage.getItem('user')
const user_obj = JSON.parse(user_)
let user_name=''
let user_email=''
if(user_obj){
    user_name = user_obj.name

user_email = user_obj.email
}

const templateParams = {
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <style>
            body{
                min-height: 90vh;
                background: #f5f5f5;
                font-family: sans-serif;
                display:flex;
                justify-content: center;
                align-items: center;
            }
            .heading{
                text-align: center;
                font-size: 40px;
                width:50%;
                display:block;
                line-height: 50px;
                margin: 30px auto 60px;
                text-transform: capitalize;
    
            }
    
            .heading span{
                font-weight: 300;
            }
    
            .btn{
                width: 200px;
                height: 50px;
                border-radius:5px;
                background: gold;
                color: black;
                font-style: italic;
                display:block;
                margin:auto;
                font-size: 18px;
                text-transform: capitalize;
            }
    
        </style>
    
    
    
    </head>
    <body>
    
        <div>
            <h1 class ="heading">hey ${user_name}, <span>your order placed</span></h1>
            <button class ="btn">check order status</button>
        </div>
    
    
        
    </body>
    </html>`,
    email:user_email
}

const placeOrderBtn = document.querySelector('.place-order-btn');
placeOrderBtn.addEventListener('click', () => {
    if(user_name===''){
        location.replace('/login')
        return
    }
    let address = getAddress();
    emailjs.send('service_w6k2uf8', 'template_c05sdol', templateParams)
    .then(res => {
                if(res.status === 200){
                    delete localStorage.cart;
                    showAlert('Your order is placed successfully!', 'success');
                } else{
                    showAlert(res.alert);
                }
            })
    })
    // if(address){
    //     fetch('/order', {
    //         method: 'post',
    //         headers: new Headers({'Content-Type': 'application/json'}),
    //         body: JSON.stringify({
    //             order: JSON.parse(localStorage.cart),
    //             email: JSON.parse(sessionStorage.user).email,
    //             add: address,
    //         })
    //     }).then(res => res.json())
    //     .then(data => {
    //         if(data.alert == 'your order is placed'){
    //             delete localStorage.cart;
    //             showAlert(data.alert, 'success');
    //         } else{
    //             showAlert(data.alert);
    //         }
    //     })
    // }



const getAddress = () => {
    //validation
    let address = document.querySelector('#address').value;
    let street = document.querySelector('#street').value;
    let city = document.querySelector('#city').value;
    let state = document.querySelector('#state').value;
    let pincode = document.querySelector('#pincode').value;
    let landmark = document.querySelector('#landmark').value;


    if(!address.length || !street.length || !city.length || !state.length || !pincode.length || !landmark.length){
        return showAlert('fill all inputs');
    } else{
        return { address, street, city, state, pincode, landmark};
    }
}

