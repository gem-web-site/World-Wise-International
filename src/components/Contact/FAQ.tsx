"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaEnvelope } from "react-icons/fa"; // Import icons
import styles from "../../styles/Contact/FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "What services does World-Wise International provide?",
      answer:
        "We offer a wide range of services including gemstone and gold trading, forex transactions, and crypto services.",
    },
    {
      question: "Where are your offices located?",
      answer:
        "Our offices are located in Colombo, Sri Lanka, and London, United Kingdom.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, bank transfers, and cryptocurrencies.",
    },
    {
      question: "How do I purchase gemstones or gold?",
      answer:
        "You can purchase gemstones or gold by contacting our sales team directly or through our online platform.",
    },
  ]);
  const [newQuestion, setNewQuestion] = useState<string>("");

  const toggleExpand = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newQuestion.trim()) {
      const updatedFaqItems: FAQItem[] = [
        { question: newQuestion, answer: "We'll get back to you soon!" },
        ...faqItems.slice(0, -1),
      ];
      setFaqItems(updatedFaqItems);
      setNewQuestion("");
    }
  };

  return (
    <div className={styles.faqContainer}>
      {/* Left Side */}
      <div className={styles.leftSide}>
        <h3>FAQ</h3>
        <h1>Do you have any questions for us?</h1>
        <p>
          The FAQ (Frequently Asked Questions) Section helps users get quick
          answers to common queries.
        </p>
        <form onSubmit={handleSubmit} className={styles.emailInput}>
          <div className={styles.inputContainer}>
            <FaEnvelope className={styles.emailIcon} />
            <input
              type="text"
              placeholder="Enter your question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleExpand(index)}
            >
              <span>{item.question}</span>
              <span className={styles.expandIcon}>
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`${styles.answer} ${
                expandedIndex === index ? styles.expanded : ""
              }`}
            >
              <p>{item.answer}</p>
              <div className={styles.line}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
