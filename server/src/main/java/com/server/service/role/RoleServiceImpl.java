package com.server.service.role;

import com.server.model.dao.RoleRepository;
import com.server.model.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {
    private RoleRepository repository;

    @Autowired
    public RoleServiceImpl(RoleRepository repository) {
        this.repository = repository;
    }

    @Override
    public Role findById(String userId) {
        Optional<Role> result = repository.findById(userId);
        return result.orElse(null);
    }

    @Override
    public Role save(Role role) {
        return repository.save(role);
    }

    @Override
    public void deleteById(String userId) {
        repository.deleteById(userId);
    }
}
