const servicesRoutes = require('./services_route');

module.exports = function(app, db){
    servicesRoutes(app, db)
      // Other route groups could go here, in the future
}