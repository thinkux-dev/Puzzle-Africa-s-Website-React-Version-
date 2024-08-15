import React from 'react';

// import Header from '../../components/Header/Header'
import '../PrivacyPolicy/PrivacyPolicy.css';

const RefundPolicy = () => {
  return (
    <div>
      <h1>Refund Policy for Puzzle Business</h1>

      <h2>Overview</h2>
      <p>
        At <strong>Puzzle Business</strong>, customer satisfaction is our priority. If you are not fully satisfied with
        our business management platform, we offer flexible refund options for our monthly and yearly subscription plans.
        This policy outlines the conditions under which refunds are granted and the procedures to request a refund.
      </p>

      <h2>Refunds for Subscriptions</h2>
      <p>
        We offer refunds under the following conditions:
      </p>
      <ul >
        <li>
          <strong>Monthly Subscriptions:</strong> You may request a refund within the first 7 days of your subscription period. After this time, the subscription fee for the current month is non-refundable.
        </li>
        <li>
          <strong>Yearly Subscriptions:</strong> You may request a refund within the first 14 days of the start of your subscription. After this time, the yearly subscription fee is non-refundable, but you can still cancel your subscription to prevent future charges.
        </li>
      </ul>
      <p>
        Please note that once you request a refund, your access to Puzzle Business will be immediately revoked, and your subscription will be terminated.
      </p>

      <h2>How to Request a Refund</h2>
      <ol>
        <li>
          <strong>Contact Support:</strong> To initiate a refund, contact our customer support team at{' '}
          <a href="mailto:puzzleafrica@gmail.com">puzzleafrica@gmail.com</a> or call us at{' '}
          <strong>+2349169235078</strong> within the applicable refund period.
        </li>
        <li>
          <strong>Refund Processing:</strong> Once your request is reviewed and approved, the refund will be processed, and a credit will be applied to your original payment method within 5-10 business days.
        </li>
      </ol>

      <h2>Non-Refundable Circumstances</h2>
      <p>
        Refunds will not be provided in the following situations:
      </p>
      <ul>
        <li>Outside the refund window (7 days for monthly subscriptions and 14 days for yearly subscriptions).</li>
        <li>Partial months of service or unused portions of a yearly subscription after the refund period has passed.</li>
        <li>Downgrades to a lower subscription plan after the refund period.</li>
      </ul>

      <h2>Cancellation Policy</h2>
      <p>
        You can cancel your subscription at any time to avoid future billing. After cancellation, you will continue to have access to Puzzle Business until the end of your current billing cycle.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our refund policy or need further assistance, please contact us:
      </p>
      <ul>
        <li>Email: <a href="mailto:puzzleafrica@gmail.com">puzzleafrica@gmail.com</a></li>
        <li>Phone: <strong>+2349169235078</strong></li>
      </ul>
    </div>
  );
};

export default RefundPolicy;