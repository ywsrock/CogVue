import { debounce } from '@/utils/tools'

export default {
  data() {
    return {
      $_sidebarOre: null,
      $_resizeAction: null
    }
  },
  mounted() {
    this.$_resizeAction = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    this.$_initEventForResize()
    this.$_initResizeEventForSidebar()
  },
  beforeDestroy() {
    this.$_destroyEventForResize()
    this.$_destroyResizeEventForSidebar()
  },
  activated() {
    this.$_initEventForResize()
    this.$_initResizeEventForSidebar()
  },
  deactivated() {
    this.$_destroyEventForResize()
    this.$_destroyResizeEventForSidebar()
  },
  methods: {
    $_initEventForResize() {
      window.addEventListener('resize', this.$_resizeAction)
    },
    $_destroyEventForResize() {
      window.removeEventListener('resize', this.$_resizeAction)
    },
    $_sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.$_resizeAction()
      }
    },
    $_initResizeEventForSidebar() {
      this.$_sidebarOre = document.getElementsByClassName('dashboard-container')[0]
      this.$_sidebarOre && this.$_sidebarOre.addEventListener('transitionend', this.$_sidebarResizeHandler)
    },
    $_destroyResizeEventForSidebar() {
      this.$_sidebarOre && this.$_sidebarOre.removeEventListener('transitionend', this.$_sidebarResizeHandler)
    }
  }
}
