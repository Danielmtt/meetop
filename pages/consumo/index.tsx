import { useEffect, useState } from "react";

const Consumo: React.FC = () => {
    
    const [date, setDate] = useState(0)


    const getDate = async () => {
        const resp = await fetch("api/hello");
        const data = await resp.json();

        setDate(data.date)
    }

    useEffect(()=>{
        getDate();
    },[])
    
    return <h1>data atual = {date}</h1>
}

export default Consumo;