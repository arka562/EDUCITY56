import React from "react";

const Messages = () => {
  return (
    <div className="message">
      <h1 className="header-aboutus">My Inbox</h1>
      <div className="mmm">
        <h4 className="mes1">
          <b>1.Course Announcements</b>
        </h4>
        <p className="mes1"> Instructor - AJP (Today, 10:30 AM)</p>
        <p className="mes1">
          <b>Subject:</b>Upcoming Quiz Reminder
        </p>
        <p className="italic">
          "Hello students! Just a reminder that the mid-term quiz for Web
          Development will be live tomorrow at 5 PM. Make sure to review the
          materials. Good luck!"
        </p>
      </div>

      <div className="mmm">
        <h4 className="mes1">
          <b>2.Community Discussions</b>
        </h4>
        <p className="mes1"> Student - Rahul Verma (Just now)</p>

        <p className="italic">
          "Hey everyone! Does anyone have notes on the React Hooks session? I
          missed today’s lecture."
        </p>
      </div>
      <div className="mmm">
        <h4 className="mes1">
          <b>3.Support & Assistance</b>
        </h4>
        <p className="mes1"> Educity Support (5 minutes ago)</p>
        <p className="italic">
          "Hello! Your issue regarding course access has been forwarded to the
          technical team. You should receive a resolution within 24 hours. Thank
          you for your patience!"
        </p>
      </div>
    </div>
  );
};

export default Messages;
