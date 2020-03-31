// pages/placeOrder/placeOrder.js
const db=wx.cloud.database();
Page({
  /** * 页面的初始数据*/
  data: {
    list:[],       //保存产品信息
    pid:"",        //保存产品ID
    showAdd: false,  //服务地址上拉菜单状态
    showDate: false,   //服务日期上拉菜单状态
    radio:'1',       //单选按钮状态
    date: "",  //服务时间
    userMsg: [],   //用户信息
    // phone:"",     //用户电话
    // uname:"",      //用户名
    // address:"",    //用户地址
    // addNum:"",     //用户门牌号

    pname:"",    //产品名称
    price:0,   //产品价钱
    remarks:"",  //客户备注
    total:0,     //总价    
  },
  loadMore:function(){  //加载对应产品内容
    db.collection("hk-product")
    .where({ _id:this.data.pid })
    .get()
    .then(res=>{
      this.setData({
        total:res.data[0].newPrice*100,
        list:res.data
      })
    }).catch(err=>{console.log(err)})
  },
  onChange(e) { 
    console.log(e.detail)
    this.setData({
      radio: e.detail
    });
  },
  onClick(e) {
    let name  = e.currentTarget.dataset;
    console.log(name)
    this.setData({
      radio: name
    });
  },
  remarksChange:function(e){ //绑定用户的备注内容
    this.setData({
      remarks:e.detail
    })
  },
  dateChange: function (e) { //绑定时间选项内容
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value
    })
  },
  onCloseAdd() {
    this.setData({ showAdd: false });
  },
  onOpenAdd() { //打开弹出层并加载地址信息
    db.collection("hk-usermsg")
    .where({})
    .get()
    .then(res => {
      console.log(res.data)
      this.setData({
        showAdd: true,
        userMsg:res.data,
      })
    }).catch(err => { console.log(err) })
  },
  onCloseDate() {
    this.setData({ showDate: false });
  },
  onOpenDate() {
    this.setData({ showDate: true });
  },
  jumpAdd: function () {  //跳转至新增地址页面
    wx.navigateTo({
      url: '/pages/addAddress/addAddress',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.pid)
    this.setData({pid:options.pid})
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