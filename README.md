# github-repo-search

A Chrome extension for searching within Github repos.

This extension adds two simple features to github:

On public repos, you get the "Search source code..." box that already exists on private repos. Also, this binds '/' to highlight the repo search box for both public and private repos.

## Bugs

Sometimes search just won't work this might have to do with repo-specific searches relying on an occasionally rebuilt index. When using the repo:xxx searchquery global search format, you get an error message, but here you just don't get any results.

I love the Github shortcut for finding files in a repo by pressing 't', but there is no quick way to search file contents, and I was sick of downloading repos and opening them in Textmate just to do this.  When viewing a repository, a ![Github icon](https://github.com/afeld/github-find/blob/master/favicon.ico?raw=true) will appear in the address bar - press _CTL-SHIFT-f_ and a search box will appear.
