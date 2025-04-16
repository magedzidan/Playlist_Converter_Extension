# Wikipedia Summarizer Chrome Extension

A Chrome extension that allows users to quickly get summaries of Wikipedia articles by simply entering the article title.

## Features

- Clean and modern user interface
- Quick Wikipedia article summarization
- Responsive design that works well in the extension popup
- Simple and intuitive user experience

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the project directory

## Usage

1. Click the extension icon in your Chrome toolbar
2. Enter the title of the Wikipedia article you want to summarize
3. Click the "Summarize" button
4. The summary will appear below the input field

## Project Structure

```
browser_extension/
├── hello.html          # Main popup interface
├── styles.css          # Styling for the extension
├── popup.js           # Extension functionality
└── manifest.json      # Extension configuration
```

## Styling

The extension features a modern, clean design with the following styling characteristics:

### Colors
- Background: Light gray (`#f5f5f5`)
- Container: White
- Primary Button: Blue (`#3498db`)
- Button Hover: Darker blue (`#2980b9`)
- Text: Dark gray (`#333`)
- Headings: Dark blue-gray (`#2c3e50`)

### Layout
- Centered container with max-width of 600px
- Responsive design that adapts to the popup window
- Clean spacing with consistent padding and margins
- Subtle shadow effects for depth

### Typography
- Font Family: 'Segoe UI', Arial, sans-serif
- Comfortable line height for readability
- Centered text alignment for better visual balance

### Interactive Elements
- Smooth transitions on hover and focus states
- Clear visual feedback for user interactions
- Rounded corners for a modern look
- Consistent padding and spacing

## Development

To modify the extension:

1. Edit the HTML structure in `hello.html`
2. Modify styles in `styles.css`
3. Update functionality in `popup.js`
4. Reload the extension in Chrome to see changes

## Contributing

Feel free to submit issues and enhancement requests!

