window.addEventListener("load", function (e) {
  var bsDiv = document.getElementById("box-shadow-div");
  var x, y;

  particlesJS("particles-js", {
    particles: {
      number: { value: 213, density: { enable: true, value_area: 800 } },
      color: { value: "#b400ff" },
      shape: {
        type: "edge",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 8 },
        image: { src: "img/github.svg", width: 70, height: 110 },
      },
      opacity: {
        value: 0.3687847739990702,
        random: false,
        anim: {
          enable: false,
          speed: 2.679854800594439,
          opacity_min: 0.22738161944437663,
          sync: false,
        },
      },
      size: {
        value: 3.945738208161363,
        random: true,
        anim: {
          enable: true,
          speed: 95.01303383925737,
          size_min: 43.852169464272635,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 256.54592973848366,
        color: "#ff0000",
        opacity: 0.4,
        width: 0,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    items: 3,
    nav: true,
    // autoplay: true,
    autoplayTimeout: 1000,
    autoplaySpeed: 1000,
    nav:true,
    animateOut:true,
    animateIn:false,

  });

  $(`.day .fa-sun-o`).on(`click`, function () {
    $(`.day .fa-sun-o`).css({
      background: "var(--sun)",
      left: "88%",
      transform: "rotate(360deg)",
    });
    
    $(`.h`).css('display', 'none');
    $(`.o`).css('display' , 'block')
    $(`.t`).css('display' , 'none')

    $(`.day .fa-moon-o`).css({
      background: "transparent",
      left: "90%",
      transform: "rotate(0deg)",
    });
    $(`.day .fa-eye`).css({
      background: "transparent",
      left: "90%",
      transform: "rotate(0deg)",
    });
    $(`.all`).css("background", "var(--light)");
  });
  $(`.day .fa-moon-o`).on(`click`, function () {
    $(`.day .fa-moon-o`).css({
      background: "var(--moon)",
      left: "88%",
      transform: "rotate(360deg)",
    });

    $(`.h`).css('display', 'none');
    $(`.o`).css('display' , 'none')
    $(`.t`).css('display' , 'block')

    $(`.day .fa-sun-o`).css({
      background: "transparent",
      left: "90%",
      transform: "rotate(0deg)",
    });

    $(`.day .fa-eye`).css({
      background: "transparent",
      left: "90%",
      transform: "rotate(0deg)",
    });

    $(`.all`).css("background", "var(--dark)");
  });
  $(`.day .fa-eye`).on(`click`, function () {
    $(`.day .fa-eye`).css({
      background: "var(--study)",
      left: "88%",
      transform: "rotate(360deg)",
    });
    $(`.h`).css('display', 'block');
    $(`.o`).css('display' , 'none')
    $(`.t`).css('display' , 'none')
    $(`.day .fa-moon-o`).css({
      background: "transparent",
      left: "90%",
      transform: "rotate(0deg)",
    });
    $(`.day .fa-sun-o`).css({
      background: "transparent",
      left: "90%",
      transform: "rotate(0deg)",
    });
    $(`.all`).css("background", "var(--study)");
  });


  
  $(window).scroll(function () {
    var scrolltop = $('html,body').scrollTop()
    console.log(scrolltop);
    if(scrolltop >= 782 - 160){
        console.log('word');
        $('.day').css({
          position: 'fixed',
          top: `10%`,
          left: `88%`,
          transition:'1s',
          opacity:1,

        })
        $('.text').css({
          position: 'fixed',
          top: `40%`,
          left: `88%`,
          transition:'1.1s',
          
        })       
         $('.ikons ').css('top', '50%')


    }
    if(scrolltop >= 1700){
      $('.ikons ').css('top', '-50%')
    }
    if(scrolltop <= 782){
        // console.log('word');
        // $('.day').css('opacity' , '0')
        // $('.m').css({
        //     opacity:'1',
        //     left:'90%'
        // })
        // $('.k').css({
        //     opacity : '0',
        //     left:'100%'
        // })
        $('.day').css({
          position: 'fixed',
          top: `10%`,
          left: `-88%`,
          opacity:0,
        })
        $('.text').css({
          position: 'fixed',
          top: `130%`,
          left: `88%`,
        })
        $('.ikons ').css('top', '-50%')

    }
    
})
$(`.m`).on(`click`, function () {
    // alert('msg');
    $('.day').css('opacity' , '1')
    $('.m').css({
        opacity:'0',
        left:'100%'
    })
    $('.k').css({
        opacity : '1',
        left:'90%'
    })
});
$(`.k`).on(`click`, function () {
    // alert('msg');
    $('.day').css('opacity' , '0')
    $('.m').css({
        opacity:'1',
        left:'90%'
    })
    $('.k').css({
        opacity : '0',
        left:'100%'
    })
});
$(window).scroll(function () {
    var scrolltop = $('html,body').scrollTop()
    console.log(scrolltop);
    if(scrolltop  >= 94 ){
        // $('.fa-bars').css('display' , 'block')
        // $('.navbars').css('position' , 'fixed')
    }
    if(scrolltop <= 94){
        console.log('word');
        // $('.navbars').css('position' , 'relative')
        // $('.fa-bars').css('display' , 'none')
    }
    if(scrolltop  >= 400 ){
      // $('.fa-bars').css('display' , 'block')
        // $('.fa-bars').css('display' , 'block')
        // $('.navbars').css('position' , 'fixed')
        $('.g').css({
          display: 'block',
          position: 'fixed',
          top:`0`,
          left:`0`,
          transform:'translateX(0%)',
          transition:'2s'

        });
        $('.u').css({
          display: 'block',
          position: 'fixed',
          transform:'translateX(0%)',
          transition:'2s'
        });
    }    if(scrolltop <= 400){
      // $('.fa-bars').css('display' , 'none')  

        console.log('words');
        $('.g').css({
          position: 'fixed',
          top:`0`,
          left:`0`,
          transform:'translateY(-100%)',
          transition:'1.8s'

        });
        $('.u').css({
          transform:'translateY(-100px)',
          transition:'1.8s'
        });
        // $('.navbars').css('position' , 'relative')
        // $('.fa-bars').css('display' , 'none')
    }
    
})
$(`.g .nav .actv`).click(function (v) { 
  v.preventDefault();
  $('html,body').animate({
   scrollTop:733
})
console.log(`hi`);
alert('msg');
});
$(`.ic .fa-bars`).click(function (m) { 
  m.preventDefault();
  $(`.ic .fa-times`).css('display' , 'block')
  $(`.ic .fa-bars`).css('display' , 'none ')
  $(`.body`).css(`display` , `none`);
  $(`.tabs`).css({
    top:'0',
    left:'0'
  });
  $('.g').css({
    position: 'fixed',
    top:`0`,
    left:`0`,
    transform:'translateY(-100%)',
    transition:'1.8s',
    opacity:'0'
  });
});
$(`.ic .fa-times`).click(function (m) { 
  m.preventDefault();
  $(`.ic .fa-bars`).css('display' , 'block')
  $(`.ic .fa-times`).css('display' , 'none')
  $(`.body`).css(`display` , `block`);
  $(`.bar .active`).css(`display` , `none`)
  $(`.tabs`).css({
    zIndex:'21',
    top:'10%',
    left:'-100%'
  });
  $('.g').css({
    position: 'fixed',
    top:`0`,
    left:`0`,
    transform:'translateY(0%)',
    transition:'1.8s',
    opacity:'1'
  });
});
$(`.tabs a`).click(function (j) { 
  j.preventDefault();
  $(`.ic .fa-bars`).css('display' , 'block')
  $(`.ic .fa-times`).css('display' , 'none')
  $(`.body`).css(`display` , `block`);
  $(`.bar .active`).css(`display` , `none`)
  $(`.tabs`).css({
    zIndex:'21',
    top:'10%',
    left:'-100%'
  });
  $('.g').css({
    position: 'fixed',
    top:`0`,
    left:`0`,
    transform:'translateY(0%)',
    transition:'1.8s',
    opacity:'1'
  });
});
$(`.u`).click(function (i) { 
  i.preventDefault();
  $(`.fer`).css({
    paddingLeft: '25px',
  });

});
console.log(keydown)
$(`.r`).click(function (h) { 
  h.preventDefault();
  // alert('msg');  
  $(`.day`).css('display' , 'block !important');
});

});
document.addEventListener('keydown', function(e) {
  var uz = document.querySelector('.uz')
  var en = document.querySelector('.en')

  console.log(e.keyCode)
  if(e.keyCode == 85 ){
    alert('msg');
  }
})
// window.addEventListener('load', function (a) {
//   var cnop = document.querySelector('.u')
//   var fer = document.querySelector('.fer')
//   cnop.addEventListener('click', function (e) {
    
//   });
// });