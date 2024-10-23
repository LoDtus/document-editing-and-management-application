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
    private int document_id;

    @Column(name = "user_id")
    private int user_id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "content")
    private String content;

    @Column(name = "thumbnail")
    private String thumbnail;

    @Column(name = "create_at")
    private Date create_at;

    public Document(int user_id, String subject, String content, String thumbnail, Date create_at) {
        this.user_id = user_id;
        this.subject = subject;
        this.content = content;
        this.thumbnail = thumbnail;
        this.create_at = create_at;
    }

    @Override
    public String toString() {
        return "Document{" +
                "document_id=" + document_id +
                ", user_id=" + user_id +
                ", subject='" + subject + '\'' +
                ", content='" + content + '\'' +
                ", thumbnail='" + thumbnail + '\'' +
                ", create_at=" + create_at +
                '}';
    }
}
