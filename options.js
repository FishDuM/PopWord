// 加载保存的设置
function loadSettings() {
  chrome.storage.sync.get('showBoth', function(data) {
    document.getElementById('showBoth').checked = data.showBoth || false;
  });
}

// 保存设置
function saveSettings() {
  const showBoth = document.getElementById('showBoth').checked;
  
  chrome.storage.sync.set({ showBoth: showBoth }, function() {
    // 显示保存成功消息
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.style.display = 'block';
    setTimeout(function() {
      statusMessage.style.display = 'none';
    }, 2000);
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  loadSettings();
  document.getElementById('saveButton').addEventListener('click', saveSettings);
});