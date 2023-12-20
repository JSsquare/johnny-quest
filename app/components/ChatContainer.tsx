'use client'
import { SyntheticEvent, useState } from 'react'

const ChatContainer = () => {
  const [inputText, setInputText] = useState('')
  const [chatHistory, setChatHistory] = useState<string[]>([])

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setChatHistory((prevChatHistory) => [...prevChatHistory, inputText])
    setInputText('')
  }

  return (
    <div className="p-4 bg-gray-200 rounded-md h-screen w-screen">
      <div className="flex flex-col items-end">
        {chatHistory.map((message, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg">{message}</p>
          </div>
        ))}

        <div className="mt-4 absolute bottom-0 ">
          <input
            className="px-4 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatContainer
