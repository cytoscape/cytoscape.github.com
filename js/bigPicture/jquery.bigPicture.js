/**
 * BIG PICTURE
 * Unobtrusive jQuery plugin to display images in a modal window including full
 * description.
 * 
 * @version 1.0b1
 * @author Jorge Tite
 * @copyright &copy; 2009 Jorge Tite
 * 
 * 
 * TERMS OF USE
 * This work is licensed under a Creative Commons Attribution-Share Alike 3.0 
 * United States License. 
 * http://creativecommons.org/licenses/by-sa/3.0/us/
 * 
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice, 
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to 
 * endorse or promote products derived from this software without specific prior 
 * written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE. 
 * 
 */


(function($) {
	// define plugin namespace
	$.jquery = $.jquery || {};
	$.jquery.ux = $.jquery.ux || {};
	$.jquery.ux.ui = $.jquery.ux.ui || {};
	
	
	$.jquery.ux.ui.BPHelper = function() {
		return {
			AUTO_ID: 1001,
			
			galleries: {},
			
			isBoxRendered: function() {
				return $('#bp').size() > 0 ? true: false;
			},
			
			isBoxVisible: function() {
				return $('#bp > .bp-wrap').is(':visible');
			},
			
			renderBox: function() {
				if ( $.jquery.ux.ui.BPHelper.isBoxRendered() ) {
					return;
				}
				
				// create main elements
				var sbox = document.createElement('div');	// container
				var mask = document.createElement('div');	// overlay mask
				var wrap = document.createElement('div');	// box wrapper
				var main = document.createElement('div');	// main box
				var view = document.createElement('div');	// view port
				var bbar = document.createElement('div');	// bottom bar
				
				// render bottom bar
				$(bbar).addClass('bp-bbar')
				.append('<div class="bp-hide-link"><a href="#"><span>Close</span></a></div>')
				.append('<div class="bp-info-link"><a href="#"><span>Image info</span></a></div>')
				.append('<div class="bp-clear"></div>');
				
				// render view port
				$(view).addClass('bp-view')
				.css({'margin': 0})
				.append('<div class="bp-nav bp-prev-link"><a href="#"><span>Prev</span></a></div>')
				.append('<div class="bp-nav bp-next-link"><a href="#"><span>Next</span></a></div>')
				.append('<div class="bp-info-wrap"><div class="bp-info"></div></div>');
				
				// render main box
				$(main).addClass('bp-main')
				.css({'margin-left': 'auto', 'margin-right': 'auto'})			// center box horizontally
				.append(view)
				.append(bbar);
				
				// render box wrapper
				$(wrap).addClass('bp-wrap')
				.append(main);
				
				// render mask
				$(mask).addClass('bp-mask');
				
				// render container
				$(sbox).attr('id', 'bp')
				.append(mask)
				.append(wrap)
				.appendTo('body');
				
				/* 
				 * apply global events
				 */
				
				// window resize event
				$(window).resize(function(e) {
					if ( $.jquery.ux.ui.BPHelper.isBoxVisible() ) {
						$.jquery.ux.ui.BPHelper.onWindowResize();
					}
				});
				
				// click event for wrapper (hide main box)
				$(mask).click(function(e) {
					$.jquery.ux.ui.BPHelper.hideBox();
				});
				
				// click event for wrapper (hide main box)
				$(wrap).click(function(e) {
					$.jquery.ux.ui.BPHelper.hideBox();
				});
				
				// click event for main box (prevent close)
				$(main).click(function(e) {
					e.preventDefault();
					return false;
				});
				
				// click event for hide link
				$('.bp-hide-link', bbar).click(function(e) {
					e.preventDefault();
					$.jquery.ux.ui.BPHelper.hideBox();
				});
			},
			
			showBox: function() {
				// position main box
				$.jquery.ux.ui.BPHelper.onWindowResize();
				
				// show box elements
				$('#bp .bp-mask').show();
				$('#bp .bp-wrap').show();
			},
			
			hideBox: function() {
				$.jquery.ux.ui.BPHelper.resetBox();
				
				// hide box elements
				$('#bp .bp-wrap').fadeOut('fast', function() {
					$('#bp .bp-mask').hide();
				});
			},
			
			resetBox: function() {
				$('#bp .bp-bbar').stop().hide();
				$('#bp .bp-info-wrap').stop().hide().css({'marginTop': 0});
				$('#bp .bp-info-link > a').removeClass('active');
				$('#bp .bp-view > img').remove();
			},
			
			onWindowResize: function() {
				var ds = $.jquery.ux.ui.BPHelper.getDimensions();
				var ps = $.jquery.ux.ui.BPHelper.getPageScroll();
				
				$('#bp .bp-mask').width(ds.pageWidth)
				.height(ds.pageHeight);

				$('#bp .bp-wrap').css({
					'left': 0, 
					'top': ps.y + (ds.windowHeight * 0.08)
				});
			},
			
			getDimensions: function() {
				var dims = {};
				var dbw, dbh;
				
				if (window.innerHeight && window.scrollMaxY) {	
					dbw = window.innerWidth + window.scrollMaxX;
					dbh = window.innerHeight + window.scrollMaxY;
				} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
					dbw = document.body.scrollWidth;
					dbh = document.body.scrollHeight;
				} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
					dbw = document.body.offsetWidth;
					dbh = document.body.offsetHeight;
				}
				
				if (self.innerHeight) {	// all except Explorer
					if(document.documentElement.clientWidth){
						dims.windowWidth = document.documentElement.clientWidth; 
					} else {
						dims.windowWidth = self.innerWidth;
					}
					dims.windowHeight = self.innerHeight;
				} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
					dims.windowWidth = document.documentElement.clientWidth;
					dims.windowHeight = document.documentElement.clientHeight;
				} else if (document.body) { // other Explorers
					dims.windowWidth = document.body.clientWidth;
					dims.windowHeight = document.body.clientHeight;
				}
				
				dims.pageHeight = Math.max(dbh, dims.windowHeight);
				dims.pageWidth = Math.max(dbw, dims.windowWidth);
				
				return dims;
			},
				
			getPageScroll: function() {
				var scroll = {};
				
				if (self.pageYOffset) {
					scroll.y = self.pageYOffset;
					scroll.x = self.pageXOffset;
				} else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
					scroll.y = document.documentElement.scrollTop;
					scroll.x = document.documentElement.scrollLeft;
				} else if (document.body) {// all other Explorers
					scroll.y = document.body.scrollTop;
					scroll.x = document.body.scrollLeft;	
				}
				
				return scroll;
			}
		};
	}();
	
	$.jquery.ux.ui.BigPicture = function(el, conf) {
		// instance properties
		this.images = [];		// images array
		this.index = 0;			// current image index
		this.gallery = '';		// gallery name
		this.offset = false;	// border and padding offset
		
		// apply default options
		conf = $.extend({
			'cls': '',						// An optional class applied to the main container
			'prevLabel': 'Prev',			// Prev link label
			'nextLabel': 'Next',			// Next link label
			'infoLabel': 'Image info',		// Info link label
			'hideLabel': 'Close',			// Hide link label
			'boxEaseFn': '',				// Box resize ease function (i.e easeInOutExpo)
			'boxEaseSpeed': 750,			// Box resize effect speed
			'enableInfo': false,			// Enable image info link (show/hide)
			'infoPosition': 'bottom',		// Info box position (top|bottom)
			'infoEaseFn': '',				// Ease function for show/hide image info container (i.e easeInOutExpo)
			'infoEaseSpeed': 500			// Info box effect speed
		}, conf);
		
		// automatically assign an ID if the element has no ID
		if ( !$(el).attr('id') ) {
			$(el).attr('id', 'bigPicture-' + $.jquery.ux.ui.BPHelper.AUTO_ID++);
		}
		
		// init gallery cache (only if not exists)
		this.gallery = $(el).attr('rel');
		if ( this.gallery && !$.jquery.ux.ui.BPHelper.galleries[this.gallery] ) {
			$.jquery.ux.ui.BPHelper.galleries[this.gallery] = $("a[rel='" + this.gallery + "']").get();
		}
		
		
		this.launchBox = function() {
			// images array lazy initialization 
			if ( this.images.length == 0 ) {
				if ( this.gallery ) {
					this.images = $.jquery.ux.ui.BPHelper.galleries[this.gallery];
				}
				else {
					this.images.push(el);
				}
			}
			
			// sets current image index
			this.index = 0;
			for (var i = 0; i < this.images.length; i++) {
				if ( this.images[i].id == el.id ) {
					this.index = i;
					break;
				}
			}
			
			// load and display image
			this.show();
		};
		
		this.show = function() {
			// render box if needed
			$.jquery.ux.ui.BPHelper.renderBox();
			
			// set extra class
			$('#bp').removeClass().addClass(conf.cls);
			
			// set box instance labels
			$('#bp .bp-prev-link > a > span').html(conf.prevLabel);
			$('#bp .bp-next-link > a > span').html(conf.nextLabel);
			$('#bp .bp-info-link > a > span').html(conf.infoLabel);
			$('#bp .bp-hide-link > a > span').html(conf.hideLabel);
			
			/*
			 * set box instance events
			 */
			var sbox = this;
			
			// viewport event (show navigation links on mouse enter)
			$('#bp .bp-view').unbind('mouseenter.bp')
			.unbind('mouseleave.bp')
			.bind('mouseenter.bp', function() {
				sbox.toggleNavigation(true);
			})
			.bind('mouseleave.bp', function() {
				sbox.toggleNavigation(false);
			});
			
			// navigation links event (show next/prev image)
			$('#bp .bp-prev-link > a').unbind('click.bp')
			.bind('click.bp', function(e) {
				e.preventDefault();
				sbox.back();
			});
			
			$('#bp .bp-next-link > a').unbind('click.bp')
			.bind('click.bp', function(e) {
				e.preventDefault();
				sbox.next();
			});
			
			// image info link event (show/hide image details)
			if ( conf.enableInfo ) {
				$('#bp .bp-info-link').show();
				
				$('#bp .bp-info-link > a').unbind('click.bp')
				.bind('click.bp', function(e) {
					e.preventDefault();
					sbox.toggleInfo(this);
				});
			}
			else {
				$('#bp .bp-info-link').hide();
			}
			
			// reset box dimensions
			$('#bp .bp-main').width(64).height(64);
			
			// show box and load current image
			if ( !$.jquery.ux.ui.BPHelper.isBoxVisible() ) {
				$.jquery.ux.ui.BPHelper.showBox();
			}
			this.load();
		};
		
		this.hide = function() {
			$.jquery.ux.ui.BPHelper.hideBox();
		};
		
		this.reset = function() {
			$.jquery.ux.ui.BPHelper.resetBox();
		};
		
		this.load = function() {
			// stop box animations and hide elements
			this.reset();
			
			// show loading image
			$('#bp .bp-main').addClass('loading');
			
			// calculate border and padding offset
			this.calculateOffset();
			
			// load current image
			var box = this;
			var img = new Image();
			
			$(img).load(function() {
				$('#bp .bp-main').animate({'width': img.width + box.offset.x, 'height': img.height + box.offset.y}, conf.boxEaseSpeed, conf.boxEaseFn, function() {
					box.onLoad(img);
				});
			})
			.error(function() {
				box.hide();
				alert('There was an error loading the image');
			})
			.attr('src', $(this.images[this.index]).attr('href'));
		};
		
		this.onLoad = function(img) {
			// builds image details
			if ( conf.enableInfo ) {
				var title = $(this.images[this.index]).attr('title');
				var divId = $(this.images[this.index]).attr('name');
				var count = this.images.length;
				var $wrap = $('#bp .bp-info-wrap');
				var txt = '';
				
				if ( count > 1 ) {
					txt += '<div class="bp-count">Image ' + (this.index + 1) + ' of ' + count + '</div>'; 
				}
				txt += title ? '<h2>' + title + '</h2>': '';
				
				$('#bp .bp-info').html( txt )
				.append( $('#' + divId).contents().clone(true) );
				
				/*
				 * FIX: temp fix for enabling link defualt click action
				 * TODO: find the cause of the bug
				 */
				$('#bp .bp-info a').click(function(e) {
					var href = $(this).attr('href');
					if ( href && href.charAt(0) != '#') {
						document.location = href;
					}
				});
				
				var y = conf.infoPosition == 'top' ? (-1 * $wrap.outerHeight()): img.height;
				$wrap.css({'top':  y});
			}
			
			// display image
			$('#bp .bp-main').removeClass('loading');
			$('#bp .bp-info-wrap').before(img);
			
			// set viewport dimensions
			$('#bp .bp-view').width(img.width)
			.height(img.height)
			.fadeIn('normal');
			
			// set navigation links dimensions
			$('#bp .bp-nav > a').width( Math.floor(img.width / 2) )
			.height(img.height);
			
			// show bottom bar
			var bh = img.height + this.offset.y + $('#bp .bp-bbar').outerHeight();
			$('#bp .bp-bbar').show();
			$('#bp .bp-main').animate({'height': bh}, 350);
			
			$(img).click().focus();
		};
		
		this.toggleInfo = function(link) {
			if ( !conf.enableInfo ) {
				return;
			}
			
			var h = $('#bp .bp-info-wrap').outerHeight();
			var b = conf.infoPosition == 'top' ? 0: $('#bp .bp-view > img').height();
			var hide = false;
			
			if ( $(link).hasClass('active') ) {
				$(link).removeClass('active');
				h = conf.infoPosition == 'top' ? h: 0;
				hide = true;
			}
			else {
				$(link).addClass('active');
				h = conf.infoPosition == 'top' ? 0: h;
			}
			$('#bp .bp-info-wrap').show()
			.animate({'top': b - h}, conf.infoEaseSpeed, conf.infoEaseFn, function() {
				if ( hide ) {
					$('#bp .bp-info-wrap').hide();
				}	
			});
		};
		
		this.toggleNavigation = function(show) {
			if (show == true && this.images.length > 1) {
				$('#bp .bp-nav').fadeIn(250);
			}
			else {
				$('#bp .bp-nav').hide();
			}
			return false;
		};
		
		this.back = function() {
			this.index--;
			if ( this.index < 0 ) {
				this.index = this.images.length - 1;
			}
			this.load();
		};
		
		this.next = function() {
			this.index++;
			if ( this.index == this.images.length ) {
				this.index = 0;
			}
			this.load();
		};
				
		this.calculateOffset = function() {
			if (this.offset) {
				return;
			}
			
			var $view = $('#bp .bp-view');
			
			this.offset = {x: 0, y: 0};
			this.offset.x = $view.outerWidth() -  $view.width();
			this.offset.y = $view.outerHeight() -  $view.height();
		};
	};
	
	$.fn.bigPicture = function(p) {
		return this.each( function() {
			if ( this.bigPicture instanceof $.jquery.ux.ui.BigPicture) {
				return this;
			}
			
			var box = new $.jquery.ux.ui.BigPicture(this, p);
			$(this).click(function(e) {
				e.preventDefault();
				box.launchBox();
			});
			
			this.bigPicture = box;
			return this;			
		});
	};
})(jQuery);