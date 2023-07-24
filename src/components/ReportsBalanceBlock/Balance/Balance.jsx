import { useEffect, useState } from "react";
import * as yup from 'yup';
import { BlockBalance, ButtonBalance, Container, FormBalance, ImageBg, InputBalance, TextBg, TitleBalance, TitleMessageBg, Tooltip } from "./Balance.styled";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "redux/auth/auth-selector";
import { setBalance } from "redux/auth/auth-operations";
import { Formik } from "formik";
import CurrencyInput from "shared/CurrencyInput/CurrencyInput";

export default function Balance() {
  const dispatch = useDispatch();
  const balanceRedux = useSelector(getBalance);
  const [isSent, setIsSent] = useState(localStorage.getItem('isSent') === 'true');
  const [inputValue, setInputValue] = useState(balanceRedux ?? '00.00');
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const validationSchema = yup.object().shape({
    balance: yup
      .string()
      .min(1, 'Balance should be at least 1 characters long')
      .required('Balance is required'),
  });

  const initialValues = {
    balance: balanceRedux ?? '00.00',
  };
  useEffect(() => {
    localStorage.setItem('isSent', isSent); // Сохраняем значение isSent в localStorage
  }, [isSent]);

  useEffect(() => {
    setInputValue(balanceRedux);
    localStorage.setItem('balance', JSON.stringify(balanceRedux));
  }, [balanceRedux]);

  const handleSubmit = async () => {
    await dispatch(setBalance({ balance: inputValue }));
    setIsSent(true);
    console.log(inputValue)
  };

  const handleInputChange = (e) => {
    setInputValue(+e.target.value.split(' ').join('').slice(0, -3));
    if (e.target.value === '0') {
      setTooltipVisible(true); // Показать Tooltip, если значение равно '00.00'
    }
    setIsSent(false);
  };

  return (
    <Container>
    <BlockBalance>
      <TitleBalance>
        Balance:
        </TitleBalance>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <FormBalance>
        <InputBalance
          // mask={currencyMask}
          as={CurrencyInput}
          type="text"
          id="balance"
          name="balance"
          value={inputValue}
          placeholder={balanceRedux ? `${balanceRedux} UAH` : '00.00 UAH'}
          onChange={handleInputChange}
          onFocus={() => setTooltipVisible(false)}
          onBlur={() => setTooltipVisible(true)}
        />
        <ButtonBalance
          type="submit"
          disabled={inputValue === '00.00' || !inputValue || isSent}
        >
          Confirm
        </ButtonBalance>
      </FormBalance>
      </Formik>
      </BlockBalance>
      {(inputValue === '00.00' || !inputValue) && (
    <Tooltip show={tooltipVisible}>
      <ImageBg />
      <TitleMessageBg>Hello! To get started, enter the<br />current balance of your account!<br /></TitleMessageBg>
      <TextBg>You can't spend money until you have it :)</TextBg>
        </Tooltip>
         )}
    </Container>
  )
}
