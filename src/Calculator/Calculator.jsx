import { useState } from "react"
import './styles.css'
import { evaluate } from "mathjs"

const Calculator = () => {
  const [exp, setExp] = useState('')
  const [display, setDisplay] = useState('0')

  const inputNumber = (num) => {
    if (exp.includes('=')){
      console.log('yes')
      setExp(num)
      setDisplay(num)
      return
    }
    if (display === '0'){
      setDisplay(num)
      setExp(num)
      return
    } 
    if (isNaN(display.slice(-1) && (display.slice(-1) !== '.' || display.slice(-1) !== '-'))){
      setDisplay(num)
      setExp(exp+num)
      return
    }
    setExp(exp+num)
    setDisplay(display+num)
  }

  const inputOperator = (op) => {
    if (exp.includes('=')){
      setExp(display+op)
      setDisplay(op)
      return
    }
    if (op === '-' && display === '0'){
      setExp(op)
      setDisplay(op)
      return
    }
    if (op === '-' && isNaN(display.slice(-1))){
      if (display.slice(-1) === '-'){
        setExp(exp.slice(0,-1)+op)
        setDisplay(op)
        return
      }
      setExp(exp+op)
      setDisplay(op)
      return
    }
    if (op !== '-' && exp.slice(-1) === '-' && isNaN(exp.slice(-2,-1))){
      setExp(exp.slice(0,-2)+op)
      setDisplay(op)
      return
    }
    if (isNaN(exp.slice(-1)) && (exp.slice(-1) !== '.')) {
      setExp(exp.slice(0,-1)+op)
      setDisplay(op)
      return
    }
    if (display === '0'){
      setExp('0'+op)
      setDisplay(op)
      return
    }
    setExp(exp+op)
    setDisplay(op)
  }

  const inputDecimal = () => {
    if (exp.includes('=')){
      setExp('0.')
      setDisplay('0.')
      return
    }
    if (display.includes('.')) return
    if (isNaN(display.slice(-1))){
      setExp(exp+'0.')
      setDisplay('0.')
      return
    }
    setExp(exp+'.')
    setDisplay(display+'.')
  }

  return (
    <div id='calculator' className='grid grid-cols-4 bg-black text-white w-80 h-96 border border-black border-4 text-center align-middle justify-center items-stretch gap-[1px] text-xl font-mono'>
      <div className="relative col-span-4 text-end flex flex-col items-stretch gap-0 justify-end nos">
        <div className="absolute top-0 right-0 text-normal text-[#FFA500] overflow-scroll overflow-x-hidden overflow-y-auto h-20 w-80">
          {exp}
        </div>
        <div id="display"> 
          { display}
        </div>
      </div>
      <div className="butt col-span-2 bg-[#AC3939]" id="clear" onClick={() => { setExp(''); setDisplay('0') }}>
        AC
      </div>
      <div className="butt bg-[#666666]" id="divide" onClick={() => { inputOperator('/') }} >/</div>
      <div className="butt bg-[#666666]" id="multiply" onClick={() => { inputOperator('*') }}>x</div>
      <div className="butt bg-[#4D4D4D]" id="seven" onClick={() => { inputNumber('7') }}>7</div>
      <div className="butt bg-[#4D4D4D]" id="eight" onClick={() => { inputNumber('8') }}>8</div>
      <div className="butt bg-[#4D4D4D]" id="nine" onClick={() => { inputNumber('9') }}>9</div>
      <div className="butt bg-[#666666]" id="subtract" onClick={() => { inputOperator('-') }}>-</div>
      <div className="butt bg-[#4D4D4D]" id="four" onClick={() => { inputNumber('4') }}>4</div>
      <div className="butt bg-[#4D4D4D]" id="five" onClick={() => { inputNumber('5') }}>5</div>
      <div className="butt bg-[#4D4D4D]" id="six" onClick={() => { inputNumber('6') }}>6</div>
      <div className="butt bg-[#666666]" id="add" onClick={() => { inputOperator('+') }}>+</div>
      <div className="butt bg-[#4D4D4D]" id="one" onClick={() => { inputNumber('1') }}>1</div>
      <div className="butt bg-[#4D4D4D]" id="two" onClick={() => { inputNumber('2') }}>2</div>
      <div className="butt bg-[#4D4D4D]" id="three" onClick={() => { inputNumber('3') }}>3</div>
      <div className="butt row-span-2 bg-[#004466]" id="equals" onClick={() => { setExp(exp+'='+evaluate(exp)); setDisplay(evaluate(exp).toString()) }}>
        =
      </div>
      <div className="butt col-span-2 bg-[#4D4D4D]" id="zero" onClick={() => { inputNumber('0') }}>0</div>
      <div className="butt bg-[#4D4D4D]" id="decimal" onClick={() => { inputDecimal() }}>.</div>
    </div> 
  )
}

export default Calculator