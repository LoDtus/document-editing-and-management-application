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
    private String subject;
    private Date create_at;

    public ItemDocument(String subject, Date create_at) {
        this.subject = subject;
        this.create_at = create_at;
    }

    @Override
    public String toString() {
        return "ItemDocument{" +
                "subject='" + subject + '\'' +
                ", create_at=" + create_at +
                '}';
    }
}
