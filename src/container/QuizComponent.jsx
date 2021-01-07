import React, {Component, Fragment} from 'react';
import ProgressBar from '../component/ProgressBar';
import './QuizComponent.css'

const questions = [{
  question: "I value",
  answer: [
    { answerText: 'Justice'},
    { answerText: 'Mercy' },
  ]
},
{
  question: "I appreciate a wide variety of music",
  answer: [
    { answerText: 'Rarely'},
    { answerText: 'Occasionally' },
    { answerText: 'Sometimes' },
    { answerText: 'Usually' },
    { answerText: 'Almost Always' },
  ]
},
{
  question: "A quiet weekend at home is",
  answer: [
    { answerText: 'Boring'},
    { answerText: 'Rejuvenating' },
  ]
},
{
  question: "I prefer speakers that communicate",
  answer: [
    { answerText: 'literally'},
    { answerText: 'figuratively'},
  ]
},
{
  question: "With people, I am more often",
  answer: [
    { answerText: 'brief and to the point'},
    { answerText: 'friendly and warm ' },
  ]
},
]


class QuizComponent extends Component {

    state ={
      currentQuestion: 0,
      setCurrentQuestion: 0,
      showResult: false,
      answer: [],
      bgcolor: "#6a1b9a",
      completed: 0
      
    }

    handleAnswer = (answerOption) => {
      const nextQuestion = this.state.currentQuestion + 1;
      
      this.state.answer.push(answerOption)
      this.setState({
        completed: this.state.completed + 20
      });
      if (nextQuestion < questions.length) {
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
        });
        console.log(this.state.answer);
      } else {
        this.setState({
          showResult: true
        });
      }
    }

    
    render() {
     
      return(
      <Fragment>
            <ProgressBar key={this.state.idx} bgcolor={this.state.bgcolor} completed={this.state.completed} />
        <div className="container">
        {this.state.showResult ? (
				<div className='score-section'>
					Your Answer are :
          {this.state.answer.map((result) => (
            <p>{result}</p>
          ))}
          
				</div>
			  ) : (
          <>
        <div className='question-text'>{questions[this.state.currentQuestion].question}</div>
        <div className='answer-section'>
          {questions[this.state.currentQuestion].answer.map((answer, index) => (
          <button onClick={(answerOption) => this.handleAnswer(answer.answerText)}>{answer.answerText}</button>
        ))}
        </div>
          </>
        )
        
        }
      
      </div>
      </Fragment>
    )}
}

export default QuizComponent;