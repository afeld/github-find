var searchBoxVisible = false,
  $searchBox, $input;

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
      $searchBox = $('<div style="background-color:#E4E8EC; border: 1px solid #999;  border-radius:10px; box-shadow: 5px 8px 10px #999; padding:15px; position:fixed;"><input type="text" style="font-size:3em;"/></div>');
      
      $searchBox.appendTo('body');
      
      $input = $searchBox.find('input')
        .blur(hideSearchBox)
        .keydown(onSearchKeydown);
    }
    
    $searchBox
      .show()
      .position({
        my: 'center',
        at: 'center',
        of: window
      });
    
    $input.focus();
    
    searchBoxVisible = true;
    // don't register the 'f' keydown
    e.preventDefault();
    
  } else if (searchBoxVisible && e.which === 27){ // the ESC key
    hideSearchBox();
  }
});
