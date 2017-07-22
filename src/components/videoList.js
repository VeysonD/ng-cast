angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<'
    },
    controller: 'appController',
    templateUrl: 'src/templates/videoList.html'
  });



  // controller: function myVideoListController() {
  //   this.videos = [];
  //   this.onClick = () => {};
  // },
