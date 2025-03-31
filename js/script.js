// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase();
            
            if (searchTerm.length < 2) {
                alert('Please enter at least 2 characters to search.');
                return;
            }
            
            // In a real implementation, you would:
            // 1. Fetch results from your game database
            // 2. Redirect to a search results page
            
            // For demo purposes, we'll just redirect to a placeholder
            window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
        });
    }

    // Initialize game card hover effects
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.play-button').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.play-button').style.opacity = '0';
        });
    });
    
    // Mobile navigation toggle (if implemented)
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Game statistics (for a real site, this would be server-side)
const gameStats = {
    trackGamePlay: function(gameId) {
        // Simulating tracking game play - in a real implementation,
        // this would send data to your analytics system
        console.log(`Game played: ${gameId}`);
        
        // For demo, we'll just use localStorage
        const plays = localStorage.getItem('gamePlays') ? 
            JSON.parse(localStorage.getItem('gamePlays')) : {};
        
        plays[gameId] = (plays[gameId] || 0) + 1;
        localStorage.setItem('gamePlays', JSON.stringify(plays));
    }
};

// Function to detect and handle browser/device compatibility
function checkCompatibility() {
    // Basic device/browser detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    // Apply class to body based on device type
    document.body.classList.toggle('is-mobile', isMobile);
    document.body.classList.toggle('is-ios', isIOS);
    
    // Check for WebGL support (important for some games)
    let webglSupported = false;
    try {
        const canvas = document.createElement('canvas');
        webglSupported = !!(window.WebGLRenderingContext && 
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch(e) {
        webglSupported = false;
    }
    
    document.body.classList.toggle('webgl-supported', webglSupported);
    
    return {
        isMobile,
        isIOS,
        webglSupported
    };
}

// Run compatibility check when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const compatibility = checkCompatibility();
    
    // Show warning for devices that might have issues
    if (!compatibility.webglSupported) {
        console.warn('WebGL not supported - some games may not work correctly');
    }
}); 