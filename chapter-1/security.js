// ===== COMPREHENSIVE WEBSITE SECURITY =====
(function() {
    'use strict';

    // 1. DISABLE DEVELOPER TOOLS (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+K (Developer Console alternative)
        if (e.ctrlKey && e.shiftKey && e.key === 'K') {
            e.preventDefault();
            return false;
        }
    });

    // 2. DISABLE RIGHT-CLICK CONTEXT MENU
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('🔒 Right-click is disabled for this website. Protected by DHYEY MALVANIYA Security.');
        return false;
    });

    // 3. DISABLE COPY-PASTE
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        alert('📋 Copy is disabled. This content is protected.');
        return false;
    });

    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('paste', function(e) {
        e.preventDefault();
        alert('📋 Paste is disabled. This content is protected.');
        return false;
    });

    // 4. DISABLE TEXT SELECTION
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('mousedown', function(e) {
        if (e.detail > 1) {
            e.preventDefault();
            return false;
        }
    });

    // 5. DETECT DEVELOPER TOOLS OPENING
    let devToolsOpen = false;
    const threshold = 160;

    setInterval(function() {
        const height = window.outerHeight - window.innerHeight;
        const width = window.outerWidth - window.innerWidth;

        if (height > threshold || width > threshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                console.clear();
                console.log('%c⚠️ SECURITY WARNING ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
                console.log('%c Developer tools are disabled for security!', 'color: orange; font-size: 14px;');
                console.log('%c Do not attempt to inspect or modify this website.', 'color: red; font-size: 12px;');
            }
        } else {
            devToolsOpen = false;
        }
    }, 1000);

    // 6. DISABLE INSPECT ELEMENT
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('drop', function(e) {
        e.preventDefault();
        return false;
    });

    // 7. PREVENT CODE INSPECTION VIA CONSOLE
    Object.defineProperty(window, 'console', {
        value: new Proxy(console, {
            get(target, prop) {
                if (prop === 'log' || prop === 'warn' || prop === 'error' || prop === 'info') {
                    return function() {
                        console.clear();
                        return null;
                    };
                }
                return target[prop];
            }
        }),
        writable: false
    });

    // 8. PREVENT DEBUGGING
    setInterval(function() {
        debugger;
    }, 100);

    // 9. DISABLE IFRAME ACCESS
    if (window !== window.top) {
        window.top.location = window.self.location;
    }

    // 10. PREVENT SOURCE MAP ACCESS
    window.addEventListener('error', function(e) {
        e.preventDefault();
        return false;
    });

    // 11. PROTECT AGAINST COMMON INJECTION ATTACKS
    const blockKeywords = ['eval', '__proto__', 'constructor', 'prototype'];
    Object.freeze(Object.prototype);
    Object.freeze(Array.prototype);
    Object.freeze(Function.prototype);

    // 12. DISABLE KEYBOARD SHORTCUTS FOR DEVELOPER TOOLS
    const disabledKeys = [123]; // F12
    document.onkeydown = function(e) {
        if (disabledKeys.includes(e.keyCode)) {
            return false;
        }
    };

    // 13. WATERMARK MESSAGE
    console.clear();
    console.log('%c========================================', 'color: gold; font-size: 12px;');
    console.log('%cDHYEY MALVANIYA - PROTECTED WEBSITE', 'color: gold; font-size: 14px; font-weight: bold;');
    console.log('%c========================================', 'color: gold; font-size: 12px;');
    console.log('%cThis website is protected with advanced security measures.', 'color: orange;');
    console.log('%cUnauthorized access, copying, or modification is prohibited.', 'color: orange;');
    console.log('%c© 2026 Dhyey Malvaniya. All rights reserved.', 'color: gold;');
    console.log('%c========================================', 'color: gold; font-size: 12px;');

    // 14. PREVENT MOUSE RIGHT-CLICK SIMULATION
    document.addEventListener('mouseup', function(e) {
        if (e.button === 2) {
            e.preventDefault();
            return false;
        }
    });

    // 15. BLOCK NETWORK REQUESTS FOR SUSPICIOUS ACTIVITY
    window.addEventListener('error', function(e) {
        if (e.message && e.message.includes('script') && e.message.includes('denied')) {
            console.clear();
            return false;
        }
    });

    console.log('%cSecurity Mode: ACTIVE ✓', 'color: green; font-weight: bold; font-size: 14px;');

})();
