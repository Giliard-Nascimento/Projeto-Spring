package com.veiculo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.veiculo.Entity.Modelo;
import com.veiculo.dto.ModeloDTO;
import com.veiculo.mapper.modeloMapper;
import com.veiculo.repository.ModeloRepository;



@Service
public class ModeloService {
    
    @Autowired
    private ModeloRepository repository;

    @Transactional(readOnly = true)
    public List<ModeloDTO> listar(){
        return modeloMapper.toDTOList(repository.findAll());

    }

    @Transactional
    public ModeloDTO criar (ModeloDTO dto){

        if (dto.getId() != null) {
            
            throw new IllegalArgumentException("Novo modelo não deve ter ID!!");

        }

        Modelo salvo = repository.save(modeloMapper.toEntity(dto));
        return modeloMapper.toDTO(salvo);


    }

    public ModeloDTO buscarPorId (Long id){

        return repository.findById(id).map(modeloMapper:: toDTO).orElseThrow(() -> new RuntimeException("Modelo não encontrado"));

    }

    @Transactional
    public ModeloDTO atualizar(Long id, ModeloDTO dto){

        Modelo existente = repository.findById(id)
        .orElseThrow(() -> new RuntimeException("Modelo não encontrado"));
        existente.setNome(dto.getNome());
        existente.setFabricante(dto.getFabricante());
        return modeloMapper.toDTO(repository.save(existente));



    }
    @Transactional
    public void deletar(Long id){
        if(!repository.existsById(id)){
            throw new RuntimeException("Modelo não encontrado"); 

        }

        if (repository.temVeiculosAssociados(id)) {
            throw new RuntimeException("Não é possível deletar o modelo, existem veículos associados a ele.");
            
        }

            repository.deleteById(id);
    }
        



}
