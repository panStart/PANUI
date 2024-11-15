import { useRef, useState } from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useDismiss,
    useRole,
    useClick,
    useInteractions,
    FloatingFocusManager,
    useId
} from "@floating-ui/react";
import { CSSTransition } from 'react-transition-group'
import "./styles.scss";

function Popover() {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset(10),
            flip({ fallbackAxisSideDirection: "end" }),
            shift()
        ],
        whileElementsMounted: autoUpdate
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role
    ]);

    const headingId = useId();
    const nodeRef = useRef(null);
    console.log('ddd',refs.setFloating);
    
    return (
        <>
            <button ref={refs.setReference} {...getReferenceProps()}>
                Add review
            </button>
                <FloatingFocusManager context={context} modal={false}>
            <CSSTransition in={isOpen} className='alert' unmountOnExit>

                        <div
                            className="Popover"
                            ref={refs.setFloating}
                            style={floatingStyles}
                            aria-labelledby={headingId}
                            {...getFloatingProps()}
                        >
                            <h2 id={headingId}>Review balloon</h2>
                            <textarea placeholder="Write your review..." />
                            <br />
                            <button
                                style={{ float: "right" }}
                                onClick={() => {
                                    console.log("Added review.");
                                    setIsOpen(false);
                                }}
                            >
                                Add
                            </button>
                        </div>
            </CSSTransition>

                </FloatingFocusManager>
        </>)
}

export default Popover