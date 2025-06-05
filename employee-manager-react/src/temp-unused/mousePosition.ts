import { useEffect, useState } from "react";

function MousePosition() {
    interface MousePosition {
        x: number;
        y: number;
    }

    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

    function setMousePosition(event: MouseEvent) {
        setPosition({ x: event.clientX, y: event.clientY });
    }

    useEffect(() => {
        window.addEventListener("mousemove", setMousePosition);
        return () => {
            window.removeEventListener("mousemove", setMousePosition);
        };
    }, []);

    // window.addEventListener("mousemove", setMousePosition);

    return position;
}

export default MousePosition;
