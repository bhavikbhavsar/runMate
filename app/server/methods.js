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
    Matching.upsert(lodash.omit(dataObject,'Status'),{$inc:{Status:1}});
    // Matching.upsert(lodash.omit(dataObject,'Status'),{$inc:{Status:2}});


    var matchingObj = Matching.findOne(lodash.omit(dataObject,'Status'));

    if(matchingObj.Status===2){
      // var ids = [];
      // ids.push(matchingObj.Male);
      // ids.push(matchingObj.Female);
      // Meteor.users.update({_id:{$in:ids}},{$inc:{'profile.unRead':1}});

      var modalMatchObj = schema.modalMatch;

      // modalMatchObj.targetId = Meteor.userId()=== matchingObj.Male? matchingObj.Female : matchingObj.Male;
      // modalMatchObj.partner = Meteor.users.findOne(modalMatchObj.targetId).profile.name;
      modalMatchObj.chatroomId = matchingObj._id;
      modalMatchObj.maleName = Meteor.users.findOne(matchingObj.Male).profile.name;
      modalMatchObj.malefbId = Meteor.users.findOne(matchingObj.Male).profile.id;
      modalMatchObj.femaleName =  Meteor.users.findOne(matchingObj.Female).profile.name;
      modalMatchObj.femalefbId =  Meteor.users.findOne(matchingObj.Female).profile.id;


      em.emit('newMatch',modalMatchObj);


    }

    return matchingObj.Status===2 ? matchingObj._id : false;




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

    Meteor.users.update({_id:chatObj.to},{$inc:{'profile.unRead':1}});

  },
  'setbadge':function (arr) {
    console.log(arr);
    Meteor.users.update({_id:{$in:arr}},{$set:{notice:true}});

  },
  'setNoticeFalse':function (argument) {
    Meteor.users.update(Meteor.userId(),{$set:{notice:false}});
  },
  'setRead':function (argument) {
    Meteor.users.update(Meteor.userId(),{$set:{'profile.unRead':0}});
  }
});
