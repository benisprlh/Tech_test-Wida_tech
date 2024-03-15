import axios from "axios";
import { useEffect, useState } from "react";
import BaseUrl from "../helper/baseurl";
import { CardHome } from "../components/cardHome";

export const ListInvoice = () => {
    const [invoices, setInvoices] = useState([]);

    const fetch = async () => {
        try {
            const {data} = await axios.get(BaseUrl + 'invoice')
            console.log(data.id)
            setInvoices(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("AAAAAAAAAAaa")
        fetch()
    }, [])

    return <>
    <section className="d-flex gap-2">
        {invoices.map((el) => {
            return <CardHome id={el.id} customerName={el.customerName} salesPersonName={el.salesPersonName} note={el.note} totalPrice={el.SoldProducts[0].totalPrice}/>
        })}
    </section>
    </>
} 