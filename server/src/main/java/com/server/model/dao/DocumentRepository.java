package com.server.model.dao;

import com.server.model.entity.Document;
import com.server.model.entity.ItemDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Integer> {
    @Query(value = "SELECT * FROM documents WHERE user_id = :userId", nativeQuery = true)
    List<Document> findAllByUserId(@Param("userId") String userId);

    @Query("SELECT new com.server.model.entity.ItemDocument(document_id, subject, modify_at) FROM Document WHERE user_id = :userId ORDER BY modify_at DESC")
    List<ItemDocument> findAllItem(@Param("userId") String userId);
}