(function() {
  'use strict';

  Polymer({

    is: 'iftt-maker-channel',

    properties: {
      /**
       * Service URL. Added to the endpoint by default. Implement _computeURL to override this.
       * It must be readOnly
       * @type {String}
       */
      _serviceURL: {
        type: String,
        computed: 'compute(key,event)',
        readonly: true
      },
      key: {
        type: String
      },
      event: {
        type: String
      }
    },

    compute: function(key,event){
      return 'https://maker.ifttt.com/trigger/'+event+'/with/key/'+key;
    },

    /**
     * Return requests properties.
     * @return {object}
     */
    request: function(payload) {
      /**/
      if(window.cordovaHTTP){
        var paramUrl = 'https://maker.ifttt.com/trigger/'+event+'/with/key/'+key;
        var paramHeaders = JSON.parse('{"Content-Type":"application/json"}');
        var paramBody;
        if(payload)
          paramBody='{"value1":"'+payload+'"}';
        window.cordovaHTTP.post(paramUrl, paramBody, paramHeaders,
        function(response) {
            console.log(response.status);
                            console.log(response.data);
                            console.log(response.responseHeaderAllFields);
        }, function(response) {
            console.error(response.error);
        });  
      }else{
        if(payload)
          this.$.dataAjax.body+='{"value1":"'+payload+'"}';
        this.$.dataAjax.generateRequest();
      }    
      //
    },

    handleResponse: function (payload) {
      // body...
      console.log(payload);
    }
  });
}());
