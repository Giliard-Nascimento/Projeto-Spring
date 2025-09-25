package com.veiculo.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.veiculo.Entity.Modelo;
import com.veiculo.dto.ModeloDTO;

public final class modeloMapper {


    private modeloMapper() {}

    public static ModeloDTO toDTO(Modelo entity){
            if(entity == null) return null;

            return new ModeloDTO(entity.getId(), entity.getNome(), entity.getFabricante());


    }


    public static Modelo toEntity(ModeloDTO dto){

            if(dto == null) return null;

            Modelo m = new Modelo();
            m.setId(dto.getId());
            m.setNome(dto.getNome());
            m.setFabricante(dto.getFabricante());

            return m;


    }

    public static List<ModeloDTO> toDTOList(List<Modelo> list){

        return list == null ? List.of(): list.stream().map(modeloMapper ::toDTO).collect(Collectors.toList());


    }

    public static List<Modelo> toEntityList(List<ModeloDTO> list){

        return list == null ? List.of(): list.stream().map(modeloMapper :: toEntity).collect(Collectors.toList());
    }
    
}
