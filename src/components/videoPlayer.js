angular.module('video-player')
  .controller('videoPlayerController', function() {
    this.youtubeURL = (url) => {
      console.log({url});
      return url ? `https://www.youtube.com/embed/${url}` : '';
    };
  })
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: 'videoPlayerController',
    templateUrl: 'src/templates/videoPlayer.html'
  });
