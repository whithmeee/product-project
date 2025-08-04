import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);


    const Increment = () => {
        dispatch(counterActions.increment())
    }

    const Decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1>value={counterValue}</h1>
            <button onClick={Increment}>
                +1
            </button>

            <button onClick={Decrement}>
                -1
            </button>
        </div>
    );
};
