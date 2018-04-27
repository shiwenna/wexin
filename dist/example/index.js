Page({
  data: {
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader']
      },
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
      },
      {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
      },
      {
        id: 'nav',
        name: '导航相关',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'search',
        name: '搜索相关',
        open: false,
        pages: ['searchbar']
      }
    ],
    list1: [
      {
        h1: 'web前端',
        h2: ['海尔', '已上市'],
        flag: ['青岛', '3-5年', '本科'],
        money: '11k-12k',
        company:'独方圆·海尔文化产业公司副总经理',
        icon:''
      },
      {
        h1: 'web前端',
        h2: ['中科曙光', '已上市'],
        flag: ['青岛', '1-3年', '本科'],
        money: '10k-15k',
        company: '向消防·HR',
        icon: ''
      },
      {
        h1: 'web前端',
        h2: ['海尔', '已上市'],
        flag: ['青岛', '3-5年', '本科'],
        money: '11k-12k',
        company: '独方圆·海尔文化产业公司副总经理',
        icon: ''
      },
      {
        h1: '高级web前端开发工程师',
        h2: ['联信网络科技', '不需要融资'],
        flag: ['青岛', '3-5年', '本科'],
        money: '9k-11k',
        company: '诗经·人事',
        icon: ''
      },
      {
        h1: '前端工程师',
        h2: ['海尔', '已上市'],
        flag: ['青岛', '3-5年', '本科'],
        money: '8k-12k',
        company: '海尔',
        icon: ''
      },
    ],
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'web前端'
    });
    wx.setTabBarBadge({
      index: 0,
      text: '1'
    });

  }
}
);
