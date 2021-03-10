/**
 * 获取当前页得tabid
 * @returns
 */
export const ChromTabsQuery = (): Promise<number | any> => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      (tabs: Array<chrome.tabs.Tab>): void => {
        tabs.length ? resolve(tabs[0].id) : reject(null);
      }
    );
  });
};

/**
 * 向浏览器注入脚本
 * @param tabId
 * @param path
 * @returns
 */
export const ChromeTabsExecuteScript = (tabId: number, path: string) => {
  return new Promise(resolve => {
    chrome.tabs.executeScript(tabId, { file: path }, response => {
      resolve(response);
    });
  });
};

/**
 * 向浏览器发送Message
 * @param tabId
 * @param message
 * @returns
 */
export const ChromeTabsSendMessage = (
  tabId: number,
  message: {}
): Promise<{
  title: string;
  link: string;
  description: string;
}> => {
  return new Promise(resolve => {
    chrome.tabs.sendMessage(tabId, message, response => resolve(response));
  });
};
