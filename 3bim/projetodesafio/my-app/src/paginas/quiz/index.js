import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../../componentes/navbar";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import './quiz.css'
export const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [rightQuestions, setrightQuestions] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {

        const dummyQuestions = [
            {
                id: 1,
                question: "Qual é a capital da França?",
                options: ["Paris", "Londres", "Berlim", "Madrid"],
                correctAnswer: "Paris",
            },
            {
                id: 2,
                question: "Qual é o maior planeta do nosso sistema solar?",
                options: ["Terra", "Marte", "Júpiter", "Vênus"],
                correctAnswer: "Júpiter",
            },
            {
                id: 3,
                question: "Quem escreveu 'Romeu e Julieta'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                correctAnswer: "William Shakespeare",
            },
            {
                id: 4,
                question: "Qual é o símbolo químico do ouro?",
                options: ["Au", "Ag", "Fe", "Hg"],
                correctAnswer: "Au",
            },
            {
                id: 5,
                question: "Qual é o rio mais longo do mundo?",
                options: ["Amazonas", "Nilo", "Mississippi", "Yangtze"],
                correctAnswer: "Nilo",
            },
            {
                id: 6,
                question: "Quantos planetas fazem parte do nosso sistema solar?",
                options: ["5", "7", "8", "9"],
                correctAnswer: "8",
            },
            {
                id: 7,
                question: "Qual é o maior animal do mundo?",
                options: ["Elefante", "Baleia Azul", "Girafa", "Rinoceronte"],
                correctAnswer: "Baleia Azul",
            },
            {
                id: 8,
                question: "Qual é o elemento mais abundante na crosta terrestre?",
                options: ["Ferro", "Oxigênio", "Silício", "Alumínio"],
                correctAnswer: "Oxigênio",
            },
            {
                id: 9,
                question: "Quem pintou a 'Mona Lisa'?",
                options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
                correctAnswer: "Leonardo da Vinci",
            },
            {
                id: 10,
                question: "Qual é o maior deserto do mundo?",
                options: ["Sahara", "Atacama", "Gobi", "Antártica"],
                correctAnswer: "Antártica",
            },
        ];
        setQuestions(dummyQuestions);
    }, []);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        toast.dismiss();

        const currentQues = questions[currentQuestion];
        if (selectedOption === currentQues.correctAnswer) {

            setrightQuestions(rightQuestions + 1)
            toast.success("Resposta correta!",{
                position: "top-center",

            })
        } else {
            toast.error("Resposta incorreta!",{
                position: "top-center",

            });
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            
            toast.success("Quiz Concluído", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    };

    return (
        <>
            <NavBar />
            <div className="flex row">
                <div className="detalhe">
                    <Link to={"/"}>
                        <BsFillArrowLeftCircleFill size={50} color="black" className="voltar" />
                    </Link>
                </div>
            </div>

            <div className="quiz-container">
                {currentQuestion < questions.length && (
                    <div className="question-container">
                        <h2>Pergunta {currentQuestion + 1}</h2>
                        <p>{questions[currentQuestion].question}</p>
                        <div className="options-container">
                            {questions[currentQuestion].options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`option ${selectedOption === option ? "selected" : ""}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNextQuestion}>Próxima Pergunta</button>
                    </div>
                )}
            </div>
        </>
    );
};
