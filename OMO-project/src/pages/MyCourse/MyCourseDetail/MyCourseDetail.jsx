import styles from "./MyCourseDetail.module.css";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import Share from "../../../components/MyCourse/Button/Share/Share";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MyCourseDetailBox from "../../../components/MyCourseDetailBox/MyCourseDetailBox";
import downArrow from "../../../assets/my-course/write/down-arrow.png";

const MyCourseDetail = () => {
  const {id} = useParams();
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStringDate = (date) => {
    const options = {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: false};
    return new Intl.DateTimeFormat("ko-KR", options).format(new Date(date));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/mycourse/${id}`, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        setDetailData(response.data);
        setLoading(false);
      } catch (error) {
        setError("데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className={styles["loading"]}>로딩 중입니다...</div>;
  }

  if (error) {
    return <div className={styles["error"]}>{error}</div>;
  }

  return (
    <div className={styles["mycourse-detail-total-container"]}>
      <div className={styles["mycourse-detail-title-container"]}>
        <span>{detailData.courseName}</span>
      </div>
      <div className={styles["mycourse-detail-course-container"]}>
        <div className={styles["mycourse-detail-course-item-container"]}>
          {/* content와 time를 함께 순회하여 각 쌍의 요소를 렌더링 */}
          {detailData.contents.map((contentItem, index) => (
            <React.Fragment key={index}>
              <div className={styles["mycourse-detail-calendar-container"]}>{getStringDate(contentItem.time)}</div>
              <MyCourseDetailBox {...contentItem} />
              {index !== detailData.contents.length - 1 && <img src={downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles["mycourse-detail-edit-share-button-container"]}>
        <Share />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default MyCourseDetail;
