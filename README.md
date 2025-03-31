# Game Station - Multi-Game Website

A modular, responsive static website for hosting multiple online games embedded via iframes.

## Project Structure

```
game-station/
├── index.html              # Homepage
├── css/
│   ├── styles.css          # Main stylesheet
│   └── game-page.css       # Game page specific styles
├── js/
│   └── script.js           # JavaScript functionality
├── games/
│   ├── game-template.html  # Template for game pages
│   ├── game1.html          # Puzzle Mania game page
│   ├── game2.html          # Space Shooter game page
│   └── ...                 # Additional game pages
├── categories/
│   ├── action.html         # Action games category page
│   ├── puzzle.html         # Puzzle games category page
│   └── ...                 # Additional category pages
└── images/
    └── thumbnails/         # Game thumbnail images
```

## How to Add a New Game

1. **Create a new game page:**
   - Copy `games/game-template.html` to a new file (e.g., `games/game3.html`)
   - Update the title, meta description, game details, and iframe URL
   - Make sure to update the category info and related games

2. **Add thumbnail image:**
   - Add a game thumbnail to `images/thumbnails/` (recommended size: 400x300px)

3. **Update relevant category page:**
   - Add the game to the appropriate category page
   - Update the game count in the category section on the homepage

## Game Page Template Structure

Each game page consists of:

1. **Header** - Navigation and logo
2. **Game container** - Title, metadata, iframe, and controls
3. **Game details** - Description, instructions, and related games
4. **Footer** - Links and site information

## Iframe Integration

To embed games, update the iframe source in each game page:

```html
<iframe id="game-frame" class="game-iframe" src="GAME_URL_HERE" frameborder="0" allowfullscreen></iframe>
```

Ensure that the game provider allows iframe embedding of their games. Many free game hosting platforms provide embed codes you can use.

## Customization

### Colors

The main color scheme can be modified in the CSS files:

- Primary: `#3498db` (blue)
- Secondary: `#2c3e50` (dark blue)
- Text: `#333333` (dark gray)
- Background: `#f5f5f5` (light gray)

### Categories

To add a new category:

1. Create a new category page in the `categories/` directory
2. Add the category to the navigation menu in all HTML files
3. Update the category grid on the homepage

## SEO Optimization

Each page includes:

- Meta title
- Meta description
- Semantic HTML structure
- Alt text for images

## Browser Compatibility

The website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Responsive Design

The layout adapts to different screen sizes:

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## License

This project is available for personal and commercial use.

## Credits

- Font Awesome for icons
- Game providers for embeddable games 