import Balance from "./Balance/Balance";
import { BlockHeader } from "./ReportsBalanceBlock.styled";
import ReportsLink from "./ReportsLink/ReportsLink";

export default function ReportsBalanceBlock() {
  return (
    <>
    <BlockHeader>
        <ReportsLink />
        <Balance />
    </BlockHeader>
    </>
  );
}
