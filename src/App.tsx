import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions, traitLabels, traitDescriptions, type Trait } from './data/questions';
import { ResultChart } from './components/ResultChart';
import { ArrowLeft, ArrowRight, Brain, RotateCcw, CheckCircle2 } from 'lucide-react';
import { cn } from './lib/utils';

type Step = 'start' | 'test' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = () => {
    setStep('test');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value: number) => {
    const currentQ = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 300);
    } else {
      setTimeout(() => setStep('result'), 300);
    }
  };

  const calculateResults = () => {
    const scores: Record<Trait, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    const maxScores: Record<Trait, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };

    questions.forEach((q) => {
      const answer = answers[q.id];
      if (!answer) return;

      maxScores[q.trait] += 5;
      if (q.sign === 1) {
        scores[q.trait] += answer;
      } else {
        scores[q.trait] += (6 - answer);
      }
    });

    return Object.entries(scores).map(([trait, score]) => {
      const max = maxScores[trait as Trait];
      // Convert to 100-point scale for visualization
      const percentage = Math.round((score / max) * 100) || 0;
      return {
        trait: traitLabels[trait as Trait],
        traitCode: trait as Trait,
        score: percentage,
        rawScore: score,
        fullMark: 100
      };
    });
  };

  const results = useMemo(() => {
    if (step === 'result') {
      return calculateResults();
    }
    return [];
  }, [step, answers]);

  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-16">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center text-center mt-10 space-y-8"
            >
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4 shadow-inner">
                <Brain className="w-12 h-12" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                나를 알아보는<br />50가지 질문
              </h1>
              <p className="text-lg text-slate-600 max-w-md">
                심리학의 5요인 모델(Big Five)을 바탕으로 구성된 50개의 문항을 통해 당신의 성격적 특성을 다각도로 분석해 드립니다.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 w-full max-w-sm text-left">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600"><strong>소요 시간:</strong> 약 3~5분</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">깊게 생각하지 말고 처음 떠오르는 생각대로 답변해주세요.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">모든 문항에 솔직하게 답할수록 정확도가 높아집니다.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-lg shadow-indigo-200"
              >
                테스트 시작하기
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col"
            >
              {/* Header / Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="p-2 text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <span className="text-sm font-medium tracking-widest text-slate-400 uppercase">
                    {currentQuestionIndex + 1} / {questions.length}
                  </span>
                  <div className="w-10"></div> {/* Spacer for centering */}
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question Box */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 mb-8 min-h-[250px] flex items-center justify-center text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold leading-relaxed text-slate-800">
                  {questions[currentQuestionIndex].text}
                </h2>
              </div>

              {/* Answers */}
              <div className="flex flex-col space-y-3">
                {[
                  { value: 5, label: '매우 그렇다', color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 text-indigo-900' },
                  { value: 4, label: '그렇다', color: 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800' },
                  { value: 3, label: '보통이다', color: 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800' },
                  { value: 2, label: '그렇지 않다', color: 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800' },
                  { value: 1, label: '전혀 그렇지 않다', color: 'bg-rose-50 border-rose-200 hover:bg-rose-100 hover:border-rose-300 text-rose-900' },
                ].map((choice) => {
                  const isSelected = answers[questions[currentQuestionIndex].id] === choice.value;
                  return (
                    <button
                      key={choice.value}
                      onClick={() => handleAnswer(choice.value)}
                      className={cn(
                        "w-full py-4 px-6 rounded-xl border-2 transition-all duration-200 text-lg font-medium",
                        choice.color,
                        isSelected ? "ring-2 ring-offset-2 ring-indigo-500 border-transparent shadow-md scale-[1.02]" : ""
                      )}
                    >
                      {choice.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center w-full"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">분석 결과</h2>
                <p className="text-slate-600">당신의 성격 특성을 5가지 차원으로 시각화했습니다.</p>
              </div>

              <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-8">
                <ResultChart data={results} />
              </div>

              <div className="w-full space-y-4 mb-10">
                <h3 className="text-xl font-bold text-slate-800 mb-6 px-2">상세 분석</h3>
                {results.map((result) => (
                  <div key={result.traitCode} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-lg font-bold text-slate-800">{result.trait}</h4>
                      <span className="text-2xl font-black text-indigo-600">{result.score}<span className="text-sm font-medium text-slate-400 ml-1">점</span></span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {traitDescriptions[result.traitCode]}
                    </p>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-1000",
                          result.score >= 70 ? "bg-indigo-500" : result.score >= 40 ? "bg-emerald-400" : "bg-amber-400"
                        )}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                      <span>낮음</span>
                      <span>보통</span>
                      <span>높음</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleStart}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                테스트 다시하기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
