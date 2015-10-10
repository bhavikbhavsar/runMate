/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  'updateMovie':function (movieId) {
    Interest.upsert({userId:Meteor.userId()}, {$set:{
      fbID:Meteor.user().profile.id,
      movieId:movieId,
      Gender:Meteor.user().profile.gender
    }});
  },
  'createMatching':function (dataObject) {
    Matching.upsert(lodash.omit(dataObject,'Status'),{$inc:{Status:1}});


    var matchingObj = Matching.findOne(lodash.omit(dataObject,'Status'));

    console.log(matchingObj);

    if(matchingObj.Status > 1){

      var Ids = [];
      Ids.push(matchingObj.Male);
      Ids.push(matchingObj.Female);

      console.log(Ids);

      Interest.remove({userId:{$in:Ids}});
    }



  }
});
