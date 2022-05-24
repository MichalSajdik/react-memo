import React, { useRef } from 'react';
import Button from '@mui/material/Button';

type CounterProps = { label: string; count: number; increment: () => void };
const Counter = ({ label, count, increment }: CounterProps) => {
    const ref = useRef(0);
    const rerendersCount = ref.current++;

    return (
        <div>
            <Button onClick={increment} >{`add ${label}`}</Button>
                {label} count: {count}, rerenders: {rerendersCount}
        </div>
    );
};

export const MemoCounter = React.memo(Counter);
