import React from "react";
import ReactWordcloud from "react-wordcloud";

const Cloud = () => {
    const wordsOne = [
        {
            text: "told",
            value: 64,
        },
        {
            text: "mistake",
            value: 11,
        },
        {
            text: "thought",
            value: 16,
        },
        {
            text: "bad",
            value: 17,
        },
        {
            text: "robin",
            value: 90,
        },
    ];

    const getWords = () => {
        return wordsOne;
    };

    const callbacks = {
        // getWordColor: () => "black", //(word) => (word.value > 50 ? "blue" : "red"),
        onWordClick: (word) => console.log(word),
        onWordMouseOver: (word) => console.log(word),
        getWordTooltip: (word) => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    };

    const options = {
        fontFamily: "Monaco",
        colors: ["white"],
        rotationAngles: [10, 0],
        fontSizes: [50, 100],
        transitionDuration: 1000,
        padding: 20,
    };

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ReactWordcloud callbacks={callbacks} words={wordsOne} options={options} />
        </div>
    );
};

export default Cloud;

//https://react-wordcloud.netlify.app/props
