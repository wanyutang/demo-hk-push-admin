## 推播管理平台 HTML 切版專案

#### Visual Studio Code 安裝以下擴充套件
* ESLint
* stylelint
* Prettier

#### 專案執行需求
需安裝 node.js 8.12.0 以上(含8.12.0)版本

#### Script
安裝套件指令
``` shell
npm i
```

開發時啟動網站指令 - 啟動後開啟 http://localhost:8080/ 即可瀏覽網站
``` shell
npm start
```

打包專案指令 - 檔案將產出於專案目錄內的 build 資料夾
``` shell
npm run build
```

#### 檔案使用說明
打包完成後，在 build 資料夾內部份檔案是方便開發人員瀏覽頁面與組件的資料使用，不需置入專案  
index.html  
develop-only-css/  
js/development-only.js  
js/development-only.js.map  
js/main.js  
js/main.js.map  

#### 頁面清單
* 頁面、組件資訊總覽頁 - index.html(開發參考用)  
* 登入頁 - login.html  
* 待處理案件頁 - pending.html  
* API 設定頁 - settings.html  
* 推播歷史資料查詢 - history.html  

#### 使用套件
* jQuery(版本：3.5.1) - https://jquery.com/
* Bootstrap(版本：4.5.0) - https://getbootstrap.com/
* jQuery Selectric(版本：1.13.0) - https://selectric.js.org/
* Boosttrap Datepicker(版本：1.9.0) - https://bootstrap-datepicker.readthedocs.io/en/latest/

#### 樣式色碼定義
![Color Guideline](/readmeImage/tpi-notification-color-guideline.jpg)

依據設計介面規範定義如下(SASS 變數)：  
$primary-color-1: #213f79;  
$primary-color-2: #213f79;  
$primary-color-3: #2e5fb2;  
$primary-color-4: #1c2537;  
$primary-color-5: #f7f8f9;  
$secondary-color-1: #eaeff5;  
$secondary-color-2: #9dabba;  
$secondary-color-3: #7e32a5;  
$secondary-color-4: #fff;  
$secondary-color-5: #e6effc;  
$secondary-color-6: #fbfbfb;  
$secondary-color-7: #e4e2e2;  
$text-color-1: #364052;  
$text-color-2: #9ea2ac;  
$text-color-3: #78777f;  
$text-color-4: #17b586;  
$text-color-5: #3a86df;  
$text-color-6: #f77c2d;  
$text-color-7: #e65100;
