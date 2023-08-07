const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <div>
            <a href='/'>
            <img src="../images/logo.png" class="brand-logo" alt=""></a>
        </div>

        <div class="nav-items">
            <div class="search">
                <input type ="text" class="search-box" placeholder="search for a product">
                <button class="search-btn">search</button>
            </div>
            <a>
                <img src="../images/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                    <p class="account-info">Log in as, name</p>
                    <button class="btn" id="user-btn">Log out</button>
                </div>
            </a>
            <a href ="/cart"><img src="../images/cart.png"></a>
        </div>
    </div>

    <div class='links'>
        <ul class = "links-container">
            <li class="link-item"><a href ="/" class="link">home</a></li>
            <li class="link-item"><a href ="#men-tshirt-products" class="link">men</a></li>
            <li class="link-item"><a href ="#" class="link">women</a></li>
            <li class="link-item"><a href ="seller" class="link">seller</a></li>
            <li class="link-item"><a href ="/aboutUs" class="link">about us</a></li>
            <li class="link-item"><a href ="/contactUs" class="link">Contact us</a></li>
        </ul>
    </div>
        `;

}


createNav();


// nav popup

const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML =`logged in as, ${user.name}`;
        actionBtn.innerHtml = 'log out';
        actionBtn.addEventListener('click',() => {
            sessionStorage.clear();
            location.reload();
        })

    }else{
        // user is logged out
        popuptext.innerHTML = 'log in to place an order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href ='/login';
        })
    }
}

//search box

const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href =`/search/${searchBox.value}`
    }
})