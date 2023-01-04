import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Success = () => {

    const [sessionData, setSessionData] = useState();

    const useQuery = () => new URLSearchParams(useLocation().search);
    const sessionId = useQuery().get("session_id");

    useEffect(() => {
        const fetchSessionData = async () => {
            const queryParams = new URLSearchParams({
                id: sessionId,
            });
            const sessionData = await fetch('/get-checkout-session?' + queryParams).then(res => res.json());

            console.log("Session Data: ");
            console.log(sessionData);
            setSessionData(sessionData);
        };

        fetchSessionData();
        
    }, [sessionId]);

    return (
        <div className="success">
            <h2 className='success-msg'>Your order will be ready soon!</h2>
            {sessionData && (<a href={sessionData.url} target="_blank" rel="noreferrer">
                <button>View Receipt</button>
            </a>)}
        </div>
    );
}

export default Success;