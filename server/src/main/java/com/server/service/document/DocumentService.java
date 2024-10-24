package com.server.service.document;

import com.server.model.entity.Document;
import com.server.model.entity.ItemDocument;

import java.util.List;

public interface DocumentService {
    List<Document> findAll();
    List<Document> findAllByUserId(String userId);
    List<ItemDocument> findAllItem(String userId);
    Document findById(int id);
    Document save(Document document);
    void deleteById(int id);
}