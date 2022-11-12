import "./QuestionForm.css";
export const Questions = ({question, answer, id}) => {
    return <section className="item" key={`question--${id}`}>
    <div className="title"><h2>Question: {question}</h2></div>
    <span>+</span>
    <div className="content">Answer: {answer}</div> 
</section>
}