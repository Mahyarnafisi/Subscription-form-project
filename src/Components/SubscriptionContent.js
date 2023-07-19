import React from "react";
import SubscriptionStyle from "./SubscriptionContentStyle.module.css";
function SubscriptionContent(props) {
  return (
    <div className={SubscriptionStyle.wrapper}>
      <h1 className={SubscriptionStyle.title}>Subscription</h1>
      <p className={SubscriptionStyle.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque, provident cupiditate est voluptates earum expedita vero placeat voluptatibus nam?</p>
      <div className={SubscriptionStyle.icons}>
        <i class="bi bi-instagram"></i> <i class="bi bi-google"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-facebook"></i>
      </div>
    </div>
  );
}
export default SubscriptionContent;
