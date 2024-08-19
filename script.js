document.addEventListener('DOMContentLoaded', () => {
    const createPortfolioButton = document.getElementById('create-portfolio');
    const portfolioList = document.getElementById('portfolio-list');
    const createGroupChatButton = document.getElementById('create-group-chat');
    const chatArea = document.getElementById('chat-area');
    const contactForm = document.getElementById('contact-form');
    const loginForm = document.getElementById('login-form');
    const loginStatus = document.getElementById('login-status');

    // Function to create a portfolio
    createPortfolioButton.addEventListener('click', () => {
        const portfolioForm = document.createElement('div');
        portfolioForm.innerHTML = `
            <h3>Create Portfolio Item</h3>
            <form>
                <label for="portfolio-name">Name:</label>
                <input type="text" id="portfolio-name" required>
                <br><br>
                <label for="portfolio-description">Description:</label>
                <textarea id="portfolio-description" required></textarea>
                <br><br>
                <button type="submit">Create</button>
            </form>
        `;
        portfolioList.appendChild(portfolioForm);

        const portfolioFormSubmit = portfolioForm.querySelector('form');
        portfolioFormSubmit.addEventListener('submit', (event) => {
            event.preventDefault();
            const portfolioName = document.getElementById('portfolio-name').value;
            const portfolioDescription = document.getElementById('portfolio-description').value;

            if (portfolioName && portfolioDescription) {
                const portfolioItem = document.createElement('div');
                portfolioItem.classList.add('portfolio-item');
                portfolioItem.textContent = `Name: ${portfolioName}, Description: ${portfolioDescription}`;
                portfolioList.appendChild(portfolioItem);
                portfolioForm.remove();
            } else {
                const notification = document.createElement('div');
                notification.textContent = 'Please fill in all fields.';
                notification.classList.add('notification', 'error');
                portfolioForm.appendChild(notification);
            }
        });
    });

    // Function to create a group chat
    createGroupChatButton.addEventListener('click', () => {
        const chatForm = document.createElement('div');
        chatForm.innerHTML = `
            <h3>Create Group Chat</h3>
            <form>
                <label for="chat-name">Name:</label>
                <input type="text" id="chat-name" required>
                <br><br>
                <button type="submit">Create</button>
            </form>
        `;
        chatArea.appendChild(chatForm);

        const chatFormSubmit = chatForm.querySelector('form');
        chatFormSubmit.addEventListener('submit', (event) => {
            event.preventDefault();
            const chatName = document.getElementById('chat-name').value;

            if (chatName) {
                const chatBox = document.createElement('div');
                chatBox.classList.add('chat-box');
                chatBox.innerHTML = `
                    <h3>Group Chat: ${chatName}</h3>
                    <div class="messages"></div>
                    <input type="text" placeholder="Type a message..." class="chat-input">
                    <button class="send-message">Send</button>
                `;
                chatArea.appendChild(chatBox);
                chatForm.remove();

                const sendMessageButton = chatBox.querySelector('.send-message');
                const messagesContainer = chatBox.querySelector('.messages');
                const chatInput = chatBox.querySelector('.chat-input');

                sendMessageButton.addEventListener('click', () => {
                    const messageText = chatInput.value;
                    if (messageText) {
                        const messageItem = document.createElement('div');
                        messageItem.classList.add('message-item');
                        messageItem.textContent = messageText;
                        messagesContainer.appendChild(messageItem);
                        chatInput.value = '';  // Clear input
                    } else {
                        const notification = document.createElement('div');
                        notification.textContent = 'Message cannot be empty!';
                        notification.classList.add('notification', 'error');
                        chatBox.appendChild(notification);
                    }
                });
            } else {
                const notification = document.createElement('div');
                notification.textContent = 'Group chat name cannot be empty!';
                notification.classList.add('notification', 'error');
                chatForm.appendChild(notification);
            }
        });
    });

    // Function to send a contact form email (simulated)
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.elements[0].value;
        const email = contactForm.elements[1].value;
        const message = contactForm.elements[2].value;

        if (name && email && message) {
            const notification = document.createElement('div');
            notification.textContent = `Thank you, ${name}! Your message has been sent.`;
            notification.classList.add('notification', 'success');
            contactForm.appendChild(notification);
            contactForm.reset();  // Reset the form
        } else {
            const notification = document.createElement('div');
            notification.textContent = 'Please fill in all fields before sending.';
            notification.classList.add('notification', 'error');
            contactForm.appendChild(notification);
        }