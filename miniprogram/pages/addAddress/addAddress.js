// pages/addAddress/addAddress.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uname:"", //保存用户输入用户名
    phone: "",    //保存用户输入手机号
    telMsg:"",   //手机提示信息
    addNum:"",    //保存门牌号
    telDisabled:false,  //手机提示信息显示状态
    show:false,   //下拉菜单状态
    address:"",   //保存地址
    areas: ["请选择","90㎡以下", "90~119㎡", "120~139㎡", "140~160㎡","160㎡以上"],
    area:0,   //保存当前选择的面积 

  },
  getLocation:function(){ //获取地图
    wx.chooseLocation({
      success:(res)=>{
        var address = res.address + "("+res.name+")"
        this.setData({
          address:address
        })
      }
    })
  },
  submit:function(){  //提交
    var uname=this.data.uname;
    var phone=this.data.phone;
    var addNum=this.data.addNum;
    var address=this.data.address;
    var area=this.data.areas[this.data.area]
    if(!uname){
      wx.showToast({
        icon:"none",
        title: '联系人不能为空',
      })
      return;
    };
    if(!phone){
      wx.showToast({
        icon:"none",
        title: '电话号码不能为空',
      })
      return;
    };
    if (!address){
      wx.showToast({
        icon:"none",
        title: '请选择地址',
      })
      return;
    };
    if (this.data.area===0){
      wx.showToast({
        icon:"none",
        title: '请选择家庭面积',
      })
      return;
    };
    db.collection("hk-usermsg")  //上传数据库
    .add({
      data: { uname, phone, address, addNum, area}
    }).then(res=>{
      wx.showToast({
        title: '添加成功',
      })
      this.setData({ //添加成功后清空页面
        uname: "", 
        phone: "",    
        telMsg: "",   
        addNum: "",    
        telDisabled: false,  
        address: "", 
        area:0
      });
    }).catch(err=>{console.log(err)})
    
  },
  onConfirm(e) {
    this.setData({ 
      area: e.detail.index,
      show: false
    });
  },
  onOpen() {   //打开弹出层
    this.setData({ show: true });
  },
  onClose() {  //关闭弹出层
    this.setData({ show: false });
  },
  addNumChange:function(e){  //门牌号
    this.setData({
      addNum:e.detail
    })
  },
  nameChange: function (e) {   //用户名
    this.setData({
      uname: e.detail
    })
  },
  areaChange: function (e) {   //面积
    this.setData({
      area: e.detail
    })
  },
  telChange: function (e) {   //电话
    let message="";
    if(e.detail){
      if (/^1[3456789]\d{9}$/.test(e.detail)){
        message="";

      }else{
        message="手机号码有误";
      }
    }else{
      message="手机号码不能为空";

    }
    this.setData({
      telMsg: message,
      phone: e.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新增地址',
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