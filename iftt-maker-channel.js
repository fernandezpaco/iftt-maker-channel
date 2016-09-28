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
        type: String,
        value: 'pjn-53nQ5wBDl-jjRSNPgUfYs28onDTjAhDvF__jMHp'
      },
      event: {
        type: String,
        value: 'motion_detected'
      },
      value1: {
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
    request: function() {
      if(this.value1)
        this.$.dataAjax.body+='{"alue1":"'+this.value1+'"}';
      this.$.dataAjax.generateRequest();
      //
    },

    handleResponse: function (payload) {
      // body...
      console.log(payload);
    }
  });
}());
