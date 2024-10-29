import instance from './api';

export const getAllItems = async (userId) => {
    const response = await instance.get(`/${userId}/itemDocuments`);
    return response.data;
}

export const getAllDocs = async (documentId) => {
    const response = await instance.get(`/documents/${documentId}`);
    return response.data;
}

export const getDocsById = async (userId) => {
    const response = await instance.get(`/${userId}/documents`);
    return response.data;
}

export const addDocs = async (userId, subject, content, thumbnail, createAt) => {
    const response = await instance.post(`/documents`, {
        "user_id": userId,
        "subject": subject,
        "content": content,
        "thumbnail": thumbnail,
        "create_at": createAt
    });
    return (response.status === 200) ? true : false;
}

export const updateDocs = async (documentId, userId, subject, content, thumbnail, createAt) => {
    const response = await instance.put(`/documents`, {
        "document_id": documentId,
        "user_id": userId,
        "subject": subject,
        "content": content,
        "thumbnail": thumbnail,
        "create_at": createAt
    });
    return (response.status === 200) ? true : false;
}

export const deleteDocsById = async (documentId) => {
    const response = await instance.delete(`/document/${documentId}`);
    return response.data;
}