document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        }else menu.classList.add('hidden');
    }
    );
});