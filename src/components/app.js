angular.module('video-player')
  .controller('appController', function() {
    this.hello = 'hi';
    this.selectVideo = () => {};
    this.searchResults = () => {};
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.onClick = () => {};
  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'src/templates/app.html'
  });

console.log('hi');
