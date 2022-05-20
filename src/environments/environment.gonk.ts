export const environment = {
  production: true,
  apiUrl: 'https://gonk-api.chozat.com',

  tokenAllowedDomains: [ new RegExp('gonk-api.chozat.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
