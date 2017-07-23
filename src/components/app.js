angular.module('video-player')
  .controller('appController', function(youTube) {
    this.selectVideo = () => {};

    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];

    this.onClick = (video) => {
      this.currentVideo = video;
    };

    this.result = (value) => {

      var text = document.getElementsByClassName('form-control')[0].value;
      var input = this.input;
      console.log('text', text);
      console.log(youTube);
      youTube.search(text, this.searchResults);
    };
    this.searchResults = (data) => {
      this.videos = data;
      this.currentVideo = this.videos[0];
    };


    youTube.search('pancakes', data => {
      this.videos = data;
      this.currentVideo = this.videos[0];
    });
  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'src/templates/app.html'
  });
