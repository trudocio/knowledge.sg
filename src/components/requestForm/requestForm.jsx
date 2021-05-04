import React from 'react';

class App extends React.Component {
  render() {
    return <Frame1 {...frame1Data} />;
  }
}

export default App;

class Frame1 extends React.Component {
  render() {
    const {
      vector2,
      text37,
      place,
      emailId,
      phone,
      products,
      buy,
      quantity,
      comments,
      submitRequest,
      arrowDropDownBlack24dp1Props,
      arrowDropDownBlack24dp12Props,
    } = this.props;

    return (
      <div className="frame-1">
        <div className="closeblack24dp-1">
          <div className="overlap-group9">
            <img
              className="vector"
              src="https://anima-uploads.s3.amazonaws.com/projects/6078b55be8a3cd8478d1e54f/releases/6078b64fe469567d8c8ddafa/img/vector@2x.png"
            />
            <img className="vector-1" src={vector2} />
          </div>
        </div>
        <h1 className="text-1 poppins-semi-bold-green-pea-30px">{text37}</h1>
        <div className="overlap-group5 border-1px-nandor">
          <div className="place poppins-medium-green-pea-20px">{place}</div>
        </div>
        <div className="overlap-group border-1px-nandor">
          <div className="email-id poppins-medium-green-pea-20px">{emailId}</div>
        </div>
        <div className="overlap-group border-1px-nandor">
          <div className="phone poppins-medium-green-pea-20px">{phone}</div>
        </div>
        <div className="overlap-group4 border-1px-nandor">
          <div className="products poppins-medium-green-pea-20px">{products}</div>
          <ArrowDropDownBlack24dp1 vector2={arrowDropDownBlack24dp1Props.vector2} />
        </div>
        <div className="flex-row">
          <div className="overlap-group6 border-1px-nandor">
            <div className="buy poppins-medium-green-pea-20px">{buy}</div>
            <ArrowDropDownBlack24dp1
              vector2={arrowDropDownBlack24dp12Props.vector2}
              className="arrowdropdownblack24dp-2"
            />
          </div>
          <div className="overlap-group2 border-1px-nandor">
            <div className="quantity poppins-medium-green-pea-20px">{quantity}</div>
          </div>
        </div>
        <div className="overlap-group3 border-1px-nandor">
          <div className="comments poppins-medium-green-pea-20px">{comments}</div>
        </div>
        <div className="make-a-request-to-us-cta">
          <div className="overlap-group8">
            <div className="submit-request poppins-medium-white-20px">{submitRequest}</div>
          </div>
        </div>
      </div>
    );
  }
}


class ArrowDropDownBlack24dp1 extends React.Component {
  render() {
    const { vector2, className } = this.props;

    return (
      <div className={`arrowdropdownblack24dp-1 ${className || ""}`}>
        <div className="overlap-group7">
          <img
            className="vector-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/6078b55be8a3cd8478d1e54f/releases/6078b64fe469567d8c8ddafa/img/vector@2x.png"
          />
          <img className="vector-2" src={vector2} />
        </div>
      </div>
    );
  }
}

const arrowDropDownBlack24dp1Data = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6078b55be8a3cd8478d1e54f/releases/6078b593acb6a8caea6ac803/img/vector-143@2x.svg",
};

const arrowDropDownBlack24dp12Data = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6078b55be8a3cd8478d1e54f/releases/6078b593acb6a8caea6ac803/img/vector-143@2x.svg",
};

const frame1Data = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6078b55be8a3cd8478d1e54f/releases/6078b593acb6a8caea6ac803/img/vector-147@2x.svg",
    text37: "MAKE A REQUEST TO US!",
    place: "NAME",
    emailId: "EMAIL ID",
    phone: "PHONE",
    products: "PRODUCTS",
    buy: "BUY",
    quantity: "QUANTITY",
    comments: "COMMENTS",
    submitRequest: "SUBMIT REQUEST",
    arrowDropDownBlack24dp1Props: arrowDropDownBlack24dp1Data,
    arrowDropDownBlack24dp12Props: arrowDropDownBlack24dp12Data,
};

