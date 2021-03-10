/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "GET_TOPIC_INFO") {
    // 获取 title
    const title = document.getElementsByTagName("title")[0].textContent;
    const descriptionEl = document.querySelectorAll("meta[name=description]")[0];
    // 获取 描述
    const description = descriptionEl ? descriptionEl.getAttribute("content") : title;
    // 发送数据
    sendResponse({
      title: title.trim(),
      link: location.href,
      description: description.trim()
    });
  }
});
