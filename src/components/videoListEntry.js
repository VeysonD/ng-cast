angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      snippet: '<',
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
