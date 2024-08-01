import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from "react-icons/ai"; // Import star icon

const reviews = [
    {
        product: "Water Bottle",
        review: "This water bottle is fantastic! It keeps my drinks cold for hours and is super durable. I love the sleek design and the convenience of the built-in straw.",
        rating: 4
    },
    {
        product: "Laptop Stand",
        review: "The laptop stand is a game-changer for my home office setup. It’s sturdy, adjustable, and has improved my posture significantly. Highly recommend for anyone working from home!",
        rating: 5
    },
    {
        product: "Wireless Earbuds",
        review: "These wireless earbuds offer excellent sound quality and a comfortable fit. The battery life is impressive, and they connect seamlessly with my devices. Great value for the price.",
        rating: 4
    },
    {
        product: "Coffee Maker",
        review: "I’m really pleased with this coffee maker. It brews a perfect cup of coffee every time and the programmable timer is a huge plus. It’s also easy to clean, which is a bonus.",
        rating: 5
    },
    {
        product: "Smartwatch",
        review: "This smartwatch has been a great addition to my daily routine. It tracks my fitness activities accurately and the notifications are very helpful. The battery life could be better, but overall, it’s a solid product.",
        rating: 4
    },
    {
        product: "Portable Charger",
        review: "The portable charger is incredibly handy for travel. It charges my phone quickly and holds a charge for a long time. I’ve used it multiple times on long trips, and it’s never let me down.",
        rating: 5
    },
    {
        product: "Yoga Mat",
        review: "This yoga mat is very comfortable and provides excellent grip. It’s thick enough to cushion my knees during workouts and the non-slip surface helps during intense sessions.",
        rating: 5
    },
    {
        product: "Blender",
        review: "The blender works great for smoothies and soups. It’s powerful and blends everything smoothly. The only downside is that it’s a bit noisy, but that’s a minor issue compared to its performance.",
        rating: 4
    }
];

function StarRating({ rating }) {
    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <AiOutlineStar
                    key={index}
                    style={{ color: index < rating ? 'gold' : '#ddd', fontSize: '1.2rem' }}
                />
            ))}
        </div>
    );
}

function Activity() {
    return (
        <Section>
            <div className='title'>
                <h4>Customer Reviews</h4>
            </div>
            <div className='reviews'>
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <h5>{review.product}</h5>
                        <StarRating rating={review.rating} />
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Activity;

const Section = styled.section`
    display: grid;
    gap: 1rem;
    .title {
        margin-left: 15px;
        h4 {
            font-weight: bold;
        }
    }
    .reviews {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .review {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            h5 {
                margin: 0;
            }
            p {
                margin: 0.5rem 0;
                color: #555;
            }
        }
    }
    .stars {
        display: flex;
        gap: 0.2rem;
        margin: 0.5rem 0;
    }
`;
