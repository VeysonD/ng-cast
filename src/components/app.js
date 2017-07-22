angular.module('video-player')
  .controller('appController', function() {
    this.selectVideo = () => {};
    this.searchResults = () => {};
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];

    this.onClick = () => {};
    this.result = (value) => {
      console.log('value', value);
      console.log('hi');
    };
  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'src/templates/app.html'
  });

console.log('hi');
