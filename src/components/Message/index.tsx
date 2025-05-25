import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

export type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading';

export interface MessageConfig {
  type: MessageType;
  content: string;
  duration?: number;
  onClose?: () => void;
}

interface MessageItemProps extends MessageConfig {
  id: string;
  onRemove: (id: string) => void;
}

// 图标组件
const MessageIcon: React.FC<{ type: MessageType }> = ({ type }) => {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
    loading: '⟳'
  };

  return (
    <span className={`message-icon message-icon-${type}`}>
      {icons[type]}
    </span>
  );
};

// 单个消息项组件
const MessageItem: React.FC<MessageItemProps> = ({ 
  id, 
  type, 
  content, 
  duration = 3000, 
  onRemove, 
  onClose 
}) => {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // 进入动画
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = useCallback(() => {
    setLeaving(true);
    setTimeout(() => {
      onRemove(id);
      onClose?.();
    }, 300);
  }, [id, onRemove, onClose]);

  return (
    <div 
      className={`message-item message-${type} ${visible ? 'message-enter' : ''} ${leaving ? 'message-leave' : ''}`}
      onClick={handleClose}
    >
      <MessageIcon type={type} />
      <span className="message-content">{content}</span>
    </div>
  );
};

// 消息容器组件
const MessageContainer: React.FC = () => {
  const [messages, setMessages] = useState<(MessageConfig & { id: string })[]>([]);

  const removeMessage = useCallback((id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  }, []);

  // 暴露给全局的添加消息方法
  useEffect(() => {
    (window as any).__messageContainer = {
      add: (config: MessageConfig) => {
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
        setMessages(prev => [...prev, { ...config, id }]);
        return id;
      },
      remove: removeMessage,
      clear: () => setMessages([])
    };

    return () => {
      delete (window as any).__messageContainer;
    };
  }, [removeMessage]);

  return (
    <div className="message-container">
      {messages.map(msg => (
        <MessageItem
          key={msg.id}
          {...msg}
          onRemove={removeMessage}
        />
      ))}
    </div>
  );
};

// 消息API
class MessageAPI {
  private container: HTMLElement | null = null;
  private root: any = null;

  private ensureContainer() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'message-wrapper';
      document.body.appendChild(this.container);
      
      this.root = createRoot(this.container);
      this.root.render(<MessageContainer />);
    }
  }

  private show(type: MessageType, content: string, duration?: number) {
    this.ensureContainer();
    
    const messageContainer = (window as any).__messageContainer;
    if (messageContainer) {
      return messageContainer.add({ type, content, duration });
    }
  }

  success(content: string, duration?: number) {
    return this.show('success', content, duration);
  }

  error(content: string, duration?: number) {
    return this.show('error', content, duration);
  }

  warning(content: string, duration?: number) {
    return this.show('warning', content, duration);
  }

  info(content: string, duration?: number) {
    return this.show('info', content, duration);
  }

  loading(content: string, duration = 0) {
    return this.show('loading', content, duration);
  }

  destroy() {
    const messageContainer = (window as any).__messageContainer;
    if (messageContainer) {
      messageContainer.clear();
    }
    
    if (this.container && this.root) {
      this.root.unmount();
      document.body.removeChild(this.container);
      this.container = null;
      this.root = null;
    }
  }
}

// 导出单例
export const message = new MessageAPI();
export default message; 