import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample() {
  const [show, setShow] = useState(false);

  return (
    show ?
    <div className="mt-5">
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      </Alert>
    </div> :
    <div className="mt-5">
      <Button className="btn-secondary btn-lg" onClick={() => setShow(true)}>Show Alert</Button>
    </div>
  )
}

export default AlertDismissibleExample;