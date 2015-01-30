var _ = require("lodash"),
    url = require("url"),
    request = require("request"),
    PagedRequest = require("./paged-request").PagedRequest,
    API_BASE = "/rest/api/1.0/";

var StashClient = function(options) {
    if(!(this instanceof StashClient)) {
        return new StashClient(options);
    }


    this.options = {
        protocol: options.protocol || 'http',
        hostname: options.hostname || 'localhost',
        port    : options.port || 80,
        user    : options.user,
        password: options.password,
        api     : options.api || '/rest/api/1.0'
    };

    this.http = require(this.options.protocol);

    return this;
};

StashClient.prototype.projects = function() {
    var path    = ['projects'],
        callback= null;

    for(var i in arguments) {
        if(arguments.hasOwnProperty(i)) {
            if(typeof arguments[i] === 'function')
                callback = arguments[i];

            if(typeof arguments[i] === 'string')
                path.push(arguments[i]);
        }
    }

    this.get(path.join('/'), callback);
};

StashClient.prototype.projectsIcon = function(project) {
    if(project) {
        return [this.options.api, 'projects', project, 'avatar.png'].join('/');
    } else {
        return 'Not project key';
    }
};

StashClient.prototype.get = function(path, callback) {
    this._request('GET', path, callback);
};

StashClient.prototype.post = function(path, callback) {
    this._request('POST', path, callback);
};

StashClient.prototype.put = function(path, callback) {
    this._request('PUT', path, callback);
};

StashClient.prototype.delete = function(path, callback) {
    this._request('DELETE', path, callback);
};

StashClient.prototype._request = function(method, path, callback) {
    var req = this.http.request({
        hostname: this.options.hostname,
        port    : this.options.port,
        method  : method || 'GET',
        path    : [this.options.api, path].join('/'),
        auth    : [this.options.user, this.options.password].join(':'),
        headers : {
            'Content-Type' : 'application/json'
        }
    }, function(res) {
        var data = '';

        if(res.statusCode !== 200) {
            console.log('HEADERS: ' + JSON.stringify(res.headers));
        }

        res.on('data', function(chunk) {
            data += chunk;
        });

        res.on('end', function() {
            callback && callback(JSON.parse(data));
        });

    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();

};

module.exports = StashClient;

/*

var StashApi = exports.StashApi = function(protocol, hostname, port, user, password) {
    this.protocol = protocol || "http";
    this.hostname = hostname;
    this.port     = port;
    this.user     = user;
    this.password = password;

};
*/
/*

(function(){

    */
/**
     * Get a list of all projects in Stash
     * 
     * @return {PagedRequest}
     *//*

    this.projects = function () {
        var pReq = new PagedRequest(_connectionDetails(this));
        _.defer(_.bind(pReq.remaining, pReq));
        return pReq.start("GET", "projects");
    };
    
    */
/**
     * Get a list of all repos associated with a project
     * 
     * @param {string} projectKey
     * @return {PagedRequest}
     *//*

    this.repos = function (projectKey) {
        var pReq = new PagedRequest(_connectionDetails(this));
        _.defer(_.bind(pReq.remaining, pReq));
        return pReq.start("GET", "projects/"+projectKey+"/repos")
    }

}).call(StashApi.prototype);*/
