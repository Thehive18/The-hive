import React from "react";
import "./Pricing.css";

const pricingPlans = [
  {
    name: "Free Plan",
    price: 0,
    features: [
      { text: "Web Design with sub-domain", included: true },
      { text: "Graphic Design with watermarks", included: true },
      { text: "Video Editing with watermarks", included: true },
      { text: "Game Development", included: false },
      { text: "Enhanced Database and Site Security", included: false },
    ],
  },
  {
    name: "Business Plan",
    price: 29,
    highlighted: true,
    features: [
      { text: "Web Design with Custom Domain", included: true },
      { text: "Graphic Design without watermarks", included: true },
      { text: "Video Editing without watermarks", included: true },
      { text: "Limited access to Game development", included: true },
      { text: "Enhanced Database and site security", included: true },
    ],
  },
  {
    name: "Developer Plan",
    price: 49,
    features: [
      { text: "Web Design with Custom Domain", included: true },
      { text: "Graphic Design without watermarks", included: true },
      { text: "Video Editing without watermarks", included: true },
      { text: "Full access to Game development", included: true },
      { text: "Enhanced Database and site security", included: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">PRICING</h2>
      <p className="pricing-subtitle">
        Our pricing details, the higher you go, the greater the benefits abound
      </p>

      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}
          >
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">${plan.price}</span>
              <span className="per">per month</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={feature.included ? "included" : "excluded"}
                >
                  {feature.included ? "✔" : "✘"} {feature.text}
                </li>
              ))}
            </ul>
            <button className="btn-started">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
