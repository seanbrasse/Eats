//TODO: Cors-anywhere allows us to bypass the browser wanting this data coming from a server, and not directly from the api to the front-end. We'll want to use our own server eventually
export const API_BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'
//   'https://yelp-backend.netlify.app/.netlify/functions'

//TODO: Remove this token as it shouldn't be accessible from the front-end, should be used on a server whose data is not exposed to the outside world
export const BEARER_TOKEN =
  'bs7UOQ1KLnRGGRkeuDigR1J6JeTcrz1dHcXRQZPsrU1YNCpQZPXysKslSMqstH29Ih757KwD-is2XiVnuw5Ysg9XPIUdcuB1jYdYvLSaV0r7xQea3xMamncirGP5X3Yx'

// export const API_BASE_URL = new XMLHttpRequest()
// API_BASE_URL.open(
//   'GET',
//   'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'
// )
// // I put "XMLHttpRequest" here, but you can use anything you want.
// API_BASE_URL.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
// API_BASE_URL.onload = function () {
//   alert(API_BASE_URL.responseText)
// }
// API_BASE_URL.send()
