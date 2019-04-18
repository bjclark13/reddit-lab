function RedditService(http) {
    const service = this;

    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */
    service.fetchAwwSubreddit = () => {
        // $http stuff goes here
    }
}

angular
.module('RedditApp')
.service('RedditService', ['$http', RedditService]) 
// passing $http service as dependency for our service