/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // FitVids init
  $("#main").fitVids();

  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
  } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  var AnimateHeader = function() {
    var sy = window.pageYOffset || document.documentElement.scrollTop;
    if (sy >= 50) {
        $(".masthead").addClass("short");
        $(".site-logo").fadeOut(500);
        $(".site-subtitle").fadeOut(500);
      } else {
        $(".masthead").removeClass("short");
        $(".site-logo").fadeIn(500);
        $(".site-subtitle").fadeIn(500);
    }
  }

  stickySideBar();
  AnimateHeader();

  $(window).resize(function() {
    stickySideBar();
  });

  $(window).scroll(function() {
    AnimateHeader();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });

  // when clicking on a dropdown navbar menu, show the child links
  $(".masthead__menu-item").on("click", ".item-link", function() {
    if ($(this).hasClass("dropdown")) {
      $(this).next().toggleClass("is--visible");
    }
  });

  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });

  // TODO: 각주 스크롤 수정 필요
  // // Smooth scrolling
  // var scroll = new SmoothScroll('a[href*="#"]', {
  //   offset: 20,
  //   speed: 400,
  //   speedAsDuration: true,
  //   durationMax: 500
  // });

  // Gumshoe scroll spy init
  if($("nav.toc").length > 0) {
    var spy = new Gumshoe("nav.toc a", {
      // Active classes
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content

      // Nested navigation
      nested: false, // if true, add classes to parents of active link
      nestedClass: "active", // applied to the parent items

      // Offset & reflow
      offset: 70, //20, // how far from the top of the page to activate a content area
      reflow: true, // if true, listen for reflows

      // Event support
      events: true // if true, emit custom events
    });
  }

  // add lightbox class to all image links
  $(
    "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']"
  ).addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Add anchors for headings
  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function() {
    var id = $(this).attr('id');
    if (id) {
      var anchor = document.createElement("a");
      anchor.className = 'header-link';
      anchor.href = '#' + id;
      anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fa fa-link\"></i>';
      anchor.title = "Permalink";
      $(this).append(anchor);
    }
  });
});


// Adjust anchor offset
(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    HEADER_MAGIN: 20,
    OFFSET_HEIGHT_PX: 75,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getHeaderOffset: function() {
      if (document.getElementsByClassName('masthead short').length==0) {
        document.getElementsByClassName('site-subtitle')[0].style.display="none";
      }

      //return this.OFFSET_HEIGHT_PX;
      //return document.getElementsByClassName('masthead')[0].offsetHeight + this.HEADER_MAGIN;
      style = window.getComputedStyle(document.getElementsByClassName('site-title')[0]);
      return parseInt(style.marginTop) + parseInt(style.marginBottom) + parseInt(style.height) + this.HEADER_MAGIN;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      href = decodeURI(href);
      var match, rect, anchorOffset;
      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));
      if(match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getHeaderOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function() {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var t = e.target;
      if(t.nodeName == 'A' ||
        (t.nodeName == 'svg' && (t=t.parentNode) && t.nodeName  == 'A') ||
        (t.nodeName == 'path' && (t=t.parentNode.parentNode) && t.nodeName  == 'A')) {
        if (this.scrollIfAnchor(t.getAttribute('href'), true)) {
          e.preventDefault();
        }
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);