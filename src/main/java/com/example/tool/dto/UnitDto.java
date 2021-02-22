package com.example.tool.dto;

import com.example.tool.models.Unit;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import java.util.Set;
import java.util.stream.Collectors;

// adapted from https://github.com/UKHomeOffice/hocs-info-service/


@AllArgsConstructor()
@Getter
@EqualsAndHashCode
public class UnitDto {

    @JsonProperty("displayName")
    private String displayName;

    @JsonProperty("uuid")
    private String uuid;

    @JsonProperty("teams")
    private Set<TeamDto> teams;

    public static UnitDto from(Unit unit) {
        Set<TeamDto> teamDtos = unit.getTeams().stream().map(TeamDto::from).collect(Collectors.toSet());

        return new UnitDto(unit.getDisplayName(), unit.getUuid().toString(), teamDtos);
    }
}
