package com.server.service.role;

import com.server.model.entity.Role;

public interface RoleService {
    Role findById(String userId);
    Role save(Role role);
    void deleteById(String userId);
}
