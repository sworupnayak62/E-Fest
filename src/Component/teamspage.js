import React from "react";
import "../css/teams.css";
import { AiFillPlusCircle } from 'react-icons/ai';
import { Footer } from "./Footer";
const cards = [
    {
        title: "Aditya Sahu",
        description:
            "Lorem",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/AdityaSahu.jpg?updatedAt=1681965046163"
    },
    {
        title: "Sworup Ranjan Nayak",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SworupRanjanNayak.jpeg?updatedAt=1681965059171"
    },
    {
        title: "Swaugat Beura",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SWAUGATBEURA.jpg?updatedAt=1681965058068"
    },
    {
        title: "Aakanksha Sharma",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/AakanshaSharma.jpg?updatedAt=1681965046146"
    },
    {
        title: "Rakesh Sahoo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/RAKESHSAHOO.jpeg?updatedAt=1681965054252"
    },
    {
        title: "Bibhu Ranjan Parida",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/BIBHURANJANPARIDA.jpg?updatedAt=1681965045292"
    },
    {
        title: "Swayam Vikash Pattnaik",
        description:
            "Lorem",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SwayamVikashPattanaik.jpeg?updatedAt=1681965058720"
    },
    {
        title: "Biswajit Sahoo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/BISWAJEETSAHOO.jpg?updatedAt=1681967635969"
    },
    {
        title: "Alpana Patra",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/AlpanaPatra.jpg?updatedAt=1681965044757"
    },
    {
        title: "Urjja Banka",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/URJJABANKA.jpg?updatedAt=1681965058397"
    },
    {
        title: "Priyanka",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/PRIYANKA.jpg?updatedAt=1681965053711"
    },
    {
        title: "Priyabrata Moharana",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/PriyabrataMoharana.jpg?updatedAt=1681965052318"
    },
    {
        title: "Harshdeep Singh",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/Harshdeep.jpg?updatedAt=1681965048503"
    },
    {
        title: "Rohit Kumar Gupta",
        description:
            "Lorem",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/ROHITKUMARGUPTA.jpg?updatedAt=1681965054146"
    },
    {
        title: "Nikhil Agrawal",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/NikhilAgrawal.jpg?updatedAt=1681965048241"
    },
    {
        title: "Stuti Sinha",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/StutiSinha.jpg?updatedAt=1681965059101"
    },
    {
        title: "Arpan Das",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/ArpanDas.jpg?updatedAt=1681965045427"
    },
    {
        title: "Biswajit Panda",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/BISWAJITPANDA.jpg?updatedAt=1681965045228"
    },
    {
        title: "Rahul Mishra",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/RahulMishra.png?updatedAt=1681965052770"
    },
    {
        title: "Shubhransu Das",
        description:
            "Lorem",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SHUBHRANSHUDAS.jpg?updatedAt=1681965057512"
    },
    {
        title: "Armaan Biswal",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/ARMAANBISWAL.JPG?updatedAt=1681965046987"
    },
    {
        title: "Prayash Nayak",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/PRAYASHNAYAK.JPG?updatedAt=1681965049864"
    },
    {
        title: "Shuvam Mohanty",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/ShuvamMohanty.jpg?updatedAt=1681965058129"
    },
    {
        title: "Pradyumna Mohanty",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/PradyumnaMohanty.jpg?updatedAt=1681965049193"
    },
    {
        title: "Piush Praharaj",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/PIUSHPRAHARAJ.JPG?updatedAt=1681965048885"
    },
    {
        title: "Girish Bharadwaj",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/GirishBhardwaj.jpg?updatedAt=1681965049094"
    },
    {
        title: "Akankhya Sahoo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/AKANKHYASAHOO.webp?updatedAt=1681965044822"
    },
    {
        title: "Shriyashree Beura",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SHRIYASHEEBEURA.jpg?updatedAt=1681965055615"
    },
    {
        title: "Anmol Singh",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/ANMOLSINGH.jpg?updatedAt=1681965045238"
    },
    {
        title: "Deepshikha Paty",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/DeepshikhaPaty.jpg?updatedAt=1681965048026"
    },
    {
        title: "Dibya",
        description:
            "Lorem",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/DIBYA.jpg?updatedAt=1681967173039"
    },
    {
        title: "Divyaswarup Mishra",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/DivyaswarupMishra.jpg?updatedAt=1681965048388"
    },
    {
        title: "Priyansu Sinha",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/PRIYANSUSINHA.jpeg?updatedAt=1681965053353"
    },
    {
        title: "Sailendra Biswal",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SAILENDRABISWAL.heic?updatedAt=1681965055573"
    },
    {
        title: "Shaswat Tripathy",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SHASWATTRIPATHI.jpg?updatedAt=1681965053642"
    },
    {
        title: "Shekhar Kumar",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SHEKHARKUMAR.jpg?updatedAt=1681965052978"
    },
    {
        title: "Shubham Kumar",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
        image: "https://ik.imagekit.io/nsrgvmehl/e23/SHUBHAMKUMAR.jpg?updatedAt=1681967751970"
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
        <div className="team-card" style={{ backgroundImage: `url(${image})`, minHeight: "280px", backgroundPosition: "-1em", backgroundRepeat: "no-repeat", backgroundSize: "300px" }}>
            <div className="card__social" id={socialCard}>
                <div className="card__social-control">
                    <div className="card__social-toggle" id={toggleCard}>
                        <AiFillPlusCircle />
                    </div>
                    <span className="card__social-text">{title}</span>
                    <ul className="card__social-list">
                        E-Fest 5.0
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const Teams = () => {
    return (
        <>
            <div className='title' style={{ marginTop: '2rem' }}>
                <h3>
                    MEET OUR TEAM
                </h3>
            </div>
            <div className="card-grid">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
            <Footer style={{ marginTop: '10%' }} />
        </>
    );
}