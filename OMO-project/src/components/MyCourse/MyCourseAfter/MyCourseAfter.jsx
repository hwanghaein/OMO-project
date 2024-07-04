import styles from "./MyCourseAfter.module.css";
import MyCourseFindBox from "../MyCourseFindBox/MyCourseFindBox";
import MyCoursePlusBox from "../MyCoursePlusBox/MyCoursePlusBox";
import React, { useState, useEffect } from "react";

const MyCourseAfter = ({ time, setTime, content, setContent }) => {
  const getStringDate = (time) => {
    const localTime = new Date(time.getTime() - time.getTimezoneOffset() * 60000);
    return localTime.toISOString().slice(0, 16);
  };

  const addMyCourseFindBox = () => {
    const newTime = [...time, getStringDate(new Date())];
    setTime(newTime);
    setMyCourseFindBoxes((prev) => [
      ...prev,
      {
        key: newTime.length - 1,
        idx: newTime.length - 1,
      },
    ]);
  };

  const [myCourseFindBoxes, setMyCourseFindBoxes] = useState([
    {
      key: 0,
      idx: 0,
    },
  ]);

  useEffect(() => {
    // 초기 MyCourseFindBox 추가
    if (myCourseFindBoxes.length === 0) {
      addMyCourseFindBox();
    }
  }, []);

  return (
    <div className={styles["mycourse-after-total-container"]}>
      {myCourseFindBoxes.map((box) => (
        <MyCourseFindBox
          key={box.key}
          time={time}
          setTime={setTime}
          content={content}
          setContent={setContent}
          idx={box.idx}
        />
      ))}

      <MyCoursePlusBox onPlusButtonClick={addMyCourseFindBox} />
    </div>
  );
};

export default MyCourseAfter;
