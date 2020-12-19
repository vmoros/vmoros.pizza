window.addEventListener('DOMContentLoaded', () => {

    const no_children = new IntersectionObserver(entries => {
        // console.log(entries);
        entries.forEach(entry => {
            const id = entry.target.parentElement.getAttribute('id');
            // console.log("id = " + id);
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });
    
    const with_children = new IntersectionObserver(entries => {
        // console.log(entries);
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            // console.log("id = " + id);
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });
    document.querySelectorAll('section[id]').forEach((section) => {
        // console.log(section);
        if (section.querySelector('section')) {
            with_children.observe(section);
        } else {
            no_children.observe(section.querySelector('h2'));
        }
    });

});