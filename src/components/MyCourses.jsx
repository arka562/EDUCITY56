import React from "react";

const MyCourses = () => {
  return (
    <div className="courses">
      <h1 className="header-aboutus">My Courses</h1>
      <div className="header-cou">
        <h2>Courses on Progress:</h2>
        <div className="updates">
          <h3>
            <b>1.General Studies (Prelims & Mains) – 45% Completed</b>
          </h3>
          <p>
            Covers Indian history, geography, economy, polity, science & tech,
            and environment. Helps in both prelims and mains preparation.
          </p>
        </div>
        <div className="updates">
          <h3>
            <b>2.Quantitative Aptitude Mastery – 60% Completed</b>
          </h3>
          <p>
            Includes number system, percentages, profit & loss, time & work,
            probability, and data interpretation. Essential for banking, SSC,
            and other exams.
          </p>
        </div>
        <div className="updates">
          <h3>
            <b>3.Logical Reasoning & Data Interpretation – 30% Completed</b>
          </h3>
          <p>
            Focuses on puzzles, seating arrangement, coding-decoding, syllogism,
            and analytical reasoning. Helps improve problem-solving speed.
          </p>
        </div>
        <div className="updates">
          <h3>4.Current Affairs & GK – Ongoing (Daily Updates)</h3>
          <p>
            Get daily updates on national & international news, government
            schemes, reports, awards, and sports. Crucial for all competitive
            exams.
          </p>
        </div>
        <div className="updates">
          <h3>5.English Comprehension & Grammar – 75% Completed</h3>
          <p>
            Covers reading comprehension, vocabulary, sentence correction, and
            grammar rules to improve verbal ability.
          </p>
        </div>
      </div>
      <div className="cou">
        <h2>Courses Completed:</h2>
        <div className="updates">
          <h3>1.Indian Polity & Constitution – Completed on Jan 20, 2025</h3>
          <p>
            Understand fundamental rights, directive principles, governance
            structure, and important amendments.
          </p>
        </div>
        <div className="updates">
          <h3>2.History & Culture of India – Completed on Dec 15, 2024</h3>
          <p>
            Covers ancient, medieval, and modern history along with art and
            culture topics relevant to exams.
          </p>
        </div>
        <div className="updates">
          <h3>3.Science & Technology – Completed on Nov 30, 2024</h3>
          <p>
            Includes general science topics, recent technological advancements,
            space research, and biotechnology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
