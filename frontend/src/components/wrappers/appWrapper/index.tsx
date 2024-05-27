import "./styles.css";
import { useWindowResize, useFetch } from "../../../hooks";
import React from 'react';
import Loading from "../../loading";
import { UserProvider } from "../../../provider/userContext";
import type { IAuth } from "../../../interfaces";

// elementos del contenedor un elemento o multiples
const AppWrapper = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    useWindowResize();
    const { data, loading } = useFetch("/api/me");

    if (loading) return <Loading />;

    return (
        <UserProvider value={data as IAuth}>
            <div className="container">
                <div className="screen">{children}</div>
            </div>
        </UserProvider>
    );
}

export default React.memo(AppWrapper);