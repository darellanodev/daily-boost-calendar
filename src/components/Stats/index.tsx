import React, { useState } from 'react'
import './stats.css'

interface StatsProps {
  title: string
}

export const Stats: React.FC<StatsProps> = ({ title }) => {
  return (
    <div className="stats-container">
      <div id="total-contributions">
        <div className="title">Total contributions</div>
        <div id="total-contributions-number">12</div>
      </div>
      <div id="current-streak">
        <div className="title">Current streak</div>
        <div id="current-streak-number">12</div>
      </div>
      <div id="longest-streak">
        <div className="title">Longest streak</div>
        <div id="longest-streak-number">12</div>
      </div>
    </div>
  )
}
