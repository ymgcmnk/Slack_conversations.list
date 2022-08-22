// スプレッドシート取得.
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName("チャンネルIDの取得");


// SlackAPIで登録したボットのトークンを設定する.
//直接指定の場合は　= "xoxb-から始まる上記Slack側の設定で取得したトークン";
const botUserOAuthToken = PropertiesService.getScriptProperties().getProperty('BotUserOAuthToken');
