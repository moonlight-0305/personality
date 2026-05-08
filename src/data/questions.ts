export type Trait = 'O' | 'C' | 'E' | 'A' | 'N';

export interface Question {
  id: number;
  text: string;
  trait: Trait;
  sign: 1 | -1; // 1 for positive keyed, -1 for negative keyed
}

export const questions: Question[] = [
  { id: 1, text: "새로운 아이디어를 탐구하는 것을 좋아한다.", trait: 'O', sign: 1 },
  { id: 2, text: "일을 시작하기 전에 항상 치밀하게 계획을 세운다.", trait: 'C', sign: 1 },
  { id: 3, text: "처음 보는 사람들과도 쉽게 대화를 시작한다.", trait: 'E', sign: 1 },
  { id: 4, text: "다른 사람의 감정에 쉽게 공감하고 위로해 준다.", trait: 'A', sign: 1 },
  { id: 5, text: "사소한 일에도 쉽게 스트레스를 받고 예민해진다.", trait: 'N', sign: 1 },
  
  { id: 6, text: "예술, 음악, 문학에 관심이 많다.", trait: 'O', sign: 1 },
  { id: 7, text: "물건을 제자리에 두지 않고 어지럽히는 편이다.", trait: 'C', sign: -1 },
  { id: 8, text: "파티나 모임에서 중심이 되는 것을 즐긴다.", trait: 'E', sign: 1 },
  { id: 9, text: "내 이익을 위해 다른 사람을 이용할 때도 있다.", trait: 'A', sign: -1 },
  { id: 10, text: "감정 기복이 심해서 기분이 자주 바뀐다.", trait: 'N', sign: 1 },
  
  { id: 11, text: "일상적이고 반복적인 일을 더 선호한다.", trait: 'O', sign: -1 },
  { id: 12, text: "맡은 일은 끝까지 책임지고 완수한다.", trait: 'C', sign: 1 },
  { id: 13, text: "되도록 눈에 띄지 않게 조용히 있는 것을 선호한다.", trait: 'E', sign: -1 },
  { id: 14, text: "대부분의 사람들이 선하고 믿을 만하다고 생각한다.", trait: 'A', sign: 1 },
  { id: 15, text: "웬만한 일에는 쉽게 당황하거나 흔들리지 않는다.", trait: 'N', sign: -1 },
  
  { id: 16, text: "상상력이 풍부하고 창의적인 편이다.", trait: 'O', sign: 1 },
  { id: 17, text: "약속 시간에 자주 늦거나 일정을 어긴다.", trait: 'C', sign: -1 },
  { id: 18, text: "다른 사람들과 함께 있을 때 에너지를 얻는다.", trait: 'E', sign: 1 },
  { id: 19, text: "다른 사람의 실수에 대해 친절하고 관대하게 대한다.", trait: 'A', sign: 1 },
  { id: 20, text: "종종 내가 부족하거나 쓸모없다는 생각에 우울해진다.", trait: 'N', sign: 1 },
  
  { id: 21, text: "철학적이거나 추상적인 주제에 대해 생각하는 것을 즐긴다.", trait: 'O', sign: 1 },
  { id: 22, text: "세부적인 것까지 꼼꼼하게 챙기는 성격이다.", trait: 'C', sign: 1 },
  { id: 23, text: "혼자만의 시간을 가질 때 가장 편안하다.", trait: 'E', sign: -1 },
  { id: 24, text: "갈등이 생기면 내 주장을 굽히지 않고 맞선다.", trait: 'A', sign: -1 },
  { id: 25, text: "압박감이 심한 상황에서도 침착함을 잘 유지한다.", trait: 'N', sign: -1 },
  
  { id: 26, text: "복잡한 문제보다 단순하고 명확한 문제를 선호한다.", trait: 'O', sign: -1 },
  { id: 27, text: "귀찮은 일은 자주 미루는 경향이 있다.", trait: 'C', sign: -1 },
  { id: 28, text: "감정 표현이 풍부하고 말이 많은 편이다.", trait: 'E', sign: 1 },
  { id: 29, text: "주변 사람들을 돕는 일에 앞장서는 편이다.", trait: 'A', sign: 1 },
  { id: 30, text: "앞으로 일어날 일에 대해 자주 걱정하고 불안해한다.", trait: 'N', sign: 1 },
  
  { id: 31, text: "새로운 문화나 생활 방식을 경험하는 것을 좋아한다.", trait: 'O', sign: 1 },
  { id: 32, text: "주변 정리정돈을 잘하고 청결을 유지한다.", trait: 'C', sign: 1 },
  { id: 33, text: "여러 사람 앞에서 발표하거나 의견을 말하는 것이 부담스럽다.", trait: 'E', sign: -1 },
  { id: 34, text: "다른 사람의 문제나 고민에 별로 관심이 없다.", trait: 'A', sign: -1 },
  { id: 35, text: "과거의 실수나 실패에 대해 오랫동안 생각하며 괴로워한다.", trait: 'N', sign: 1 },
  
  { id: 36, text: "예술 작품이나 자연의 아름다움에 깊이 감동하곤 한다.", trait: 'O', sign: 1 },
  { id: 37, text: "업무나 공부에 있어 나만의 체계적인 방식이 있다.", trait: 'C', sign: 1 },
  { id: 38, text: "활기차고 열정적으로 활동하는 것을 좋아한다.", trait: 'E', sign: 1 },
  { id: 39, text: "사람들과 협력하기보다 경쟁하는 것을 좋아한다.", trait: 'A', sign: -1 },
  { id: 40, text: "화가 나면 감정을 통제하기 어려울 때가 있다.", trait: 'N', sign: 1 },
  
  { id: 41, text: "전통을 따르는 것이 중요하다고 생각한다.", trait: 'O', sign: -1 },
  { id: 42, text: "충동적으로 행동하거나 계획 없이 일을 처리할 때가 많다.", trait: 'C', sign: -1 },
  { id: 43, text: "주말에는 밖에 나가기보다 집에서 쉬는 것을 좋아한다.", trait: 'E', sign: -1 },
  { id: 44, text: "상대방의 입장을 먼저 이해하려고 노력한다.", trait: 'A', sign: 1 },
  { id: 45, text: "낯선 환경에 놓여도 금방 적응하고 편안해한다.", trait: 'N', sign: -1 },
  
  { id: 46, text: "평범하고 익숙한 환경에서 가장 편안함을 느낀다.", trait: 'O', sign: -1 },
  { id: 47, text: "한 번 결심한 목표는 꾸준히 노력하여 달성한다.", trait: 'C', sign: 1 },
  { id: 48, text: "모르는 사람에게 길을 묻거나 도움을 청하는 것이 쑥스럽지 않다.", trait: 'E', sign: 1 },
  { id: 49, text: "남을 의심하거나 경계하는 경향이 있다.", trait: 'A', sign: -1 },
  { id: 50, text: "주변 사람들의 평가나 시선에 크게 신경 쓰지 않는다.", trait: 'N', sign: -1 }
];

export const traitLabels = {
  'O': '개방성',
  'C': '성실성',
  'E': '외향성',
  'A': '우호성',
  'N': '신경성 (예민함)'
};

export const traitDescriptions = {
  'O': '상상력, 호기심, 새로운 경험에 대한 개방성 정도',
  'C': '목표 지향성, 꼼꼼함, 책임감 및 자기 통제력',
  'E': '사교성, 활동성, 외부 세계에 대한 에너지 발산',
  'A': '타인에 대한 배려, 공감 능력, 협조성',
  'N': '정서적 불안정성, 스트레스 취약성, 부정적 감정 경험 빈도'
};
