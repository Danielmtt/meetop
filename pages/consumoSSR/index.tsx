import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

const Consumo: React.FC = (props: any) => {

    return <h1>data atual = {props.date}</h1>
}


export const getServerSideProps: GetServerSideProps = async () => {

    const resp = await fetch("http://localhost:3000/api/hello");
    const data = await resp.json();


    return {
        props: {
            date: data.date
        }
    }
}

export default Consumo;