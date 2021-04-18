/* eslint-disable  */
/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';
import { get } from 'lodash';
import Lightbox from 'react-image-lightbox';
import SingleLightbox from '../../components/pages/SingleLightbox';
import IntlMessages from '../../helpers/IntlMessages';
import DropzoneExample from '../../containers/forms/DropzoneExample';
import DropzoneCover from '../../containers/forms/DropzoneCover';
import { SliderTooltip } from '../../components/common/SliderTooltips';

const AddNewModal = ({
  modalOpen,
  toggleModal,
  data,
  onChange,
  onSubmit,
  setScore,
  onUploadImg,
  onUploadFile,
  isUpdate,
  isRemoveCover,
  setIsRemoveCover,
  isRemoveFile,
  setIsRemoveFile,
  removeImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState('');

  const dropzone = useRef();

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>Tambah Handphone Baru</ModalHeader>
      <ModalBody>
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event, errors, values) => onSubmit(event, errors, values)}
        >
          <AvGroup>
            <Label>Brand</Label>
            <AvInput
              required
              value={data.brand}
              name="brand"
              onChange={onChange}
              placeholder="Samsung, Apple, Xiaomi"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Tipe</Label>
            <AvInput
              required
              value={data.type}
              name="type"
              onChange={onChange}
              placeholder="S20 Pro"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <AvField
              type="select"
              name="os"
              required
              label="OS"
              errorMessage="Wajib di isi!"
              onChange={onChange}
              value={data.os}
            >
              <option>-</option>
              <option value="ios">iOS</option>
              <option value="android">Android</option>
            </AvField>
          </AvGroup>
          <AvGroup>
            <Label>CPU</Label>
            <AvInput
              required
              value={data.cpu}
              name="cpu"
              onChange={onChange}
              placeholder="Octa-core (2x2.3 GHz Kryo 465 Gold & 6x1.8 GHz Kryo 465 Silver)"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Chipset</Label>
            <AvInput
              required
              value={data.chipset}
              name="chipset"
              onChange={onChange}
              placeholder="Qualcomm SM7125 Snapdragon 720G (8 nm)"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Memory</Label>
            <AvInput
              required
              value={data.memory}
              name="memory"
              onChange={onChange}
              placeholder="128"
              type="number"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>RAM</Label>
            <AvInput
              required
              value={data.ram}
              name="ram"
              onChange={onChange}
              placeholder="8"
              type="number"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Ukuran Layar</Label>
            <AvInput
              required
              value={data.dispalySize}
              name="dispalySize"
              type="number"
              onChange={onChange}
              placeholder="6.7"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Resolusi Layar</Label>
            <AvInput
              required
              value={data.dispalyResolution}
              name="dispalyResolution"
              onChange={onChange}
              placeholder="1440 x 3200"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Kamera Depan</Label>
            <AvInput
              required
              value={get(data, 'camera.front', '')}
              name="front"
              onChange={onChange}
              placeholder="10"
              type="number"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Kamera Belakang</Label>
            <AvInput
              required
              value={get(data, 'camera.rear', '')}
              name="rear"
              onChange={onChange}
              placeholder="64"
              type="number"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Battery</Label>
            <AvInput
              required
              value={get(data, 'battery', '')}
              name="battery"
              onChange={onChange}
              placeholder="2000"
              type="number"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>

          <AvRadioGroup
            className="error-l-150 "
            name="fingerPrint"
            required
            value={data.fingerPrint}
          >
            <Label className="d-block mt-2">Finger Print</Label>
            <AvRadio
              customInput
              onChange={onChange}
              label="Tersedia"
              id="FPTersedia"
              value="Tersedia"
            />
            <AvRadio
              customInput
              id="FPTidak Tersedia"
              onChange={onChange}
              label="Tidak Tersedia"
              value="Tidak Tersedia"
            />
          </AvRadioGroup>
          <AvRadioGroup
            className="error-l-150 "
            name="nfc"
            required
            value={data.nfc}
          >
            <Label className="d-block mt-2">NFC</Label>
            <AvRadio
              customInput
              id="Tersedia"
              onChange={onChange}
              label="Tersedia"
              value="Tersedia"
            />
            <AvRadio
              customInput
              id="Tidak Tersedia"
              onChange={onChange}
              label="Tidak Tersedia"
              value="Tidak Tersedia"
            />
          </AvRadioGroup>
          <AvGroup>
            <Label>Tahun</Label>
            <AvInput
              required
              value={data.year}
              name="year"
              type="number"
              onChange={onChange}
              placeholder="2020"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label>Harga</Label>
            <AvInput
              required
              value={get(data, 'price', '')}
              name="price"
              onChange={onChange}
              placeholder="10000000"
            />
            <AvFeedback>Wajib di isi!</AvFeedback>
          </AvGroup>

          <Label className="mt-4">Foto HP</Label>

          {isUpdate ? (
            data.images.length === 0 ? (
              <DropzoneCover
                ref={dropzone}
                onUpload={onUploadImg}
                removed={removeImage}
              />
            ) : (
              <div />
            )
          ) : (
            <DropzoneCover
              ref={dropzone}
              onUpload={onUploadImg}
              removed={removeImage}
            />
          )}

          {isUpdate && (
            <div className="col-6">
              <NavLink to="#" location={{}}>
                <ImageList
                  data={data.images}
                  setIsOpen={setIsOpen}
                  setSelectImage={setSelectImage}
                  setIsRemoveCover={setIsRemoveCover}
                />
              </NavLink>
            </div>
          )}
          {isUpdate && (
            <DropzoneCover
              ref={dropzone}
              onUpload={onUploadImg}
              removed={removeImage}
            />
          )}

          <Button color="primary" className="mt-5 mr-5 ml-4">
            Submit
          </Button>
          <Button
            color="secondary"
            outline
            className="mt-5 ml-5"
            onClick={toggleModal}
          >
            <IntlMessages id="pages.cancel" />
          </Button>
        </AvForm>
        {isOpen && (
          <Lightbox
            mainSrc={selectImage}
            onCloseRequest={() => setIsOpen(false)}
          />
        )}
      </ModalBody>
    </Modal>
  );
};

export default AddNewModal;

const ImageList = ({ setIsOpen, setSelectImage, data, setIsRemoveCover }) => {
  return data.map((item) => (
    <div key={item._id || item.id}>
      <div className="position-absolute">
        <Button
          outline
          color="red"
          className="icon-button"
          onClick={() => setIsRemoveCover(item)}
        >
          <i className="simple-icon-trash primary" color="red" />
        </Button>
      </div>
      <img
        className="img-fluid border-radius mb-2"
        src={item.imageUrl}
        alt="thumbnail"
        style={{ height: '130px' }}
        onClick={() => {
          setIsOpen(true);
          setSelectImage(item.imageUrl);
        }}
      />
    </div>
  ));
};
