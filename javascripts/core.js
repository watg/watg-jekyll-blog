blogCore = {}
var NavbarContent = ""; // navbar global object


$( document ).ready(function() {
  blogCore.readyNavbar();
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
  var link = document.querySelector('link[rel="import"]');
  var content = link.import;
  NavbarContent = content
}

// this takes HTML and slaps it into the nav bar bit of the page
blogCore.readyNavBar = function(content) {
  var el = content.documentElement.querySelector('.thingie')
  var header = document.getElementById("site-header")
  header.appendChild(el.cloneNode(true));

  // then we go and correct those local links and images ;)
  blogCore.correctNavLinks()
  blogCore.correctNavImages()
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
  // This corrects all the local image sources within the nav to ensure it links back to the site
  var images = $('#site-header').find('img')
  images.each(function() {
    var link = $(this).attr('src');
    $(this).attr("src", "http://d2pnxtyo6k0hqt.cloudfront.net" + link)
  });
}

//  ------------------------- Nav Bar Ends ----------------------------------------