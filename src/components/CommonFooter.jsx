import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { helpInfos, instaPhotos } from "../dummyData";
import technologicFoodText from "../../Assets/Iteration-2-aseets/footer/logo-footer.svg";
import "../css/CommonFooter.css";

export default function CommonFooter() {
  return (
    <footer className="footer">
      <div className="subFooter">
        <section className="allInfoAreaContainer">
          <div className="technologicFoodsContainer">
            <img src={technologicFoodText} alt="Technologic Foods Logo" />
            <div className="contactContainer">
              {helpInfos.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.icon} alt={item.text} className="contactImg" />
                    <label>{item.text}</label>
                    {index === 0 && <label className="fontIconLabel">{item.text2}</label>}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="menuInfoContainer">
            <p className="menuTitleLabel">Sıccacık Menüler</p>
            <div className="menusAreaContainer">
              <label>Terminal Pizza</label>
              <label>5 Kişilik Hackathlon Pizza</label>
              <label>useEffect Tavuklu Pizza</label>
              <label>Beyaz Console Frost</label>
              <label>Testler Geçti Mutlu Burger</label>
              <label>Position Absolute Acı Burger</label>
            </div>
          </div>

          <div className="instaContainer">
            <p className="instaLabel">Instagram</p>
            <div className="instaImgContainer">
              {instaPhotos.map((item, index) => {
                return <img src={item} key={index} alt={`Instagram photo ${index}`} />;
              })}
            </div>
          </div>
        </section>
      </div>

      <p className="borderLine" />

      <section className="lowestArea">
        <div>
          <FontAwesomeIcon icon={faCircleUser} className="fonticon" />
          <label className="fontIconLabel">2023 Teknolojik Yemekler.</label>
        </div>
        <FontAwesomeIcon icon={faTwitter} className="fa-2x fonticon" />
      </section>
    </footer>
  );
}
