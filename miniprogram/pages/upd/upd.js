// pages/upd/upd.js
// const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edu:"",
    served:0,
    state:"",
    position:"",
    eva:0,
    price:0,
    nation:"",
    title:"",
    zodiac:"",
    marry:"",
    ability:"",
    introduce:"",
    id:""
  },
  eduChange:function(e){
    this.setData({ edu: e.detail.value})
  },
  servedChange:function(e){
    this.setData({ served: e.detail.value})
  },
  stateChange:function(e){
    this.setData({ state: e.detail.value})
  },
  positionChange:function(e){
    this.setData({ position: e.detail.value})
  },
  evaChange:function(e){
    this.setData({ eva: e.detail.value})
  },
  priceChange:function(e){
    this.setData({ price: e.detail.value})
  },
  nationChange:function(e){
    this.setData({ nation: e.detail.value})
  },
  titleChange:function(e){
    this.setData({ title: e.detail.value})
  },
  zodiacChange:function(e){
    this.setData({ zodiac: e.detail.value})
  },
  marryChange:function(e){
    this.setData({ marry: e.detail.value})
  },
  abilityChange:function(e){
    this.setData({ ability: e.detail.value})
  },
  introduceChange:function(e){
    this.setData({ introduce: e.detail.value})
  },
  idChange:function(e){
    this.setData({ id: e.detail.value})
  },

  submit:function(){
    wx.cloud.callFunction({
      name:"update",
      data:{
        id:this.data.id,
        edu: this.data.edu,
        served: this.data.served,
        state: this.data.state,
        position: this.data.position,
        eva: this.data.eva,
        price: this.data.price,
        nation: this.data.nation,
        title: this.data.title,
        zodiac: this.data.zodiac,
        marry: this.data.marry,
        ability: this.data.ability,
        introduce: this.data.introduce
      }
    }).then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    // db.collection("yuesao")
    //   .doc("9256b6d2-0fff-4886-a71f-f26f1cef991d")
    // .update({
    //   data:{
    //     edu: this.data.edu,
    //     served: this.data.served,
    //     state: this.data.state,
    //     position: this.data.position,
    //     eva: this.data.eva,
    //     price: this.data.eprice,
    //     nation: this.data.nation,
    //     title: this.data.title,
    //     zodiac: this.data.zodiac,
    //     marry: this.data.marry,
    //     ability: this.data.ability,
    //     introduce: this.data.introduce
    //   }
    // }).then(res=>{
    //   console.log(res)
    // }).catch(err=>{console.log(err)})
  },


  /**生命周期函数--监听页面加载*/
  onLoad: function (options) {
    
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