import "./styles.css";
import { useWindowResize, useFetch } from "../../../hooks";
import React from 'react';

// elementos del contenedor un elemento o multiples
const AppWrapper = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    useWindowResize();
    const { data, loading } = useFetch("/api/me");

    return (
    <div className="container">
        <div className="screen">{children}</div>
    </div>
    );
}

export default React.memo(AppWrapper);