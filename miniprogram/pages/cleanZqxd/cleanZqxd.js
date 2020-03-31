// pages/cleanZqxd/cleanZqxd.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pid:""
  },
  loadMore: function () {
    wx.showLoading({
      title: '加载中。。。',
    })
    db.collection("hk-product")
      .where({
        _id: "6aebd2215e7f09cb001af999787d6d0b"
      })
      .get()
      .then(res => {
        this.setData({
          list: res.data,
          pid: res.data[0]._id
        })
        wx.hideLoading();
      }).catch(err => { console.log(err) })
  },
  jumpPlaceorder: function () {
    wx.reLaunch({
      url: '/pages/placeOrder/placeOrder?pid=' + this.data.pid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})