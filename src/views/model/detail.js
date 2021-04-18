import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Card,
  CardTitle,
  CardBody,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  CardHeader,
  Button,
} from 'reactstrap';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { get } from 'lodash';
import GlideComponentThumbs from '../../components/carousel/GlideComponentThumbs';
import { Colxx } from '../../components/common/CustomBootstrap';

const ModalDetail = ({ isOpen, setIsOpen, data, onDownload }) => {
  const [activeTab, setActiveTab] = useState('details');

  const { images } = data;
  const output =
    images && images.map((elm) => ({ id: elm._id, img: elm.imageUrl }));

  return (
    <Modal isOpen={isOpen} size="lg" toggle={setIsOpen}>
      <ModalHeader>
        {data.brand} - {data.type}
      </ModalHeader>
      <ModalBody>
        <Row>
          <Colxx xxs="12" xl="12" className="col-left">
            {/* <Card className="mb-4">
              <CardBody> */}
            <GlideComponentThumbs
              settingsImages={{
                bound: true,
                rewind: false,
                focusAt: 0,
                startAt: 0,
                gap: 5,
                perView: 1,
                data: output || [],
              }}
              settingsThumbs={{
                bound: true,
                rewind: false,
                focusAt: 0,
                startAt: 0,
                gap: 10,
                perView: 5,
                data: output || [],
                breakpoints: {
                  576: {
                    perView: 4,
                  },
                  420: {
                    perView: 3,
                  },
                },
              }}
            />
            {/* </CardBody>
            </Card> */}
            <Card className="mb-4">
              <CardHeader>
                <Nav tabs className="card-header-tabs ">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'details',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('details')}
                      to="#"
                      location={{}}
                    >
                      Spesifikasi
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="details">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <div className="d-flex flex-row align-items-center">
                          <h5>
                            <b>
                              {data.brand} - {data.type} | {data.year}
                            </b>
                          </h5>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Brand : {data.brand}
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>OS : {data.os}</p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            CPU : {data.cpu}
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Chipset : {data.chipset}
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Kamera Depan : {get(data, 'camera.front', '')} MP
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Kamera Belakang : : {get(data, 'camera.rear', '')}{' '}
                            MP
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Ukuran Layar : {data.dispalySize} inches
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Resolusi Layar : {data.dispalyResolution} pixels
                          </p>
                        </div>
                        <div>
                            <p style={{ marginBottom: '10px' }}>
                              Memory : {data.memory || '-'} GB
                            </p>
                          </div>
                          <div>
                            <p style={{ marginBottom: '10px' }}>
                              RAM : {data.ram || '-'} GB
                            </p>
                          </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Battery : {data.battery} mAh
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Finger Print :{' '}
                            {data.fingerPrint ? 'Tersedia' : 'Tidak Tersedia'}
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            NFC : {data.nfc ? 'Tersedia' : 'Tidak Tersedia'}
                          </p>
                        </div>
                        <div>
                          <p style={{ marginBottom: '10px' }}>
                            Harga : Rp. {data.price}
                          </p>
                        </div>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Colxx>

          {/*  */}
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ModalDetail;
