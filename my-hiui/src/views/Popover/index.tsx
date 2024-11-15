import React, {FC, ReactNode, useCallback, useEffect} from "react"

import "./index.scss"
import { createPortal } from "react-dom"
import PopoverDemo from "./Popover"

interface IProps {}

const Popover: FC<IProps> = (props) => {
    const Portal = useCallback(({ children }:{children:ReactNode}) => {
        return createPortal(children, document.body) 
    }, [])

  return (
    <>
    <PopoverDemo/>
        
        {/* <Portal>
            
            <div className="popover-wrap">
                测试弹窗
            </div>
        </Portal> */}
        
    </>
  )
}

export default Popover
