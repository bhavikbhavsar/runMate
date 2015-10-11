// _.pick(object, 'user');



Accounts.onCreateUser(function(options, user) {

  user.profile = options.profile ? options.profile : {};
  var profile = lodash.pick(lodash.get(user,'services.facebook'),lodash.keys(schema.profile));
  user.profile = profile;

  return user;
});
