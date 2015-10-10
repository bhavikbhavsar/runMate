/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  'updateMovie':function (trackId) {
    Interest.upsert({userId:Meteor.userId()}, {$set:{
      fbID:Meteor.user().profile.id,
      trackId:trackId,
      Gender:Meteor.user().profile.gender
    }});
  },
  'createMatching':function (dataObject) {
    // Matching.upsert(lodash.omit(dataObject,'Status'),{$inc:{Status:1}});
    Matching.upsert(lodash.omit(dataObject,'Status'),{$inc:{Status:2}});


    var matchingObj = Matching.findOne(lodash.omit(dataObject,'Status'));




  },
  'sendMsg':function (dataObject) {
    console.log('start sendMsg');
    console.log(dataObject);
    var modifier = {};
    var chatObj = {};
    chatObj.from = Meteor.userId();
    chatObj.to = Meteor.userId() === dataObject.Male ? dataObject.Female : dataObject.Male;
    chatObj.sendAt = new Date().getTime();
    chatObj.text = dataObject.text;
    modifier.$push = {chat:chatObj};
    Matching.update(dataObject._id,modifier);

  }
});
