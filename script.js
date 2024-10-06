//your code here
 const homeLink = document.getElementById('homeLink');
 const aboutLink = document.getElementById('aboutLink');
 const contactLink = document.getElementById('contactLink');

        // Function to remove 'active' class from all links
        function removeActiveClasses() {
            homeLink.classList.remove('active');
            aboutLink.classList.remove('active');
            contactLink.classList.remove('active');
        }

        // Event listeners for navigation links
        homeLink.addEventListener('click', function () {
            removeActiveClasses();
            homeLink.classList.add('active');
        });

        aboutLink.addEventListener('click', function () {
            removeActiveClasses();
            aboutLink.classList.add('active');
        });

        contactLink.addEventListener('click', function () {
            removeActiveClasses();
            contactLink.classList.add('active');
        });
