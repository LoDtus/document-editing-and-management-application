package com.server.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ItemDocument {
    private int document_id;
    private String subject;
    private Date create_at;

    public ItemDocument(String subject, int document_id, Date create_at) {
        this.document_id = document_id;
        this.subject = subject;
        this.create_at = create_at;
    }

    public ItemDocument(int document_id, String subject, Date create_at) {
        this.document_id = document_id;
        this.subject = subject;
        this.create_at = create_at;
    }
}
