// Birthday App JavaScript

let balloonScore = 0;
let candlesBlown = 0;
const totalCandles = 8;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to surprise button
    document.getElementById('surpriseBtn').addEventListener('click', showSurprise);
    
    // Play birthday music (optional - commented out as it requires audio file)
    // playBirthdayMusic();
});

// Surprise button functionality
function showSurprise() {
    createConfetti();
    showBirthdayMessage();
    playHappyAnimation();
}

// Create confetti animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffeaa7', '#fab1a0', '#fd79a8'];
    
    // Clear existing confetti
    confettiContainer.innerHTML = '';
    
    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.animationDelay = Math.random() * 3 + 's';
        confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confettiPiece);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Show birthday message
function showBirthdayMessage() {
    const messages = [
        "🎉 You're the most amazing 8-year-old ever! 🎉",
        "🌟 Hope your birthday is as special as you are! 🌟",
        "🎂 Make a wish and blow out the candles! 🎂",
        "🦄 May all your dreams come true today! 🦄",
        "🌈 You bring so much joy to everyone! 🌈"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create popup message
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 1001;
        text-align: center;
        font-size: 1.5rem;
        color: #ff6b6b;
        border: 3px solid #4ecdc4;
        animation: popup 0.5s ease-out;
    `;
    
    popup.innerHTML = `
        <div>${randomMessage}</div>
        <button onclick="this.parentElement.remove()" style="
            margin-top: 20px;
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-family: inherit;
        ">Close</button>
    `;
    
    document.body.appendChild(popup);
    
    // Add popup animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popup {
            0% { transform: translate(-50%, -50%) scale(0); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Play happy animation
function playHappyAnimation() {
    const title = document.querySelector('.birthday-title');
    title.style.animation = 'none';
    setTimeout(() => {
        title.style.animation = 'bounce 0.5s ease-in-out 3';
    }, 10);
}

// Balloon popping game
function popBalloon(balloon) {
    if (!balloon.classList.contains('popped')) {
        balloon.classList.add('popped');
        balloonScore++;
        document.getElementById('balloonScore').textContent = balloonScore;
        
        // Play pop sound effect (visual feedback)
        balloon.textContent = '💥';
        setTimeout(() => {
            balloon.textContent = '🎈';
        }, 500);
        
        // Check if all balloons are popped
        if (balloonScore >= 5) {
            setTimeout(() => {
                alert('🎉 Amazing! You popped all the balloons! 🎉');
                createConfetti();
            }, 500);
        }
    }
}

// Reset balloon game
function resetBalloons() {
    const balloons = document.querySelectorAll('.game-balloon');
    balloons.forEach(balloon => {
        balloon.classList.remove('popped');
        balloon.textContent = '🎈';
    });
    balloonScore = 0;
    document.getElementById('balloonScore').textContent = balloonScore;
}

// Candle blowing game
function blowCandle(candle) {
    if (!candle.classList.contains('blown')) {
        candle.classList.add('blown');
        candlesBlown++;
        
        // Visual feedback
        candle.textContent = '💨';
        setTimeout(() => {
            candle.textContent = '🕯️';
        }, 1000);
        
        // Update message
        const message = document.getElementById('candleMessage');
        if (candlesBlown < totalCandles) {
            message.textContent = `Great! ${candlesBlown} candles blown out. ${totalCandles - candlesBlown} more to go!`;
        } else {
            message.textContent = '🎉 All candles blown out! Make a wish! 🎉';
            createConfetti();
            setTimeout(() => {
                alert('🎂 Happy Birthday! Your wish will come true! 🎂');
            }, 1000);
        }
    }
}

// Reset candles game
function resetCandles() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.classList.remove('blown');
        candle.textContent = '🕯️';
    });
    candlesBlown = 0;
    document.getElementById('candleMessage').textContent = 'Click the candles to blow them out!';
}

// Add some extra birthday magic
function addBirthdayMagic() {
    // Random balloon floating
    setInterval(() => {
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach(balloon => {
            if (Math.random() > 0.7) {
                balloon.style.transform = `translateY(${Math.random() * 10 - 5}px)`;
            }
        });
    }, 2000);
    
    // Random sparkles
    setInterval(() => {
        if (Math.random() > 0.8) {
            createSparkle();
        }
    }, 3000);
}

// Create sparkle effect
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: sparkle 2s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    // Add sparkle animation
    if (!document.querySelector('#sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-style';
        style.textContent = `
            @keyframes sparkle {
                0% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Initialize birthday magic
addBirthdayMagic();