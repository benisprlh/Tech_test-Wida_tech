import { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../helper/baseurl";
import formatIDR from "../helper/formatIdr";

export const AddInvoice = () => {
  const [productName, setProductName] = useState("");
  const [invoice, setInvoice] = useState({
    customerName: "",
    salesPersonName: "",
    paymentType: "",
    note: "",
    date: "",
    products: [],
  });
  const [msg, setMessage] = useState({
    status: "",
    message: "",
  });

  const productSuggestions = [
    {
      productName: "Bluetooth Speaker",
      price: 252000,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      productName: "Headphone",
      price: 120000,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      productName: "Laptop Charger",
      price: 240000,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      productName: "LCD Monitor",
      price: 600000,
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  const createInvoice = async () => {
    try {
      const { data } = await axios.post(BaseUrl + "invoice", invoice);
      setMessage({ status: "success", message: data.msg });
    } catch ({ response }) {
      setMessage({ status: "error", message: response.data.msg });
    }
  };

  const handleProductSelect = (product) => {
    setInvoice({
      ...invoice,
      products: [...invoice.products, { ...product, quantity: 1 }],
    });
    setProductName("");
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedProducts = [...invoice.products];
    updatedProducts[index].quantity = quantity;
    setInvoice({ ...invoice, products: updatedProducts });
  };

  const handleProductDelete = (index) => {
    const updatedProducts = [...invoice.products];
    updatedProducts.splice(index, 1);
    setInvoice({ ...invoice, products: updatedProducts });
  };

  const handleInput = (value) => {
    setInvoice({ ...invoice, ...value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await createInvoice();
    console.log(msg);
    if (msg.status === "success") {
      setInvoice({
        customerName: "",
        salesPersonName: "",
        paymentType: "",
        note: "",
        date: "",
        products: [],
      });
    }
  };

  return (
    <div className="m-3">
      <form onSubmit={(e) => handleClick(e)}>
        <h1>FORM ADD INVOICE</h1>
        <div className="d-flex justify-content-center">
          {msg.status === "success" ? (
            <h5 className="text-success">{msg.message}</h5>
          ) : (
            <h5 className="text-danger">{msg.message}</h5>
          )}
        </div>
        <div class="mb-3">
          <label for="Date" class="form-label">
            Date
          </label>
          <input
            type="date"
            class="form-control"
            id="Date"
            value={invoice.date}
            onChange={(e) => handleInput({ date: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="customerName" class="form-label">
            Customer Name
          </label>
          <input
            type="text"
            class="form-control"
            id="customerName"
            name="customerName"
            value={invoice.customerName}
            onChange={(e) => handleInput({ customerName: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="salesPersonName" class="form-label">
            Sales Person Name
          </label>
          <input
            type="text"
            class="form-control"
            id="salesPersonName"
            value={invoice.salesPersonName}
            onChange={(e) => handleInput({ salesPersonName: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="paymentType" class="form-label">
            Payment Type
          </label>
          <input
            type="text"
            class="form-control"
            id="paymentType"
            value={invoice.paymentType}
            onChange={(e) => handleInput({ paymentType: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="Note" class="form-label">
            Note
          </label>
          <input
            type="text"
            class="form-control"
            id="Note"
            value={invoice.note}
            onChange={(e) => handleInput({ note: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onInput={handleProductNameChange}
          />
        </div>
        {productName && (
          <div className="productSuggestions">
            {productSuggestions
              .filter((product) =>
                product.productName
                  .toLowerCase()
                  .includes(productName.toLowerCase())
              )
              .map((product, index) => (
                <div
                  key={index}
                  onClick={() => handleProductSelect(product)}
                  className="dflex align-items-center shadow p-3 mb-1 bg-body-tertiary rounded"
                >
                  <img
                    src={product.image}
                    alt={product.productName}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "0" }}>{product.productName}</p>
                    <p style={{ margin: "0", marginLeft: "10px" }}>
                      Price: {formatIDR(product.price)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
        <div id="selectedProducts">
          {invoice.products.map((product, index) => (
            <div
              key={index}
              className="dflex align-items-center justify-content-between shadow p-3 mb-1 bg-body-tertiary rounded"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={product.image}
                  alt={product.productName}
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <p>
                  {product.productName} - Price: {formatIDR(product.price)}
                </p>
              </div>
              <div>
                <label htmlFor="quantity" className="form-label">
                  {" "}
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  class="form-control"
                />
                <button
                  onClick={() => handleProductDelete(index)}
                  className="mt-2 btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
