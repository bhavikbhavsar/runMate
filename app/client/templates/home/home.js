

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
    console.log(e);
    var trackId  = $(e.currentTarget).data('trackid');
    console.log(trackId);
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
  console.log(this);
  this.x= ReactiveVar("");



});

Template.Home.onDestroyed(function () {
});
