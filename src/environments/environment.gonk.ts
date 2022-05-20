export const environment = {
  production: true,
  apiUrl: 'https://gonkgarage-api.chozat.com',

  tokenAllowedDomains: [ new RegExp('gonkgarage-api.chozat.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
