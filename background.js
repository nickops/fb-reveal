// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  	$.ajax({
	    type:     "GET",
	    url:      tab.url,
	    dataType: "jsonp",
	    success: function(data){
	        console.log(data);
	    }
	});
  
  /*console.log(tab);
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({

    
  });*/
});
