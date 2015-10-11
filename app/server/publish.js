

Meteor.publish('AllInterest', function () {
  return Interest.find();
});
Meteor.publish('AllTracks', function () {
  return Tracks.find();
});
Meteor.publish('AllInterestWithoutMatched', function () {
  var MatchingList = Matching.find({$or:[ {Male:this.userId},{Female:this.userId}  ],Status:2}).fetch();
  var boylist = lodash.map(MatchingList,'Male');
  var girllist = lodash.map(MatchingList,'Female');
  var Arr = lodash.union(boylist,girllist);
  console.log(Arr);
  return Interest.find({_id:{$nin:Arr}});
});
Meteor.publish('AllInterestWithoutMatchedBytrackId', function (trackId) {
  var MatchingList = Matching.find({$or:[ {Male:this.userId},{Female:this.userId}  ]}).fetch();
  var boylist = lodash.map(MatchingList,'Male');
  var girllist = lodash.map(MatchingList,'Female');
  var Arr = lodash.union(boylist,girllist);

  console.log(Arr);
  return Interest.find({userId:{$nin:Arr},trackId:trackId});
});
Meteor.publish('AllUser', function () {
  return Meteor.users.find();
});
Meteor.publish('AllMovie', function () {
  return Movies.find();
});
Meteor.publish('getChatroomById', function (id) {
  return Matching.find(id);
});
Meteor.publish('getMyMatchedList', function () {
  // console.log(this.userId());
  return Matching.find({$or:[ {Male:this.userId},{Female:this.userId}  ],Status:2});
});

Meteor.publish('allUserWithOutMe', function (gender) {
  var targetGender = gender ==="male" ?"female":"male";
  console.log(gender);
  console.log(targetGender);
  return Meteor.users.find({'profile.gender':targetGender});
});
