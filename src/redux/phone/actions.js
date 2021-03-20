import {
  SUBMIT_NEW_PHONE_REQUEST,
  SUBMIT_NEW_PHONE_SUCCESS,
  SUBMIT_NEW_PHONE_ERROR,
  DELETE_PHONE_REQUEST,
  DELETE_PHONE_SUCCESS,
  DELETE_PHONE_ERROR,
  PUBLISH_MODEL_REQUEST,
  PUBLISH_MODEL_SUCCESS,
  PUBLISH_MODEL_ERROR,
  UPDATE_CURRICULUM_REQUEST,
  UPDATE_CURRICULUM_SUCCESS,
  UPDATE_CURRICULUM_ERROR,
  GET_MODEL_BY_ID_REQUEST,
  GET_MODEL_BY_ID_SUCCESS,
  GET_MODEL_BY_ID_ERROR,
  UPDATE_PHONE_REQUEST,
  UPDATE_PHONE_SUCCESS,
  UPDATE_PHONE_ERROR,
} from '../actions';

export const sumbitPhone = (data, callBack) => ({
  type: SUBMIT_NEW_PHONE_REQUEST,
  payload: { data, callBack },
});

export const sumbitPhoneSuccess = (response) => ({
  type: SUBMIT_NEW_PHONE_SUCCESS,
  payload: response,
});

export const sumbitPhoneError = (error) => ({
  type: SUBMIT_NEW_PHONE_ERROR,
  payload: { error },
});

export const deletePhone = (ids, callBack) => ({
  type: DELETE_PHONE_REQUEST,
  payload: { ids, callBack },
});

export const deletePhoneSuccess = (response) => ({
  type: DELETE_PHONE_SUCCESS,
  payload: response,
});

export const deletePhoneError = (error) => ({
  type: DELETE_PHONE_ERROR,
  payload: { error },
});

export const publishModel = (id, type, callBack) => ({
  type: PUBLISH_MODEL_REQUEST,
  payload: { id, type, callBack },
});

export const publishModelSuccess = (response) => ({
  type: PUBLISH_MODEL_SUCCESS,
  payload: response,
});

export const publishModelError = (error) => ({
  type: PUBLISH_MODEL_ERROR,
  payload: { error },
});

export const updateCurriculum = (title, fileUrl, callBack) => ({
  type: UPDATE_CURRICULUM_REQUEST,
  payload: { title, fileUrl, callBack },
});

export const updateCurriculumSuccess = (response) => ({
  type: UPDATE_CURRICULUM_SUCCESS,
  payload: response,
});

export const updateCurriculumError = (error) => ({
  type: UPDATE_CURRICULUM_ERROR,
  payload: { error },
});

export const getModelById = (id, callBack) => ({
  type: GET_MODEL_BY_ID_REQUEST,
  payload: { id, callBack },
});

export const getModelByIdSuccess = (response) => ({
  type: GET_MODEL_BY_ID_SUCCESS,
  payload: { response },
});

export const getModelByIdError = (error) => ({
  type: GET_MODEL_BY_ID_ERROR,
  payload: { error },
});

export const updatePhone = (data, id, callBack) => ({
  type: UPDATE_PHONE_REQUEST,
  payload: { data, id, callBack },
});

export const updatePhoneSuccess = (response) => ({
  type: UPDATE_PHONE_SUCCESS,
  payload: response,
});

export const updatePhoneError = (error) => ({
  type: UPDATE_PHONE_ERROR,
  payload: { error },
});
