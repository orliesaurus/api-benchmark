var _ = require('underscore');

module.exports = function(logger){

  this.enabled = true;

  var logger = logger || console,
      self = this;

  return _.extend(this, {
    shutUp: function(){
      this.enabled = false;
    },
    log: function(message){
      if(!this.enabled)
        return this;

      logger.log('======================================');
      logger.log(message);
      logger.log('');
    },
    simpleLog: function(message){

      if(!this.enabled)
        return this;

      logger.log(message);
    }
  });
};