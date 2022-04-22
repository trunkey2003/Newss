import { useState } from "react"


type Props = {}

const About = (props: Props) => {
  const [state, setState] = useState('');
  return (
    <>
    <div>{state}</div>
    <button onClick={() => setState('Hiiii!')}>Hit button</button>
    </>
  )
}

export default About