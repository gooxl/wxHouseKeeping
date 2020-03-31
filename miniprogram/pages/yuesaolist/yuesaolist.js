// pages/yuesaolist/yuesaolist.js
const db=wx.cloud.database();
Page({
  /**页面的初始数据*/
  data: {
    list:[],   //保存月嫂信息    
    pno:0,   //页码，0代表第一页
    pageSize:5,  


  },
  loadMore:function(){
    db.collection("yuesao")
    .get()
    .then(res=>{
        this.setData({
          list:this.data.list.concat(res.data),
        })
    }).catch(err=>{console.log(err)})
  },
  jumpDetail:function(e){

    var id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/yuesaoDetail/yuesaoDetail?id=${id}`
    })
  }, 
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    
    this.loadMore();
    wx.setNavigationBarTitle({
      title: '月嫂列表',
    })
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
    
    if(!this.data.load){
      this.setData({
        load:true,
        nodata:false
      })
      setTimeout(function(){
        this.loadMore();
      },2000)
    }
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