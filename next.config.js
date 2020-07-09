const withCSS = require('@zeit/next-css')

module.exports= withCSS({
    publicRuntimeConfig: {
        APP_NAME :'newslify.ng',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'https://newslify.ng/api',
        PRODUCTION: true,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://newslify.ng',
        FB_APP_ID: '127717985332922',
        DISQUS_SHORTNAME: 'newslify-ng',
       
        
    }
})