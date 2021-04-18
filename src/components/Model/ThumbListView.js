import React, { useState } from 'react';
import { Card, Button, Tooltip } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../components/common/CustomBootstrap';
import moment from 'moment';

const ThumbListView = ({
  product,
  isSelect,
  collect,
  onCheckItem,
  toDetailModel,
  onDownloadModel,
}) => {
  
  return (
    <Colxx xxs="12" key={product._id} className="mb-3">
      <Card
        className={classnames('d-flex flex-row', {
          active: isSelect,
        })}
      >
        <div to={`?p=${product._id}`} className="d-flex">
          <img
            alt={product.title}
            src={product.images[0].imageUrl}
            className="list-thumbnail responsive border-0 card-img-left"
          />
        </div>
        <div className="pl-2 d-flex flex-grow-1 min-width-zero">
          <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <div className="w-60 w-sm-100">
              <p
                className="list-item-heading mb-1 truncate"
                // id={'Tooltip-' + product._id}
              >
                {product.brand} - {product.type}
              </p>
            </div>
            <p className="mb-1 text-muted text-small w-15 w-sm-100">
              {product.os}
            </p>
            <p className="mb-1 text-muted text-small w-15 w-sm-100">
              {product.year}
            </p>
            <p className="mb-1 text-muted text-small w-15  w-sm-100">
              {/* Topsis: {product.topsis.topsis} */} topsis: 0.4
            </p>
            <p className="mb-1 text-muted text-small w-15  w-sm-100">
              {/* Topsis: {product.topsis.topsis} */} cluster:  {product.cluster || '-'}
            </p>
          </div>
          <div className="w-10 w-sm-100">
            <Button
              color="secondary"
              outline
              size="sm"
              className="mt-4"
              onClick={() => toDetailModel(product._id)}
            >
              DETAIL
            </Button>
          </div>
         
        </div>
      </Card>
      {/* </ContextMenuTrigger> */}
    </Colxx>
  );
};

export default React.memo(ThumbListView);
