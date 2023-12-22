import { useEffect, useMemo, useState } from 'react';
import './index.less';

const Matching = () => {
  const [inputValue, setInputValue] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [showService, setShowService] = useState(false);
  const [warningToast, setWarningToast] = useState(false);
  const [defaultToast, setDefaultToast] = useState(true);

  const handleDigitClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleDecimalPointClick = () => {
    if (!inputValue) return null;
    if (!inputValue.includes('.')) {
      setInputValue((prevValue) => prevValue + '.');
    }
  };

  const handleBackspaceClick = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const handleInputFocus = () => {
    setKeyboardVisible(true);
  };

  const onCash = () => {
    alert(`提现${inputValue}元`);
  };

  const unitValue = useMemo(() => {
    const numericValue = parseInt(inputValue);


    if (isNaN(numericValue) || numericValue < 999) {
      return null;
    }

    const units: any = {
      9999: '千',
      99999: '万',
      999999: '十万',
      9999999: '百万',
      99999999: '千万',
    };

    for (const item of Object.keys(units)) {
      if (numericValue < parseInt(item)) {
        return units[item];
      }
    }
    return null;
  }, [inputValue]);

  const serviceCharge = useMemo(() => {
    const value = parseInt(inputValue);

    if (isNaN(value)) {
      return '';
    }

    if (value <= 1000) {
      return '';
    }
    const serviceCharge = (value / 100) * 0.1;
    return serviceCharge;
  }, [inputValue]);

  const cashDisable = useMemo(() => {
    const numericValue = parseInt(inputValue);
    if (isNaN(numericValue)) {
      return true;
    }
    if (numericValue > 3000) {
      return true;
    }
    return false;
  }, [inputValue]);

  const FreeCharge = useMemo(() => {
    const numericValue = parseInt(inputValue);
    if (isNaN(numericValue)) {
      return 1000;
    }
    return 3000 - numericValue;
  }, [inputValue]);

  useEffect(() => {
    const value = parseInt(inputValue);
    const numericValue = parseInt(inputValue);
    console.log('numericValue', numericValue);

    if (numericValue > 3000) {
      setWarningToast(true);
      setDefaultToast(false);
      setShowService(false);
    }
    if (numericValue >= 1000 && numericValue < 3000) {
      setWarningToast(false);
      setDefaultToast(false);
      setShowService(true);
    }
    if (numericValue < 1000) {
      setWarningToast(false);
      setDefaultToast(true);
      setShowService(false);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <div className="money-wrap">
        <div className="unit-box">{unitValue}</div>
        <div className="money-input">
          <label>￥</label>
          <input onFocus={handleInputFocus} type="text" value={inputValue} readOnly />
        </div>
        {defaultToast ? <div>免费额度还剩{FreeCharge}元，超出部分收取0.1%服务费</div> : null}
        {showService ? <div>预计收取服务费：{serviceCharge}</div> : null}
        {warningToast ? <div className="Service-charge">超出可用余额（￥3000）</div> : null}
      </div>
      {isKeyboardVisible ? (
        <>
          <div className="keybord-wrap">
            <div className="number-box">
              <div className="keybord-box">
                <button onClick={() => handleDigitClick('1')}>1</button>
                <button onClick={() => handleDigitClick('2')}>2</button>
                <button onClick={() => handleDigitClick('3')}>3</button>
              </div>
              <div className="keybord-box">
                <button onClick={() => handleDigitClick('4')}>4</button>
                <button onClick={() => handleDigitClick('5')}>5</button>
                <button onClick={() => handleDigitClick('6')}>6</button>
              </div>
              <div className="keybord-box">
                <button onClick={() => handleDigitClick('7')}>7</button>
                <button onClick={() => handleDigitClick('8')}>8</button>
                <button onClick={() => handleDigitClick('9')}>9</button>
              </div>
              <div className="keybord-box">
                <button onClick={() => handleDigitClick('0')}>0</button>
                <button className="point" onClick={() => handleDecimalPointClick()}>
                  .
                </button>
              </div>
            </div>

            <div className="operation-box">
              <button onClick={() => handleBackspaceClick()}>X</button>
              <button className="cash-btn" disabled={cashDisable} onClick={() => onCash()}>
                提现
              </button>
            </div>
          </div>
        </>
      ) : null}
      <div className="keybord"></div>
    </div>
  );
};

export default Matching;
