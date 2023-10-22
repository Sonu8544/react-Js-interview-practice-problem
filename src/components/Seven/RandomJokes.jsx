import React, { useEffect, useState } from 'react';

const RandomJokes = () => {

    const jokesArray = [
        { joke: "Why don't scientists trust atoms? Because they make up everything!" },
        { joke: "Parallel lines have so much in common. It's a shame they'll never meet." },
        { joke: "How do you organize a space party? You 'planet'!" },
        { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { joke: "I'm reading a book on anti-gravity. It's impossible to put down!" },
        { joke: "I used to play piano by ear, but now I use my hands." },
        { joke: "What do you call a fish with no eyes? Fsh." },
        { joke: "Why can't you give Elsa a balloon? Because she will let it go." },
        { joke: "I used to be a baker, but I couldn't make enough dough." },
        { joke: "I'm on a whiskey diet. I've lost three days already." },
        { joke: "How do you make a tissue dance? You put a little boogie in it!" },
        { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { joke: "I'm reading a book on anti-gravity. It's impossible to put down!" },
        { joke: "I used to play piano by ear, but now I use my hands." },
        { joke: "Parallel lines have so much in common. It's a shame they'll never meet." },
        { joke: "Why don't scientists trust atoms? Because they make up everything!" },
        { joke: "Why don't skeletons fight each other? They don't have the guts!" },
        { joke: "I'm so good at sleeping, I can do it with my eyes closed." },
        { joke: "What do you call a fake noodle? An 'impasta'!" },
        { joke: "I used to be a baker, but I couldn't make enough dough." }
      ];
   
    const [jokes, setJoke] = useState('');
    const getJokes = () => {
        const getRandomJokes = Math.floor(Math.random() * jokesArray.length);
        setJoke(jokesArray[getRandomJokes].joke)
        console.log(getRandomJokes)
    }

    useEffect(() => {
        getJokes();
    }, [])
    return (
        <>
            <h1 >Random Jokes Goes Here</h1>
            <li style={{color:"orange"}} >{jokes}</li>
        </>
    )
}

export default RandomJokes;
