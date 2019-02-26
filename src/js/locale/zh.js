(function (win) {
  var RongSeal = win.RongSeal = win.RongSeal || {};
  RongSeal = RongSeal || {};
  RongSeal.locale = RongSeal.locale || {};
  RongSeal.locale.zh = {
    data: {
      installPrompt: '首次使用屏幕共享, 请下载并安装插件',
      downloadTitle: '下载插件',
      room: '会议 ID',
      user: '登录用户',
      self: '自己',
      roomIdEmpty: '房间号不能为空',
      userIdEmpty: '用户名不能为空',

      getTokenError: '获取 token 失败',
      rtcError: '初始化 RTC 失败',
      joinError: '加入房间失败',
      leftError: '离开房间失败',
      getScreenError: '获取屏幕共享流失败',
      addScreenError: '加入屏幕共享流失败',
      closeScreenError: '关闭屏幕共享失败',
      getWhiteboardError: '获取白板失败',
      publishError: '推送流失败',
      getLocalStreamError: '获取本地视频流失败',
      subscriptError: '订阅失败',
      closeVideoError: '关闭摄像头失败',
      openVideoError: '打开摄像头失败',
      closeAudioError: '关闭麦克风失败',
      openAudioError: '打开麦克风失败',
      switchStreamError: '切换流失败'
    },
    placeholder: {
      roomId: '请在这里输入会议 ID',
      userId: '请在这里输入用户名'
    },
    textContent: {
      closeVideo: '加入时不开启摄像头',
      closeAudio: '加入时不开启麦克风',
      setting: '通话设置',
      resolution: '分辨率',
      screenshareBusy: '正在分享屏幕',
      videoClosed: '摄像头已关闭',
      otherVideoClosed: '对方已关闭摄像头',
      alertTitle: '提示'
    },
    value: {
      startRTC: '开始会议',
      cancel: '取消',
      conform: '确定'
    },
    title: {
      hangup: '挂断',
      screenshare: '屏幕共享',
      whiteboard: '白板'
    }
  };
})(window);