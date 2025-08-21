import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Reviewer from './components/Reviewer'


const STATE = {
  IDLE: "idle",
  GENERATING: "generating",
  GENERATED: "generated",
}

function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState(STATE.IDLE);
  const isGenerating = state === STATE.GENERATING;

  const handleGenerateReview = async (code = "") => {
    try {
      setState("generating");
      const response = await fetch("http://localhost:3000/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setReview(data.review);
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.log(err);
    }

    setState("generated");
  };

  return (
    <div className='w-full h-screen flex items-center justify-center overflow-hidden'>
      <Editor
        isGenerating={isGenerating}
        onGenerateReview={handleGenerateReview}
      />
      <Reviewer isGenerating={isGenerating} review={review} />
    </div>
  )
}

export default App
