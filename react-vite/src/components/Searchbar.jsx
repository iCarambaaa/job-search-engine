import { Form } from "react-bootstrap";

const Searchbar = () => {
    const

  return (
    <div>
      <Form.Group className="d-flex justify-content-start">
        <Form.Label>Search & Find</Form.Label>
        <Form.Control type="search" placeholder="Search here..." />
        <Form.Text className="text-muted">
          Want to be a productive human beeing? Get a job and pay taxes.
        </Form.Text>
      </Form.Group>
    </div>
  );
};

export default Searchbar;
