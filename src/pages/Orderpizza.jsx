import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Form, FormGroup, Input, Label } from 'reactstrap';

function orderpizza({ pizzaKalınlık, pizzaBoyut, pizzaMalzeme, handleBoyutChange, handleKalinlikChange, handleMalzemeChange }) {



    return (
        <div>
            <div>
                <div>
                    <h3>Position Absolute Acı Pizza</h3>
                    <div>
                        <p>85.50₺</p>
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                </div>
                <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                <div className='boyut-hamur'>

                    <FormGroup>
                        <Label>Boyut Seç*</Label>
                        <Label htmlFor='kucuk'>
                            <Input type='radio' id='kucuk' value="küçük" name='Boyut' onChange={handleBoyutChange} /> küçük
                        </Label>
                        <Label htmlFor='kucuk'>
                            <Input type='radio' id='orta' value="orta" name='Boyut' onChange={handleBoyutChange} /> orta
                        </Label>
                        <Label htmlFor='kucuk'>
                            <Input type='radio' id='buyuk' value="büyük" name='Boyut' onChange={handleBoyutChange} /> büyük
                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Label>Kalınlık Seç*</Label>
                        <Input type='select' value={pizzaKalınlık} onChange={handleKalinlikChange}>
                            <option value="Kalın Kenar">Kalın Kenar</option>
                            <option value="İnce Kenar">İnce Kenar</option>
                            <option value="Ekstra İnce Kenar">Ekstra İnce Kenar</option>
                        </Input>
                    </FormGroup>
                </div>
                <div>
                    <h3>Ek Malzemeler</h3>
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </div>

                <div>
                    <FormGroup>
                        {
                            malzemeler.map((malzeme, index) => (
                                <Label key={index} htmlFor={malzeme}>
                                    <Input type='checkbox'
                                        id={malzeme}
                                        value={malzeme}
                                        onChange={handleMalzemeChange}
                                        checked={pizzaMalzeme.includes(malzeme)}
                                    />


                                </Label>
                            ))
                        }
                    </FormGroup>
                </div>
                <div>
                    <FormGroup>
                        <Label tag={"h3"}>Sipariş notu</Label>
                        <Label>
                            <Input type='textarea' placeholder='Siparişine eklemek istediğin bir not var mı?' />
                        </Label>
                    </FormGroup>

                </div>
            </div>
        </div>
    )
}

export default orderpizza
