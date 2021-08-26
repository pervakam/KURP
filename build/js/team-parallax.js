const membersList = document.querySelectorAll('.team__member');

if (window.innerWidth >= 1200) {
    membersList.forEach((it) => {
        const parallaxInstance = new Parallax(it, {
            relativeInput: true
        });
    })

}
