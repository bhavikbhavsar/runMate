

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'click .logout':function (argument) {
    Meteor.logout();
  }
});

Template.movieCard.events({
  'click .track':function (e) {
    var trackId  = $(e.currentTarget).data('trackid');
    Meteor.call("updateMovie", trackId, function(error, result){
      if(error){
        console.log("error", error);
      }
      Router.go('Partner',{trackId:trackId});
    });
  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  'movies':function () {
    return Tracks.find();
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
