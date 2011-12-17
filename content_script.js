/*
 * only show search on:
 *  (/)?      project code home page
 *  (/tree.*) project code subdirectories
 *  (/blob.*) project code source files
 *  first matching group is added as repo=match[1] to the search query fields
 *  because github
 */
 
var REPO_REGEX = new RegExp("://github\.com/([^/]+/[^/]+)((/)|(/tree/.*)|(/blob/.*))?");

match = document.location.href.match(REPO_REGEX);
if (match){
  // add the search box only if not in a private repo
  if($('li.repo-search').length == 0){
    searchBox = '<li class="search repo-search "><form action="/search" method="get"><span class="fieldwrap"><input type="text" name="q" value="" placeholder="Search source code…"><button type="submit" class="minibutton"><span>Search</span></button></span><input type="hidden" id="type-value" name="type" value="Code"><input type="hidden" id="repo-value" name="repo" value="' + match[1] + '"><input type="hidden" id="lang-value" name="langOverride" value=""><input type="hidden" id="start-value" name="start" value=""></form></li>';
    $('ul.actions').prepend(searchBox);
  }
  // add '/' keypress to focus the search box
  $(document).keypress(function(e){
    if ((e.which == 47 || e.keyCode == 47 || window.event.keyCode == 47) && !$('li.repo-search input[type=text]').is(":focus")){
	  $('li.repo-search input[type=text]').focus();
	  return false;
    }
  });
}