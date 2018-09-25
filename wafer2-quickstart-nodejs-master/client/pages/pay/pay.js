Page({
  data: {
    inputValue: ''
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  handleTap1:function (e) {
    wx.requestPayment(
      {
        'timeStamp': '1490840662',
        'nonceStr': '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
        'package': 'prepay_id=wx2017033010242291fcfe0db70013231072',
        'signType': 'MD5',
        'paySign': 'MD5(appId=wxd678efh567hg6787',
        'success':function(res){},
        'fail':function(res){
          console.log(res)
        },
        'complete':function(res){}
      })
  }
})