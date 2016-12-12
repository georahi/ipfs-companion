'use strict'
/* eslint-env browser, webextensions */
/* global onStorageChange, init */

// start tracking storage changes (user options etc)
browser.storage.onChanged.addListener(onStorageChange)

// init add-on after all libs are loaded
document.addEventListener('DOMContentLoaded', init)