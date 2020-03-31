// pages/home/home.js
const db=wx.cloud.database();
Page({
  /* 页面的初始数据*/
  data: {
    hotlist:[],  //保存热销品类
    fileID: ['cloud://web1907-5gual.7765-web1907-5gual-1301373168/houseKeeping/carousel1.jpg',
      'cloud://web1907-5gual.7765-web1907-5gual-1301373168/houseKeeping/carousel2.jpg']
  },
  jumpOrder:function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  jumpYuesaolist:function(){
    wx.navigateTo({
      url: '/pages/yuesaolist/yuesaolist',
    })
  },
  jumpClean:function(){
    wx.navigateTo({
      url: '/pages/clean/clean',
    })
  },
  jumpCooking:function(){
    wx.navigateTo({
      url: '/pages/cooking/cooking',
    })
  },

  // loadImg:function(){
  //   var fID = ['cloud://web1907-5gual.7765-web1907-5gual-1301373168/houseKeeping/carousel1.jpg',
  //     'cloud://web1907-5gual.7765-web1907-5gual-1301373168/houseKeeping/carousel2.jpg'];
  //   for(var i=0;i<fID.length;i++){
  //     wx.cloud.callFunction({
  //       name:"getFile",
  //       data:{fileID:}
  //      }).then(res => {
  //         console.log(res.tempFilePath);
  //       }).catch(err => { console.log(err) })
  //   }
  // },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {  
    //加载热销数据
    db.collection("hotsale") 
      .get()
      .then(res => {
        this.setData({
          hotlist:res.data
        })

      })
      .catch(err => { console.log(err) })
    // 加载轮播图
    //this.loadImg();
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