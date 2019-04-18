function RedditFeed(RedditService) {
    const ctrl = this;
    
    // List of reddit posts to display
    ctrl.feed = [];

    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */
    ctrl.fetchAwwSubreddit = () => {
        // Call service, then set our data
        RedditService.fetchAwwSubreddit()
        .then( (data) => {
            // do something with this data
        })
    }
  }
  
  angular.module('RedditApp').component('redditFeed', {
    template: `
        <div ng-repeat="post in $ctrl.feed">
            <h2>{{post.title}}</h2>
        </div>
    `, // or use templateUrl
    controller: RedditFeed,
});