import { useLocation, useNavigate } from "react-router-dom";
import { ButtonExp, ButtonInc } from "./ExpIncNavigation.styled"

export const ExpIncNavigation = () => {
  const location = useLocation();
  const isIncome = location.search.includes('income');
  const navigate = useNavigate();

  const navigateToTab = (activeTab) => {
    navigate(`?${activeTab}`);
  };

  return (
    <>
      <ButtonExp
        active={!isIncome}
        onClick={() => navigateToTab('expenses')}
        type="button">
        Expenses
      </ButtonExp>
      <ButtonInc
        active={isIncome}
        onClick={() => navigateToTab('income')}
        type="button">
        Income
      </ButtonInc>
    </>
  )
}
