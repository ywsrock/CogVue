<template>
  <div>
    <header>
      <div class="header-statusbar">
        <div class="header-statusbar-inner">
          <div class="header-statusbar-left">
            <h1>検測記録</h1>

            <!--<div class="display-inline-block">
              <div class="hidden-xs visible-lg">
                <div class="header-statusbar-search">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search for..."
                  />
                </div>
              </div>
            </div>-->
          </div>

          <div class="header-statusbar-right">
            <div class="hidden-xs visible-lg">
              <a class="btn btn-primary search-button" @click="print()"
                >PDF出力</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    // ページのコンテントとなる部分を抽出して印刷
    print: function() {
      window.document.body.innerHTML = document.getElementById(
        "printable"
      ).innerHTML;
      window.print();
      location.href = "/#/task/userHistory";
      location.reload();
    },
  },
};
</script>
