var searchBoxVisible = false,
  $searchBox, $input;

function onSearchKeypress(e){
  if (e.which === 13){ // the ENTER key
    var REPO_REGEX = new RegExp("github\\.com/([^/]+/[^/]+)(/.*)?$"),
      repo = window.location.href.match(REPO_REGEX)[1],
      query = $(this).val();

    if ($('body').hasClass('vis-private') || $('.repo-search').length > 0){
      // private search (which allows direct search within repo)
      window.location = 'http://github.com/' + repo + '/search?q=' + encodeURIComponent(query);
    } else {
      // public search
      window.location = 'https://github.com/search?type=Code&q=' + encodeURIComponent(query) + '+repo%3A' + encodeURIComponent(repo);
    }
  }
}

function showSearchBox(){
  // show the search box
  
  if (!$searchBox){
    // create the input field
    $searchBox = $('<div style="background-color:#E4E8EC; border: 1px solid #999;  border-radius:10px; box-shadow: 5px 8px 10px #999; padding:15px; position:fixed;"><input type="text" style="font-size:3em;"/></div>');
    $searchBox.appendTo('body');

    $input = $searchBox.find('input');
    $input
      .blur(hideSearchBox)
      .keypress(onSearchKeypress);
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
}

function hideSearchBox(){
  $searchBox.hide();
  searchBoxVisible = false;
}


$(window).keypress(function(e){
  if (!searchBoxVisible && e.which === 6){ // CTL-SHIFT-f
    showSearchBox();
  }
});

$(window).keydown(function(e){
  if (searchBoxVisible && e.which === 27){ // the ESC key
    hideSearchBox();
  }
});

chrome.extension.onMessage.addListener(function(request){
  if (request.action === 'toggleSearchBox'){
    if (searchBoxVisible){
      hideSearchBox();
    } else {
      showSearchBox();
    }
  }
});
