// pages/order/order.js
const db=wx.cloud.database();
Page({

  /**页面的初始数据*/
  data: {
    date: "请选择服务时间>",  //默认时间
    address:"",       //保存用户输入的地址
    tel:"",         //保存用户电话
    citys: ["北京", "上海", "广州", "武汉", "成都", "深圳", "天津", "重庆"],
    city: 0,
    servicelist: ["清洁保姆", "做饭保姆","月嫂","护工"],
    service: 0,
  },
  getLocation: function () { //获取地图
    wx.chooseLocation({
      success: (res) => {
        var address = res.address + "(" + res.name + ")"
        this.setData({
          address: address
        })
      }
    })
  },
  telChange:function(e){   //电话
    this.setData({
      tel:e.detail
    })
  },
  serviceChange: function (e) { //服务选项
    this.setData({
      service: e.detail.value
    })
  },
  cityChange: function (e) { //地区选项
    this.setData({
      city: e.detail.value
    })
  },
  dateChange: function (e) { //时间选项
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value
    })
  },
  submit:function(){
    var city=this.data.citys[this.data.city];
    var service=this.data.servicelist[this.data.service];
    var date=this.data.date;
    var address = this.data.address;
    var tel=this.data.tel;
    var reg = /^1[3456789]\d{9}$/;
    if (!address){
      wx.showToast({
        icon:'none',
        title: '地址不能为空',
      })
      return;
    }
    if(!(reg.test(tel))){
      wx.showToast({
        icon: 'none',
        title: '请填写正确的手机号',
      })
      return;
    }
    if (date="请选择服务时间>"){
      wx.showToast({
        icon: 'none',
        title: '请选择服务时间',
      })
      return;
    }
    db.collection("orders")
    .add({
      data:{
        city,service,date,address,phone:tel
      }
    }).then(res=>{
      this.setData({
        date: "请选择服务时间>",
        val1: "",
        tel: "",
      });
      wx.showToast({
        title: '预约成功',
      });
    }).catch(err=>{console.log(err)})
  },

  /**生命周期函数--监听页面加载*/
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '快速预约',
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