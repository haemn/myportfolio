(function ($) {

	"use strict";

	/*
	======================================
		Slider & Slider Animation Init
	======================================
	*/
	(function() {

		var tracemSwiper = new Swiper ('.swiper-container', {
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">0' + (index + 1) + '</span>';
				},
			},
		});


		tracemSwiper.on( 'transitionStart', function() {

			var $activeRightEl	= jQuery('.single-banner-text.swiper-slide-active .banner-right h2'),
			$rightEl			= jQuery('.single-banner-text .banner-right h2');

			if( ! $activeRightEl.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-right h2', function() {
					$rightEl.removeClass('animation-loaded');
					$activeRightEl.addClass('animation-loaded');
				});
			}


			var $activeLeftH3El	= jQuery('.single-banner-text.swiper-slide-active .banner-left h3'),
			$lefth3El			= jQuery('.single-banner-text .banner-left h3');
			
			if( ! $activeLeftH3El.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-left h3', function() {
					$lefth3El.removeClass('animation-loaded');
					$activeLeftH3El.addClass('animation-loaded');
				});
			}


			var $activeLeftH4El	= jQuery('.single-banner-text.swiper-slide-active .banner-left h4'),
			$leftH4El			= jQuery('.single-banner-text .banner-left h4');

			if( ! $activeLeftH4El.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-left h4', function() {
					$leftH4El.removeClass('animation-loaded');
					$activeLeftH4El.addClass('animation-loaded');
				});
			}


			var $activeBtnEl	= jQuery('.single-banner-text.swiper-slide-active .banner-left .btn-generic a span'),
			$btnEl				= jQuery('.single-banner-text .banner-left .btn-generic a span');
			
			if( ! $activeBtnEl.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-left .btn-generic a span', function() {
					$btnEl.removeClass('animation-loaded');
					$activeBtnEl.addClass('animation-loaded');
				});
			}


			var $activeTotalViewEl	= jQuery('.single-banner-text.swiper-slide-active .banner-left .total-view'),
			$totalViewEl			= jQuery('.single-banner-text .banner-left .total-view');
			
			if( ! $activeTotalViewEl.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-left .total-view', function() {
					$totalViewEl.removeClass('animation-loaded');
					$activeTotalViewEl.addClass('animation-loaded');
				});
			}

			var $activeTotalLikeEl	= jQuery('.single-banner-text.swiper-slide-active .banner-left .total-like'),
			$totalLikeEl			= jQuery('.single-banner-text .banner-left .total-like');

			if( ! $activeTotalLikeEl.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-left .total-like', function() {
					$totalLikeEl.removeClass('animation-loaded');
					$activeTotalLikeEl.addClass('animation-loaded');
				});
			}


			var $activeTotalCmntEl	= jQuery('.single-banner-text.swiper-slide-active .banner-left .total-comment'),
			$totalCmntEl			= jQuery('.single-banner-text .banner-left .total-comment');

			if( ! $activeTotalCmntEl.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-left .total-comment', function() {
					$totalCmntEl.removeClass('animation-loaded');
					$activeTotalCmntEl.addClass('animation-loaded');
				});
			}

			var $activeEIBefEl	= jQuery('.single-banner-text.swiper-slide-active .banner-left .portfolio-extra-info'),
			$totalEIBefEl		= jQuery('.single-banner-text .banner-left .portfolio-extra-info');

			if( ! $activeEIBefEl.hasClass('animation-loaded') ) {
				jQuery('.single-banner-text.swiper-slide-active .banner-left .portfolio-extra-info', function() {
					$totalEIBefEl.removeClass('animation-loaded');
					$activeEIBefEl.addClass('animation-loaded');
				});
			}

		});

	})();


	/*
	======================================
		Tracem Megamenu Init
	======================================
	*/
	(function() {

		var $mmEl = $('.navbar.tracem-initial-navbar li');

		$mmEl.on('mouseenter', function() {
			$(this).find('.tracem-megamenu').fadeIn('fast');
			$(this).children('.tracem-dropdown').fadeIn('fast');
		});
		$mmEl.on('mouseleave', function() {
			$(this).find('.tracem-megamenu').fadeOut('fast');
			$(this).children('.tracem-dropdown').fadeOut('fast');
		});

	})();


	/*
	======================================
		Tracem Megamenu Init
	======================================
	*/
	(function() {

		var $mmSubEl = $('.navbar.tracem-initial-navbar li > .tracem-dropdown li');

		$mmSubEl.on('mouseenter', function() {
			if ($(window).width() > 767) {
				$(this).children('.tracem-dropdown-child').fadeIn('fast');
			}
		});
		$mmSubEl.on('mouseleave', function() {
			if ($(window).width() > 767) {
				$(this).children('.tracem-dropdown-child').fadeOut('fast');
			}
		});

	})();






	/*
	======================================
		Window On Load Init
	======================================
	*/
	(function() {

		jQuery(window).on('load', function() {


			/*
			======================================
				Isotop Init
			======================================
			*/
			jQuery('#portfolio-container').isotope({
			  // set itemSelector so .grid-sizer is not used in layout
			  itemSelector: '.grid-item',
			  percentPosition: true,
			  masonry: {
			    // use element for option
			    columnWidth: '.grid-sizer'
			  }
			});

			jQuery('#portfolio-sporadic').isotope({
			  // set itemSelector so .grid-sizer is not used in layout
				layoutMode: 'cellsByRow',
				itemSelector: '.grid-sporadic-item',
				percentPosition: true,
				cellsByRow: {
				    columnWidth: '.grid-sporadic-sizer',
				    rowHeight: '.grid-sporadic-sizer'
				}
			});


			jQuery('.single-banner-text.swiper-slide-active .banner-right h2').addClass('animation-loaded');
			jQuery('.single-banner-text.swiper-slide-active .banner-left h3').addClass('animation-loaded');
			jQuery('.single-banner-text.swiper-slide-active .banner-left h4').addClass('animation-loaded');
			jQuery('.single-banner-text.swiper-slide-active .banner-left .btn-generic a span').addClass('animation-loaded');
			jQuery('.single-banner-text.swiper-slide-active .banner-left .total-view').addClass('animation-loaded');
			jQuery('.single-banner-text.swiper-slide-active .banner-left .total-like').addClass('animation-loaded');
			jQuery('.single-banner-text.swiper-slide-active .banner-left .total-comment').addClass('animation-loaded');
			jQuery('.single-banner-text.swiper-slide-active .banner-left .portfolio-extra-info').addClass('animation-loaded');
			jQuery('.home-split .single-split-image.active .split-image h2').addClass('animation-loaded');
			jQuery('.home-split .single-split-text.active .split-text .btn-generic span').addClass('animation-loaded');
			jQuery('.home-split .single-split-text.active .split-text .title-cats h3').addClass('animation-loaded');
			jQuery('.home-split .single-split-text.active .split-text .title-cats h2').addClass('animation-loaded');
			jQuery('.home-split .single-split-text.active .split-text h4').addClass('animation-loaded');
			jQuery('.home-split .single-split-text.active .portfolio-social-area').addClass('animation-loaded');
			jQuery('.home-split .single-split-text.active .portfolio-extra-info').addClass('animation-loaded');
			jQuery('.home-split .single-split-text.active .portfolio-extra-info span').addClass('animation-loaded');
			jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-left h4').addClass('animation-loaded');
			jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-left .btn-simple').addClass('animation-loaded');
			jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-right h2').addClass('animation-loaded');
			jQuery('.showcase-container .single-showcase:nth-child(1)').addClass('animation-loaded');
			jQuery('.home-parallax .single-parallax:nth-child(1)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is-animation .grid-item:nth-child(1)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is-animation .grid-item:nth-child(2)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is-animation .grid-item:nth-child(3)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is-animation .grid-item:nth-child(4)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is-animation .grid-item:nth-child(5)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is-animation .grid-item:nth-child(6)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-centered .single-portfolio-centered:nth-child(1) .single-port-center-wrapper').addClass('animation-loaded');
			jQuery('.single-centered-carousel-content:nth-child(1)').addClass('animation-loaded');
			jQuery('.home-floating-area.is-animation').addClass('animation-loaded');
			jQuery('.gradient-portfolio .img-wrapper').addClass('animation-loaded');
			jQuery('.about-intro-area .about-intro.is_animation').addClass('animation-loaded');
			jQuery('.tracem-breadcrumb.is_animation').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is_animation .grid-sporadic-item:nth-child(2)').addClass('animation-loaded');
			jQuery('.tracem-portfolio-area.is_animation .grid-sporadic-item:nth-child(3)').addClass('animation-loaded');
			jQuery('.single-gallery-slide.swiper-slide-active').addClass('animation-loaded');
		});

	})();


	/*
	======================================
		Slinky Menu Init
	======================================
	*/
	(function() {

		const slinky = $('.tracem-mobile-menu .tracem-shrink').slinky();
		const Lslinky = $('.tracem-sidebar-menu-large .sidenav-large').slinky();

	})();


	/*
	======================================
		Menu Active Class Init
	======================================
	*/
	(function() {

       $(".tracem-navbar li a").each(function(){
       	var $path = $(location).attr('pathname'),
       		$pathname = $path.replace( '/tracem-html/', '' );
               if ($(this).attr("href") == $pathname){
                       $(this).addClass("active");
               }
       });

       $(".tracem-mobile-menu li ul li ul li a").each(function(){
       	var $path = $(location).attr('pathname'),
       		$pathname = $path.replace( '/tracem-html/', '' );

           if ($(this).attr("href") == $pathname){
                $(this).addClass("current");
           }
       });

       $(".tracem-sidebar-menu ul li a").each(function(){
       	var $path = $(location).attr('pathname'),
       		$pathname = $path.replace( '/tracem-html/', '' );

           if ($(this).attr("href") == $pathname){
                $(this).addClass("active");
           }
       });

	})();

	/*
	======================================
		Multiscroll Init
	======================================
	*/
	(function() {

		if( jQuery('.home-split').length ) {
			jQuery('.home-split').multiscroll({
				loopBottom: true,
				loopTop: true,
				navigation: true,

				afterLoad:function() {

					var $splitImgActiveEl = jQuery('.home-split .single-split-image.active .split-image h2'),
						$splitImgEl = jQuery('.home-split .single-split-image .split-image h2');
					if( ! $splitImgActiveEl.hasClass('animation-loaded') ) {
						$splitImgEl.removeClass('animation-loaded');
						$splitImgActiveEl.addClass('animation-loaded');
					}

					var $splitBtnActiveEl = jQuery('.home-split .single-split-text.active .split-text .btn-generic span'),
						$splitBtnEl = jQuery('.home-split .single-split-text .split-text .btn-generic span');
					if( ! $splitBtnActiveEl.hasClass('animation-loaded') ) {
						$splitBtnEl.removeClass('animation-loaded');
						$splitBtnActiveEl.addClass('animation-loaded');
					}

					var $splitTxtH3ActiveEl = jQuery('.home-split .single-split-text.active .split-text .title-cats h3'),
						$splitTxtH3El = jQuery('.home-split .single-split-text .split-text .title-cats h3');
					if( ! $splitTxtH3ActiveEl.hasClass('animation-loaded') ) {
						$splitTxtH3El.removeClass('animation-loaded');
						$splitTxtH3ActiveEl.addClass('animation-loaded');
					}

					var $splitTxtH2ActiveEl = jQuery('.home-split .single-split-text.active .split-text .title-cats h2'),
						$splitTxtH2El = jQuery('.home-split .single-split-text .split-text .title-cats h2');
					if( ! $splitTxtH2ActiveEl.hasClass('animation-loaded') ) {
						$splitTxtH2El.removeClass('animation-loaded');
						$splitTxtH2ActiveEl.addClass('animation-loaded');
					}

					var $splitTxtH4ActiveEl = jQuery('.home-split .single-split-text.active .split-text h4'),
						$splitTxtH4El = jQuery('.home-split .single-split-text .split-text h4');
					if( ! $splitTxtH4ActiveEl.hasClass('animation-loaded') ) {
						$splitTxtH4El.removeClass('animation-loaded');
						$splitTxtH4ActiveEl.addClass('animation-loaded');
					}

					var $splitSocialActiveEl = jQuery('.home-split .single-split-text.active .portfolio-social-area'),
						$splitSocialEl = jQuery('.home-split .single-split-text .portfolio-social-area');
					if( ! $splitSocialActiveEl.hasClass('animation-loaded') ) {
						$splitSocialEl.removeClass('animation-loaded');
						$splitSocialActiveEl.addClass('animation-loaded');
					}

					var $splitPfeActiveEl = jQuery('.home-split .single-split-text.active .portfolio-extra-info'),
						$splitPfeEl = jQuery('.home-split .single-split-text .portfolio-extra-info');
					if( ! $splitPfeActiveEl.hasClass('animation-loaded') ) {
						$splitPfeEl.removeClass('animation-loaded');
						$splitPfeActiveEl.addClass('animation-loaded');
					}

					var $splitPfeSpanActiveEl = jQuery('.home-split .single-split-text.active .portfolio-extra-info span'),
						$splitPfeSpanEl = jQuery('.home-split .single-split-text .portfolio-extra-info span');
					if( ! $splitPfeSpanActiveEl.hasClass('animation-loaded') ) {
						$splitPfeSpanEl.removeClass('animation-loaded');
						$splitPfeSpanActiveEl.addClass('animation-loaded');
					}
					
				}
			});
		}

	})();




	/*
	======================================
		Preloader Init
	======================================
	*/
	(function() {
		$(window).on('load', function() {
			$('.tracem-centered-box').delay(300).fadeOut('slow');
		});
	})();




	/*
	======================================
		Scroll Init
	======================================
	*/
	(function() {

		$(window).on('scroll', function() {
			/*
			======================================
				ScrollTop Visibility Init
			======================================
			*/
			var $scrollTop 	= jQuery(window).scrollTop();
			var $top 		= jQuery('#top');
			
			if( $scrollTop > 500 ) {
				$top.fadeIn(500);
			} else {
				$top.fadeOut(500);
			}

		});
	})();




	/*
	======================================
		ScrollTop Init
	======================================
	*/
	(function() {
		$('#top').on('click', function(){
			$('html, body').animate({'scrollTop': '0px'}, 3000, "easeInOutExpo");
			return false;
		});
	})();

	/*
	======================================
		Home Fullwidth Slider
	======================================
	*/
	(function() {
	    var tFullSliderEl = new Swiper('.home-fullwidth-slider', {
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
	    });

		tFullSliderEl.on( 'transitionStart', function() {

			var $fullLeftH4Ael	= jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-left h4'),
			$fullLeftH4El		= jQuery('.single-fullwidth-slide .fullwidth-left h4');

			if( ! $fullLeftH4Ael.hasClass('animation-loaded') ) {
				jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-left h4', function() {
					$fullLeftH4El.removeClass('animation-loaded');
					$fullLeftH4Ael.addClass('animation-loaded');
				});
			}

			var $fullLeftAncAel	= jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-left .btn-simple'),
			$fullLeftAncEl		= jQuery('.single-fullwidth-slide .fullwidth-left .btn-simple');

			if( ! $fullLeftAncAel.hasClass('animation-loaded') ) {
				jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-left .btn-simple', function() {
					$fullLeftAncEl.removeClass('animation-loaded');
					$fullLeftAncAel.addClass('animation-loaded');
				});
			}

			var $fullRightH2Ael	= jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-right h2'),
			$fullRightH2El		= jQuery('.single-fullwidth-slide .fullwidth-right h2');

			if( ! $fullRightH2Ael.hasClass('animation-loaded') ) {
				jQuery('.single-fullwidth-slide.swiper-slide-active .fullwidth-right h2', function() {
					$fullRightH2El.removeClass('animation-loaded');
					$fullRightH2Ael.addClass('animation-loaded');
				});
			}


		});

	})();





	/*
	======================================
		ScrollTop Init
	======================================
	*/
	(function() {
		var $tracemSidenav = $('#tracem-sidenav');
		if( $tracemSidenav.length ) {
			var tracemSidenav = $('#tracem-sidenav').slideMenu({
			    position: 'left',
			    submenuLinkAfter: ' <span class="linkafter">...</span>',
			    backLinkBefore: '<span class="linkbefore">...</span> '
			});
		}
	})();



	/*
	======================================
		Header Fixed Init
	======================================
	*/
	(function() {
		// $('.craste-sidebar-menu nav li:first-child >a').addClass('active');

		var scrollTimeOut,
		    lastYPos = 0,
		    yPos = 0,
		    yPosDelta = 5,
		    nav = $('.one-page-nav'),
		    navHeight = nav.outerHeight(),
		    setNavClass = function() {
		        scrollTimeOut = false;
		        yPos = $(window).scrollTop();

		        if(Math.abs(lastYPos - yPos) >= yPosDelta) {
		            if (yPos > lastYPos && yPos > navHeight){
		                nav.addClass('nav-up');
		            } else {
		                nav.removeClass('nav-up');
		            }
		            lastYPos = yPos;
		        }
		    };


		$(window).on('scroll', function(e){

			scrollTimeOut = true;


			/*
			======================================
				Active Class On Scroll
			======================================
			*/
		    var position = $(this).scrollTop();

		    $('section').each(function() {
		        var target = $(this).offset().top - 10;
		        var id = $(this).attr('id');

		        if (position >= target) {
		            $('.one-page-nav li > a').removeClass('active');
		            $('.one-page-nav li > a[href="#' + id + '"]').addClass('active');
		        }
		    });
		});


		setInterval(function() {
		    if (scrollTimeOut) {
		        setNavClass();
		    }

		}, 250);

	})();


	/*
	======================================
		On Scroll Animation
	======================================
	*/
    (function() {

		function isScrolledIntoView(elem)
		{
		    var docViewTop = $(window).scrollTop();
		    var docViewBottom = docViewTop + $(window).height();

		    var elemTop = $(elem).offset().top;
		    var elemBottom = elemTop + $(elem).height();

		    return (docViewBottom >= elemTop && docViewTop <= elemBottom);
		}

		$(window).on("scroll", function() {
			/*
			======================================
				Home Showcase Animation
			======================================
			*/
		    $('.single-showcase').each(function() {
		        if (isScrolledIntoView(this)) {
		            $(this).addClass('animation-loaded');
		        }
		    });

			/*
			======================================
				Home Parallax Animation
			======================================
			*/
		    $('.single-parallax').each(function() {
		        if (isScrolledIntoView(this)) {
		            $(this).addClass('animation-loaded');
		        }
		    });

			/*
			======================================
				Home Masonry Animation
			======================================
			*/
		    $('.tracem-portfolio-area.is-animation .grid-item').each(function() {
		        if (isScrolledIntoView(this)) {
		            $(this).addClass('');
		        }
		    });

			/*
			======================================
				Home Centered Animation
			======================================
			*/
		    $('.tracem-portfolio-centered .single-port-center-wrapper').each(function() {
		        if (isScrolledIntoView(this)) {
		            $(this).addClass('animation-loaded');
		        }
		    });

			/*
			======================================
				Home Sporadic Animation
			======================================
			*/
		    $('.tracem-portfolio-area.is_animation .grid-sporadic-item').each(function() {
		        if (isScrolledIntoView(this)) {
		            $(this).addClass('animation-loaded');
		        }
		    });

		});

        
    })();



	/*
	======================================
		Home Centered Carousel
	======================================
	*/
	(function() {
		var tCenCarousel = new Swiper('.tracem-centered-carousel', {
			slidesPerView: 'auto',
	      	spaceBetween: 30,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				hide: false,
			},
		});

		tCenCarousel.on( 'transitionStart', function() {

			if( $('.single-centered-carousel-content').hasClass('swiper-slide-active') ) {
				$('.single-centered-carousel-content').removeClass('animation-loaded');
				$('.single-centered-carousel-content.swiper-slide-active').addClass('animation-loaded');
			}
		});
    })();



	/*
	======================================
		Home Centered Image Carousel
	======================================
	*/
	(function() {
		var tCenImgCarousel = new Swiper('.tracem-centered-img-carousel', {
			slidesPerView: 3,
			spaceBetween: 0,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">0' + (index + 1) + '</span>';
				},
			},
		});

    })();




	/*
	======================================
		Gradient Background Init
	======================================
	*/
	(function() {
		if( $('#gradient-bg').length ) {
			var granimInstance = new Granim({
			   element: '#gradient-bg',
			   name: 'granim',
			   opacity: [1, 1],
			   states : {
			       "default-state": {
			           gradients: [
			               ['#FF5F6D', '#FFC371'],
			               ['#EECDA3', '#EF629F'],
			               ['#4DA0B0', '#D39D38'],
			               ['#F1F2B5', '#135058']
			           ]
			       }
			   }
			});
		}

		if( $('#menu-gradient').length ) {
			var MgranimInstance = new Granim({
			   element: '#menu-gradient',
			   name: 'granim',
			   opacity: [1, 1],
			   states : {
			       "default-state": {
			           gradients: [
			               ['#FF5F6D', '#FFC371'],
			               ['#EECDA3', '#EF629F'],
			               ['#4DA0B0', '#D39D38'],
			               ['#F1F2B5', '#135058']
			           ]
			       }
			   }
			});
		}
    })();



	/*
	======================================
		Home Link Init
	======================================
	*/

	(function() {
		function previewImages() {

		  var xOffset = 150;
		  var yOffset = 80;

		  $("a.screenshot").hover(function(e) {

		      
		      $("body").append("<div id='previewImage'><div class='tracem-ovh'><img src='" + this.href + "' alt='Portfolio Image' />" + "</div></div>");

		      $("#previewImage")
		        .css("top", (e.pageY - xOffset) + "px")
		        .css("left", (e.pageX + yOffset) + "px")
		    },
		    function() {

		      $("#previewImage").remove();
		    });

		  $("a.screenshot").mousemove(function(e) {
		    
		    $("#previewImage")
		      .css("top", (e.pageY - xOffset) + "px")
		      .css("left", (e.pageX + yOffset) + "px");
		    
		  });
		};

		previewImages();

	})();




	/*
	======================================
		Counter Up INIT
	======================================
	*/
	(function() {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 1500
        });
	})();


	/*
	======================================
		Comming Soon
	======================================
	*/
	(function() {
		var endDate = "December  27, 2018 15:03:25";
		jQuery('.countdown.simple').countdown({ date: endDate });
		jQuery('.countdown.styled').countdown({
		  date: endDate,
		  render: function (data) {
			jQuery(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
		  }
		});
		jQuery('.countdown.callback').countdown({
		  date: +(new Date) + 10000,
		  render: function (data) {
			jQuery(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
		  },
		  onEnd: function () {
			jQuery(this.el).addClass('ended');
		  }
		}).on("click", function () {
		  jQuery(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
		});
	})();



	/*
	======================================
		theiaStickySidebar Init
	======================================
	*/
	(function() {
	    jQuery('.single-portfolio-one .col').theiaStickySidebar();
	    jQuery('.tracem-blog-area .sticky').theiaStickySidebar();
	})();




	/*
	======================================
		Single Portfolio Slide Show
	======================================
	*/
	(function() {
		var tSinPortSlide = new Swiper('.single-portfolio-three .portfolio-img', {
	      spaceBetween: 30,
	      pagination: {
	        clickable: true,
	      },
		});

		var tSinPortSlide2 = new Swiper('.single-portfolio-five .portfolio-img', {
	      spaceBetween: 30,
	      pagination: {
	        clickable: true,
	      },
		});

    })();



	/*
	======================================
		Gallery Post Format Slide
	======================================
	*/
	(function() {
	    var tGaleryPostSlide = new Swiper('.gallery-post-container', {
	    	loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
	    });

		tGaleryPostSlide.on( 'transitionStart', function() {

			if( $('.single-gallery-slide').hasClass('swiper-slide-active') ) {
				$('.single-gallery-slide').removeClass('animation-loaded');
				$('.single-gallery-slide.swiper-slide-active').addClass('animation-loaded');
			}
		});
    })();


	/*
	======================================
		Bootstrap Tooltip
	======================================
	*/
	(function() {
    	$('[data-toggle="tooltip"]').tooltip();
    })();



	/*
	======================================
		Pie Chart
	======================================
	*/
	(function() {
		if( $('.chart-1').length ) {
		    var element = document.querySelector('.chart-1-1');
		    new EasyPieChart(element, {
		        scaleColor: false,
		         size: 140,
		    });
		    var element = document.querySelector('.chart-1-2');
		    new EasyPieChart(element, {
		        scaleColor:false,
		         size: 140,
		    });
		    var element = document.querySelector('.chart-1-3');
		    new EasyPieChart(element, {
		        scaleColor:false,
		         size: 140,
		    });
		    var element = document.querySelector('.chart-1-4');
		    new EasyPieChart(element, {
		        scaleColor:false,
		         size: 140,
		    });
		}

		if( $('.chart-2').length ) {
		    var element = document.querySelector('.chart-2-1');
		    new EasyPieChart(element, {
		        scaleColor: false,
		         size: 140,
		    });
		    var element = document.querySelector('.chart-2-2');
		    new EasyPieChart(element, {
		        scaleColor:false,
		         size: 140,
		    });
		    var element = document.querySelector('.chart-2-3');
		    new EasyPieChart(element, {
		        scaleColor:false,
		         size: 140,
		    });
		    var element = document.querySelector('.chart-2-4');
		    new EasyPieChart(element, {
		        scaleColor:false,
		         size: 140,
		    });
		}

    })();


	/*
	======================================
		Progress Bar INIT
	======================================
	*/
	(function() {
		// progressbar.js@1.0.0 version is used
		// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

		function tracem_progress_bar_line_init( $string, $val, $color ) {
			if( $($string).length ) {
				var $string = new ProgressBar.Line($string, {
					strokeWidth: 5,
					easing: 'easeInOut',
					duration: 1400,
					color: $color,
					trailColor: 'transparent',
					trailWidth: 5,
					svgStyle: {width: $val + '%', height: '100%'},
					text: {
					style: {
						// Text color.
						// Default: same as stroke color (options.color)
						color: '#999',
						position: 'absolute',
						right: '0',
						top: '5px',
						padding: 0,
						margin: 0,
						transform: null
					},
						autoStyleContainer: false
					},
					step: function(state, $string) {
						$string.setText(Math.round($string.value() * $val) + ' %');
					}
				});
				$string.animate(1.0);  // Number from 0.0 to 1.0
			}
		}

		tracem_progress_bar_line_init( '.tracem-progress-bar-1-1', 90, '#1a1a1a' );
		tracem_progress_bar_line_init( '.tracem-progress-bar-1-2', 80, '#1a1a1a' );
		tracem_progress_bar_line_init( '.tracem-progress-bar-1-3', 85, '#1a1a1a' );
		tracem_progress_bar_line_init( '.tracem-progress-bar-1-4', 94, '#1a1a1a' );


		tracem_progress_bar_line_init( '.tracem-progress-bar-2-1', 90, '#FF6464' );
		tracem_progress_bar_line_init( '.tracem-progress-bar-2-2', 80, '#FF6464' );
		tracem_progress_bar_line_init( '.tracem-progress-bar-2-3', 85, '#FF6464' );
		tracem_progress_bar_line_init( '.tracem-progress-bar-2-4', 94, '#FF6464' );

    })();


	/*
	======================================
		One Page Init
	======================================
	*/
	(function() {
		var $root = $('html, body');
		$('.one-page-nav a[href^="#"]').on('click', function () {
		    $root.animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 1500, "easeInOutExpo");

		    return false;
		});

	})();



})(jQuery);