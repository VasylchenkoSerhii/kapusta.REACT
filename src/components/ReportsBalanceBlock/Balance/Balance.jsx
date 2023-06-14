import { useState } from "react";
import { BlockBalance, ButtonBalance, Container, FormBalance, ImageBg, InputBalance, TextBg, TitleBalance, TitleMessageBg, Tooltip } from "./Balance.styled";
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
  prefix: '',
  suffix: ' UAH',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: true,
};

export default function Balance() {
  const [value, setValue] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setTooltipVisible(false); // Скрываем всплывающее сообщение при изменении значения
  };

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  })
  return (
    <Container>
    <BlockBalance>
      <TitleBalance>
        Balance:
      </TitleBalance>
      <FormBalance>
        <InputBalance
          mask={currencyMask}
          placeholder="00.00 UAH"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
        />
        <ButtonBalance>Confirm</ButtonBalance>
      </FormBalance>
    </BlockBalance>
    <Tooltip show={tooltipVisible}>
      <ImageBg />
      <TitleMessageBg>Hello! To get started, enter the<br />current balance of your account!<br /></TitleMessageBg>
      <TextBg>You can't spend money until you have it :)</TextBg>
    </Tooltip>
    </Container>
  )
}
