import React from "react";
import "./Team.css";
import teamLogo from "./teamLogo.png"; // replace with your actual logo


const teamMembers = [
  {
    name: "Lorem Isplur",
    title: "Chief Executive Officer",
    socials: ["twitter", "facebook", "instagram", "linkedin"]
  },
  {
    name: "Lorem",
    title: "Product Manager",
    socials: ["x", "facebook", "pinterest", "tiktok", "linkedin"]
  },
  {
    name: "Lorem",
    title: "CTO",
    socials: ["x", "facebook", "instagram", "linkedin"]
  },
  {
    name: "Lorem",
    title: "Accountant",
    socials: ["x", "facebook", "instagram", "tiktok", "linkedin"]
  }
];

const Team = () => {
  return (
    <div className="team-section">
      <h2 className="team-title">TEAM</h2>
      <p className="team-subtitle">
        Meet Our Wonderful Team, You can follow their socials too.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <img src={teamLogo} alt="logo" className="team-logo" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-title">{member.title}</p>
            <p className="member-desc">
              A passionate Full Stack Web developer, whose desires is to see your site well done
            </p>
            <div className="social-icons">
              {member.socials.map((platform, i) => (
                <div className="icon" key={i}>{platform[0].toUpperCase()}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Team;
