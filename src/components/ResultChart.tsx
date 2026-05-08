import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

interface ResultChartProps {
  data: {
    trait: string;
    score: number;
    fullMark: number;
  }[];
}

export function ResultChart({ data }: ResultChartProps) {
  return (
    <div className="w-full h-80 sm:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="trait" tick={{ fill: '#4b5563', fontSize: 13, fontWeight: 500 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="성격 점수"
            dataKey="score"
            stroke="#6366f1"
            fill="#818cf8"
            fillOpacity={0.6}
          />
          <Tooltip 
            formatter={(value: number) => [`${value}점`, '점수']}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
