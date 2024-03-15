export const CardHome = ({customerName, salesPersonName, note, totalPrice, id}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <div class="card-body">
        <h5 class="card-title">INVOICE {id}</h5>
        <p>
            Customer : {customerName}
        </p>
        <p>
            salesPersonName : {salesPersonName}
        </p>
        <p>
            Note: {note}
        </p>
        <p>
            Rp. {totalPrice}
        </p>
      </div>
    </div>
  );
};
