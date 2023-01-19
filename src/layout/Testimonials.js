import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ArrowIcon from "../components/Arrow";
import { breakpoints, colors, fonts } from "../constants";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: ${colors.primary};
  padding: 120px 90px;
  display: flex;
  align-items: center;
  isolation: isolate;
  height: 400px;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 60px 45px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 36px;
    padding-top: 48px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 300px;
  }
`;
const Wrap = styled.div`
  flex: 1;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const RotatedText = styled(motion.h2)`
  font-size: var(--font-size-subtitle);
  /* transform: rotate(-90deg); */
  width: fit-content;
  white-space: nowrap;
`;
const Carousel = styled(motion.div)`
  display: flex;
  align-items: center;
  flex: 4 0;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledArrowIcon = styled(ArrowIcon)`
  width: 48px;
  height: 48px;
  color: ${colors.dark};
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : `none`)};
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const MobileArrowIcon = styled(ArrowIcon)`
  width: 32px;
  height: 32px;
  color: ${colors.dark};
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : `none`)};
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const Text = styled(motion.p)`
  font-size: var(--font-size-text);
  display: block;
  flex: 1;
  text-align: center;
  padding: 0px 72px;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0px 36px;
    margin-top: auto;
  }
`;
const Heading = styled.h2`
  font-size: var(--font-size-subtitle);
  width: fit-content;
  white-space: nowrap;
  margin-bottom: 24px;
  border-bottom: 2px solid ${colors.font};
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
    top: 12px;
  }
`;
const variants = {
  enter: (direction) => {
    return {
      x: direction === "next" ? "-10%" : "10%",
      opacity: 0,
    };
  },
  center: { x: "0%", opacity: 1 },
  exit: (direction) => {
    return {
      x: direction === "next" ? "10%" : "-10%",
      opacity: 0,
    };
  },
};
const Testimonials = () => {
  const [words, setWords] = useState(0);
  const wordsArr = [
    {
      name: "Lisa V",
      words: `I’m definitely consistently improving both my strength and my physique. After 6 months, I’m thrilled where I’m at and excited to keep going!`,
    },
    {
      name: "Carla S",
      words: `I really loved how responsive you were to feedback, how you created well-rounded workouts, and pushed me just enough. I also really loved connecting with you on a personal level :) I think that your personableness really helps build trust early on in the process.`,
    },
    {
      name: "Simron S",
      words:
        "Adrienne is the best trainer I've worked with! She always knows just the right amount to push and challenge. I appreciate that she always tailors our workouts to my goals and abilities, as well as what I would like to focus on during our sessions. She makes working out so fun and enjoyable with her :)",
    },
    {
      name: "Nandini V",
      words: `Adrienne really challenged me but not in a way that made me dread the workouts. She pushed me with using additional weight, but when she saw I was struggling gave me ways to modify or improve my form. I wish I still lived in the area because Adrienne was a great trainer!`,
    },
  ];
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("previous");
    if (words === wordsArr.length - 1) {
      setWords(0);
    } else {
      setWords((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    setDirection("next");
    if (words === 0) {
      setWords(wordsArr.length - 1);
    } else {
      setWords((prev) => prev - 1);
    }
  };
  const [wordsRef, wordsInView] = useInView({ triggerOnce: true });

  return (
    <Wrapper>
      <MobileArrowIcon handleClick={handleBack} />
      <Wrap>
        <RotatedText
          initial={{ opacity: 0, y: 80, rotate: -90 }}
          animate={wordsInView ? { opacity: 1, y: "0%", rotate: -90 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          KIND WORDS
        </RotatedText>
      </Wrap>
      <Carousel
        initial={{ opacity: 0 }}
        animate={wordsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <StyledArrowIcon handleClick={handleBack} />
        <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
          <Text
            ref={wordsRef}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            key={words}
          >
            {wordsArr[words].words}
            <span style={{ display: "block", marginTop: "24px" }}>
              - {wordsArr[words].name}
            </span>
          </Text>
        </AnimatePresence>
        <StyledArrowIcon rotate handleClick={handleNext} />
      </Carousel>
      <Wrap>
        <RotatedText
          aria-hidden={true}
          style={{
            marginLeft: "auto",
          }}
          initial={{ opacity: 0, y: -80, rotate: -270 }}
          animate={wordsInView ? { opacity: 1, y: "0%", rotate: -270 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          KIND WORDS
        </RotatedText>
      </Wrap>
      <MobileArrowIcon rotate handleClick={handleNext} />
      <Heading>KIND WORDS</Heading>
    </Wrapper>
  );
};

export default Testimonials;
