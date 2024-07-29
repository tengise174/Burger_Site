import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {

    const controls = {
        bacon: 'Гахайн мах',
        cheese: 'Бяслаг',
        salad: 'Салад',
        meat: 'Үхрийн мах'
    };



    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ : <strong>{props.price}</strong></p>

            {
                Object.keys(controls).map(el => (
                    <BuildControl
                        key={el}
                        ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh}
                        disabled={props.disabledIngredients}
                        type={el}
                        orts={controls[el]} />
                ))
            }

            <button disabled={props.disabled} className={css.OrderButton}>ЗАХИАЛАХ</button>
        </div>
    )
}



export default BuildControls;