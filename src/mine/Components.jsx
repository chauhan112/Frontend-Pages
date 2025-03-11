import React, { useState, forwardRef, useImperativeHandle } from "react";

export const Components = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
    const [st, setSt] = useState({ ...props });
    useImperativeHandle(ref, () => ({
        s: { count, setCount, st, setSt },
    }));

    return <div {...st}>Count: {count}</div>;
});

export const Button = forwardRef((props, ref) => {
    const [st, setSt] = useState({ ...props });
    useImperativeHandle(ref, () => ({
        s: { st, setSt },
    }));

    return <button {...st} />;
});

export const Input = forwardRef((props, ref) => {
    const [st, setSt] = useState({ ...props });
    useImperativeHandle(ref, () => ({
        s: { st, setSt },
    }));

    return <input {...st} />;
});
