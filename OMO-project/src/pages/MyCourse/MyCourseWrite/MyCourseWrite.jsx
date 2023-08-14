import styles from "./MyCourseWrite.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCoursePlusBox from "../../../components/MyCourse/MyCoursePlusBox/MyCoursePlusBox";
import MyCourseSearchBox from "../../../components/MyCourse/MyCourseSearchBox/MyCourseSearchBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import Save from "../../../components/MyCourse/Button/Save/Save";
import EditShare from "../../../components/MyCourse/Button/Edit-Share/Edit-Share";

const MyCourseWrite = () => (
  <div className={styles["myCourseWrite-total-container"]}>
    <div className={styles["myCourseWrite-title-container"]}>
      <input type="text" placeholder="나만의 코스" maxLength="10" className={styles["myCourseWrite-input-title"]} />
      <img src={pencil} alt="연필" className={styles["myCourseWrite-img-title"]} />
    </div>
    <MyCourseSearchBox />
    <MyCourseSearchBox />
    <MyCourseSearchBox />

    {/* <MyCoursePlusBox /> */}
    <MyCourseAfter />
    <Save />
    {/* <EditShare /> */}
    <ScrollToTop />
  </div>
);

export default MyCourseWrite;
