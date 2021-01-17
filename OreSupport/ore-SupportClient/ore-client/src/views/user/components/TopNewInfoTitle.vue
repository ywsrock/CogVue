<template>
  <div>
    <h3 :class="TitleClassName">
      {{ Title }}
      <div class="top-new-info-link">
        <a :href="Link" style="color: black;">
          もっと見る＞
        </a>
      </div>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    Title: {
      type: String,
      require: true
    },
    TitleClassName: {
      type: String,
      require: true
    },
    Link: {
      type: String,
      require: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.top-new-blog-title {
  margin-bottom: 10px;
  border-bottom: solid 3px #0038FF;
  padding-left: 15px;
  padding-bottom: 5px;
}

.top-new-product-title {
  margin-bottom: 10px;
  border-bottom: solid 3px #FA60F4;
  padding-left: 15px;
  padding-bottom: 5px;
}

.top-new-seminor-title {
  margin-bottom: 10px;
  border-bottom: solid 3px #90EE90;;
  padding-left: 15px;
  padding-bottom: 5px;
}

.top-new-info-link {
  text-align: right;
  float:right;
  font-size: 14px;
}
</style>