export const environment = {
  production: true,
  apiUrl: 'http://159.69.214.101:8080',

  tokenAllowedDomains: [ new RegExp('algamoney-api.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
