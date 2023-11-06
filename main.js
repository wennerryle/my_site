function skateHumanAnimationRender() {
    /** 
    * @type {HTMLDivElement}
    * @default
    */
    const animatedElement = document.querySelector('.scissors_animation > div');
    const endOfAnimation = innerHeight + 70;

    if (endOfAnimation < scrollY) return;

    const progress = (scrollY / endOfAnimation) * 100;

    window.requestAnimationFrame(() => {
        animatedElement.style.width = progress + "%";
    })
}

const headerStore = {
    header: document.querySelector('header'),
    _collapsed: false,
    set collapsed(value) {
        if (this._collapsed === value) return;
        if (!window.matchMedia('(min-width: 690px)').matches) return;

        this._collapsed = value;

        this.header.style.height = value ? "80px" : "176px"
    },
    get collapsed() {
        return this._collapsed;
    }
}

window.addEventListener('scroll', () => {
    skateHumanAnimationRender();
    headerStore.collapsed = scrollY > 20 ? true : false;
})
