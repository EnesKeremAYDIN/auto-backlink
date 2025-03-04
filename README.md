# Auto Backlink

Auto Backlink is a simple JavaScript script that dynamically adds hidden backlinks to your webpage. You can customize the link name, URL, rel (nofollow/dofollow), and target attributes.

## Features

- Dynamically adds hidden backlinks to your webpage.
- Supports custom name, URL, rel (nofollow/dofollow), and target attributes.
- Automatically runs when the page loads.

## Requirements

- Any modern web browser with JavaScript enabled.

## Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/EnesKeremAYDIN/auto-backlink.git
cd auto-backlink
```

2. Upload the `script.js` file to your server.

3. Include the following code in your HTML file to load the script:

```html
<script src="https://example.com/script.js" crossorigin="anonymous" type="text/javascript"></script>
```

## Customizing Backlinks

Edit the `linkList` array in `script.js` to add or modify links:

```javascript
const linkList = [
  { name: 'Example', url: 'https://example.com', rel: 'nofollow', target: '_blank' },
  { name: 'Example Test', url: 'https://example.com/test', rel: 'dofollow', target: '_self' }
];
```

## Example Output

When loaded, the script will append hidden links like this to your webpage:

```html
<a href="https://example.com" rel="nofollow" target="_blank">Example</a>
<a href="https://example.com/test" rel="dofollow" target="_self">Example Test</a>
```
