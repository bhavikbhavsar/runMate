/*****************************************************************************/
/* MatchList: Event Handlers */
/*****************************************************************************/
Template.MatchList.events({
});

/*****************************************************************************/
/* MatchList: Helpers */
/*****************************************************************************/
Template.MatchList.helpers({
  partner:function (argument) {
    // if(lodash.get(Meteor.user(),'profile.gender')){
    //   if(isMale()){
    //     return Matching.find({Male:Meteor.userId(),Status:2});
    //   }else{
    //     return Matching.find({Female:Meteor.userId(),Status:2});
    //   }
    // }
    return Matching.find().count() > 0?  Matching.find(): false ;
  },
  lastChat:function () {
    return (lodash.last(this.chat) && lodash.last(this.chat).text) || "";
  },
  getName:function () {
    if(isMale()){
      return Meteor.users.findOne({_id:this.Female}).profile.name;
    }else{
      return Meteor.users.findOne({_id:this.Male}).profile.name;
    }
  },
  getfbid:function (argument) {
    if(isMale()){
      return Meteor.users.findOne({_id:this.Female}).profile.id;
    }else{
      return Meteor.users.findOne({_id:this.Male}).profile.id;
    }
  }
});

/*****************************************************************************/
/* MatchList: Lifecycle Hooks */
/*****************************************************************************/
Template.MatchList.onCreated(function () {
});

Template.MatchList.onRendered(function () {
  Meteor.call("setNoticeFalse", function(error, result){
    if(error){
      console.log("error", error);
    }
    if(result){

    }
  });
});

Template.MatchList.onDestroyed(function () {
});
