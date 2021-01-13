let myCursor = document.querySelector('.cursor');
        let menuLinks = document.querySelectorAll('a');
        let cards = document.querySelectorAll('.card');
        let buttons = document.querySelectorAll('button');
        let topLinks = document.querySelectorAll('.top p');
        let inputs = document.querySelectorAll('input');
       

        window.addEventListener('mousemove',cursor);

        function cursor(e){
            myCursor.style.top = e.pageY + "px"; 
            myCursor.style.left = e.pageX + "px"; 
        }

        menuLinks.forEach(link =>{
            link.addEventListener('mouseover',() => {
                myCursor.classList.add('cursor-grow')
            });
            link.addEventListener('mouseleave',() => {
                myCursor.classList.remove('cursor-grow')
            });
        });
        cards.forEach(card =>{
            card.addEventListener('mouseover',() => {
                myCursor.classList.add('cursor-grow')
            });
            card.addEventListener('mouseleave',() => {
                myCursor.classList.remove('cursor-grow')
            });
        });
        buttons.forEach(button =>{
            button.addEventListener('mouseover',() => {
                myCursor.classList.add('cursor-grow')
            });
            button.addEventListener('mouseleave',() => {
                myCursor.classList.remove('cursor-grow')
            });
        });
        topLinks.forEach(link =>{
            link.addEventListener('mouseover',() => {
                myCursor.classList.add('cursor-grow')
            });
            link.addEventListener('mouseleave',() => {
                myCursor.classList.remove('cursor-grow')
            });
        });
        inputs.forEach(input =>{
            input.addEventListener('mouseover',() => {
                myCursor.classList.add('cursor-grow')
            });
            input.addEventListener('mouseleave',() => {
                myCursor.classList.remove('cursor-grow')
            });
        });
        

        

        function toggle(source) {
            checkboxes = document.getElementsByName('foo');
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                checkboxes[i].checked = source.checked;
            }
        }


        const menuSlide = () => {
            const burger = document.querySelector('.burger');
            const menu = document.querySelector('.menu');


            burger.addEventListener('click', () => {
                menu.classList.toggle('menu-active');

                burger.classList.toggle('toggle');
            });
        }
        menuSlide();

        const signIn = () => {
            const signIn = document.querySelector('.login');
            const regButton = document.querySelector('.reg-button');
            const login = document.querySelector('.sign-in-container');
            const close = document.querySelector('.close-one');
            const signUp = document.querySelector('.reg');
            const reg = document.querySelector('.sign-up-container');


            signIn.addEventListener('click', () => {
                login.classList.add('sign-in-active');
            });
            close.addEventListener('click', () => {
                login.classList.remove('sign-in-active');
            });
            signUp.addEventListener('click', () => {
                login.classList.remove('sign-in-active');
            });
            signUp.addEventListener('click', () => {
                reg.classList.add('sign-up-active');
            });
            regButton.addEventListener('click', () => {
                login.classList.remove('sign-in-active');
            });
            regButton.addEventListener('click', () => {
                reg.classList.add('sign-up-active');
            });

        }
        signIn();



        const signUp = () => {
            const signUp = document.querySelector('.reg');
            const loginButton = document.querySelector('.login-button');
            const reg = document.querySelector('.sign-up-container');
            const close = document.querySelector('.close-two');
            const signIn = document.querySelector('.login');
            const login = document.querySelector('.sign-in-container');

            signUp.addEventListener('click', () => {
                reg.classList.add('sign-up-active');
            });
            close.addEventListener('click', () => {
                reg.classList.remove('sign-up-active');
            });
            signIn.addEventListener('click', () => {
                reg.classList.remove('sign-up-active');
            });
            signIn.addEventListener('click', () => {
                login.classList.add('sign-in-active');
            });
            loginButton.addEventListener('click', () => {
                reg.classList.remove('sign-up-active');
            });
            loginButton.addEventListener('click', () => {
                login.classList.add('sign-in-active');
            });
        }
        signUp();




        const searchFade = () => {
            const searchIcon = document.querySelector('.fas');
            const searchBar = document.querySelector('.search-container');
            const close = document.querySelector('.close-three');

            searchIcon.addEventListener('click', () => {
                searchBar.classList.add('search-active');
            });
            close.addEventListener('click', () => {
                searchBar.classList.remove('search-active');
            });
        }
        searchFade();


        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 20,
            speed: 400
        });
