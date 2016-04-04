/*
 * intercom-to-sheets v1.0
 * Created by the Growth Team at https://www.352inc.com
 * Team Silver (@damionwasylow, @latrointhemist, and @russebp)
 * Documentation: https://github.com/352Media/intercom-to-sheets
 * Licensed under the MIT and GPL-3 licenses.
 *   tl;dr - Basically, you can do whatever you want as long as you include
 *   the original copyright and license notice in any copy of the software.
 *   Any modifications to the code must also be made available under these
 *   same licenses.
 */

 //Returns JSON
 function getCounts(type, count) {
   var scriptProperties = PropertiesService.getScriptProperties();
   //Set "App ID" and "API Key" in Project properties > Script Properties
   var username = scriptProperties.getProperty("App ID");
   var apiKey = scriptProperties.getProperty("API Key");
   var basicCreds = "Basic " + Utilities.base64Encode(username + ":" + apiKey);
   var requestURL = "";

   var baseURL = "https://api.intercom.io/counts";

   if (!type) requestURL = baseURL;
   if (type && !count) requestURL = baseURL +"?type="+ type;
   if (type && count) requestURL = baseURL +"?type="+ type +"&count="+ count;

   Logger.log(requestURL);

   //Set request headers
   var headers = {
     "Accept": "application/json",
     "Authorization": basicCreds
   }

   var options = {
     "method":"get",
     "headers":headers
   }

   var response = UrlFetchApp.fetch(requestURL, options);
   var JSONString = response.getContentText();

   Logger.log(JSONString);

   var JSONObject = JSON.parse(JSONString);

   return JSONObject;
 }

//Imports returned JSON into Google Sheets
 function importUserSegmentCount(){
   //Change value below to your spreadsheet id. http://352.fm/whatismygooglesheetkey
   var ss = SpreadsheetApp.openById("change-value-here");
   //Optional: Change value if you want to import to a different sheet name. Make sure this sheet exists.
   var countSheet = ss.getSheetByName("RAW - API Import");
   var obj = getCounts("user", "segment");
   var segments = obj.user.segment;
   var outputObj = {};
   var timeStamp = new Date(Date.now());
   var retArr = new Array();

   for (var i=0; i<segments.length; i++){
     var tempObj = segments[i];
     var key = Object.keys(tempObj)[0];

     retArr.push([timeStamp, key, tempObj[key]]);
   }
   //Check number of rows remaining and insert more if necessary
   var importRow = countSheet.getLastRow()+1;
   countSheet.insertRowsAfter(importRow-1, retArr.length);

   Logger.log(retArr);

   //Get range of cells to insert info into
   var insertRange = countSheet.getRange(importRow, 1, retArr.length, retArr[0].length);
   insertRange.setValues(retArr);
 }
