import axios from "axios";
import { useEffect, useState } from "react";
import BaseUrl from "../helper/baseurl";
import { CardHome } from "../components/cardHome";

export const ListInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [pageTotal, setPageTotal] = useState([]);
  const [page, setPage] = useState(1);

  const fetch = async () => {
    try {
      const { data } = await axios.get(BaseUrl + "invoice" + `?page=${page}`);
      setInvoices(data.invoices);

      const totalPage = [];
      const totalNumberPage = Math.ceil(data.lengthData / 5);
      for (let i = 0; i < totalNumberPage; i++) {
        totalPage.push(i + 1);
      }
      setPageTotal(totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePagination = (e) => {
    e.preventDefault();
    setPage(e.target.textContent);
  };

  useEffect(() => {
    fetch();
  }, [page]);

  return (
    <section className="d-flex gap-2 flex-column justify-content-center m-3">
      <div className="d-flex gap-2">
        {invoices.map((el) => {
          return (
            <CardHome
              id={el.id}
              customerName={el.customerName}
              salesPersonName={el.salesPersonName}
              note={el.note}
              totalPrice={el.SoldProducts[0]?.totalPrice}
            />
          );
        })}
      </div>
      <ul className="pagination">
        {pageTotal.map((item, index) => {
          return (
            <li className="page-item" key={index} onClick={handlePagination}>
              <a className="page-link">{item}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
