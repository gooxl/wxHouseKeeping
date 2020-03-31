// pages/cooking/cooking.js
const db = wx.cloud.database();
Page({
  /*** 页面的初始数据*/
  data: {
    list:[],
    pid:"",           //商品id
    selected:"mor",   //产品选择按钮状态
    show: false,      //弹出层状态
  },
  loadMore: function () {
    wx.showLoading({
      title: '加载中。。。',
    })
    db.collection("hk-product")
      .where({
        _id: "6aebd2215e7f0a2c001afb3167a69af3"
      })
      .get()
      .then(res => {
        console.log(res.data)
        this.setData({
          list: res.data,
          pid: res.data[0]._id
        })
        wx.hideLoading();
      }).catch(err => { console.log(err) })
  },
  change:function (e) {  
    let sid=e.currentTarget.dataset.id;  //按钮的事件id
    let pid="";             
    if(sid=="mor"){
      pid ="6aebd2215e7f0a2c001afb3167a69af3"
    }else if(sid=="aft"){
      pid = "6aebd2215e8017c0001eee3d7e1c3cbb"
    }
    wx.showLoading({
      title: '加载中。。。',
    })
    db.collection("hk-product")
      .where({
        _id: pid
      })
      .get()
      .then(res => {
        this.setData({
          list: res.data,
          pid: res.data[0]._id,
          selected:sid
        })
        wx.hideLoading();
      }).catch(err => { console.log(err) })
  },

  onOpen(){  //打开弹出层
    this.setData({ show: true });
  },
  onClose() { //关闭弹出层
    this.setData({ show: false });
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