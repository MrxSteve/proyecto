import "./styles.css";
import { useWindowResize } from "../../../hooks";

// elementos del contenedor un elemento o multiples
const AppWrapper = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    useWindowResize();

    return (
    <div className="container">
        <div className="screen">{children}</div>
    </div>
    );
}

export default AppWrapper;