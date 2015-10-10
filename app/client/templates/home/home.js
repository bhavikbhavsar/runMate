var tracks = [];

tracks.push({_id:"DKFLnzXczYXqQ6xrn",name:"Victoria Road between Kennedy Town and Pok Fu Lam Road",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/MaOnShan1-INLINE.jpg?itok=8E6VA9uf"});
tracks.push({_id:"o9YLiEDZttyRJtWP8",name:"Ma On Shan-Sha Tin Promenade",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/LugardSevern5-INLINE.jpg?itok=sGFsuK_v"});
tracks.push({_id:"zzkSS4PfhGvyhkfk8",name:"Lugard Road to Severn Road figure-of-eight",pic:"http://i.cdn.travel.cnn.com/sites/default/files/styles/inline_image_624x416/public/2011/09/23/HKTrail2-INLINE.jpg?itok=Jcjh_76j"});


/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  'movies':function () {
    return tracks;
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
