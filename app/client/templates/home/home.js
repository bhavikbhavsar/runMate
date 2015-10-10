/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  '.click .link':function (e) {
    var movieId = $(e.target).data('movieid');
    Matching.upsert({userId:Meteor.userId()}, {$set:{
      movieId:movieId
    }});
    Router.go('Partner');

  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  'movies':function () {
    return [{
      'movieId': 'abcde',
      'location': 'Tuen Mun',
      'description': 'This is a nice track',
      'image': 'https://static.panoramio.com.storage.googleapis.com/photos/large/23710497.jpg',
      'time': '10 Oct, 2015'
    }, {
      'movieId': 'qwert',
      'location': 'Fo Tan',
      'description': 'This is a bad track',
      'image': 'http://www.kwuntung.net/tthp/life/06/0606/060625/IMG_2957.JPG',
      'time': '15 Oct, 2015'
    }];
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});


Template.movieCard.events({
  'click .link':function (e) {
    var movieId = $(e.target).data('movieid');
    Meteor.call("updateMovie", movieId, function(error, result){
      if(error){
        console.log("error", error);
      }else{
          Router.go('Partner',{movieId:movieId});
      }
    });


  }
});
