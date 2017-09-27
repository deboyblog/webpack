/**
 * Created by Deboy on 2016/10/23.
 */
export default {
  data () {
    return {
      list: [],
      page: 1,
      limit: 15,
      total: 0,
      sortUp: 'DESC',
      isRouteActive: false
    }
  },
  created () {
    let option = this.$options.doNotInit
    if (!option) {
      this.initList()
    }
  },
  computed: {
    // 禁止加载更多
    disabledLoadMore () {
      return !this.isRouteActive || this.isBusy || this.list.length === 0 || this.list.length >= this.total
    }
  },
  watch: {
    page: 'loadData'
  },
  methods: {
    /**
     * 获取请求参数 默认只传递index(页码) limit(每页条数) 可以由调用方传递指定对象合并(或者覆盖)原参数
     * @param params
     * @returns {*}
     */
    getParams (params) {
      return Object.assign({
        index: this.page,
        size: this.limit,
        sort: 'id,' + this.sortUp
      }, params)
    },
    /**
     * 加载更多
     */
    loadMore () {
      if (!this.isBusy) {
        this.page++
      }
    },
    /**
     * 推送到list中 因为vue的监听特性 只能用push进行数据的添加 如果有特殊处理 通过传递一个filter来过滤数据
     * @param list
     * @param filter
     * @param total
     */
    pushToList (list, filter, total = 0) {
      list.forEach((item) => {
        if (typeof filter === 'function') {
          this.list.push(filter(item))
        } else {
          this.list.push(item)
        }
      })
      this.total = total
    },
    /**
     * 初始化列表
     */
    initList () {
      this.page = 1
      this.total = 0
      this.list = []
      this.loadData()
    },
    /**
     * @overwrite
     * 加载数据方法 用到该mixin的都应该重写该方法 否则无法实现加载数据
     */
    loadData () {
      // 每个列表自己的获取数据的方法需要重写
    }
  },
  deactivated () {
    this.isRouteActive = false
  },
  activated () {
    this.isRouteActive = true
  }
}
