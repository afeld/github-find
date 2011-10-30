var searchBoxVisible = false,
  $searchBox;

function onSearchKeydown(e){
  if (e.which === 13){ // the ENTER key
    var REPO_REGEX = new RegExp("github\.com/([^/]+/[^/]+)(/.*)?$"),
      repo = window.location.href.match(REPO_REGEX)[1],
      query = $(this).val();
    
    window.location = 'https://github.com/search?type=Code&q=' + encodeURIComponent(query) + '&repo=' + encodeURIComponent(repo);
  }
}

function hideSearchBox(){
  $searchBox.hide();
  searchBoxVisible = false;
}


$(window).keydown(function(e){
  if (!searchBoxVisible && e.which === 70){ // the 'f' key
    // show the search box
    
    if (!$searchBox){
      // create the input field
      $searchBox = $('<input type="text" style="position:fixed; font-size:3em;"/>')
        .appendTo('body')
        .keydown(onSearchKeydown)
        .blur(hideSearchBox);
    }
    
    $searchBox
      .show()
      .position({
        my: 'center',
        at: 'center',
        of: window
      })
      .focus();
    
    searchBoxVisible = true;
    // don't register the 'f' keydown
    e.preventDefault();
    
  } else if (searchBoxVisible && e.which === 27){ // the ESC key
    hideSearchBox();
  }
});
