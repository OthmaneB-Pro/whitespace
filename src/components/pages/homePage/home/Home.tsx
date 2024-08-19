import { FaArrowRight } from "react-icons/fa6";
import Button from "../../../reusable-ui/Button";

export default function Home() {
  return (
    <div>
        <div>
        <h1>Get More Done with whitepace</h1>
        <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        <Button label="Try Whitepace free" Icon={<FaArrowRight />}/>
        </div>
        <div>
            <img src="" alt="IMG" />
        </div>
    </div>
  )
}
