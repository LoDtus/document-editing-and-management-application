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
    private Date modify_at;

    public ItemDocument(String subject, int document_id, Date modify_at) {
        this.document_id = document_id;
        this.subject = subject;
        this.modify_at = modify_at;
    }

    public ItemDocument(int document_id, String subject, Date modify_at) {
        this.document_id = document_id;
        this.subject = subject;
        this.modify_at = modify_at;
    }
}
