"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="none">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            //className="dark:bg-black bg-white h w-full md:h-full md:w-full rounded-3xl p-4 shadow-xl border border-neutral-400 dark:border-white/[0.2]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-around align-items-center"
            style={{
              transformOrigin: "top",
              //marginBottom: '200px',
              background: 'balck',
              border: '1px solid white',
              padding: '20px',
              borderRadius: '20px',
              //height: '20vh',
              //display: 'flex',
              //flexDirection: 'column',
              wordWrap: 'break-word',
              textAlign: 'center',
              zIndex: '9999',
              //position: 'absolute',
              //top: '70%',
              opacity: '1'
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              opacity: 1 - index 
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            {/*<div>
            {(card.name && card.designation)} ? <p className="text-neutral-500 font-medium dark:text-white">{card.name}</p><p className="text-neutral-400 font-normal dark:text-neutral-200">{card.designation}</p>
          </div>*/}
          </motion.div>
        );
      })}
    </div>
  );
};
