
em = new EventDDP('test');

if (Meteor.isClient) {
  em.addListener('hello', function() {
    console.log('SERVER HI', _.toArray(arguments));
  });

  em.addListener('newMatch', function(modalMatchObj) {

    IonModal.open('_myModal',modalMatchObj);

  });


}

if (Meteor.isServer) {
  em.addListener('hello', function() {
    console.log('HELLO', _.toArray(arguments));
  });
}
