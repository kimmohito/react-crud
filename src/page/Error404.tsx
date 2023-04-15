import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Error404 = () => {

    return(
            <Card
                style={{ width: '18rem' }}
                className="m-auto mt-4 p-4"
            >
                <h3
                    className="mb-4"
                >
                    Error 404!
                </h3>
                <p>
                    Page is not found. You've lose somewhere!
                </p>
                <p>
                    <Link to="/">Go Back to Homepage</Link>
                </p>
            </Card>
        
    );
};

export default Error404;

