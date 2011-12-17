/*
 * only show search on:
 *  (/)?      project code home page
 *  (/tree.*) project code subdirectories
 *  (/blob.*) project code source files
 *  (/edit.*) project code edit windows
 *  first matching group ([^/]+/[^/]+) is added as repo=match[1] to the search query variables
 */
 
var REPO_REGEX = new RegExp("://github\.com/([^/]+/[^/]+)((/)|(/tree/.*)|(/blob/.*)|(/edit/.*))?$");

match = document.location.href.match(REPO_REGEX);
if (match){
  // add the search box only if it isn't already there (e.g. in a private repository)
  if($('.subnav-bar li.repo-search').length == 0){
    searchBox = '<li class="search repo-search "><form action="/search" method="get"><span class="fieldwrap"><input type="text" name="q" value="" placeholder="Search this repository…"><button type="submit" class="minibutton"><span>Search</span></button></span><input type="hidden" id="type-value" name="type" value="Code"><input type="hidden" id="repo-value" name="repo" value="' + match[1] + '"><input type="hidden" id="lang-value" name="langOverride" value=""><input type="hidden" id="start-value" name="start" value=""></form></li>';
    $('.subnav-bar ul.actions').prepend(searchBox);
  }
  // add '/' keypress handler to focus the search box
  $(document).keypress(function(e){
    // forward slash pressed
    if ((e.which == 47 || e.keyCode == 47 || window.event.keyCode == 47) &&
	// no text inputs are focused
	!$.makeArray($('[type="text"], textarea')).some(function(e,i,a){return $(e).is(":focus");}) ){
	  $('li.repo-search input[type=text]').focus();
	  return false;
    }
  });
}