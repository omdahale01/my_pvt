$(document).ready(function () {
   console.log("Jquery is ready to execute"); 
   

   // let home = $('.home');
   // let about = $('.about');
   // let study = $('.study');
   // let gallary = $('.gallary');
   // let social  = $('.social');
   // let contact = $('.contact');
   

      $('.gallar').show(function(){
      $('#home-btn').addClass("active");
      });

   $('.about,.social,.study,.gallary,.contact').hide();
   $('.home,.about,.social,.study,.gallary,.contact').animate({right:'50rem'},"5000");

   $('#home-btn').click(function(){
      console.log(this)
      $('.home').show();
      $('.about,.study,.gallary,.social,.contact').hide();
      $('#home-btn').addClass("active");
      $('#about-btn,#study-btn,#gallary-btn,#social-btn,#contact-btn').removeClass("active");
      $(".toggle").toggleClass("active");
      $(".fix").toggleClass("fix-active");
      $(".home").animate({left:'0rem'},"5000");
   });

   
   $('#about-btn').click(function(){
      $('.about').show();
      $('.home,.study,.gallary,.social,.contact').hide();
      $(".toggle").toggleClass("active");
      $(".fix").toggleClass("fix-active");

      $(".about").animate({left:'0rem'},"5000");
      // $(".menu").toggle(
      //    function(){$(".fix").css({"display":"block"});},
      //    function(){$(".fix").css({"display":"none"});
      // });


      $('#about-btn').addClass("active");
      $('#home-btn,#study-btn,#gallary-btn,#social-btn,#contact-btn').removeClass("active");

   });
         
      

   $('#study-btn').click(function(){
      $('.study').show();
      $('.home,.about,.gallary,.social,.contact').hide();

      $('#study-btn').addClass("active");
      $('#home-btn,#about-btn,#gallary-btn,#social-btn,#contact-btn').removeClass("active");

      $(".toggle").toggleClass("active");
      $(".fix").toggleClass("fix-active");

      $(".study").animate({left:'0rem'},"5000");

      
   });


   $('#gallary-btn').click(function(){
      $('.gallary').show();
      $('.home,.about,.study,.social,.contact').hide();

      $('#gallary-btn').addClass("active");
      $('#home-btn,#about-btn,#study-btn,#social-btn,#contact-btn').removeClass("active");

      $(".toggle").toggleClass("active");
      $(".fix").toggleClass("fix-active");

      $(".gallary").animate({left:'0rem'},"5000");

   });


   $('#social-btn').click(function(){
      $('.social').show();
      $('.home,.about,.study,.gallary,.contact').hide();

      $('#social-btn').addClass("active");
      $('#home-btn,#about-btn,#study-btn,#gallary-btn,#contact-btn').removeClass("active");

      $(".toggle").toggleClass("active");
      $(".fix").toggleClass("fix-active");

      $(".social").animate({left:'0rem'},"5000");

   });



   $('#contact-btn').click(function(){
      $('.contact').show();
      $('.home,.about,.study,.gallary,.social').hide();

      $('#contact-btn').addClass("active");
      $('#home-btn,#about-btn,#study-btn,#gallary-btn,#social-btn').removeClass("active");

      $(".toggle").toggleClass("active");
      $(".fix").toggleClass("fix-active");

      $(".contact").animate({left:'0rem'},"5000");

   });


   $(".float-up").on("click",function(){
      console.log('up click');
     $('html,body').animate({
        
        scrollTop:0
     });

   });
   $(".float-dn").on("click",function(){
      console.log('dn click');
      $('html,body').animate({
         scrollTop:$(document).height() - $(window).height()
      });
      
    });
       
    $("#theme").on("click",function(){
      
      $('body').toggleClass('light',500).toggleClass('red-theme',500);

      

   });

   // $("#rebtn").toggle(function(){
   //    $(".nav").css({"display":"block"});
   // },
   // function(){
   //    $(".nav").css({"display":"none"});
   // })


   // let menutoggle = document.querySelector('.toggle');
   //      menutoggle.onclick = function(){
   //      menutoggle.classList.toggle('active')
   //      }
   // $(".toggle").toggleClass("active");
   $(".fix").toggleClass("fix-active");
        $(".toggle").click(function(){
           $(".toggle").toggleClass("active");
           $(".fix").toggleClass("fix-active");
           
        });


});

// $('.home').show(),
//       $('.about').hide();