package com.example.tool.dto;

import com.example.tool.models.Team;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import com.example.tool.utils.Base64UUID;

import java.util.UUID;

// adapted from https://github.com/UKHomeOffice/hocs-info-service/

@AllArgsConstructor()
@Getter
@EqualsAndHashCode
public class TeamDto {

    @JsonProperty("displayName")
    private String displayName;

    @JsonProperty("uuid")
    private UUID uuid;

    @JsonProperty("active")
    private boolean active;

    @JsonProperty
    private String base64Uuid;

    public static TeamDto from(Team team) {
        return new TeamDto(team.getDisplayName(), team.getUuid(), team.isActive(), Base64UUID.uuidToBase64String(team.getUuid()));
    }
}
