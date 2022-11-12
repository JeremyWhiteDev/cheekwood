import { useEffect, useState } from "react";
import "./QuestionForm.css";
import { Questions } from "./Questions.js";

export const QuestionForm = () => {
    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        const questionsFetch = async () => {
          const response = await fetch(`http://localhost:8088/questions`);
          const questionData = await response.json();
          setQuestions(questionData);
        };
        questionsFetch();
      }, []);

    return <div className="wrapper">
        
         <article className="accordion">
            {questions.map((question) => (
                <Questions
                 key={`event--${question.id}`}
                id={question.id}
                question={question.question}
                answer={question.answer}
                 />
             ))}
        </article>
    </div>
}