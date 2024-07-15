<script>
    document.addEventListener('DOMContentLoaded', function() {
        const links = {
            'Home': '#header',
            'About': '#aboutsection',
            'Services': '#Services',
            'Portfolio': '#Portfolio',
            'Contact info': '.Contact'
        };

        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor click behavior
                const target = links[this.textContent];
                if (target) {
                    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });
</script>
