import React from "react";


function ProductsDescription({ descriptionImage }) {

    return (
        <>
            <div className="description container d-flex flex-column justify-content-center align-items-center">
                <div className="description-image"
                style={
                    {"background-image": `url(${descriptionImage})`}
                }
                >

                </div>
                <div className="description-text d-flex text-center align-items-center">
                    <p className="mb-0">Hello, that is a description about the product.</p>
                </div>

            </div>
        </>
    )
}

export default ProductsDescription;