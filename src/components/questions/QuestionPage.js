import { useEffect, useState } from "react";
import "./QuestionForm.css";
import { Questions } from "./Questions.js";

export const QuestionPage = () => {
    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        const questionsFetch = async () => {
          const response = await fetch(`http://localhost:8088/questions`);
          const questionData = await response.json();
          setQuestions(questionData);
        };
        questionsFetch();
      }, []);

    return <>
    <section className="faq_mainContainer">
        <div className="faq_border_1"></div>
        <div>
          <img
            src="https://www.ntacourier.com/sites/default/files/2020-02/cheekwood.jpg"
            className="faq_image"
            alt="garden walkway"
          />
          <h1 className="FAQ">Frequently Asked Questions</h1>
        </div>
        <div className="faq_border_1"></div>
      </section>
     
    <div className="wrapper">
   
       
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
   
    </>
}