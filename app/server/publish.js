

Meteor.publish('AllInterest', function () {
  return Interest.find();
});
Meteor.publish('AllMovie', function () {
  return Movies.find();
});
