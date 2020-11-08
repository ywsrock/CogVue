<template>
  <div class="col-sm-12 col-md-6">
    <div class="form-group" style="display: flex;">
      <p class="search-form-title"><span style="margin: 0 auto;">{{ title }}</span></p>
      <input type="date" id="date" class="search-form-input">
      <span style="padding: 16px 15px; color: black;"> 〜 </span> 
      <input type="date" id="date" class="search-form-input">
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
  }
};
</script>
