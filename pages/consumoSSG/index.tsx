import { GetStaticProps } from "next";

const Consumo: React.FC = (props: any) => {

    return <h1>data atual = {props.date}</h1>
}


export const getStaticProps: GetStaticProps = async () => {

    const resp = await fetch("http://localhost:3000/api/hello");
    const data = await resp.json();


    return {
        props: {
            date: data.date
        },
        revalidate: 10
    }
}

export default Consumo;