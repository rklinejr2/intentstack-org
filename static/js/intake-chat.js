(function () {
  'use strict';

  const MAX_MESSAGES = 10;
  const MAX_CHARS = 500;
  const API_BASE = '/api';
  const OPENING_MESSAGE = "Welcome to the Intent Stack. I'm here to understand how I can help you engage with this work. What brings you here today?";

  let messages = []; // {role, content} — conversation history sent to API
  let messageCount = 0;
  let isWaiting = false;
  let isComplete = false;

  function init() {
    const container = document.getElementById('intake-chat');
    if (!container) return;

    container.innerHTML = `
      <div class="intake-chat">
        <div class="intake-chat-messages" id="intake-messages"></div>
        <div class="intake-chat-input" id="intake-input-area">
          <textarea id="intake-textarea" placeholder="Type your message..." rows="1" maxlength="${MAX_CHARS}"></textarea>
          <div style="display: flex; flex-direction: column; gap: 0.25rem;">
            <button class="intake-send-btn" id="intake-send">Send</button>
            <span class="intake-char-count" id="intake-chars"></span>
          </div>
        </div>
      </div>
    `;

    // Show opening message (no API call)
    appendMessage('assistant', OPENING_MESSAGE);

    const textarea = document.getElementById('intake-textarea');
    const sendBtn = document.getElementById('intake-send');
    const charCount = document.getElementById('intake-chars');

    textarea.addEventListener('input', function () {
      // Auto-resize
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 100) + 'px';
      // Character count
      updateCharCount(this.value.length, charCount);
    });

    textarea.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    sendBtn.addEventListener('click', sendMessage);
  }

  function updateCharCount(len, el) {
    if (!el) return;
    if (len === 0) {
      el.textContent = '';
      return;
    }
    el.textContent = len + '/' + MAX_CHARS;
    el.className = 'intake-char-count';
    if (len >= MAX_CHARS) {
      el.classList.add('at-limit');
    } else if (len >= MAX_CHARS * 0.8) {
      el.classList.add('near-limit');
    }
  }

  function appendMessage(role, content) {
    const messagesEl = document.getElementById('intake-messages');
    if (!messagesEl) return;

    const div = document.createElement('div');
    div.className = 'intake-msg intake-msg-' + role;
    div.textContent = content;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    const messagesEl = document.getElementById('intake-messages');
    if (!messagesEl) return;

    const div = document.createElement('div');
    div.className = 'intake-typing';
    div.id = 'intake-typing-indicator';
    div.innerHTML = '<span class="intake-typing-dot"></span><span class="intake-typing-dot"></span><span class="intake-typing-dot"></span>';
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('intake-typing-indicator');
    if (el) el.remove();
  }

  function disableInput(message) {
    const area = document.getElementById('intake-input-area');
    if (!area) return;
    area.innerHTML = `<div style="padding: 0.75rem 1rem; text-align: center; color: var(--intake-placeholder, #64748b); font-size: 0.875rem;">${escapeHtml(message)}</div>`;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  async function sendMessage() {
    if (isWaiting || isComplete) return;

    const textarea = document.getElementById('intake-textarea');
    if (!textarea) return;

    const text = textarea.value.trim();
    if (!text) return;

    // Enforce limits
    if (text.length > MAX_CHARS) return;
    if (messageCount >= MAX_MESSAGES) {
      disableInput("This conversation has reached its limit. Please email rob.kline@practicalstrategy.ai directly.");
      return;
    }

    // Add user message to display and history
    appendMessage('user', text);
    messages.push({ role: 'user', content: text });
    messageCount++;

    // Clear input
    textarea.value = '';
    textarea.style.height = 'auto';
    updateCharCount(0, document.getElementById('intake-chars'));

    // Check message limit
    if (messageCount >= MAX_MESSAGES) {
      disableInput("This conversation has reached its limit. Please email rob.kline@practicalstrategy.ai directly.");
      return;
    }

    // Show typing indicator
    isWaiting = true;
    document.getElementById('intake-send').disabled = true;
    showTyping();

    try {
      const response = await fetch(API_BASE + '/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messages })
      });

      hideTyping();

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        if (response.status === 429) {
          appendMessage('system', err.error || "I've reached my conversation limit. Please email rob.kline@practicalstrategy.ai directly.");
          disableInput('Conversation limit reached.');
          isComplete = true;
          return;
        }
        throw new Error(err.error || 'Request failed');
      }

      const data = await response.json();

      // Show assistant message
      if (data.message) {
        appendMessage('assistant', data.message);
        messages.push({ role: 'assistant', content: data.message });
        messageCount++;
      }

      // Handle conversation completion
      if (data.intake && data.intake.complete) {
        isComplete = true;
        await submitIntake(data.intake);
        return;
      }

    } catch (err) {
      hideTyping();
      appendMessage('system', 'Something went wrong. Please try again or email rob.kline@practicalstrategy.ai directly.');
      console.error('Chat error:', err);
    } finally {
      isWaiting = false;
      const sendBtn = document.getElementById('intake-send');
      if (sendBtn) sendBtn.disabled = false;
    }
  }

  async function submitIntake(intake) {
    try {
      const response = await fetch(API_BASE + '/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ intake: intake })
      });

      if (response.ok) {
        appendMessage('system', "Thank you! Your information has been sent to Rob Kline. He'll follow up soon.");
      } else {
        appendMessage('system', "Thank you for the conversation. If you don't hear back shortly, please email rob.kline@practicalstrategy.ai directly.");
      }
    } catch {
      appendMessage('system', "Thank you for the conversation. If you don't hear back shortly, please email rob.kline@practicalstrategy.ai directly.");
    }

    disableInput('Conversation complete. Refresh the page to start a new conversation.');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
