const tarotCards = [
    {
        name:"The fool",
        image: 'content/0-the-fool.png',
        meaning: "Freedom, spontaneity, new beginnings."
    },
        {
        name:"The Magician",
        image: "content/1-the-magician.png",
        meaning: "Potential, creativity, taking action."
    },
            {
        name:"",
        image: "content/2-the-high-priestess.png",
        meaning: "Intuition, wisdom, mystery."
    },
            {
        name:"",
        image: "content/3-the-empress.png",
        meaning: "Growth, abundance, communication."
    },
            {
        name:"",
        image: "content/4-the-emperor.png",
        meaning: "Stability, authority, structure."
    },
            {
        name:"",
        image: "content/5-the-hierophant.png",
        meaning: "Tradition, faith, spiritual guidance."
    },
            {
        name:"",
        image: "content/6-the-lovers.png",
        meaning: "Choices, relationships, harmony."
    },
            {
        name:"",
        image: "content/7-the-chariot.png",
        meaning: "Determination, victory, control."
    },
            {
        name:"",
        image: "content/8-strength.png",
        meaning: "Balance, truth, responsibility."
    },
            {
        name:"",
        image: "content/9-the-hermit.png",
        meaning: "Reflection, solitude, inner search."
    },
            {
        name:"",
        image: "content/10-wheel-of-fortune.png",
        meaning: "Destiny, change, cycles of life."
    },
            {
        name:"",
        image: "content/11-justice.png",
        meaning: "Courage, self-control, inner power."
    },
            {
        name:"",
        image: "content/12-the-hanged-man.png",
        meaning: "Letting go, patience, new perspective."
    },
            {
        name:"",
        image: "content/13-death.png",
        meaning: "Transformation, endings, renewal."
    },
            {
        name:"",
        image: "content/14-temperance.png",
        meaning: "Harmony, balance, healing."
    },
            {
        name:"",
        image: "content/15-the-devil.png",
        meaning: "Temptation, addiction, desires."
    },
            {
        name:"",
        image: "content/16-the-tower.png",
        meaning: "Disruption, revelation, liberation."
    },
            {
        name:"",
        image: "content/17-the-star.png",
        meaning: "Hope, inspiration, serenity."
    },
            {
        name:"",
        image: "content/18-the-moon.png",
        meaning: "Dreams, intuition, illusion."
    },
            {
        name:"",
        image: "content/19-the-sun.png",
        meaning: "Joy, success, clarity."
    },
            {
        name:"",
        image: "content/20-judgement.png",
        meaning: "Awakening, rebirth, realization."
    },
            {
        name:"",
        image: "content/21-the-world.png",
        meaning: "Completion, fulfillment, unity."
    }
            ];

const backCard = document.getElementById("backCard");
const cardImage = document.getElementById("cardImage");
const cardText = document.getElementById("cardText");

backCard.addEventListener("click", () => {
    const randomCard = tarotCards[Math.floor (Math.random() * tarotCards.length)];

    cardImage.src = randomCard.image;
    cardImage.alt = randomCard.name;
    cardText.textContent = randomCard.meaning;

    backCard.style.display = "none";
    cardImage.style.display = "block";
});