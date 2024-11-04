package com.server.controller.controller;

import com.server.model.entity.Document;
import com.server.model.entity.ItemDocument;
import com.server.service.document.DocumentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class DocumentController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private DocumentService documentService;

    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @GetMapping("/documents")
    public List<Document> getAll() {
        return documentService.findAll();
    }

    @GetMapping("/{userId}/documents")
    public List<Document> getAllByUserId(@PathVariable String userId) {
        return documentService.findAllByUserId(userId);
    }

    @GetMapping("{userId}/itemDocuments")
    public List<ItemDocument> getAllItem(@PathVariable String userId) {
        return documentService.findAllItem(userId);
    }

    @GetMapping("/documents/{documentId}")
    public Document getDocument(@PathVariable int documentId) {
        Document document = documentService.findById(documentId);
        if (document == null) {
            throw new RuntimeException("Document id not found - " + documentId);
        }
        return document;
    }

    @PostMapping("/documents")
    public int addDocument(@RequestBody Document document) {
        document.setDocument_id(0);
        Document dbDocument = documentService.save(document);
        return dbDocument.getDocument_id();
    }

    @PutMapping("/documents")
    public Document saveDocument(@RequestBody Document document) {
        Document result = documentService.findById(document.getDocument_id());
        if (result == null) {
            throw new IllegalArgumentException("Document id not found - " + document.getDocument_id());
        }
        Document dbDocument = documentService.save(document);
        return dbDocument;
    }

    @DeleteMapping("/documents/{documentId}")
    public String deleteDocument(@PathVariable int documentId) {
        Document dbDocument = documentService.findById(documentId);
        if (dbDocument == null) {
            throw new RuntimeException("Document id not found - " + documentId);
        }
        documentService.deleteById(documentId);
        return "Deleted document id - " + documentId;
    }
}
