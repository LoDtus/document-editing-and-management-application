package com.server.service.document;

import com.server.model.entity.Document;

import java.util.List;

public interface DocumentService {
    List<Document> findAll();
    Document findById(int id);
    Document save(Document document);
    void deleteById(int id);
}