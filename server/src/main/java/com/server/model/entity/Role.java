package com.server.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name = "roles")
public class Role {
    @Id
    @Column (name = "user_id")
    private String user_id;

    @Column (name = "role")
    private String role;

    @Override
    public String toString() {
        return "Role{" +
                "user_id='" + user_id + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
