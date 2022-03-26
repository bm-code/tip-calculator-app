import { useState } from "react";
import './TipCalculator.css'

export default function TipCalculator() {

    const [billAmount, setBillAmount] = useState('');
    const [customTipAmount, setCustomTipAmount] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [tipAmount, setTipAmount] = useState('');

    function reset() {
        return () => {
            setBillAmount('');
            setNumberOfPeople(1);
            setTipAmount('');
        }
    }
    return (
        <div className="main-container">
            <div className="calculator">
                <div className="calculator__bill">
                    <label for="billInput">Bill</label>
                    <input onInput={(event) => setBillAmount(Math.abs(event.target.value))} className="calculator__bill-input" type="number" value={billAmount} id="billInput" placeholder={billAmount} />
                </div>
                <form className="calculator__tip" onChange={(event) => setTipAmount(Math.abs(event.target.value))}>
                    <label className="calculator__tip-title">Select Tip %</label>
                    <div className="calculator__tip-buttons">
                        <div className="tip-option">
                            <input className="tip-radio" name="tip-radio" type="radio" id="fivePercent" value="0.05" />
                            <label className="calculator__tip-buttons-radio" for="fivePercent" value="0.05">5%</label>
                        </div>
                        <div className="tip-option">
                            <input className="tip-radio" name="tip-radio" type="radio" id="tenPercent" value="0.10" />
                            <label className="calculator__tip-buttons-radio" for="tenPercent" value="0.10">10%</label>
                        </div>
                        <div className="tip-option">
                            <input className="tip-radio" name="tip-radio" type="radio" id="fifteenPercent" value="0.15" />
                            <label className="calculator__tip-buttons-radio" for="fifteenPercent" value="0.15">15%</label>
                        </div>
                        <div className="tip-option">
                            <input className="tip-radio" name="tip-radio" type="radio" id="twentyfivePercent" value="0.25" />
                            <label className="calculator__tip-buttons-radio" for="twentyfivePercent" value="0.25">25%</label>
                        </div>
                        <div className="tip-option">
                            <input className="tip-radio" name="tip-radio" type="radio" id="fiftyePercent" value="0.50" />
                            <label className="calculator__tip-buttons-radio" for="fiftyePercent" value="0.50">50%</label>
                        </div>
                        <div className="tip-option">
                            <input className="tip-radio custom-tip-radio" name="tip-radio" type="radio" id="customPercent" />
                            <label className="calculator__tip-buttons-radio" for="customPercent">Custom</label>
                            <input onChange={(event) => setCustomTipAmount(Math.abs(Number(event.target.value)))} className="custom-tip" type="number" placeholder="Custom Tip" value={customTipAmount} />
                        </div>
                    </div>

                </form>


                <div className="calculator__people">
                    <label className="calculator__people-title">Number of People</label>
                    <input onInput={(event) => setNumberOfPeople(Math.abs(event.target.value))} value={numberOfPeople} className={numberOfPeople < 1 ? 'calculator__people-input alert' : 'calculator__people-input'} type="number" placeholder={numberOfPeople} />
                    {numberOfPeople < 1 ? <p className="small">Can't be zero</p> : ''}
                </div>
            </div>
            <div className="result">
                <div className="result__tip">
                    <p className="result__tip-title">Tip Amount<span className="small">/ person</span></p>
                    {
                        customTipAmount === '' ?
                            <p className="result__tip-quantity">${Number((billAmount * tipAmount) / numberOfPeople).toFixed(2)}</p>
                            :
                            <p className="result__tip-quantity">${Number((billAmount * (Number(customTipAmount)) / 100) / numberOfPeople).toFixed(2)}</p>
                    }
                </div>
                <div className="result__amount">
                    <p className="result__tip-title">Total<span className="small">/ person</span></p>
                    {
                        customTipAmount === '' ?
                            <p className="result__tip-quantity">${((Number(billAmount) * (1 + Number(tipAmount))) / numberOfPeople).toFixed(2)}</p>
                            :
                            <p className="result__tip-quantity">${((Number(billAmount) * (1 + (Number(customTipAmount) / 100))) / numberOfPeople).toFixed(2)}</p>
                    }
                </div>
                <div className="result__reset">
                    <button onClick={reset()} className="result__reset-btn">Reset</button>
                </div>
            </div>
        </div>
    )
}