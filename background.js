// Simple background script for the Wikipedia Summarizer extension
console.log('Wikipedia Summarizer extension loaded');

// Listen for installation
chrome.runtime.onInstalled.addListener(function() {
  console.log('Wikipedia Summarizer extension installed');
});