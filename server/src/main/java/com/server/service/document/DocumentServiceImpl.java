package com.server.service.document;

import com.server.model.dao.DocumentRepository;
import com.server.model.entity.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentServiceImpl implements DocumentService {
    private DocumentRepository repository;

    @Autowired
    public DocumentServiceImpl(DocumentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Document> findAll() {
        return repository.findAll();
    }

    @Override
    public Document findById(int id) {
        Optional<Document> result = repository.findById(id);
        Document document = null;
        if (result.isPresent()) {
            document = result.get();
        } else {
            throw new RuntimeException("Did not find document id - " + id);
        }
        return document;
    }

    @Override
    public Document save(Document document) {
        return repository.save(document);
    }

    @Override
    public void deleteById(int id) {
        repository.deleteById(id);
    }
}
