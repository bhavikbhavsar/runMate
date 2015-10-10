/*****************************************************************************/
/* Chatroom: Event Handlers */
/*****************************************************************************/
Template.Chatroom.events({
  'click .send':function () {
    alert("sending");
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



    Meteor.call("sendMsg", dataObject);
    $('.text').val("");


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
  }
});
Template.chatMessage.helpers({
  Chat:function (argument) {
    return Matching.findOne().chat;
  },
  isMind:function () {
    console.log(this);
    return Meteor.userId()===this.from ? "mine" : "notmine";
  }
});

/*****************************************************************************/
/* Chatroom: Lifecycle Hooks */
/*****************************************************************************/
Template.Chatroom.onCreated(function () {
});

Template.Chatroom.onRendered(function () {
});

Template.Chatroom.onDestroyed(function () {
});
