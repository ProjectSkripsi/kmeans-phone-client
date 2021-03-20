/* eslint-disable*/
import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CustomInput,
  Button,
  Tooltip,
  Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Colxx } from '../common/CustomBootstrap';
// import TooltipItem from '../../components/common/TooltipItem';

const ImageListView = ({
  product,
  isSelect,

  onCheckItem,
  isAdmin,
  toDetailModel,
  doUpdate,
  onDownloadModel,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product._id}>
      <Card
        onClick={(event) => onCheckItem(event, product._id)}
        className={classnames({
          active: isSelect,
        })}
      >
        <div className="position-relative">
          <NavLink to={`?p=${product._id}`} className="w-40 w-sm-100">
            <CardImg
              top
              alt={product.title}
              src={product.images[0].imageUrl}
              style={{ height: '200px' }}
            />
          </NavLink>
          <Badge
            color={product.os === 'ios' ? 'primary' : 'success'}
            pill
            className="position-absolute badge-top-left"
          >
            {product.os}
          </Badge>
        </div>
        <CardBody>
          <Row>
            {isAdmin && (
              <Colxx xxs="1" style={{ paddingLeft: '5px' }}>
                <CustomInput
                  className="item-check mb-0"
                  type="checkbox"
                  id={`check_${product._id}`}
                  checked={isSelect}
                  onChange={() => {}}
                  label=""
                />
              </Colxx>
            )}
            <Colxx xxs="10" className="mb-3">
              <CardSubtitle>
                <p
                  className="list-item-heading mb-1 truncate"
                  id={'Tooltip-' + product._id}
                >
                  {product.brand} - {product.type}
                </p>

                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target={'Tooltip-' + product._id}
                  toggle={toggle}
                >
                  {product.brand} - {product.type}
                </Tooltip>
                <p className="list-item-heading">Rp. {product.price}</p>
              </CardSubtitle>
              <CardText className="text-muted text-small mb-0 font-weight-light">
                {product.year}
              </CardText>
            </Colxx>
            {isAdmin && (
              <>
                <Button
                  color="primary"
                  block
                  className="mb-1"
                  onClick={() => doUpdate(product)}
                >
                  UPDATE
                </Button>
              </>
            )}
            <Button
              color="secondary"
              block
              outline
              onClick={() => toDetailModel(product._id)}
            >
              LIHAT DETAIL
            </Button>
          </Row>
        </CardBody>
      </Card>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
