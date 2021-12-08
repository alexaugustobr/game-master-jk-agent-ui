export const environment = {
  production: true,
  apiUrl: 'https://tfs-farm-api.chozat.com',

  tokenAllowedDomains: [ new RegExp('algamoney-api.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
