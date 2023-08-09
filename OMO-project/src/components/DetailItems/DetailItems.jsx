import styles from "./DetailItems.module.css";
import Thumbnail from "../../assets/detail/thumbnail.png";
import Jjim from "../../assets/detail/empty-heart.png";
// import JjimClicked from "../../assets/detail/red-heart.png"
import Like from "../../assets/detail/empty-thumb.png";
// import LikeClicked from "../../assets/detail/yellow-thumb.png"
import Address from "../../assets/detail/address.png";
import SalesInfo from "../../assets/detail/sales-info.png";
import Menu from "../../assets/detail/menu.png";
import Call from "../../assets/detail/call.png";
import Graph from "../../assets/detail/graph.png";
import ReviewIcon from "../../assets/detail/review.png";
import {Review} from "./../../components/DetailItems/Review/Review";
// import { Map } from "./../../components/Map/Map";
import {priceTemplate} from "./../../utils/priceTemplate";
import { reviewData } from './../../const/review';

export const DetailItems = (props) => {
  const {data} = props;
  return (
    <>
      {/* 타이틀 */}
      <section className={styles["detail-title-container"]}>
        <div className={styles["detail-thumbnail-container"]}>
          <img src={Thumbnail} alt="썸네일 이미지" style={{width: "350px", height: "350px"}} />
        </div>
        <span className={styles["detail-title"]}>{data.title}</span>
        <div className={styles["detail-like-jjim-container"]}>
          <div className={styles["detail-jjim"]}>
            <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "1px"}} /> <span className={styles["detail-jjim-number"]}> {data.jjim}</span>
          </div>
          <span className={styles["detail-like-jjim-line"]}>|</span>
          <div className={styles["detail-like"]}>
            <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "-1px"}} /> <span className={styles["detail-like-number"]}> {data.like}</span>
          </div>
        </div>
      </section>

      <div className={styles["detail-inner-container"]}>

        {/* 주소 */}
        <section className={styles["detail-address-container"]}>
          <div className={styles["detail-address-inner-container"]}>
            <img src={Address} alt="주소 아이콘" style={{width: "20px", height: "25px", position: "absolute", top: "1px"}} />
            <span className={styles["detail-address-title"]}>주소</span>
          </div>
          <span className={styles["detail-address-info-street"]}>{data.addressStreet}</span>
          <span className={styles["detail-address-info-number"]}>{data.addressNumber}</span>
        </section>

        {/* 영업정보 */}
        <section className={styles["detail-sales-info-container"]}>
          <div className={styles["detail-sales-info-inner-container"]}>
            <img src={SalesInfo} alt="영업정보 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "3px"}} />
            <span className={styles["detail-sales-info-title"]}>영업정보</span>
          </div>
          <div className={styles["detail-sales-info-time-container"]}>
            {" "}
            <span className={styles["detail-sales-info-time"]}>시간</span>
            <span className={styles["detail-sales-info-line"]}>|</span>
            <span className={styles["detail-sales-info-time-info"]}>{data.time}</span>
          </div>
          <div className={styles["detail-sales-info-holiday-container"]}>
            <span className={styles["detail-sales-info-holiday"]}>휴무</span> <span className={styles["detail-sales-info-line"]}>|</span>
            <span className={styles["detail-sales-info-holiday-info"]}>{data.holiday}</span>
          </div>
        </section>

        {/* 메뉴 */}
        <section className={styles["detail-menu-container"]}>
          <div className={styles["detail-menu-inner-container"]}>
            <img src={Menu} alt="메뉴 아이콘" style={{width: "20px", height: "25px", position: "absolute", top: "1px"}} />
            <span className={styles["detail-menu-title"]}>메뉴</span>
          </div>
          {data.menu.map((el) => (
            <ul className={styles["detail-menu"]}>
              <li className={styles["detail-menu-list"]}>
                {" "}
                <span className={styles["detail-menu-list-title"]}>{el.title}</span> <span className={styles["detail-menu-list-price"]}>{priceTemplate(el.price)}원</span>
              </li>
            </ul>
          ))}
        </section>

        {/* 전화 */}
        <section className={styles["detail-call-container"]}>
          <div className={styles["detail-call-inner-container"]}>
            <img src={Call} alt="전화 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "1px"}} />
            <span className={styles["detail-call-title"]}>전화</span>
          </div>
          <span className={styles["detail-call"]}>{data.call}</span>
        </section>

        {/* 구글맵 */}
        <section className={styles["detail-google-map-container"]}>
          <div className={styles["detail-google-map-inner-container"]}>
            <img src={data.googleMap} alt="구글맵 이미지" style={{width: "1000px", height: "300px"}} />
            {/* <Map /> */}
          </div>
        </section>

        {/* MBTI 별 통계 */}
        <section className={styles["detail-mbti-stats-container"]}>
          <div className={styles["detail-mbti-stats-inner-container"]}>
            <img src={Graph} alt="통계 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "1px"}} />
            <span className={styles["detail-mbti-stats-title"]}>MBTI별 통계</span>
          </div>

          <div className={styles["detail-mbti-graph-container"]}>
            <div className={styles["detail-mbti-graph-inner-container"]}>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-alphabat"]}>E</span>
                <span className={styles["detail-mbti-graph-text"]}>외향</span>
              </div>
              <div className={styles["detail-mbti-graph-EI-bar"]}>
                <div className={styles["detail-mbti-graph-EI-bar-percent"]}></div>
              </div>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-alphabat"]}>I</span>
                <span className={styles["detail-mbti-graph-text"]}>내향</span>
              </div>
            </div>

            <div className={styles["detail-mbti-graph-inner-container"]}>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-alphabat"]}>S</span>
                <span className={styles["detail-mbti-graph-text"]}>현실</span>
              </div>
              <div className={styles["detail-mbti-graph-SN-bar"]}>
                <div className={styles["detail-mbti-graph-SN-bar-percent"]}></div>
              </div>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-N"]}>N</span>
                <span className={styles["detail-mbti-graph-text"]}>직관</span>
              </div>
            </div>

            <div className={styles["detail-mbti-graph-inner-container"]}>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-alphabat"]}>T</span>
                <span className={styles["detail-mbti-graph-text"]}>사고</span>
              </div>
              <div className={styles["detail-mbti-graph-TF-bar"]}>
                <div className={styles["detail-mbti-graph-TF-bar-percent"]}></div>
              </div>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-alphabat"]}>F</span>
                <span className={styles["detail-mbti-graph-text"]}>감정</span>
              </div>
            </div>

            <div className={styles["detail-mbti-graph-inner-container"]}>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-alphabat"]}>P</span>
                <span className={styles["detail-mbti-graph-text"]}>탐색</span>
              </div>
              <div className={styles["detail-mbti-graph-PJ-bar"]}>
                <div className={styles["detail-mbti-graph-PJ-bar-percent"]}></div>
              </div>
              <div className={styles["detail-mbti-graph-alphabat-box"]}>
                <span className={styles["detail-mbti-graph-alphabat"]}>J</span>
                <span className={styles["detail-mbti-graph-text"]}>계획</span>
              </div>
            </div>
          </div>
        </section>

        {/* 리뷰 */}
        <section className={styles["detail-review-container"]}>
          <div className={styles["detail-review-inner-container"]}>
            <img src={ReviewIcon} alt="리뷰 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "3px"}} />
            <span className={styles["detail-review-title"]}>리뷰</span>

            <div className={styles["detail-review-box-container"]}>
              {reviewData.map((review) => (
                <Review data={review} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
