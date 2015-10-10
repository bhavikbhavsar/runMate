Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


//
// Router.route('/', {
//   name: 'home',
//   controller: 'HomeController',
//   where: 'client'
// });



Router.onBeforeAction(function () {
  if(!Meteor.userId())
    this.redirect('Login');
  this.next();
}, {except: ['Login']});

Router.onBeforeAction(function () {
  if(Meteor.userId())
    this.redirect('Home');
  this.next();
}, {only: ['Login']});

Router.route('Login',{
  path:"/"
});


Router.route('Chatroom',{
  path:'/Chatroom/:MatchListId',
  waitOn:function () {
    return [Meteor.subscribe('getChatroomById',this.params.MatchListId),Meteor.subscribe('AllUser')];
  }
});


Router.route('Home',{
  waitOn:function () {
    return Meteor.subscribe('AllMovie');
  }
});

Router.route('Profile');
Router.route('MatchList',{
  waitOn:function (argument) {
    if(Meteor.user())
      return [Meteor.subscribe('getMyMatchedList'), Meteor.subscribe('allUserWithOutMe',Meteor.user().profile.gender)];
   }
});

Router.route('Partner',{
  path:"food/:trackId",
  waitOn:function () {
    return Meteor.subscribe('AllInterestWithoutMatchedBytrackId',this.params.trackId);
  }
});
