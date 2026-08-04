"use client";

export function AnimatedMail() {
  return (
    <div id="letter-wrap">
      <div id="animated-mail">
        <div className="back-fold" />
        <div className="letter">
          <div className="letter-border" />
          <div className="letter-title" />
          <div className="letter-context" />
        </div>
        <div className="top-fold" />
        <div className="body" />
        <div className="left-fold" />
      </div>
      <div className="shadow" />

      <style jsx>{`
        #letter-wrap {
          position: relative;
          width: 72px;
          height: 54px;
        }
        #animated-mail {
          position: absolute;
          height: 54px;
          width: 72px;
          transition: 0.4s;
        }
        .body {
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 36px 72px;
          border-color: transparent transparent var(--accent-blue) transparent;
          z-index: 2;
        }
        .top-fold {
          position: absolute;
          top: 18px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 18px 36px 0 36px;
          border-color: var(--accent-blue) transparent transparent transparent;
          transform-origin: 50% 0%;
          transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
          z-index: 2;
          filter: brightness(0.85);
        }
        .back-fold {
          position: absolute;
          bottom: 0;
          width: 72px;
          height: 36px;
          background: var(--accent-blue);
          filter: brightness(0.8);
          z-index: 0;
        }
        .left-fold {
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 18px 0 18px 36px;
          border-color: transparent transparent transparent var(--accent-blue);
          filter: brightness(0.95);
          z-index: 2;
        }
        .letter {
          left: 7px;
          bottom: 0;
          position: absolute;
          width: 58px;
          height: 22px;
          background: var(--bg);
          z-index: 1;
          overflow: hidden;
          transition: 0.4s 0.2s;
        }
        .letter-border {
          height: 4px;
          width: 100%;
          background: repeating-linear-gradient(
            -45deg,
            var(--accent-blue),
            var(--accent-blue) 3px,
            transparent 3px,
            transparent 7px
          );
        }
        .letter-title {
          margin-top: 4px;
          margin-left: 3px;
          height: 4px;
          width: 40%;
          background: var(--accent-blue);
          opacity: 0.7;
        }
        .letter-context {
          margin-top: 4px;
          margin-left: 3px;
          height: 4px;
          width: 20%;
          background: var(--accent-blue);
          opacity: 0.5;
        }
        .shadow {
          position: absolute;
          top: 66px;
          left: 50%;
          width: 110px;
          height: 10px;
          transition: 0.4s;
          transform: translateX(-50%);
          border-radius: 100%;
          background: radial-gradient(rgba(0, 0, 0, 0.35), transparent 70%);
        }
        #letter-wrap:hover #animated-mail {
          transform: translateY(16px);
        }
        #letter-wrap:hover .top-fold {
          transition: transform 0.4s, z-index 0.2s;
          -webkit-transform: rotateX(180deg);
          transform: rotateX(180deg);
          z-index: 0;
        }
        #letter-wrap:hover .letter {
          height: 50px;
        }
        #letter-wrap:hover .shadow {
          width: 70px;
        }
      `}</style>
    </div>
  );
}
