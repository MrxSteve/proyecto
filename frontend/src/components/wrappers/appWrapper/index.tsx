import "./styles.css";
import { useWindowResize, useFetch, useUpdateServiceWorker } from "../../../hooks";
import React from 'react';
import Loading from "../../loading";
import { UserProvider } from "../../../provider/userContext";
import type { IAuth } from "../../../interfaces";
import AlertUpdateApp from "../../alertUpdateApp";

// elementos del contenedor un elemento o multiples
const AppWrapper = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    useWindowResize();
    const serviceWorkerInformation = useUpdateServiceWorker();
    const { data, loading } = useFetch("/api/me");

    if (loading) return <Loading />;

    return (
        <UserProvider value={data as IAuth}>
            <div className="container">
                <div className="screen">
                    {/* 
                        Si hay una nueva versión de la aplicación, 
                        se mostrará el banner para actualizar  
                    */}
                    {serviceWorkerInformation?.serviceWorkerUpdated && (
                        <AlertUpdateApp
                        serviceWorkerRegistration={
                            serviceWorkerInformation.serviceWorkerRegistration
                        }
                        />
                    )}
                    {children}</div>
            </div>
        </UserProvider>
    );
}

export default React.memo(AppWrapper);