import React from "react";
import "../css/teams.css";
import { AiFillPlusCircle } from 'react-icons/ai';
const cards = [
    {
        title: "Card 1",
        description:
            "Lorem",
        image: "https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626"
    },
    {
        title: "Card 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626"
    },
    {
        title: "Card 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626"
    },
    {
        title: "Card 4",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626"
    },
    {
        title: "Card 5",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626"
    },
    {
        title: "Card 6",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626"
    }
];

const showSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard),
        social = document.getElementById(socialCard);

    toggle.addEventListener("click", () => {
        //If animation class exist = down-animaiton class add
        if (social.classList.contains("animation")) {
            social.classList.add("down-animation");

            setTimeout(() => {
                social.classList.remove("down-animation");
            }, 1000);
        }
        //Add the animation to the div tag card__social
        social.classList.toggle("animation");
    });
};

const Card = ({ title, description, image }) => {
    const toggleCard = "card-toggle-" + title; // Generate a unique ID for each card toggle
    const socialCard = "card-social-" + title; // Generate a unique ID for each card social

    // Call the showSocial function on mount to add click event listener to the toggle button
    React.useEffect(() => {
        showSocial(toggleCard, socialCard);
    }, []);

    return (
        <div className="team-card" style={{ backgroundImage: `url(${image})`, objectFit: 'contain' }}>
            <h3 className="card__name">{title}</h3>
            {/* <span className="card__profession">{description}</span> */}

            <div className="card__social" id={socialCard}>
                <div className="card__social-control">
                    <div className="card__social-toggle" id={toggleCard}>
                        <AiFillPlusCircle />
                    </div>

                    <span className="card__social-text">{title}</span>
                    <ul className="card__social-list">
                        {description}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const Teams = () => {
    return (
        <div>
            <div className="card-grid">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
}