import { useState, useEffect } from "react";

const BackToTop = () => {
  const [backTop, useBackTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 550 ? useBackTop(true) : useBackTop(false);
    });
  }, []);
  const upScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {backTop && (
        <div className="z-40 cursor-pointer fixed bottom-10 right-10 duration-100 ">
          <div className="relative rounded-full" onClick={upScroll}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-up-circle"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="12" y1="8" x2="8" y2="12" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="16" y1="12" x2="12" y2="8" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default BackToTop;
