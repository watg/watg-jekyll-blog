blogCore = {}


// OK - because of the whole static site thing - this js is not really useful, as it only triggers when the page is first
// loaded and not after that as you navigate around the site
//  as such, it needs to be slightly re-thought

$( document ).ready(function() {
  blogCore.correctNavLinks()
  blogCore.correctNavImages()
  blogCore.hideNavItems()
  blogCore.correctFooterLinks()
});

// --------------------  Nav Bar Starts --------------------------------

blogCore.correctNavLinks = function() {
  // This corrects all the local URLs within the nav to ensure it links back to the site
  var anchors = $('#site-header').find('a')
  anchors.each(function() {
    var link = $(this).attr('href');
    $(this).attr("href", "//www.woolandthegang.com" + link)
  });
}

blogCore.correctNavImages = function() {
  var logo = $('#site-header').find('.logo')
  logo.attr("src", "//www.woolandthegang.com/assets/logo-watg-135x99-0559bf40004567368a1b80fdf79e96b9.png")
}

blogCore.hideNavItems = function(){
  var header = $('#site-header')
  // hide search
  header.find('.search-form').css("display", "none")
  // hide cart
  header.find('#link-to-cart').css("display", "none")
  // hide login into
  header.find('#link-to-login').css("display", "none")
  // hide currenty select
  header.find('#currency-select').css("display", "none")
}

//  ------------------------- Nav Bar Ends ----------------------------------------




//  ------------------------- Footer Starts ---------------------------------------

blogCore.correctFooterLinks = function() {
  // This corrects all the local URLs within the nav to ensure it links back to the site
  var anchors = $('#site-footer').find('a')
  anchors.each(function() {
    var link = $(this).attr('href');
    $(this).attr("href", "//www.woolandthegang.com" + link)
  });
}

//  ------------------------- Footer Ends -----------------------------------------