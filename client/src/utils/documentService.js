import instance from './api';

export const getAllItems = async (userId) => {
    const response = await instance.get(`/${userId}/itemDocuments`);
    return response.data;
}

export const getAllDocs = async (userId) => {
    const response = await instance.get(`/${userId}/documents`);
    return response.data;
}

export const getDocById = async (documentId) => {
    const response = await instance.get(`/documents/${documentId}`);
    return response.data;
}

export const addDoc = async (userId, subject, content, modifyAt) => {
    const response = await instance.post(`/documents`, {
        "user_id": userId,
        "subject": subject,
        "content": content,
        "modify_at": modifyAt
    });
    return response.data;
}

export const updateDoc = async (documentId, userId, subject, content, modifyAt) => {
    const response = await instance.put(`/documents`, {
        "document_id": documentId,
        "user_id": userId,
        "subject": subject,
        "content": content,
        "modify_at": modifyAt
    });
    return response.status === 200;
}

export const deleteDocById = async (documentId) => {
    const response = await instance.delete(`/documents/${documentId}`);
    return response.data;
}