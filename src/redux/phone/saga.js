import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  SUBMIT_NEW_PHONE_REQUEST,
  DELETE_PHONE_REQUEST,
  PUBLISH_MODEL_REQUEST,
  UPDATE_CURRICULUM_REQUEST,
  GET_MODEL_BY_ID_REQUEST,
  UPDATE_PHONE_REQUEST,
} from '../actions';
import {
  sumbitPhoneSuccess,
  sumbitPhoneError,
  deletePhoneSuccess,
  deletePhoneError,
  publishModelSuccess,
  publishModelError,
  updateCurriculumSuccess,
  updateCurriculumError,
  getModelByIdSuccess,
  getModelByIdError,
  updatePhoneError,
  updatePhoneSuccess,
} from './actions';
import {
  sumbitPhoneService,
  deletePhoneService,
  publishModelService,
  updateCurriculumService,
  getModelByIdService,
  updatePhoneService,
} from './services';

function* submitModelSaga({ payload }) {
  try {
    const response = yield call(sumbitPhoneService, payload);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(sumbitPhoneSuccess(response));
  } catch (error) {
    yield put(sumbitPhoneError(error));
  }
}

function* deletePhoneSaga({ payload }) {
  const { ids } = payload;
  try {
    const response = yield call(deletePhoneService, ids);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(deletePhoneSuccess(response));
  } catch (error) {
    yield put(deletePhoneError(error));
  }
}

function* publishModelSaga({ payload }) {
  const { id, type } = payload;
  try {
    const response = yield call(publishModelService, id, type);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(publishModelSuccess(response));
  } catch (error) {
    yield put(publishModelError(error));
  }
}

function* updateCurriculumSaga({ payload }) {
  const { title, fileUrl } = payload;
  try {
    const response = yield call(updateCurriculumService, title, fileUrl);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(updateCurriculumSuccess(response));
  } catch (error) {
    yield put(updateCurriculumError(error));
  }
}

function* getModelByIdSaga({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(getModelByIdService, id);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(getModelByIdSuccess(response));
  } catch (error) {
    yield put(getModelByIdError(error));
  }
}

function* updatePhoneSaga({ payload }) {
  const { data, id } = payload;
  try {
    const response = yield call(updatePhoneService, data, id);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(updatePhoneSuccess(response));
  } catch (error) {
    yield put(updatePhoneError(error));
  }
}

export function* watchSubmitPhoneSaga() {
  yield takeEvery(SUBMIT_NEW_PHONE_REQUEST, submitModelSaga);
}

export function* watchDeletePhoneSaga() {
  yield takeEvery(DELETE_PHONE_REQUEST, deletePhoneSaga);
}

export function* watchPublishModelSaga() {
  yield takeEvery(PUBLISH_MODEL_REQUEST, publishModelSaga);
}

export function* watchUpdateCurriculumSaga() {
  yield takeEvery(UPDATE_CURRICULUM_REQUEST, updateCurriculumSaga);
}

export function* watchGetModelByIdSaga() {
  yield takeEvery(GET_MODEL_BY_ID_REQUEST, getModelByIdSaga);
}

export function* watchUpdatPhoneSaga() {
  yield takeEvery(UPDATE_PHONE_REQUEST, updatePhoneSaga);
}

export default function* rootSaga() {
  yield all([fork(watchSubmitPhoneSaga)]);
  yield all([fork(watchDeletePhoneSaga)]);
  yield all([fork(watchPublishModelSaga)]);
  yield all([fork(watchUpdateCurriculumSaga)]);
  yield all([fork(watchGetModelByIdSaga)]);
  yield all([fork(watchUpdatPhoneSaga)]);
}
