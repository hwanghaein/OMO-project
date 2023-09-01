import styles from "./MyCourseFindInterestModal.module.css";
import { MypageListBox } from './../MypageListBox/MypageListBox';
import { data } from './../../const/data';


const MyCourseFindInterestModal = () => (
  <>
  <div className={styles["mycourse-find-interest-modal-container"]}>
      <label className={styles["mycourse-find-interest-modal-title"]}  htmlFor="find-interest">
      관심 목록에서 찾기
      </label>
      <div className={styles["mycourse-find-interest-modal-list-box-container"]}>
        {data.map((el) => {
          return <MypageListBox key={el.id} title={el.title} like={el.like} jjim={el.jjim} runTime={el.runTime} intro={el.intro} addressBrief={el.addressBrief} img1={el.src1} img2={el.src2} />;
        })}
      </div>

    </div>
  </>

);

export default MyCourseFindInterestModal;