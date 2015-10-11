/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'click .fb-login-btn':function (argument) {
    var per =[];

    per.push("user_about_me");
    per.push("user_actions.books");
    per.push("user_actions.fitness");
    per.push("user_actions.music");
    per.push("user_actions.news");
    per.push("user_actions.video");
    per.push("user_birthday");
    per.push("user_education_history");
    per.push("user_events");
    per.push("user_friends");
    per.push("user_games_activity");
    per.push("user_hometown");
    per.push("user_likes");
    per.push("user_location");
    per.push("user_managed_groups");
    per.push("user_photos");
    per.push("user_posts");
    per.push("user_relationship_details");
    per.push("user_relationships");
    per.push("user_religion_politics");
    per.push("user_status");
    per.push("user_tagged_places");
    per.push("user_videos");
    per.push("user_website");
    per.push("user_work_history");


    Meteor.loginWithFacebook(per, function(err){
           if (err) {
               throw new Meteor.Error("Facebook login failed");
           }else{
             Router.go('Home');
           }

    });
  }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
