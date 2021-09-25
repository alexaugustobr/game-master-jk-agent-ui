export const environment = {
  production: true,
  apiUrl: 'http://tfs-barn-api.chozat.com',

  tokenAllowedDomains: [ new RegExp('algamoney-api.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
