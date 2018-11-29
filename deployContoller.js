// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

  chrome.commands.onCommand.addListener(function(command) {
    
    switch (command) {
      case 'toggle-feature-addForm': 
        addForm('ddd', 'sdsd');
        break;
      case 'toggle-feature-deleteForm':
        deleteForm();
        break;
    }
  });

  chrome.runtime.onInstalled.addListener(function() {
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: ''},
        })],
        actions: [
          new chrome.declarativeContent.ShowPageAction()]
      }]);
    });    
  });

  
