// DOM Elements
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

// Bot responses database
const botResponses = [
    "That's an interesting point! Can you tell me more?",
    "I understand what you mean. How can I help further?",
    "Great question! Let me think about that for a moment.",
    "I see. That makes a lot of sense to me.",
    "Absolutely! I completely agree with you on that.",
    "That's a valid perspective. What else would you like to discuss?",
    "Got it! Is there anything else I can assist you with?",
    "Interesting! I hadn't thought of it that way before.",
    "Perfect! I'm here to help with whatever you need.",
    "I appreciate you sharing that. Let me know what else I can do!"
];

/**
 * Add a message to the chat display
 * @param {string} text - The message text
 * @param {boolean} isUser - Whether the message is from the user
 */
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = text;
    
    messageDiv.appendChild(messageParagraph);
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll to latest message
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 0);
}

/**
 * Get a random bot response
 * @returns {string} A random bot response
 */
function getBotResponse() {
    return botResponses[Math.floor(Math.random() * botResponses.length)];
}

/**
 * Send a message - main handler
 */
function sendMessage() {
    const message = messageInput.value.trim();
    
    // Validation: don't send empty messages
    if (message === '') {
        return;
    }
    
    // Add user message to chat
    addMessage(message, true);
    
    // Clear input and reset focus
    messageInput.value = '';
    messageInput.focus();
    
    // Disable send button while processing
    sendBtn.disabled = true;
    
    // Simulate bot response delay (more natural conversation flow)
    setTimeout(() => {
        const botResponse = getBotResponse();
        addMessage(botResponse, false);
        sendBtn.disabled = false;
    }, 600);
}

/**
 * Event Listeners
 */

// Send button click handler
sendBtn.addEventListener('click', () => {
    sendMessage();
});

// Allow sending with Enter key (Shift+Enter for new line)
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

// Prevent form submission if wrapped in form
document.addEventListener('DOMContentLoaded', () => {
    messageInput.focus();
});

// Keep button responsive
messageInput.addEventListener('input', () => {
    const hasText = messageInput.value.trim().length > 0;
    // Optional: visual feedback based on input
});
