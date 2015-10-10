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
    return ['asd',"asd"];
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
