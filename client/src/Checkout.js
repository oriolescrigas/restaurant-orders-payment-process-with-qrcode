import {useEffect} from "react";
import {loadStripe} from "@stripe/stripe-js";



const Checkout = () => {

    useEffect(() => {
        const initiateCheckout = async () => {
            const {publishableKey} = await fetch('/config').then(res => res.json());
            const stripe = await loadStripe(publishableKey);

            const {id} = await fetch('/create-checkout-session', {
                method: 'POST',
            }). then(res => res.json());

            const {error} = await stripe.redirectToCheckout({
                sessionId: id
            });

            if (error) {
                // do something
            }

        }
        initiateCheckout();
    }, []);

    return (
        <div className="order">
            <h2>Loading...</h2>
        </div>
    );
}

export default Checkout;