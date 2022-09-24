import Image from "next/image";
import React from "react";
import { Circle, HandWritten, RightArrow, Tape } from "./Icon";
import { motion } from "framer-motion";

export default function HomePage() {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "tween", ease: "linear" },
    },
    visibleImg: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "tween", ease: "easeOut" },
    },
  };

  return (
    <main className="app">
      <div className="h-section wf-section">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="h-wrap"
        >
          <motion.h1 className="head-1 h-virg"></motion.h1>
          <motion.h1 className="head-1 h-var-1">S</motion.h1>
          <motion.h1 className="head-1">p</motion.h1>
          <motion.h1 className="head-1">r</motion.h1>
          <motion.h1 className="head-1">i</motion.h1>
          <motion.h1 className="head-1">n</motion.h1>
          <motion.h1 className="head-1">g</motion.h1>
        </motion.div>
        <div className="h-contents">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="h-wrap hw-2"
          >
            <motion.h1 className="head-1">s</motion.h1>
            <motion.h1 className="head-1 h-var">u</motion.h1>
            <motion.h1 className="head-1 h-var-2">m</motion.h1>
            <motion.h1 className="head-1">m</motion.h1>
            <motion.h1 className="head-1">e</motion.h1>
            <motion.h1 className="head-1">r </motion.h1>
          </motion.div>
          <div className="hand-wrap">
            <div id="draw-svg" className="h-handwritten">
              {/* <HandWritten /> */}
            </div>
            <div className="h-ink-handwritten"></div>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="div-block-27"
          >
            <div className="text-block-16">
              COLL.
              <br />
              2022
            </div>
          </motion.div>
        </div>
      </div>
      <div className="i-section wf-section">
        <div className="i-wrap">
          <div className="i-container">
            <motion.div
              id="wrapper-1"
              className="standard-wrap"
              variants={variants}
              initial="hidden"
              animate="visibleImg"
              transition={{ duration: 0.1 }}
            >
              <div className="i-standard">
                <Image
                  src="/man-default.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
            <div id="ink-wrapper-2" className="ink-wrap"></div>
            <div className="i-caption">
              <div className="caption-wrap">
                <div className="caption">(02)</div>
              </div>
              <div className="caption-wrap">
                <div className="caption">wmns</div>
              </div>
            </div>
          </div>
          <div className="scotch-tape">
            <Tape />
          </div>
          <div className="i-container ic-2">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visibleImg"
              transition={{ duration: 0.1 }}
              id="wrapper-2"
              className="standard-wrap"
            >
              <div className="i-standard">
                <Image
                  src="/women-default.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
            <div id="ink-wrapper-2" className="ink-wrap"></div>
            <div className="i-caption">
              <div className="caption-wrap">
                <div className="caption">(02)</div>
              </div>
              <div className="caption-wrap">
                <div className="caption">wmns</div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-wrap">
          <div className="link-wrap">
            <a href="/collections" className="l-link">
              explore
            </a>
            <div className="underline-effect w-embed">
              <style></style>
            </div>
          </div>
          <a href="" className="lerp-wrap w-inline-block">
            <Circle />
            <RightArrow />
          </a>
        </div>
      </div>
    </main>
  );
}
