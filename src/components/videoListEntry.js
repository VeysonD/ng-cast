angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      snippet: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
