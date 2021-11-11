
const root = new Vue({
  el: '#root',

  data: {
    image: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'],
    counter: 0,
  },

  methods: {
    
    upArrow(){
      this.counter++;
      
    }

  },

});
