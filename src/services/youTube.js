angular.module('video-player')
  .service('youTube', function($http, $window) {
    this.search = (query, callback) => {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: query,
          maxResults: 5,
          type: 'video',
          videoEmbeddable: 'true',
          key: $window.YOUTUBE_API_KEY
        }

      })
        .then(function(response) {
          console.log(response);
          if (callback) {
            console.log(response);
            callback(response.item);
          }
        })
        .catch(function(response) {
          console.log(response.data.error);
        });
    };
  });
