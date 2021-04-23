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
  Table,
} from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import { get } from 'lodash';

const ModalProccess = ({
  isOpen,
  setIsOpen,
  valTotalDivisor,
  valDivisor,
  extractValue,
  minMaxVal,
  data,
  kmeansData
}) => {

  return (
    <Modal isOpen={isOpen} size="lg" toggle={setIsOpen}>
      <ModalHeader>Algoritma Proses</ModalHeader>
      <ModalBody>
        <h5>Kmeans</h5>
        <Row>
          <Colxx xxs="12">
              {kmeansData && kmeansData.map((item, index) => (
                <Card className="mb-4" key={index}>
                  <CardBody >
                    <CardTitle>Cluster {index+1} </CardTitle>
                    <div>
                      CentroId : {item && item.centroid.map((cent)=> { return `${cent.toFixed(2) || '-'}, `})}
                    </div>
                    <hr/>
                    <div>
                      Cluster 
                      <Table>
                        <thead>
                          <tr>
                            <th>index data</th>
                            <th>RAM</th>
                            <th>Memory</th>
                            <th>Camera</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item &&
                            item.cluster.map((clust, index) => {
                              return (
                                <tr key={index}>
                                  <th scope="row">{item.clusterInd[index]}</th>
                                  <td>{clust[0]}</td>
                                  <td>{clust[1]}</td>
                                  <td>{clust[2]}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              ))}
          </Colxx>
        </Row>
        <hr/>
        <h5>Topsis</h5>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Kriteria Penilaian</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Kriteria</th>
                      <th>Alias</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>RAM</td>
                      <td>V1</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Memory</td>
                      <td>V2</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Kamera Utama</td>
                      <td>V3</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Kamera Depan</td>
                      <td>V4</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Battery</td>
                      <td>V5</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Kriteria Pembobotan</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Value</th>
                      <th>Bobot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>{`<4GB, <64GB, <32MP, <8MP, <1000mAh`}</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>{`<=8, >=64GB, >=64MP, >=8MP, >=1000mAh`}</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>{`>8GB, >=128GB, >=100MP, >=16MP, >=3000mAh`}</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle> Hasil Pembobotan Kriteria</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th rowSpan="2" style={{ textAlign: 'center' }}>
                        clusterInd
                      </th>
                      <th rowSpan="2" style={{ textAlign: 'center' }}>
                        Model Handphone
                      </th>
                      <th colSpan="5" style={{ textAlign: 'center' }}>
                        Alias
                      </th>
                    </tr>
                    <tr>
                      <th style={{ textAlign: 'center' }}>V1</th>
                      <th style={{ textAlign: 'center' }}>V2</th>
                      <th style={{ textAlign: 'center' }}>V3</th>
                      <th style={{ textAlign: 'center' }}>V4</th>
                      <th style={{ textAlign: 'center' }}>V5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {valDivisor &&
                      valDivisor.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{item[5]}</td>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[3]}</td>
                            <td>{item[4]}</td>
                          </tr>
                        );
                      })}
                    {valTotalDivisor && (
                      <tr>
                        <td
                          colSpan="2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          Nilai Pembagi
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[0]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[1]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[2]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[3]}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {valTotalDivisor[4]}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Nilai Max dan Nilai Min</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>clusterInd</th>
                      <th>Model Handphone</th>
                      <th>V1</th>
                      <th>V2</th>
                      <th>V3</th>
                      <th>V4</th>
                      <th>V15</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extractValue &&
                      extractValue.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{index}</th>
                          <td>{valDivisor[index][5]}</td>
                          <td>{item[0]}</td>
                          <td>{item[1]}</td>
                          <td>{item[2]}</td>
                          <td>{item[3]}</td>
                          <td>{item[4]}</td>
                        </tr>
                      ))}
                    {minMaxVal && (
                      <tr>
                        <td
                          colSpan="2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          Nilai MIN
                        </td>

                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['0'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['1'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['2'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['3'].min}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['4'].min}
                        </td>
                      </tr>
                    )}
                    {minMaxVal && (
                      <tr>
                        <td
                          colSpan="2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          Nilai MAX
                        </td>

                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['0'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['1'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['2'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['3'].max}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#D8D8D8',
                          }}
                        >
                          {minMaxVal['4'].max}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Nilai D+,D- dan Value</CardTitle>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Model Handphone</th>
                      <th>Cluster</th>
                      <th>D+</th>
                      <th>D-</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item, index) => (
                        <tr key={item._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.brand} - {item.type}</td>
                          <td>{item.cluster}</td>
                          <td>{item.topsis['D+']}</td>
                          <td>{item.topsis['D-']}</td>
                          <td>{item.topsis.topsis}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ModalProccess;
