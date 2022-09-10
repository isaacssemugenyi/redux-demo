import React from 'react';

function ProductCard({ products }) {
  return (
    <>
      {products && (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mt-3 px-2" key={product.id}>
              <div className="card" style={{ width: 280 }}>
                <img
                  src={product?.imgLink}
                  className="card-img-top Img"
                  alt={product?.title}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Name: {product?.title} - ID: {product?.id}
                  </h5>
                  <p className="card-text">{product?.description}</p>
                  <div className="row">
                    <button type="button" className="btn btn-primary btn-block">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductCard;
