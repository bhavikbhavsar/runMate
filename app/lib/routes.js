Router.configure({
  layoutTemplate: 'MasterLayout',
  // loadingTemplate: 'LoadingSpinner',
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
  path:"/",
});
Router.route('Home',{
  waitOn:function () {
    return Meteor.subscribe('AllMovie');
  }
});

Router.route('Profile');
Router.route('MatchList');

Router.route('Partner',{
  path:"food/:movieId?",
  waitOn:function () {
    return Meteor.subscribe('AllInterest');
  }
});
