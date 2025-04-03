    function filterCards(category) {
        let cardsSections = document.querySelectorAll('.cards-display');
        cardsSections.forEach(section => {
            if (section.querySelector('h2').textContent.trim() === category || category === 'all') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll("nav button").forEach(button => {
            button.addEventListener("click", function() {
                let category = this.textContent.trim();
                filterCards(category);
            });
        });
    });

    //main.html
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll("nav button").forEach(button => {
            button.addEventListener("click", function() {
                let category = this.textContent.trim();
                filterCards(category);
            });
        });

        // Redirect only if the user is on main.html
        if (window.location.pathname.includes('main.html') && !localStorage.getItem('username')) {
            window.location.href = 'login.html';
        }
    });

    //login.html
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (localStorage.getItem('username')) {
            if (username === localStorage.getItem('username')) {
                localStorage.setItem('username', username);
                window.location.href = 'main.html';
            } else {
                document.getElementById('login-output').innerHTML = '<p style="color:red;">Incorrect username or password.</p>';
            }
        } else {
            if (username && password) {
                localStorage.setItem('username', username);
                window.location.href = 'main.html';
            } else {
                document.getElementById('login-output').innerHTML = '<p style="color:red;">You don\'t have an account. Please register.</p>';
                setTimeout(function() {
                    window.location.href = 'register.html';
                }, 2000); 
            }
        }
    });
    //register.html


