/*****************************************************************************/
/* Chatroom: Event Handlers */
/*****************************************************************************/
Template.Chatroom.events({
  'click .send':function () {
    // alert("sending");
    // var text  = $('.text').val();
    // var dataObject = {};
    // dataObject.from = Meteor.userId();
    //
    // dataObject.chat = {};
    // dataObject.chat.from = Meteor.userId();
    //
    // if(isMale()){
    //   dataObject.to = Matching.findOne().Female;
    //   dataObject.chat.to = Matching.findOne().Female;
    //   dataObject.Female = Matching.findOne().Female;
    //   dataObject.Male = Meteor.userId();
    // }else {
    //   dataObject.to = Matching.findOne().Male;
    //   dataObject.chat.to = Matching.findOne().Male;
    //   dataObject.Male = Matching.findOne().Male;
    //   dataObject.Female = Meteor.userId();
    //
    // }
    //
    //
    // dataObject.chat.text = text;
    // dataObject.chat.createdAt = new Date().getTime();
    dataObject = Matching.findOne();
    dataObject.text  = $('.text').val();



    if(dataObject.text!==""){
      Meteor.call("sendMsg", dataObject);
      $('.text').val("");
    }

  }
});

/*****************************************************************************/
/* Chatroom: Helpers */
/*****************************************************************************/
Template.Chatroom.helpers({
  Chat:function (argument) {
    return Matching.findOne().chat;
  },
  isMind:function () {
    console.log(this);
    return Meteor.userId()===this.from ? "mine" : "notmine";
  },
  getName:function () {
    if(isMale()){
      return Meteor.users.findOne({_id:Matching.findOne().Female}).profile.name;
    }else{
      return Meteor.users.findOne({_id:Matching.findOne().Male}).profile.name;
    }
  }
});
Template.chatMessage.helpers({
  Chat:function (argument) {
    return Matching.findOne().chat;
  },
  isMind:function () {
    console.log(this);
    return Meteor.userId()===this.from ? "mine" : "notmine";
  },
});

/*****************************************************************************/
/* Chatroom: Lifecycle Hooks */
/*****************************************************************************/
Template.Chatroom.onCreated(function () {
});

Template.Chatroom.onRendered(function () {
  Session.set('ionTab.current','/MatchList');
});

Template.Chatroom.onDestroyed(function () {
});
