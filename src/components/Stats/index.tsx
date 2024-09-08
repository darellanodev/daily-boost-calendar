import React, { useState } from 'react'
import './stats.css'

interface StatsProps {
  totalContributions: number
  currentStreak: number
  longestStreak: number
}

export const Stats: React.FC<StatsProps> = ({
  totalContributions,
  currentStreak,
  longestStreak,
}) => {
  return (
    <div className="stats-container">
      <div id="total-contributions">
        <div className="title">Total contributions</div>
        <div id="total-contributions-number">{totalContributions}</div>
      </div>
      <div id="current-streak">
        <div className="title">Current streak</div>
        <div id="current-streak-number">{currentStreak}</div>
      </div>
      <div id="longest-streak">
        <div className="title">Longest streak</div>
        <div id="longest-streak-number">{longestStreak}</div>
      </div>
    </div>
  )
}
