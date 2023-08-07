const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<div class="nav">
    <img src="images/logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type ="text" class="search-box" placeholder="search for a product">
            <button class="search-btn">search</button>
        </div>
        <a href ="#"><img src="images/user.png"></a>
        <a href ="#"><img src="images/cart.png"></a>
    </div>
    </div>
    <ul class = "links-container">
        <li class="link-item"><a href ="#" class="link">home</a></li>
        <li class="link-item"><a href ="#" class="link">men</a></li>
        <li class="link-item"><a href ="#" class="link">women</a></li>
        <li class="link-item"><a href ="#" class="link">kids</a></li>
        <li class="link-item"><a href ="#" class="link">about us</a></li>
    </ul>
        `;

}


createNav();