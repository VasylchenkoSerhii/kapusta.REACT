import MaskedInput from 'react-text-mask';
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

export default function CurrencyInput({ maskOptions, ...inputProps }) {

 const currencyMask = createNumberMask({
   ...defaultMaskOptions,
   ...maskOptions,
 })

  return (
    <MaskedInput
      mask={currencyMask}
      {...inputProps}
      placeholder='00.00 UAH'
    />
  )
}
