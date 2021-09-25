export const environment = {
  production: true,
  apiUrl: 'https://dn-api.chozat.com',

  tokenAllowedDomains: [ new RegExp('algamoney-api.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};