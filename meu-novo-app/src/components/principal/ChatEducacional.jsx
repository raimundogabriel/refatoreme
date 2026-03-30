import React, { useState, useRef, useEffect } from 'react';

const ChatEducacional = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Sou o bot de treino. Como posso ajudar?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      // Simulando a chamada de API (Substitua pela URL real do GPT no futuro)
      // Usamos um timeout para simular a latência da IA "pensando"
      await fetch('https://jsonplaceholder.typicode.com/posts/1'); 

      setTimeout(() => {
        const botMsg = {
          id: Date.now() + 1,
          text: `Simulação GPT: Recebi sua pergunta sobre "${currentInput}". Para conectar na API real, você precisaria configurar um Header de Authorization com sua Bearer Token.`,
          sender: 'bot'
        };
        setMessages(prev => [...prev, botMsg]);
        setLoading(false);
      }, 1500);

    } catch (error) {
      console.error("Erro na 'API':", error);
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div style={styles.messagesList}>
          {messages.map(msg => (
            <div key={msg.id} style={{ 
              ...styles.message, 
              ...(msg.sender === 'user' ? styles.userMsg : styles.botMsg) 
            }}>
              {msg.text}
            </div>
          ))}
          {loading && <div style={styles.loading}>Bot está processando...</div>}
          <div ref={scrollRef} />
        </div>

        <form onSubmit={sendMessage} style={styles.inputArea}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte algo ao bot..."
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? '...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Estilização rápida em JS para facilitar a cópia
const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' },
  chatBox: { width: '400px', height: '500px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  messagesList: { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' },
  message: { padding: '8px 12px', borderRadius: '15px', maxWidth: '80%', fontSize: '14px' },
  userMsg: { alignSelf: 'flex-end', backgroundColor: '#0084ff', color: 'white' },
  botMsg: { alignSelf: 'flex-start', backgroundColor: '#e4e6eb', color: 'black' },
  loading: { fontSize: '12px', color: '#888', fontStyle: 'italic' },
  inputArea: { display: 'flex', padding: '10px', borderTop: '1px solid #ddd' },
  input: { flex: 1, padding: '8px', borderRadius: '20px', border: '1px solid #ddd', marginRight: '10px', outline: 'none' },
  button: { padding: '8px 15px', backgroundColor: '#0084ff', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }
};

export default ChatEducacional;