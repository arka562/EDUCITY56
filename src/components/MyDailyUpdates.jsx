import React from "react";

const MyDailyUpdates = () => {
  return (
    <div className="daily-updates">
      <h2>My Daily Updates</h2>

      <div className="update-section">
        <h3>Today's Study Plan</h3>
        <ul>
          <li>Maths: Solve 10 Probability questions.</li>
          <li>Reasoning: Practice 15 Syllogism problems.</li>
          <li>English: Read and summarize one editorial.</li>
          <li>General Awareness: Revise current affairs.</li>
        </ul>
      </div>

      <div className="update-section">
        <h3> Exam Notifications & Deadlines</h3>
        <p>
          <strong>UPSC Prelims:</strong> Last date to apply – March 15, 2025.
        </p>
        <p>
          <strong>SSC CGL:</strong> Tier-1 Exam on April 5, 2025.
        </p>
      </div>

      <div className="update-section">
        <h3> Motivational Quote</h3>
        <p>
          "Success is not final, failure is not fatal: it is the courage to
          continue that counts." – Winston Churchill
        </p>
      </div>

      <div className="update-section">
        <h3> Recommended Practice Tests</h3>
        <button>Start Logical Reasoning Test</button>
        <button>Take Quantitative Aptitude Test</button>
      </div>

      <div className="update-section">
        <h3> Recent Score & Progress</h3>
        <p>
          Yesterday’s Accuracy: <strong>85%</strong>
        </p>
        <p>
          Time Taken Per Question: <strong>48 seconds</strong>
        </p>
        <p>
          Goal for Today: <strong>Improve accuracy to 90%</strong>
        </p>
      </div>
    </div>
  );
};

export default MyDailyUpdates;
