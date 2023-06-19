import { useState } from "react";
import { BlockBalance, ButtonBalance, Container, FormBalance, ImageBg, InputBalance, TextBg, TitleBalance, TitleMessageBg, Tooltip } from "./Balance.styled";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "redux/auth/auth-selector";
import { setBalance } from "redux/auth/auth-operations";
import { Formik } from "formik";
import CurrencyInput from "shared/CurrencyInput/CurrencyInput";

export default function Balance() {
  const dispatch = useDispatch();
  const balanceRedux = useSelector(getBalance);
  const [inputValue, setInputValue] = useState(balanceRedux ?? '00.00');
  // const [isSent, setIsSent] = useState(false);

  const initialValues = {
    balance: balanceRedux ?? '00.00',
  };

  const handleSubmit = async () => {
    await dispatch(setBalance({ balance: inputValue }));
    console.log(inputValue)
    // setIsSent(true);
  };

  const [tooltipVisible, setTooltipVisible] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(+e.target.value.split(' ').join('').slice(0, -3));
    setTooltipVisible(false); // Скрываем всплывающее сообщение при изменении значения
  };

  return (
    <Container>
    <BlockBalance>
      <TitleBalance>
        Balance:
        </TitleBalance>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormBalance>
        <InputBalance
          // mask={currencyMask}
          as={CurrencyInput}
          type="text"
          id="balance"
          name="balance"
          placeholder={balanceRedux ? `${balanceRedux} UAH` : '00.00 UAH'}
          onChange={handleInputChange}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
        />
        <ButtonBalance
          type="submit"
        >
          Confirm
        </ButtonBalance>
      </FormBalance>
      </Formik>
    </BlockBalance>
    <Tooltip show={tooltipVisible}>
      <ImageBg />
      <TitleMessageBg>Hello! To get started, enter the<br />current balance of your account!<br /></TitleMessageBg>
      <TextBg>You can't spend money until you have it :)</TextBg>
    </Tooltip>
    </Container>
  )
}
