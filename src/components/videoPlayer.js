angular.module('video-player')
  .controller('videoPlayerController', function() {

  })
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
