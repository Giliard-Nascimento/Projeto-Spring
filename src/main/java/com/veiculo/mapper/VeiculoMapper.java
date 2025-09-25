package com.veiculo.mapper;


import java.util.List;
import java.util.stream.Collectors;


import com.veiculo.Entity.Veiculo;
import com.veiculo.dto.VeiculoDTO;

public class VeiculoMapper {
    
        private VeiculoMapper(){}
        

public static VeiculoDTO toDTO(Veiculo entity){

    if (entity == null) return null;

    return new VeiculoDTO(entity.getId(), entity.getPlaca(), entity.getCor(), entity.getValor(), entity.getAno(), entity.getDescricao(), entity.getDataCadastro(), entity.getModelo());




}

public static Veiculo toEntity(VeiculoDTO dto){

            if (dto == null) return null;
            Veiculo v = new Veiculo();
            v.setId(dto.getId());
            v.setPlaca(dto.getPlaca());
            v.setCor(dto.getCor());
            v.setValor(dto.getValor());
            v.setAno(dto.getAno());
            v.setDescricao(dto.getDescricao());
            v.setDataCadastro(dto.getDataCadastro());
            v.setModelo(dto.getModelo());


            return v;








}

public static List<VeiculoDTO> toDTOList(List<Veiculo> list){


    return list == null ? List.of(): list.stream().map(VeiculoMapper :: toDTO).collect(Collectors.toList());

}

public static List<Veiculo> toEntityList(List<VeiculoDTO> list){

        return list == null ? List.of(): list.stream().map(VeiculoMapper :: toEntity).collect(Collectors.toList());

}


}
