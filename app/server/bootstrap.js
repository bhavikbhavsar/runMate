Meteor.startup(function () {

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    { $set: { appId: "1915957638628550", secret: "08e9bc7e0f9f85c5fe246fd1a296de7a" } }
  );

  Meteor.users.remove({_id:{$ne:"foSbmZYYGmkcqXvGt"}});
  Interest.remove({});




    lodash.times(100,function (argument) {

      var genderArr = ['male','female'];
      var user =  Fake.user();
      var fbId =  lodash.random(1000000,1900000);
      var link =  "http://graph.facebook.com/"+fbId+"/picture?type=square";
      var gender = lodash.sample(genderArr);
      var profile={
        email:user.email,
        gender : gender,
        link : link,
        name : user.fullname,
        id:fbId,
      };
      var dataObject ={
        profile : profile
      };
      var userId = Meteor.users.insert(dataObject);

      var movie = lodash.map(Movies.find().fetch(),'_id');

      var movieData={
        userId:userId,
        fbID:fbId,
        trackId:lodash.sample(movie),
        Gender: gender
      };

      Interest.insert(movieData);


    });


});
