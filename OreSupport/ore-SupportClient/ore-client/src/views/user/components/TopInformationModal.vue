<template>
  <div class="modal-background">
    <div
      class="background-white p20 mb30"
      style="width: 70%; height: 70%; position: absolute; top: 15%; left: 15%;"
    >
      <h3 class="page-title">
        {{ informationDetail.title }} ({{ informationDetail.from }})
      </h3>
      <p>
        {{ informationDetail.content }}
      </p>

      <div
        style="text-align: right;margin-bottom: 0;position: absolute;bottom: 20px;right: 20px;"
      >
        <button
          @click="$emit('emitCloseModal', false)"
          type="button"
          class="btn btn-primary mr-2"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    informationDetail: {
      type: Object,
      require: true
    },
  },
  methods: {
  },
};
</script>
