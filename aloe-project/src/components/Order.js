import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {BsCheck2, BsPlus, BsDash, BsX} from "react-icons/bs";
import { FaCcMastercard, FaHandPointRight } from "react-icons/fa";
import { CgPaypal } from "react-icons/cg";
import { FaHandPointLeft } from 'react-icons/fa';

function Order() {

// -------------------------------------------------------------   CART QUANTITY CODE    -------------------------------------------------------------

    const [leavesQuantity, setLeavesQuantity] = useState(0);
    const leavesGift = Math.floor(leavesQuantity / 5);
    const prevLeavesGift = useRef(0);
    const [animateLeavesGift, setAnimateLeavesGift] = useState(false);

    const [bottlesQuantity, setBottlesQuantity] = useState(0);
    const bottlesGift = Math.floor(bottlesQuantity / 4);
    const prevBottlesGift = useRef(0);
    const [animateBottlesGift, setAnimateBottlesGift] = useState(false);

    const [plantsQuantity, setPlantsQuantity] = useState(0);
    const plantsGift = Math.floor(plantsQuantity / 3);
    const prevPlantsGift = useRef(0);
    const [animatePlantsGift, setAnimatePlantsGift] = useState(false);

    const subTotal =
        leavesQuantity * 2.99 +
        bottlesQuantity * 4.99 +
        plantsQuantity * 9.99;

    useEffect(() => {
        if ((leavesGift !== prevLeavesGift.current)) {
            setAnimateLeavesGift(true)
            setTimeout(() => setAnimateLeavesGift(false), 300);
        }

        if ((bottlesGift !== prevBottlesGift.current)) {
            setAnimateBottlesGift(true)
            setTimeout(() => setAnimateBottlesGift(false), 300);
        }

        if ((plantsGift !== prevPlantsGift.current)) {
            setAnimatePlantsGift(true)
            setTimeout(() => setAnimatePlantsGift(false), 300);
        }


        prevLeavesGift.current = leavesGift;
        prevBottlesGift.current = bottlesGift;
        prevPlantsGift.current = plantsGift;

    }, [leavesGift, bottlesGift, plantsGift]);

    const [proceedToCheckout, setProceedToCheckout] = useState(false); // Check Out Button
    const [emptyCartModal, setEmptyCartModal] = useState(false);

// -------------------------------------------------------------   CART QUANTITY CODE    -------------------------------------------------------------

// -------------------------------------------------------------   DELIVERY FORM CODE    -------------------------------------------------------------

    const [removeProceedBackButton, setRemoveProceedBackButton] = useState(true);

    const [deliveryInfo, setDeliveryInfo] = useState(true);
    const [paymentInfo, setPaymentInfo] = useState(false);
    const [confirmationInfo, setConfirmationInfo] = useState(false);

    const [deliveryData, setDeliveryData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        city: "",
        municipality: "",
        zip: "",
        streetAddress: ""
    });

    const handleDeliveryInputChange = (e) => {
        const {name, value} = e.target;

        const formattedValue = name === "firstName" || name === "lastName" || name === "city" || name === "municipality" || name === "streetAddress" ?
            value.charAt(0).toUpperCase() + value.slice(1) :
            value;

        setDeliveryData(prev => ({
            ...prev,
            [name]: formattedValue
        }));
    }

// -------------------------------------------------------------   DELIVERY FORM CODE    -------------------------------------------------------------

// -------------------------------------------------------------   PAYMENT FORM CODE    -------------------------------------------------------------

    const [cashButtonClicked, setCashButtonClicked] = useState(false);
    const [cardButtonClicked, setCardButtonClicked] = useState(false);
    const [paypalSelected, setPaypalSelected] = useState(false);
    const [mastercardSelected, setMastercardSelected] = useState(false);
    const [noCardSelected, setNoCardSelected] = useState(false);

    const [cardData, setCardData] = useState({
        name: "",
        number: "",
        expiry: "",
        cvv: ""
    });

    const handlePaymentInputChange = (e) => {
        const { name, value } = e.target;

        let formattedValue = "";

        if (name === "name") {
            formattedValue = value.toUpperCase()
        }
        else if (name === "number") {
            formattedValue = value.replace(/[^0-9]/g, "").slice(0, 16).match(/.{1,4}/g)?.join("-") || "";
        }
        else if (name === "expiry") {
            formattedValue = value.replace(/[^0-9]/g, "").slice(0, 4).match(/.{1,2}/g)?.join("/") || "";
        }


        setCardData(prev => ({
            ...prev,
            [name]: formattedValue
        }));
    };

    const handlePaymentFormSubmit = (e) => {
        e.preventDefault();

        fetch("/api/payment-simulation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cardData)
        })
        .then(success => console.log("Success simulation"))
        .catch(failure => console.log(failure));
    };
// -------------------------------------------------------------   PAYMENT FORM CODE    -------------------------------------------------------------

// -------------------------------------------------------------   CHECK VALID INPUT CODE    -------------------------------------------------------------

    const [formErrors, setFormErrors] = useState({});

    const isEmpty = (value) => !value.trim();

    const verifyUserInput = (e) => {

        const errors = {};

        if (isEmpty(deliveryData.firstName)) {
            errors.firstName = "First name is required";
        }
        else if (!/^[a-zA-Z -]{2,25}$/.test(deliveryData.firstName)) {
            errors.firstName = "English letters, between 2-25 length"
        }

        if (isEmpty(deliveryData.lastName)) {
            errors.lastName = "Last name is required";
        }
        else if (!/^[a-zA-Z -]{2,25}$/.test(deliveryData.lastName)) {
            errors.lastName = "English letters, between 2-25 length"
        }

        if (isEmpty(deliveryData.phoneNumber)) {
            errors.phoneNumber = "Phone number is required";
        }
        else if (!/^\d{10}$/.test(deliveryData.phoneNumber)) {
            errors.phoneNumber = "Digits only, length of 10";
        }

        if (isEmpty(deliveryData.email)) {
            errors.email = "Invalid email";
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z_A-Z]{2,6}$/.test(deliveryData.email)) {
            errors.email = "Invalid email";
        }

        if (isEmpty(deliveryData.city)) {
            errors.city = "City is required";
        }
        else if (!/^[a-zA-Z -,]{2,25}$/.test(deliveryData.city)) {
            errors.city = "English letters, between 2-25 length"
        }

        if (isEmpty(deliveryData.municipality)) {
            errors.municipality = "Municipality is required";
        }
        else if (!/^[a-zA-Z -,]{2,25}$/.test(deliveryData.municipality)) {
            errors.municipality = "English letters, between 2-25 length"
        }

        if (!/^[0-9]{5}$/.test(deliveryData.zip)) {
            errors.zip = "ZIP must be 5 digits";
        }

        if (isEmpty(deliveryData.streetAddress)) {
            errors.streetAddress = "Address is required";
        }
        else if (!/^[a-zA-Z0-9&/ ]{2,40}$/.test(deliveryData.streetAddress))
            errors.streetAddress = "Required valid name and number";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return false;
        }

        setFormErrors({});
        return true;
    };

    const [cardFormErrors, setCardFormErrors] = useState({});

    const verifyCardInput = (e) => {
        const errors = {};

        if (isEmpty(cardData.name)) {
            errors.name = "required";
        }
        else if (!/^[a-zA-Z -]{2,25}$/.test(cardData.name)) {
            errors.name = "English letters only"
        }

        if (isEmpty(cardData.number)) {
            errors.number = "required";
        }
        else if (!/^[0-9-]{19}$/.test(cardData.number)) {
            errors.number = "Type a valid card number";
        }

        if (isEmpty(cardData.expiry)) {
            errors.expiry = "required";
        }
        else if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(cardData.expiry)) {
            errors.expiry = "Invalid date MM/YY"
        }

        if (isEmpty(cardData.cvv)) {
            errors.cvv = "required";
        }
        else if (!/^[0-9]{3}$/.test(cardData.cvv)) {
            errors.cvv = "Invalid CVV - 3 digits only"
        }

        if (Object.keys(errors).length > 0) {
            setCardFormErrors(errors);
            return false;
        }

        setCardFormErrors({});
        return true;
    }

// -------------------------------------------------------------   CHECK VALID INPUT CODE    -------------------------------------------------------------

// -------------------------------------------------------------   RESET AFTER PURCHASE CODE    -------------------------------------------------------------

    const resetAfterPurchase = () => {

        setConfirmationInfo(true);
        setDeliveryInfo(false);
        setPaymentInfo(false);
        setRemoveProceedBackButton(false);
        setLeavesQuantity(0);
        setBottlesQuantity(0);
        setPlantsQuantity(0);

        setTimeout(() => {
            setConfirmationInfo(false);
            setProceedToCheckout(false);
            setRemoveProceedBackButton(true);
            setDeliveryInfo(true);
            setCashButtonClicked(false);
            setCardButtonClicked(false);
            setPaypalSelected(false);
            setMastercardSelected(false);
            setDeliveryData({ firstName: "", lastName: "", phoneNumber: "", email: "", city: "", municipality: "", zip: "", streetAddress: "" });
            setCardData({ name: "", number: "", expiry: "", cvv: "" });
            setFormErrors({});
            setCardFormErrors({});
        }, 3000);
    }
// -------------------------------------------------------------   RESET AFTER PURCHASE CODE    -------------------------------------------------------------

    return (
        <div className="order-online container-fluid d-flex justify-content-evenly gap-5">
            {emptyCartModal &&
                <div className="empty-cart-modal d-flex flex-column justify-content-center align-items-center">
                    <p>Your Cart is empty.</p>
                    <button onClick={() => {setEmptyCartModal(false)}}>
                        OK
                    </button>
                </div>
            }
            <div className={`all-products d-flex flex-column justify-content-evenly ${!proceedToCheckout ? "" : "disabled"}`}>
                <div className="shopping-cart-title">
                    YOUR SHOPPING CART
                </div>
                <div className="cart-items-parent">
                    <div className="cart-items-outer d-flex flex-column justify-content-center align-items-center">
                        <div className="cart-items-inner d-flex justify-content-between gap-2">
                            <div className="cart-product d-flex gap-3">
                                <div className="product-image leaves d-flex align-self-center align-items-center">
                                    {/* Image of this product is resides in that div. */}
                                </div>
                                <div className="product-content d-flex flex-column justify-content-center">
                                    <div className="d-flex flex-column gap-1">
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-0">Aloe Leaves</h4>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0 opacity-75"> {'>'}500ml consumable Gel</p>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0 opacity-75"> 'How to use' guide steps </p>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0 opacity-75"> 1 Free leaf for every 5 purchased! </p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-0">

                                    </div>
                                </div>
                            </div>
                            <div className="cart-price d-flex align-items-center px-5">
                                <span>$</span> 2.99
                            </div>
                            <div className="cart-add-remove d-flex align-items-center gap-2">
                                <div className="quantity d-flex flex-column justify-content-between align-items-center">
                                    <button onClick={() => setLeavesQuantity(prev => prev + 1)}>
                                        <BsPlus size={25}></BsPlus>
                                    </button>
                                    <div className="py-1">
                                        {leavesQuantity}
                                    </div>
                                    <button onClick={() => {if (leavesQuantity > 0) {setLeavesQuantity(prev => prev - 1)}}}>
                                        <BsDash size={25}></BsDash>
                                    </button>
                                </div>
                                <button className="remove d-flex justify-content-center align-items-center"
                                        onClick={() => setLeavesQuantity(0)}>
                                    <BsX></BsX>
                                </button>
                            </div>
                        </div>
                        {leavesGift > 0 && (
                            <div className={`gift-unlocked ${animateLeavesGift ? "update" : ""}`}>
                                You have {leavesGift} extra Aloe Leaves!
                            </div>
                        )}
                    </div>
                    <div className="cart-items-outer d-flex justify-content-center align-items-center">
                        <div className="cart-items-inner d-flex justify-content-between gap-2">
                            <div className="cart-product d-flex gap-3">
                                <div className="product-image bottles d-flex align-self-center align-items-center">
                                    {/* Image of this product is resides in that div. */}
                                </div>
                                <div className="product-content d-flex flex-column justify-content-center">
                                    <div className="d-flex flex-column gap-1">
                                        <div className="d-flex align-items-center">
                                            <h4>Bottles <span>{`(`}200ml{`)`}</span></h4>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0  opacity-75">100% pure</p>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0  opacity-75">No chemical preservatives</p>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0  opacity-75">1 Free bottle for every 4 purchased!</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-0">

                                    </div>
                                </div>
                            </div>
                            <div className="cart-price d-flex align-items-center px-5">
                                <span>$</span> 4.99
                            </div>
                            <div className="cart-add-remove d-flex align-items-center gap-2">
                                <div className="quantity d-flex flex-column justify-content-between align-items-center">
                                    <button onClick={() => setBottlesQuantity(prev => prev + 1)}>
                                        <BsPlus size={25}></BsPlus>
                                    </button>
                                    <div className="py-1">
                                        {bottlesQuantity}
                                    </div>
                                    <button onClick={() => {if (bottlesQuantity > 0) {setBottlesQuantity(prev => prev - 1)}}}>
                                        <BsDash size={25}></BsDash>
                                    </button>
                                </div>
                                <button className="remove d-flex justify-content-center align-items-center"
                                        onClick={() => setBottlesQuantity(0)}>
                                    <BsX></BsX>
                                </button>
                            </div>
                        </div>
                        {bottlesGift > 0 && (
                            <div className={`gift-unlocked ${animateBottlesGift ? "update" : ""}`}>
                                You have {bottlesGift} extra Bottles!
                            </div>
                        )}
                    </div>
                    <div className="cart-items-outer d-flex justify-content-center align-items-center">
                        <div className="cart-items-inner d-flex justify-content-between gap-2">
                            <div className="cart-product d-flex gap-3">
                                <div className="product-image plants d-flex align-self-center align-items-center">
                                    {/* Image of this product is resides in that div. */}
                                </div>
                                <div className="product-content d-flex flex-column justify-content-center">
                                    <div className="d-flex flex-column gap-1">
                                        <div className="d-flex align-items-center">
                                            <h4>Aloe Plants</h4>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0  opacity-75">1 year old </p>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0  opacity-75">Transplantation guide steps</p>
                                        </div>
                                        <div className="d-flex">
                                            <BsCheck2 className="align-self-center mx-1"/>
                                            <p className="mb-0  opacity-75">1 Free plant for every 3 purchases!</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-0">

                                    </div>
                                </div>
                            </div>
                            <div className="cart-price d-flex align-items-center">
                                <span>$</span> 9.99
                            </div>
                            <div className="cart-add-remove d-flex align-items-center gap-2">
                                <div className="quantity d-flex flex-column justify-content-between align-items-center">
                                    <button onClick={() => setPlantsQuantity (prev => prev + 1)}>
                                        <BsPlus size={25}></BsPlus>
                                    </button>
                                    <div className="py-1">
                                        {plantsQuantity}
                                    </div>
                                    <button onClick={() => {
                                        if (plantsQuantity > 0) {
                                            setPlantsQuantity(prev => prev - 1);
                                        }
                                    }}>
                                        <BsDash size={25}></BsDash>
                                    </button>
                                </div>
                                <button className="remove d-flex justify-content-center align-items-center"
                                        onClick={() => setPlantsQuantity (0)}>
                                    <BsX></BsX>
                                </button>
                            </div>
                        </div>
                        {plantsGift > 0 && (
                            <div className={`gift-unlocked ${animatePlantsGift ? "update" : ""}`}>
                                You have {plantsGift} extra Plants!
                            </div>
                        )}
                    </div>
                </div>
                <div className="sub-total d-flex justify-content-between mt-2">
                    <div>
                        SUBTOTAL
                    </div>
                    <div>
                        <span>$</span> {subTotal.toFixed(2)}
                    </div>
                    <div className="proceed-button align-self-end">
                        <button onClick={() => {
                            if (subTotal > 0){
                                setProceedToCheckout(true)
                            }
                            else {
                                setEmptyCartModal(true)
                            }
                        }}>
                            <FaHandPointRight size={25}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="order-line">

            </div>
            <div className={`delivery-and-check ${proceedToCheckout ? "" : "disabled"}`}>
                {removeProceedBackButton && (
                    <div className="proceed-back-button">
                        <button onClick={() => {setProceedToCheckout(false)}}>
                            <FaHandPointLeft size={25}/>
                        </button>
                    </div>
                )}
                {deliveryInfo && (
                    <div className="delivery-information d-flex flex-column">
                        <div className="delivery-title">
                            DELIVERY INFORMATION
                        </div>
                        <div className="delivery-form d-flex flex-column">
                            <form id="delivery-form" className="delivery-info d-flex flex-column gap-4" onSubmit={handleDeliveryInputChange}>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={deliveryData.firstName}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.firstName && <div className="input-error">{formErrors.firstName}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={deliveryData.lastName}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.lastName && <div className="input-error">{formErrors.lastName}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={deliveryData.phoneNumber}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.phoneNumber && <div className="input-error">{formErrors.phoneNumber}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={deliveryData.email}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.email && <div className="input-error">{formErrors.email}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Thessaloniki"
                                        value={deliveryData.city}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.city && <div className="input-error">{formErrors.city}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="municipality"
                                        placeholder="Municipality"
                                        value={deliveryData.municipality}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.municipality && <div className="input-error">{formErrors.municipality}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="zip"
                                        placeholder="ZIP Code"
                                        value={deliveryData.zip}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.zip && <div className="input-error">{formErrors.zip}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="streetAddress"
                                        placeholder="Street Address"
                                        value={deliveryData.streetAddress}
                                        onChange={handleDeliveryInputChange}
                                        className="border-bottom"
                                    />
                                    {formErrors.streetAddress && <div className="input-error">{formErrors.streetAddress}</div>}
                                </div>
                            </form>
                            <button type="button" form="delivery-form" className="" onClick={() => {
                                if (verifyUserInput()) {
                                    setDeliveryInfo(false);
                                    setPaymentInfo(true);
                                }
                            }}>
                                Continue to Pay
                            </button>
                        </div>
                        <div>

                        </div>
                    </div>
                )}
                {paymentInfo && (
                    <div className="check-out-info d-flex flex-column justify-content-start">
                        <div className="clear-x d-flex justify-content-center align-items-center"
                            onClick={() => {
                                setDeliveryInfo(true);
                                setPaymentInfo(false);
                                setCashButtonClicked(false);
                                setCardButtonClicked(false);
                                setPaypalSelected(false);
                                setMastercardSelected(false);
                                setCardData({name: "", number: "", expiry: "", cvv: ""})
                                setCardFormErrors({});
                            }}>
                            <BsX></BsX>
                        </div>
                        <div className="payments-title">
                            PAYMENTS
                        </div>
                        <div className="cash-card-buttons d-flex flex-column gap-1">
                            <div className="d-flex gap-2">
                                <button
                                    className="d-flex justify-content-center align-items-center align-self-center"
                                    onClick={() => {
                                        setCashButtonClicked(true);
                                        setCardButtonClicked(false);
                                        setPaypalSelected(false);
                                        setMastercardSelected(false);
                                        setCardData({name: "", number: "", expiry: "", cvv: ""});
                                        setCardFormErrors({});
                                        }
                                    }
                                >
                                    {cashButtonClicked && (<div className={`cash-background`}></div>)}
                                </button>
                                <p className="text-start mb-0">
                                    Pay on Delivery
                                </p>
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    className="d-flex justify-content-center align-items-center align-self-center"
                                    onClick={() => {
                                        setCardButtonClicked(true);
                                        setCashButtonClicked(false);
                                        }
                                    }
                                >
                                    {cardButtonClicked && (<div className={`card-background`}></div>)}
                                </button>
                                <p className="text-start mb-0">
                                    Online Payment
                                </p>
                            </div>
                        </div>
                        {cashButtonClicked && (
                            <div className="cash-text-details d-flex flex-column align-self-center gap-4">
                                <div className="d-flex justify-content-between">
                                    <div>Total Amount:</div>
                                    <span>$ {subTotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>Your order will be processed immediately.</div>
                                    <span><BsCheck2></BsCheck2></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>We will contact you on arrival.</div>
                                    <span><BsCheck2></BsCheck2></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>Pay in cash when you receive your package.</div>
                                    <span><BsCheck2></BsCheck2></span>
                                </div>
                            </div>
                        )}
                        {cardButtonClicked && (
                            <div className="card-wrapper d-flex flex-column">
                                <div className={`card-choice d-flex ${noCardSelected ? "no-card-selected" : ""}`}>
                                    <div className={`card-name text-center ${paypalSelected ? "active" : ""}`}
                                        onClick={() => {
                                            setPaypalSelected(!paypalSelected);
                                            setMastercardSelected(false);
                                            setNoCardSelected(false);
                                            setCardData({name: "", number: "", expiry: "", cvv: ""});
                                            setCardFormErrors({});
                                        }}>
                                        <CgPaypal size={60}></CgPaypal> PayPal
                                    </div>
                                    <div className="division-line"></div>
                                    <div className={`card-name text-center ${mastercardSelected ? "active" : ""}`}
                                        onClick={() => {
                                            setPaypalSelected(false);
                                            setMastercardSelected(!mastercardSelected);
                                            setNoCardSelected(false)
                                            setCardData({name: "", number: "", expiry: "", cvv: ""});
                                            setCardFormErrors({});
                                        }}>
                                        <FaCcMastercard size={60}></FaCcMastercard>
                                    </div>
                                </div>
                                <form id="payment-form" className="card-info d-flex flex-column gap-4" onSubmit={handlePaymentFormSubmit} onClick={() => {
                                    if (!paypalSelected && !mastercardSelected) {
                                        setNoCardSelected(true);
                                        setTimeout(() => setNoCardSelected(false), 1000);
                                    };
                                }}>
                                    <div className="card-input-wrapper">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Hypothetical Name"
                                            value={cardData.name}
                                            onChange={handlePaymentInputChange}
                                            className="border-bottom"
                                            disabled={noCardSelected}
                                        />
                                        {cardFormErrors.name && <div className="card-input-error">{cardFormErrors.name}</div>}
                                    </div>
                                    <div className="card-input-wrapper">
                                        <input
                                            type="text"
                                            name="number"
                                            placeholder="Hypothetical Number"
                                            value={cardData.number}
                                            onChange={handlePaymentInputChange}
                                            className="border-bottom"
                                            disabled={noCardSelected}
                                        />
                                        {cardFormErrors.number && <div className="card-input-error">{cardFormErrors.number}</div>}
                                    </div>
                                    <div className="exp-cvv d-flex justify-content-between">
                                        <div className="card-input-wrapper">
                                            <input
                                                type="text"
                                                name="expiry"
                                                placeholder="MM/YY"
                                                value={cardData.expiry}
                                                onChange={handlePaymentInputChange}
                                                className="exp border-bottom"
                                                disabled={noCardSelected}
                                            />
                                            {cardFormErrors.expiry && <div className="card-input-error">{cardFormErrors.expiry}</div>}
                                        </div>
                                        <div className="card-input-wrapper">
                                            <input
                                                type="text"
                                                name="cvv"
                                                placeholder="3-digit code"
                                                value={cardData.cvv}
                                                onChange={handlePaymentInputChange}
                                                className="cvv border-bottom"
                                                disabled={noCardSelected}
                                            />
                                            {cardFormErrors.cvv && <div className="card-input-error">{cardFormErrors.cvv}</div>}
                                        </div>
                                    </div>
                                    <div className="sub-total-showcasing">
                                        <div className="d-flex justify-content-between">
                                            <div>Total Amount:</div>
                                            <span>$ {subTotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                        <div className="purchase-button d-flex flex-column align-items-center gap-4">
                            <div className="date-arrival-text d-flex flex-column align-items-center">
                                <span>Your order will arrive in 1–2 business days.</span>
                            </div>
                            <button type="submit" form="payment-form" disabled={!cashButtonClicked && !cardButtonClicked} onClick={() => {
                                if (cardButtonClicked && !paypalSelected && !mastercardSelected) {
                                    setNoCardSelected(true);
                                    setTimeout(() => setNoCardSelected(false), 1000);
                                    return;
                                }
                                if (cashButtonClicked) {
                                    resetAfterPurchase();
                                }

                                else if (verifyCardInput()) {
                                    resetAfterPurchase();
                                }
                            }}>
                                Complete Purchase
                            </button>
                        </div>
                    </div>
                )}
                {confirmationInfo && (
                    <div className="confirmation-info d-flex flex-column justify-content-center align-items-center text-center gap-5">
                        <div>
                            <span>Thank you for trusting us and our Products.</span>
                        </div>
                        <div className="confirmation-check">
                            <BsCheck2 size={150} color='springgreen'></BsCheck2>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Order;