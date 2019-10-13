import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import styles from './NotFound.module.scss';

export default class NotFound extends React.Component {
  componentWillMount() {
    document.title = '404: The page you are looking for does not exist';
  }

  render() {
    return (
      <div>
      <Container className={styles.wrapper}>
          <Row>
            <Col xs={12} md={10} lg={8} className="m-auto">
              <h1 className={styles.code404}>404</h1>
              <h4>The page you are looking for does not exist.</h4>
              <p className="mb-4">
                Please <Link to="/">back to home</Link>.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
