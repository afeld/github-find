$(window).keydown(function(e){
  if (e.which === 70){ // the 'f' key
    var REPO_REGEX = new RegExp("github\.com/([^/]+/[^/]+)(/.*)?$"),
      repo = window.location.href.match(REPO_REGEX)[1];
    
    window.location = 'https://github.com/search?type=Code&q=query&repo=' + encodeURIComponent(repo);
  }
});
