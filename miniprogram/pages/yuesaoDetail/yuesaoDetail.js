// pages/yuesaoDetail/yuesaoDetail.js
const db=wx.cloud.database();
Page({
  /** 页面的初始数据*/
  data: {
    list:[],
    id:0,  //保存月嫂列表传来的id
    comment:[] //用户评价
    
  },

  jumpCollection:function(){
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  },
  jumpOrder:function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  jumpcomment:function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id
    
    wx.navigateTo({
      url: '/pages/comment/comment?id='+id,
    })
  },
  loadMore:function(){
    wx.showLoading({
      title: '加载中。。。',
    })
    //获取页面内容
    db.collection("yuesao") 
    .where({ _id: this.data.id }) //获取对应id的月嫂信息
    .get()
    .then(res=>{
      this.setData({
        list:res.data
      })
      wx.hideLoading();
    }).catch(err=>{console.log(err)})
    //获取评论内容
    db.collection("hk-comment")
      .where({ //获取对应月嫂的评论内容
        targetID: this.data.id
      }) 
      .get()
      .then(res => {
        this.setData({
          comment: res.data,
        })
      }).catch(err => { console.log(err) })
  },
   
 
  /** 生命周期函数--监听页面加*/
  onLoad: function (options) {
    this.setData({ id: options.id }); //保存月嫂列表中用户点击相应月嫂传来的id
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