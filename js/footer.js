const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `    <div class="footer-content">
    <img src="Images/logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class = "category">
            <li class="category-title">men</li>
            <li><a href="#" class ="footer-link">t-shirts</a></li>
            <li><a href="#" class ="footer-link">formals</a></li>
            <li><a href="#" class ="footer-link">trousers</a></li>
            <li><a href="#" class ="footer-link">jeans</a></li>
            <li><a href="#" class ="footer-link">imitation jewelery</a></li>
            <li><a href="#" class ="footer-link">jackets</a></li>
            <li><a href="#" class ="footer-link">Suites and blazers</a></li>
            <li><a href="#" class ="footer-link">shoes</a></li>
            <li><a href="#" class ="footer-link">belts</a></li>
            <li><a href="#" class ="footer-link">watches</a></li>
        </ul>
        <ul class = "category">
            <li class="category-title">women</li>
            <li><a href="#" class ="footer-link">t-shirts</a></li>
            <li><a href="#" class ="footer-link">formals</a></li>
            <li><a href="#" class ="footer-link">trousers</a></li>
            <li><a href="#" class ="footer-link">jeans</a></li>
            <li><a href="#" class ="footer-link">imitation jewelery</a></li>
            <li><a href="#" class ="footer-link">jackets</a></li>
            <li><a href="#" class ="footer-link">Suites and blazers</a></li>
            <li><a href="#" class ="footer-link">shoes</a></li>
            <li><a href="#" class ="footer-link">belts</a></li>
            <li><a href="#" class ="footer-link">watches</a></li>
        </ul>

    </div>
    

</div>
<p class = "footer-title">about me</p><img src="images/mypicture.jpeg">
    <p class = "info">Hi there, my name is Sukanta Dutta , I am a student of Heritage Institute of Technology Kolkata,pursuing Electronics and communication engineering, currently in 3rd year,This is my third webpage as a Major project from Internselite! </p>
    <p class ="info">support emails - duttasukanta572@gmail.com , skdaredevil123@gmail.com</p>
    <p class="info">telephone - 8250758xxx</p>
    <div class="footer-social-container">
        <div>
            <a href ="#" class="social-link">terms and services</a>
            <a href ="#" class="social-link">privacy and security</a>
        </div>
        <div>
            <a href ="#" class="social-link">instagram</a>
            <a href ="#" class="social-link">facebook</a>
            <a href ="#" class="social-link">twitter</a>
            <a href ="#" class="social-link">thread</a>
            <a href ="#" class="social-link">linked in</a>
        </div>

    </div>
    <p class="footer-credit">The Best Clothing Store Online - SUKUZ SHOP :- © Sukanta Dutta 2023</p>`;
}

createFooter();