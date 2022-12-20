import React from 'react'
import './Header.css'
import { TbMathSymbols ,TbMath} from "react-icons/tb";
import { CgMathDivide,CgMathPlus,CgMathMinus} from "react-icons/cg";
import { IoClose } from "react-icons/io5";


function Header() {
  return (
    <div className='header-top'>
        <h1>Cahit ARF</h1>
        <div className='math'>
          <TbMathSymbols/>
          <CgMathDivide/>
          <IoClose/>
          <CgMathMinus/>
          <CgMathPlus/>
          <TbMath/>

        </div>
    </div>
  )
}

export default Header