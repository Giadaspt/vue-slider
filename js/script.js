
const root = new Vue({
  el: '#root',

  data: {
    images: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'],
    images2: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'],
    counter: 0,
    img: 'img-gs',
  },

  // mounted(){
  //   setInterval(this.upArrow, 3000)
  // },

  methods: {
    
    upArrow(){
      this.counter++;
      if(this.counter > this.images.length -1){
        this.counter = 0;
      }
    },

    downArrow(){
      this.counter--;
      if(this.counter < 0){
        this.counter = this.images.length -1;
      }

    }

  },

});
