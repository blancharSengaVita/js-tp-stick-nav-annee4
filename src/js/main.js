const stickNav = {
  constInit(){
    this.nav = document.getElementById('main');
  },

  addEventListener() {
    window.addEventListener('scroll', ()=>{
      if(this.nav.offsetTop <= window.scrollY){
        document.body.classList.add('fixed-nav');
      }

      if(this.nav.offsetTop >= window.scrollY){
        document.body.classList.remove('fixed-nav');
      }
    });
  },

  AppInit() {
    document.documentElement.classList.add('js-enabled');
    this.constInit();
    this.addEventListener();
  },
}

stickNav.AppInit();