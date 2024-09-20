import { useState } from "react";

const useSwitch = (): [boolean, () => void] => {
    const [isActive, setStatus] = useState(false);

    const changeStatus = () => {
        setStatus((status) => !status);
    }
    return [isActive, changeStatus];
}

export default useSwitch;