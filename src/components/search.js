angular.module('video-player')
  .component('search', {
    controller: function mySearchController() {
      this.result = () => {};

    },
    templateUrl: 'src/templates/search.html'
  });
