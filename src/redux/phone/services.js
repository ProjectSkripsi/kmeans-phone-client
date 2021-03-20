import axios from 'axios';
import { baseUrl } from '../../constants/defaultValues';
import { getToken } from '../../helpers/Utils';

export const sumbitPhoneService = async (data) => {
  const token = getToken();

  try {
    const response = await axios.post(`${baseUrl}/phone`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const deletePhoneService = async (ids) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${baseUrl}/phone/delete`,
      { ids },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const publishModelService = async (id, type) => {
  const token = getToken();
  try {
    const response = await axios.patch(
      `${baseUrl}/model/publish/${id}/${type}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const getCurriculumService = async () => {
  try {
    const response = await axios.get(`${baseUrl}/curriculum`);
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const updateCurriculumService = async (title, fileUrl) => {
  const token = getToken();
  try {
    const response = await axios.put(
      `${baseUrl}/curriculum/update/6013a851feae97436c13e110`,
      { title, fileUrl },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const getModelByIdService = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/phone/${id}`);
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const updatePhoneService = async (data, id) => {
  const token = getToken();
  try {
    const response = await axios.put(`${baseUrl}/phone/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const onDownloadService = async (id) => {
  try {
    const response = await axios.patch(`${baseUrl}/model/${id}`);
    return response;
  } catch ({ response }) {
    return response;
  }
};
