"use client";

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // For star icons
import styles from "../../styles/About/Stories.module.css"; // Import CSS module

const Stories = () => {
  const reviews = [
    {
      name: "John Doe",
      comment: "Amazing service! Highly recommended.",
      rating: 5,
      photo:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jane Smith",
      comment: "Great experience, will come back again.",
      rating: 4.5,
      photo: "https://static-cse.canva.com/blob/1920579/1600w-B-cRyoh7b98.jpg",
    },
    {
      name: "Alice Johnson",
      comment: "Very professional and friendly.",
      rating: 5,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s",
    },
    {
      name: "Bob Brown",
      comment: "Excellent work, exceeded expectations.",
      rating: 4,
      photo:
        "https://www.kingrosales.com/wp-content/uploads/2018/05/king-rosales-profile-photo-square.jpg",
    },
    {
      name: "Charlie Davis",
      comment: "Top-notch service, very satisfied.",
      rating: 5,
      photo:
        "https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg",
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className={styles.star} />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
      } else {
        stars.push(<FaStar key={i} className={styles.starGray} />);
      }
    }
    return stars;
  };
  return (
    <div className={styles.storiesContainer}>
      <h2 className={styles.storiesHeading}>Client Success Stories</h2>
      <div className={styles.storiesGrid}>
        {/* Image Card */}
        <div className={`${styles.storiesCard} ${styles.imageCard}`}>
          <img
            src="/AboutUs/SRS.png"
            alt="Client Success"
            className={styles.cardImage}
          />
        </div>

        {/* Review Cards */}
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${styles.storiesCard} ${styles.reviewCard}`}
          >
            <div className={styles.reviewHeader}>
              <img
                src={review.photo}
                alt={review.name}
                className={styles.reviewPhoto}
              />
              <div>
                <div className={styles.reviewName}>{review.name}</div>
                <div className={styles.starsContainer}>
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            <p className={styles.reviewComment}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
