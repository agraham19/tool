package com.example.tool.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import org.hibernate.annotations.Where;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Set;
import java.util.UUID;


// adapted from https://github.com/UKHomeOffice/hocs-info-service/

@Entity
@Table(name = "unit")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Unit implements Serializable {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Column(name = "uuid")
    private UUID uuid;

    @Getter
    @Column(name = "display_name")
    private String displayName;

    @Getter
    @Column(name = "active")
    private boolean active;

    @Getter
    @JsonManagedReference
    @OneToMany(mappedBy = "unit", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @Where(clause = "active = 'true'")
    private Set<Team> teams;
}
