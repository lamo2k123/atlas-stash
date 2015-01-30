atlas-stash
===========

REST Client for Atlassian's Stash

This is still in progress and so the API should be considered unstabled, but
it's in a good enough shape to start playing with.

Projects list
-------

    var StashApi = require('stash-api');

    var stash = StashApi({
    	hostname : "stash.example.com",
    	port : 8080,
    	user : 'example',
    	password : 'example'
    });

    stash.projects(function(projects) {
    	console.log('ALL-PROJECT', projects);
    });

Projects single
-------

    var StashApi = require('stash-api');

    var stash = StashApi({
    	hostname : "stash.example.com",
    	port : 8080,
    	user : 'example',
    	password : 'example'
    });

    stash.projects('projectKey', function(project) {
    	console.log('Single-project', project);
    });

Project icon
-------

    var StashApi = require('stash-api');

    var stash = StashApi({
    	hostname : "stash.example.com",
    	port : 8080,
    	user : 'example',
    	password : 'example'
    });

    stash.projectsIcon('projectKey'); // /rest/api/1.0/projects/{projectKey}/avatar.png