// var tracks = [];
//
// tracks.push({_id:"DKFLnzXczYXqQ6xrn",name:"Victoria Road between Kennedy Town and Pok Fu Lam Road",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/MaOnShan1-INLINE.jpg?itok=8E6VA9uf"});
// tracks.push({_id:"o9YLiEDZttyRJtWP8",name:"Ma On Shan-Sha Tin Promenade",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/LugardSevern5-INLINE.jpg?itok=sGFsuK_v"});
// tracks.push({_id:"zzkSS4PfhGvyhkfk8",name:"Lugard Road to Severn Road figure-of-eight",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/HKTrail2-INLINE.jpg?itok=Jcjh_76j"});

/*****************************************************************************/
/* Partner: Event Handlers */
/*****************************************************************************/
Template.Partner.events({
});

/*****************************************************************************/
/* Partner: Helpers */
/*****************************************************************************/
Template.Partner.helpers({
  partner:function () {
      if(lodash.get(Meteor.user(),'profile.gender')){
        var gender  = getTargetGender();
        if(Interest.find({movieId:Router.current().params.movieId,Gender:gender}).count()>0)
          return Interest.find({movieId:Router.current().params.movieId,Gender:gender});
        else
          return false;
      }else{
        return false;
      }
  },
  gatName:function () {
    return Meteor.users.findOne(this.userId).profile.name;
  },

  backgroundUrl: function() {
    // track = lodash.find(tracks,{_id:Router.current().params.trackId});
    return Tracks.findOne(Router.current().params.trackId).pic;
  },

  trackName: function() {
    // track = lodash.find(tracks,{_id:Router.current().params.trackId});
    // return track.name;
    return Tracks.findOne(Router.current().params.trackId).name;
  }


});

Template._myModal.helpers({
  getfbid:function (id) {
    return Meteor.users.findOne(id).profile.id;
  }
});

/*****************************************************************************/
/* Partner: Lifecycle Hooks */
/*****************************************************************************/
Template.Partner.onCreated(function () {
});

Template.Partner.onRendered(function () {
  var stack;

  config = {
    /**
     * Invoked in the event of dragmove.
     * Returns a value between 0 and 1 indicating the completeness of the throw out condition.
     * Ration of the absolute distance from the original card position and element width.
     *
     * @param {Number} offset Distance from the dragStart.
     * @param {HTMLElement} element Element.
     * @return {Number}
     */
    throwOutConfidence: function (offset, element) {
        console.log(offset);
        return Math.min(Math.abs(offset) / (element.offsetWidth/10) ,1);
    }
};

    stack = gajus.Swing.Stack(config);


    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        var card = stack.createCard(targetElement);

        card.on('throwoutleft', function (eventObject) {
          $(eventObject.target).remove();
          console.log(eventObject);
          console.log("throwoutleft");
        });
        card.on('throwoutright', function (eventObject) {
          $(eventObject.target).remove();
          console.log(eventObject);


          var userId = $(eventObject.target).data('userid');
          var dataObject = schema.matching;

          if(isMale()){
              dataObject.Male=Meteor.userId();
              dataObject.Female=userId;
          }else{
              dataObject.Female=Meteor.userId();
              dataObject.Male=userId;
          }
          dataObject.trackId = Router.current().params.trackId;

          Meteor.call("createMatching", dataObject, function(error, result){
            if(error){
              console.log("error", error);
            }else{
              if(result)
                IonModal.open('_myModal',{
                  partner:Meteor.users.findOne(userId).profile.name,
                  targetId:userId,
                  chatroomId:result,
                  myId:Meteor.userId()
                });
            }
          });




          console.log("throwoutleft");
        });
        card.on('throwoutend', function () {
          console.log("throwoutend");
        });
        card.on('dragmove', function (eventObject) {
          console.log(eventObject);
        });
        card.on('dragmove', function (eventObject) {
          if(eventObject.throwDirection===1){
            $(eventObject.target).children('.Like').css('opacity',eventObject.throwOutConfidence);
            $(eventObject.target).children('.Nope').css('opacity',0);
          }else{
            $(eventObject.target).children('.Nope').css('opacity',eventObject.throwOutConfidence);
            $(eventObject.target).children('.Like').css('opacity',0);

          }
        });

        targetElement.classList.add('in-deck');
    });

    stack.on('throwin', function (e) {
      $('.Like').css('opacity',0);
      $('.Nope').css('opacity',0);
    });


});


Template.Partner.onDestroyed(function () {
});



// Template.movieCard2.events({
// // Template.Partner.events({
//   'click .item.item-image':function (e) {
//
//     var userId = $(e.target).data('userid');
//     var dataObject = schema.matching;
//
//     if(isMale()){
//         dataObject.Male=Meteor.userId();
//         dataObject.Female=userId;
//     }else{
//         dataObject.Female=Meteor.userId();
//         dataObject.Male=userId;
//     }
//     dataObject.Movie = Router.current().params.movieId;
//
//     Meteor.call("createMatching", dataObject, function(error, result){
//       if(error){
//         console.log("error", error);
//       }else{
//         // alert('created');
//         Router.go('MatchList');
//       }
//     });
//
//   }
// });
