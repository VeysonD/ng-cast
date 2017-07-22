angular.module('video-player')
  .component('app', {
    controller: function myAppController() {
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.currentVideo = {};
      this.videos = [];
    },
    templateUrl: '/src/templates/app.html'
  });

console.log('hi');
