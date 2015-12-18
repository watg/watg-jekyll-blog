blogCore = {}
var NavbarContent = ""; // navbar global object
var FooterContent = ""; // footer global object


$( document ).ready(function() {
  blogCore.readyNavbar();
  // blogCore.readyFooter();
});


// --------------------  Nav Bar Starts --------------------------------

blogCore.readyNavbar = function() {
  console.log('I have been called!')
  if (NavbarContent === "") {
    console.log('there is no navbar!')
    blogCore.fetchNavBarContent();
  };
  blogCore.readyNavBar(NavbarContent)
};

blogCore.fetchNavBarContent = function() {
  var link = document.querySelector('link[class="watg-header"]');
  var content = link.import;
  NavbarContent = content
}

// this takes HTML and slaps it into the nav bar bit of the page
blogCore.readyNavBar = function(content) {
  var el = content.documentElement.querySelector('.watg-header')
  var header = document.getElementById("site-header")
  header.appendChild(el.cloneNode(true));

  // then we go and correct those local links and images ;)
  blogCore.correctNavLinks()
  blogCore.correctNavImages()
  blogCore.hideSearchBar()
}

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

blogCore.hideSearchBar = function(){
  var search = $('#site-header').find('.search-form')
  search.css("display", "none")
}

//  ------------------------- Nav Bar Ends ----------------------------------------

//  ------------------------- Footer Starts ---------------------------------------

blogCore.readyFooter = function() {
  if (FooterContent === "") {
    blogCore.fetchFooterContent();
  };
  blogCore.readyFooterContent(FooterContent)
};

blogCore.fetchFooterContent = function() {
  var link = document.querySelector('link[class="watg-footer"]');
  var content = link.import;
  FooterContent = content
}

// // this takes HTML and slaps it into the nav bar bit of the page
blogCore.readyFooterContent = function(content) {
  var el = content.documentElement.querySelector('.watg-footer')
  var footer = document.getElementById("site-footer")
  footer.appendChild(el.cloneNode(true));

  // then we go and correct those local links and images ;)
  blogCore.correctFooterLinks()
}

blogCore.correctFooterLinks = function() {
  // This corrects all the local URLs within the nav to ensure it links back to the site
  var anchors = $('#site-footer').find('a')
  anchors.each(function() {
    var link = $(this).attr('href');
    $(this).attr("href", "//www.woolandthegang.com" + link)
  });
}

//  ------------------------- Footer Ends -----------------------------------------