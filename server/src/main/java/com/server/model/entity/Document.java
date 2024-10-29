package com.server.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table (name="documents")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_id")
    private int document_id;

    @Column(name = "user_id")
    private String user_id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "content")
    private String content;

    @Column(name = "modify_at")
    private Date modify_at;

    public Document(String user_id, String subject, String content, Date modify_at) {
        this.user_id = user_id;
        this.subject = subject;
        this.content = content;
        this.modify_at = modify_at;
    }

    @Override
    public String toString() {
        return "Document{" +
                "document_id=" + document_id +
                ", user_id=" + user_id +
                ", subject='" + subject + '\'' +
                ", content='" + content + '\'' +
                ", modify_at=" + modify_at +
                '}';
    }
}
