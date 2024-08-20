import React, { useState, useEffect } from 'react';


const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    contactNumber: '',
    companyName: ''
  });
  const [firstInteraction, setFirstInteraction] = useState(true);

  const questions = [
    'May I know your full name?',
    `Nice to meet you, ${userInfo.name}. What is your official email address?`,
    'Thank you! 2 more questions and we are good to go! Please share your contact number.',
    "Finally, what's the name of the organization you work for?",
  ];

  const sendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      // Save user info based on the current question
      if (currentQuestionIndex === 1) {
        setUserInfo({ ...userInfo, name: input });
      } else if (currentQuestionIndex === 2) {
        setUserInfo({ ...userInfo, email: input });
      } else if (currentQuestionIndex === 3) {
        setUserInfo({ ...userInfo, contactNumber: input });
      } else if (currentQuestionIndex === 4) {
        setUserInfo({ ...userInfo, companyName: input });
      }

      // Determine the next question or finish the conversation
      if (currentQuestionIndex < questions.length) {
        const nextQuestion =
          currentQuestionIndex === 1
            ? `Nice to meet you, ${input}. What is your official email address?`
            : questions[currentQuestionIndex];
        setMessages([...newMessages, { text: nextQuestion, sender: 'bot' }]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setMessages([...newMessages, { text: 'Noted and Thank you for the information. Our Sales Team will be in touch with you soon.', sender: 'bot' }]);
        saveUserData(); // Save the user data after the final question
      }
    }
  };

  const saveUserData = async () => {
    try {
      console.log(userInfo, "Sending user info");

      const response = await fetch('http://127.0.0.1:5000/ChatBot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('User data saved successfully:', responseData);
      } else {
        const errorData = await response.json();
        console.error('Error saving user data:', errorData);
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentQuestionIndex === 0 && (isOpen || firstInteraction)) {
      const initialQuestion = questions[currentQuestionIndex];
      setMessages([{ text: initialQuestion, sender: 'bot' }]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [isOpen, firstInteraction]);

  useEffect(() => {
    if (firstInteraction) {
      setIsOpen(true);
      setFirstInteraction(false);
    }
  }, [firstInteraction]);

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="w-80 bg-white   rounded-lg shadow-lg">
          <div className="p-4 border-b border-pu flex justify-between items-center bg-purple-800">
            <h2 className="text-lg font-bold text-white bg-purple-800">GlobalXperts Bot</h2>
            <button onClick={() => setIsOpen(false)} className="text-4xl text-white">×</button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-purple-800 text-white' : 'bg-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-300 flex">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)}
            />
            <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-purple-800 text-white rounded-lg">Send</button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-purple-800 text-white p-4 rounded-full shadow-lg focus:outline-none animate-blink"
          >
            💬
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
