import Image from "next/image";
import React from "react";
import { Circle, HandWritten, RightArrow, Tape, Virgolette } from "./Icon";
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
      <div className="c-section wf-section">
        <div className="c-marquee">
          <div className="c-marquee-wrap">
            <div className="c-marquee-item">
              <div className="c-marquee-text">
                <div className="c-marquee-content">
                  <h1 className="c-marquee-heading">
                    deplace shop&nbsp;&nbsp;
                    <span className="c-marquee-span">·</span>&nbsp;&nbsp;do not
                    scroll&nbsp;&nbsp;·{" "}
                  </h1>
                </div>
                <div className="c-marquee-content">
                  <h1 className="c-marquee-heading">
                    deplace shop&nbsp;&nbsp;
                    <span className="c-marquee-span">·</span>&nbsp;&nbsp;do not
                    scroll&nbsp;&nbsp;·{" "}
                  </h1>
                </div>
                <div className="c-marquee-content">
                  <h1 className="c-marquee-heading">
                    deplace shop&nbsp;&nbsp;
                    <span className="c-marquee-span">·</span>&nbsp;&nbsp;do not
                    scroll&nbsp;&nbsp;·{" "}
                  </h1>
                </div>
                <div className="c-marquee-content">
                  <h1 className="c-marquee-heading">
                    deplace shop&nbsp;&nbsp;
                    <span className="c-marquee-span">·</span>&nbsp;&nbsp;do not
                    scroll&nbsp;&nbsp;·{" "}
                  </h1>
                </div>
                <div className="c-marquee-content">
                  <h1 className="c-marquee-heading">
                    deplace shop&nbsp;&nbsp;
                    <span className="c-marquee-span">·</span>&nbsp;&nbsp;do not
                    scroll&nbsp;&nbsp;·{" "}
                  </h1>
                </div>
                <div className="c-marquee-content">
                  <h1 className="c-marquee-heading">
                    deplace shop&nbsp;&nbsp;
                    <span className="c-marquee-span">·</span>&nbsp;&nbsp;do not
                    scroll&nbsp;&nbsp;·{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="e-section quote wf-section">
        <div className="e-outer">
          <div className="e-aside">who we are</div>
          <motion.h2
            className="e-heading eh-1"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            An independent{" "}
            <a href="" aria-label="eh-link" className="eh-link">
              brand
            </a>{" "}
            of
          </motion.h2>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="e-outer"
        >
          <h2 className="e-heading">urban trekking shoes and accessories</h2>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="e-outer"
        >
          <h2 className="e-heading">that comes from a convergence of </h2>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="e-outer"
        >
          <h2 className="e-heading">arts and personalities.</h2>
        </motion.div>
      </div>
      <div className="s-section wf-section">
        <div className="grid-slider-wrap w-dyn-list">
          <motion.div
            className="w-dyn-empty"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>No items found.</div>
          </motion.div>
        </div>
        <div className="l-wrap l-lerp">
          <div className="link-wrap">
            <a id="shop-all" href="" className="l-link">
              SHOP&nbsp;ALL
            </a>
            <div className="underline-effect w-embed"></div>
          </div>
          <a href="" className="lerp-wrap w-inline-block">
            <Circle />
            <RightArrow />
          </a>
        </div>
      </div>
      <div className="r-section wf-section">
        <div className="r-content">
          <div className="r-wrap-1">
            <Virgolette />

            <div className="reviewer-grid">
              <div className="reviewer-wrap">
                <div className="reviewer-inner">
                  <h3 className="reviewer">WiLLiAm GIbSoN</h3>
                  <h3 className="reviewer">JAmiE K. CoHen</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="r-wrap-2">
            <div className="r-inner ">
              <h4 className="review">
                Good things come to those who wait – Déplacé Maison is what has
                been missing in the modern fashion industry for years. Buy a
                shoe of high quality and design it finally happened. &nbsp;
              </h4>
              <h4 className="review">
                Déplacé Maison is a convincer for anticipation. The urban
                trekking as nevers seen before. An exceptional product that has
                no equal alongside a great team represent the brand
                professionally. &nbsp;{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
