(function($) {
	'use strict';
	$(function() {
		$('.owl-carousel-projects').owlCarousel({
			loop: true,
			stagePadding: 100,
			margin: 20,
			nav: false,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		})
		var wWidth = $(window).width();
		var menuWidth = $(".navbar-collapse").width();
		$(".navbar-toggler").click(function() {
			$('.collapsing').toggleClass('show');
			$('body').addClass("sidebar-overlay");
		});
		$("#mobile-menu-overlay, .close-menu, .nav-link").click(function() {
			$('.collapse').toggleClass('show');
			$('body').removeClass("sidebar-overlay");
		});

		$("a.nav-link").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function() {

					window.location.hash = hash;
				});
			}
		});

		AOS.init({
			offset: 0,
			duration: 800,
			easing: 'ease-in-quad',
			delay: 100,
		});

		$("#testimonial-flipster").flipster({
			style: 'coverflow',
			spacing: -.9,
			nav: false,
			loop: true,
			buttons: false,
		});

		$('.flipster-custom-nav-link').click(function() {
			var navlinkSelected = parseInt(this.title);
			$('.flipster-custom-nav-link').removeClass("active");
			$(this).addClass("active");
			$("#testimonial-flipster").flipster('jump', navlinkSelected);
		});

		$('#toggle-switch').click(function() {
			if ($('#toggle-switch').is(':checked')) {
				$('.monthly').addClass("text-active");
				$('.yearly').removeClass("text-active");
				$("#toggle-switch").attr("checked", "checked");
			} else {
				$('.monthly').removeClass("text-active");
				$('.yearly').addClass("text-active");
				$("#toggle-switch").removeAttr("checked");
			}
		});

		// counter Satisfied clients
		var maxScVal = 100;
		var isc = parseInt($('.scVal').text());
		var tim;
		function run() {
			tim = setInterval(function() {
				if (isc >= maxScVal) {
					clearInterval(tim);
					return;
				}
				$('.scVal').text(++isc);
			}, 50);
		}
		run();
		//Counters

		// counter finished Projects
		var maxfPVal = 15;
		var ifP = parseInt($('.fpVal').text());
		var timfP;
		function runfP() {
			timfP = setInterval(function() {

				if (ifP >= maxfPVal) {
					clearInterval(timfP);
					return;
				}
				$('.fpVal').text(++ifP);

			}, 600);
		}
		runfP();
		//finished Projects

		//counter Team Members
		var maxtMVal = 125;
		var itm = parseInt($('.tMVal').text());
		var timtM;
		function runtM() {
			timtM = setInterval(function() {
				if (itm >= maxtMVal) {
					clearInterval(timtM);
					return;
				}
				$('.tMVal').text(++itm);
			}, 100);
		}
		runtM();
		//Team Members

		//counter blog post
		var maxbPVal = 2135;
		var ibP = parseInt($('.bPVal').text());
		var timbP;
		function runbP() {
			timbP = setInterval(function() {
				if (ibP >= maxbPVal) {
					clearInterval(timbP);
					return;
				}
				$('.bPVal').text(++ibP);

			}, 1);
		}
		runbP();
		//blog post

	});
})(jQuery);

// Rotating Text
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1500;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};