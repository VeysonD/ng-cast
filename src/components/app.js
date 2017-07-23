angular.module('video-player')
  .controller('appController', function(youTube) {
    this.selectVideo = () => {};
    // this.searchResults = () => {};
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];

    this.onClick = (video) => {
      console.log({video});
    };
    this.result = (value) => {
      var text = document.getElementsByClassName('form-control')[0].value;
      console.log('text', text);
      youTube.search(text, this.searchResults);
    };
    this.searchResults = (data) => {
      this.videos = data;
      this.currentVideo = this.videos[0];
    };



    // console.log(youTube);
    youTube.search('pancakes', data => {
      // console.log('data', JSON.stringify(data, null, 2));
      this.videos = data;
      this.currentVideo = this.videos[0];
    });
  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'src/templates/app.html'
  });
