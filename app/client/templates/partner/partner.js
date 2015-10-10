/*****************************************************************************/
/* Partner: Event Handlers */
/*****************************************************************************/
Template.Partner.events({
});

/*****************************************************************************/
/* Partner: Helpers */
/*****************************************************************************/
Template.Partner.helpers({
  partner:function (argument) {
      if(lodash.get(Meteor.user(),'profile.gender')){
        var gender  = getTargetGender() ;
        if(Interest.find({movieId:Router.current().params.movieId,Gender:gender}).count()>0)
          return Interest.find({movieId:Router.current().params.movieId,Gender:gender});
        else
          return false;
      }else{
        return false;
      }
  }
});

/*****************************************************************************/
/* Partner: Lifecycle Hooks */
/*****************************************************************************/
Template.Partner.onCreated(function () {
});

Template.Partner.onRendered(function () {
  var stack;

    stack = gajus.Swing.Stack();


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
          dataObject.Movie = Router.current().params.movieId;

          Meteor.call("createMatching", dataObject, function(error, result){
            if(error){
              console.log("error", error);
            }
          });




          console.log("throwoutleft");
        });
        card.on('throwoutend', function () {
          console.log("throwoutend");
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



Template.movieCard2.events({
// Template.Partner.events({
  'click .item.item-image':function (e) {

    var userId = $(e.target).data('userid');
    var dataObject = schema.matching;

    if(isMale()){
        dataObject.Male=Meteor.userId();
        dataObject.Female=userId;
    }else{
        dataObject.Female=Meteor.userId();
        dataObject.Male=userId;
    }
    dataObject.Movie = Router.current().params.movieId;

    Meteor.call("createMatching", dataObject, function(error, result){
      if(error){
        console.log("error", error);
      }else{
        // alert('created');
        Router.go('MatchList');
      }
    });

  }
});
