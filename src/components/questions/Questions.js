import { useState } from "react";
import "./QuestionForm.css";

export const Questions = ({question, answer, id}, i) => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return <section className="item" key={`question--${id}`}>
    <div className="item">
    <div className="title" onClick={() => toggle(i)}>
        <h2>Question: {question}</h2></div>
    <span>{selected === i ? '-' : '+'}</span>
    <div className={selected === i ? 'content show' : 'content'}>Answer: {answer}</div> 
    </div>
</section>
}