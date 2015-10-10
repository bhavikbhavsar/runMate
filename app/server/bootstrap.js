Meteor.startup(function () {

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    { $set: { appId: "1915957638628550", secret: "08e9bc7e0f9f85c5fe246fd1a296de7a" } }
  );

  Meteor.users.remove({});
  Interest.remove({});
  Matching.remove({});


  var ids = [];
  ids.push(560498514); //She is my gf!!!!


  ids.push(503674580);
  ids.push(100003743012797);
  ids.push(1428036985);
  ids.push(19614945368);
  ids.push(309787872509777);
  ids.push(1712329320);

  ids.push(100000461840895);
ids.push(100007881438763);
ids.push(334272573297217);
ids.push(1136260708);
ids.push(1253321724);
ids.push(1095417037);
ids.push(539479940);
ids.push(1233852119);
ids.push(560202378);

ids.push(100000839313476);
ids.push(100001383874700);
ids.push(100002647722802);
ids.push(1580110543);
ids.push(1143527135);
ids.push(839875251);
ids.push(705687935);
ids.push(557945711);
ids.push(100000022215260);





    if(Meteor.users.find().count()===0){
      ids.forEach(function (element, index, array) {

        var genderArr = ['male','female'];
        var user =  Fake.user();
        var fbId =  element;
        var link =  "http://graph.facebook.com/"+fbId+"/picture?type=square";
        var gender = lodash.sample(genderArr);
        var profile={
          email:user.email,
          gender : 'female',
          link : link,
          name : user.fullname,
          id:fbId,
        };
        var dataObject ={
          profile : profile
        };
        var userId = Meteor.users.insert(dataObject);

        var movie = ["DKFLnzXczYXqQ6xrn", "o9YLiEDZttyRJtWP8", "zzkSS4PfhGvyhkfk8"];


        var movieData={
          userId:userId,
          fbID:fbId,
          trackId:lodash.sample(movie),
          // Gender: gender
          Gender : 'female'
        };

        Interest.insert(movieData);


      });
    }


});
