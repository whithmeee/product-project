import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../modal/slice/counterSlice";
import { getCounterValue } from "../modal/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment())
    };

    const decrement = () => {
        dispatch(counterActions.decrement())
    };

    return <div>
        <h1>{value}</h1>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
    </div>
};