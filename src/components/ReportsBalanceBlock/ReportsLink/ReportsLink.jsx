import { BlockReports, Reports, Title } from './ReportsLink.styled';
import Sprite from '../../../images/sprite.svg';

export default function ReportsLink() {
  return (
    <BlockReports to='/reports'>
      <Title>Reports</Title>
      <Reports width={24} height={24}>
        <use xlinkHref={`${Sprite}#bar_chart`}></use>
      </Reports>
    </BlockReports>
  );
}
