<template>
  <v-container style="max-width: 600px;">
    <v-timeline dense clipped>
      <v-timeline-item fill-dot class="mb-12" color="orange" large>
        <template v-slot:icon>
          <span>en</span>
        </template>
        <v-row justify="space-between">
          <v-col cols="8">
            <v-chip class="white--text ml-0" color="purple" label small>
              アクションタイムライン
            </v-chip>
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">味噌汁飲みました。（塩分抑える）</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="pink" small>
        <v-row justify="space-between">
          <v-col cols="7">
            <v-chip class="white--text ml-0" color="purple" label small>
              ランニング
            </v-chip>
            <v-col> 1時間ランニングしていますた。</v-col>
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="grey" small>
        <v-row justify="space-between">
          <v-col cols="7">
            1時間ランニングしていますた。1時間ランニングしていますた。
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="grey" small>
        <v-row justify="space-between">
          <v-col cols="7">
            1時間ランニングしていますた。1時間ランニングしていますた。1時間ランニングしていますた。
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item color="grey" small>
        <v-row justify="space-between">
          <v-col cols="7">
            1時間ランニングしていますた。1時間ランニングしていますた。1時間ランニングしていますた。
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "ActionTimeLine",
};
</script>
