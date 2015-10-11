Meteor.startup(function () {

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    { $set: { appId: "1915957638628550", secret: "08e9bc7e0f9f85c5fe246fd1a296de7a" } }
  );
  Meteor.users.remove({});
  Interest.remove({});
  Matching.remove({});
  Tracks.remove({});






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

      var tracks = [];

      tracks.push({distict:"Pok Fu Lam",distance:"4.1km",name:"Victoria Road between Kennedy Town and Pok Fu Lam Road",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/MaOnShan1-INLINE.jpg?itok=8E6VA9uf"});
      tracks.push({distict:"Ma On Shan",distance:"6.2km",name:"Ma On Shan-Sha Tin Promenade",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/LugardSevern5-INLINE.jpg?itok=sGFsuK_v"});
      tracks.push({distict:"Mid Levels",distance:"8.0km",name:"Lugard Road to Severn Road figure-of-eight",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/HKTrail2-INLINE.jpg?itok=Jcjh_76j"});
      tracks.push({distict:"Sai Kung",distance:"2.6km",name:"Clear Water Bay",pic:"http://www.scmp.com/sites/default/files/styles/486w/public/2015/01/22/clearwater_bay_bruce_yan.jpg?itok=Qm5G7_WZ"});

      tracks.forEach(function (element,index,array) {
        Tracks.insert(element);
      });



      ids.forEach(function (element, index, array) {

        var genderArr = ['male','female'];
        var user =  Fake.user();  // for demo, name is generated
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

        var movie = lodash.map(Tracks.find().fetch(),'_id');


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
