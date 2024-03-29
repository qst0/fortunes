const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const fortunes = [
    "You will be spending time outdoors, in the mountains, near water.",
    "The only limits to the possibilities in your life tomorrow are the buts you use today.",
    "If it is meant to be, who are you to change that. Time to believe it.",
    "Confucious say: top of ladder nice place... can be very lonesome.",
    "You will always have good luck in your personal affairs.",
    "You will have good luck in your personal affairs.",
    "Knowledge is priceless.",
    "Always remember where you are going and never forget where you've been.",
    "Character is who you are when no one is watching.",
    "Declare peace every day.",
    "Condidence is a high.",
    "As every thread of gold is valuable, so is every moment of time.",
    "Compromise is always wrong if it means sacrificing a principle.",
    "Digital circuits are made from analog parts.",
    "Strong lives are motivated by dynamic purposes.",
    "Enjoy what you have, hope for what you lack.",
    "If the cake is bad, what good is the frosting?",
    "Deeds done in secret have a way of becoming found out.",
    "Now is the time to try something new.",
    "A refreshing change is in your future.",
    "If you think nobody cares you are alive, try missing a couple of car payments.",
    "A vivid and creative mind is just one of your many great attributes.",
    "Could I get some directions? (\"To Where?\") To your heart.",
    "Creative energy is up - capitalize on it.",
    "Courtesy pays.",
    "Courtesy begins in the home.",
    "A letter of great importance may reach you any day now.",
    "All the answers you need are right there in front of you.",
    "Others will provide you with a wonderful journey.",
    "You love the thrill of showmanship and display.",
    "People find it difficult to resist your persuasive manner.",
    "Pray for what you want. But work for the things you need.",
    "Share your abundant humor with others.",
    "Your personality is fueled by the fascination you feel for life.",
    "Make time for a relaxing vacation.",
    "Changes of glamour and excitement are coming to you.",
    "You will spend many years in comfort and material wealth.",
    "You are a bundle of energy always on the go.",
    "Pay for what you want. But work for the things you need.",
    "Consider gain and loss, but never be greedy and everything will be all right.",
    "You are skilled at expressing yourself and effecting change.",
    "The truth always shines through",
    "Soon you will receive plesant news",
    "You business will assume vast proportions.",
    "Experience is what you get when you don't get what you want.",
    "Seize the present day.",
    "Everyone has someone to love.",
    "You will soon be crossing great waters on a fun vacation.",
    "A pleasant experience is ahead: don't pass it by.",
    "The best exercise for the heart is to reach down and help someone up.",
    "Be careful or you could fall for some tricks today.",
    "Be careful or you could fall for some tricks today.",
    "Prosperity is a way of living and thinking, and not just having money or things.",
    "One who admires you greatly is hidden before your eyes.",
    "Stop searching forever, happiness is just next to you.",
    "A well fed romance nourishes the soul.",
    "An important business venture may soon develop for you.",
    "Your life will be prosperous.",
    "Learn to love by loving yourself first.",
    "Be mischievous and you will not be lonesome.",
    "Take that chance you've been considering.",
    "You may lack ambition, but not the ability to succeed.",
    "Nothing great was ever achieved without enthusiasm.",
    "Most people, once they graduate from the School of Hard Knocks, automatically enroll",
    "Call a friend, your voice will bring a smile",
    "Health and happines are in your destiny.",
    "All the preparation you've done will finally be paying off!",
    "Don't be so critical and overly concerned about details.",
    "Your luck changes today",
    "Set high goals.",
    "Love mankind, trust the majority, and never owe anyone.",
    "It is better to have beans and bacon in peace than cakes and ale in fear.",
    "You have a good head for matters of money",
    "If you have a job without aggravations, you don't have a job.",
    "You are attracted to things with an exotic flavor",
    "You feed your body everyday. You must also feed your mind.",
    "Be sure to handle financial affairs wisely.",
    "Cleverness is serviceable for everthing, sufficient in nothing.",
    "An ounce of gold cannot buy an ounce of time.",
    "The love of your life will carry you through any circumstance.",
    "Your talents will soon be recognized and suitably rewarded.",
    "You have a quiet and unobtrusive nature.",
    "You are realistic and others can relate to you.",
    "Your careful nature will bring you financial success.",
    "Be careful in whom you share your confidence",
    "At the end of each day, think \"what has this day brought me, and what have I given it?\"",
    "A long lost relative will surface soon to your benefit!",
    "Teach oneself by exploring the old and deducing the new.",
    "A journey of 1000 miles begins with one step.",
    "A solid challenge will bring forth your finest abilities.",
    "Kind words can be short and easy to speak, but their echoes are truly endless.",
    "The near future holds a gift of contentment.",
    "You will soon embark on a business venture.",
    "Pick a path with heart.",
    "No one can walk backwards into the future.",
    "F is not pleasure, it's victory.",
    "A calm sea does not make a skilled sailor.",
    "Book lovers never go to bed alone.",
    "It takes courage to grow up and turn out to be who you really are.",
    "And all for love, and nothing for reward.",
    "Find a release for your cares, have a good time.",
    "The time is right to make new friends.",
    "Happiness is not a reward, it's a consequence.",
    "You out fistance all competitors.",
    "May you grow rich.",
    "Good clothes open many doors. Go shopping.",
    "Saturdays are good days for taking care of chores.",
    "Happiness isn't somethign you remember, it's something you experience.",
    "Enjoy the spotlight.",
    "One extends one's limits only by exceeding them.",
    "A shooting star tonight will bring you good luck tomorrow!",
    "How dark is dark?, How wise is wise?",
    "You will step on the soil of many countries.",
    "You will be fortunate in everything you put your hands on."
    // and so on...
];

let seenFortunes = [];

app.get('/fortune', (req, res) => {
    let fortune = null;

    while (!fortune) {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const potentialFortune = fortunes[randomIndex];

        if (!seenFortunes.includes(potentialFortune)) {
            fortune = potentialFortune;
            seenFortunes.push(fortune);
        }

        if (seenFortunes.length === fortunes.length) {
            seenFortunes = [];
        }

    }

    res.send({ fortune });
});

app.listen(3000, () => {
    console.log('Fortune API listening on port 3000!');
});