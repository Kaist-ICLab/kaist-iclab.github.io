import { useEffect, useState } from "react";

const useYPosition = (): [number, React.Dispatch<React.SetStateAction<number>>] => {
    const [yPosition, setYPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setYPosition(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [yPosition]);
    return [yPosition, setYPosition]
}

export default useYPosition;