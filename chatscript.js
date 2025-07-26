// Gemini API configuration
const API_KEY = 'AIzaSyB-KM1ahcCl-iynHcAS8mqZGqsV8s42hNg';
const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';




// DOM elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');




// Function to add a message to the chat
function addMessage(content, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
}




// Function to show loading state
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('message', 'bot-message', 'loading');
    loadingDiv.textContent = 'Genarte...';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return loadingDiv;
}




// Function to send message to Gemini API
async function sendToGemini(message) {
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: message
                    }]
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(errorData.error?.message || 'API request failed');
        }

        const data = await response.json();
        
        if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
            console.error('Unexpected API response:', data);
            throw new Error('Invalid response format from API');
        }
        
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}




// Handle send button click
sendButton.addEventListener('click', async () => {
    const message = userInput.value.trim();
    if (!message) return;



    // Disable input while processing
    userInput.disabled = true;
    sendButton.disabled = true;




    // Add user message and show loading
    addMessage(message, true);
    const loadingMessage = showLoading();
    userInput.value = '';

    try {
        const response = await sendToGemini(message);
        chatMessages.removeChild(loadingMessage);
        addMessage(response, false);
    } catch (error) {
        chatMessages.removeChild(loadingMessage);
        addMessage(`Error: ${error.message}`, false);
    } finally {
  
  
  
        // Re-enable input
        userInput.disabled = false;
        sendButton.disabled = false;
        userInput.focus();
    }
});




// Handle Enter key press
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendButton.click();
    }
});




// Initial greeting
addMessage('Hello! I am your Assistant. How can I help you today?', false); 



var tl= gsap.timeline()

tl.from(".chat-container",{
    y:-500,
    duration:1,
    delay:0.1
})