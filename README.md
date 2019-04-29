# bpmtk-js

Use [bpmtk-js](https://github.com/caifl/bpmtk-js) to display BPMN 2.0 diagrams in a [Vue.js](https://vuejs.org) application.


## Usage

```html
<template>
  <vue-bpmn
    url="/public/diagram.bpmn"
    v-on:error="handleError"
    v-on:shown="handleShown"
    v-on:loading="handleLoading"
  ></vue-bpmn>
</template>

<script>
  import VueBpmn from 'vue-bpmn';

  export default {
    components: {
      VueBpmn
    },
    methods: {
      handleError: function(err) {
        console.error('failed to show diagram', err);
      },
      handleShown: function() {
        console.log('diagram shown');
      },
      handleLoading: function() {
        console.log('diagram loading');
      }
    }
  };
</script>
```


## Resources

* [Issues](https://github.com/caifl/bpmtk-js/issues)
* [Example](./example)


## License

MIT
