<template>
  <div class="col-sm-12 col-md-6">
    <div class="form-group" style="display: flex;">
      <p class="search-form-title"><span style="margin: 0 auto;">{{ title }}</span></p>
      <input type="date" id="date" class="search-form-input" ref="from" @change="onChange">
      <span style="padding: 16px 15px; color: black;"> 〜 </span> 
      <input type="date" id="date" class="search-form-input" ref="to" @change="onChange">
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
  },
  methods: {
    onChange: function(){
      const params = { from: this.$refs.from.value, to: this.$refs.to.value }
      this.$emit("emitSelectDate", params);
    }
  }
};
</script>
