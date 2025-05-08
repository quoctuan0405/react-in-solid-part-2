import { useSelector } from "react-redux";
import { RootState } from "./store";

interface Props {
	onIncrement: (amount: number) => any;
}

export const App: React.FC<Props> = ({ onIncrement }) => {
	const amount = useSelector((state: RootState) => state.amount.value);

	return (
		<button onClick={() => onIncrement(amount)}>
			Increment {amount} from React
		</button>
	);
};
