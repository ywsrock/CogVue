<template>
  <div class="col-sm-12 col-md-6">
    <div class="form-group" style="display: flex;">
      <p class="search-form-title"><span style="margin: 0 auto;">{{ title }}</span></p>
      <input
        type="text"
        placeholder="例) 健康食品など"
        class="form-control"
        style="width: 200px; display: flex;"
        id="freeword"
        ref="freeword"
        @change="onChange"
        v-model="freeword"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true      
    },
    freeword: {
      type: String,
      required: true      
    },
  },
  methods: {
    onChange: function(){
      this.$emit("emitSelectFreeWord", this.$refs.freeword.value);
    }
  },
};
</script>
