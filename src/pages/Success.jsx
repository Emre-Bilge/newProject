import logo from "../../Assets/Iteration-1-assets/logo.svg";
import CommonFooter from "../components/CommonFooter";
import { Label } from "reactstrap";
import "../components/Success.css";


export default function Success(props) {
    const { form } = props;

    document.body.className = "success-body";
    return (
        <>
            <header className="logoheader">
                <img src={logo} alt="" className="success-logo" />
            </header>
            <section className="ordersummarycontainer">
                <div className="firstsummary">
                    <p className="orderonthewayinfo">lezzetin yolda</p>
                    <h1 className="successh1">SİPARİŞ ALINDI</h1>
                    <p className="borderline"></p>
                </div>

                <Label className="LabelPizza">Position Absolute Acı Pizza</Label>
                <div className="pizzapropertycontanier">
                    <Label>
                        Boyut: <span className="PizzaPropertyLabel">{form.pizzasize}</span>
                    </Label>
                    <Label>
                        Hamur: <span className="PizzaPropertyLabel">{form.pastrytype}</span>
                    </Label>
                    <Label>
                        Ek Malzemeler:{" "}
                        <span className="PizzaPropertyLabel">
                            {form.ingredients.map((item, index) => {
                                if (form.ingredients.length - 1 === index) {
                                    return item;
                                }
                                return item + ", ";
                            })}
                        </span>
                    </Label>
                </div>

                <section className="finalordersummary">
                    <div className="sumofordercost">
                        <div>
                            <Label className="sumorderlabel">Sipariş Toplamı</Label>
                            <div className="electionsarea">
                                <Label className="LabelBoldWhite">Seçimler</Label>
                                <Label className="LabelBoldWhite">
                                    {form.ingredients.length * 5 + "₺"}
                                </Label>
                            </div>
                            <div className="sumcostarea">
                                <Label className="LabelBoldWhite">Toplam</Label>
                                <Label className="LabelBoldWhite">{form.sumcost + "₺"}</Label>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <CommonFooter />
        </>
    );
}
