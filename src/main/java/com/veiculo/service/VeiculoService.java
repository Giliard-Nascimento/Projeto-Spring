package com.veiculo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.veiculo.Entity.Veiculo;
import com.veiculo.Util.ValidaVeiculo;
import com.veiculo.dto.VeiculoDTO;
import com.veiculo.mapper.VeiculoMapper;

import com.veiculo.repository.VeiculoRepository;






@Service
public class VeiculoService {


        @Autowired
        private VeiculoRepository repository;


        public List<VeiculoDTO> listar(){
                return VeiculoMapper.toDTOList(repository.findAll());
        }


        @Transactional
        public VeiculoDTO criar (VeiculoDTO dto){
                if (dto.getId() != null) {

                      throw new IllegalArgumentException("Novo veículo não deve ter ID!!"); 
                        
                }

                if(!ValidaVeiculo.isPlacaValida(dto)){
                        throw new IllegalArgumentException("Placa inválida!!");

                }

                if(repository.existsByPlaca(dto.getPlaca())){

                        throw new IllegalArgumentException("Já existe um veículo com essa placa!!");

                }

                

                Veiculo salvar = repository.save(VeiculoMapper.toEntity(dto));

                return VeiculoMapper.toDTO(salvar);

            
        }

        public VeiculoDTO buscarporid (Long id){

                return repository.findById(id).map(VeiculoMapper :: toDTO).orElseThrow(() -> new RuntimeException("Modelo não encontrado"));

        }

        @Transactional
        public VeiculoDTO atualizar(Long id, VeiculoDTO dto ){

                Veiculo existente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Veiculo não encontrado!!"));
                existente.setPlaca(dto.getPlaca());
                existente.setCor(dto.getCor());
                existente.setAno(dto.getAno());
                existente.setValor(dto.getValor());
                existente.setDataCadastro(dto.getDataCadastro());
                existente.setDescricao(dto.getDescricao());
                existente.setModelo(dto.getModelo());
                return VeiculoMapper.toDTO(repository.save(existente));

        }

        public void deletar(Long id){

                if (!repository.existsById(id)) {

                        throw new RuntimeException("Veiculo não encontrado");
                        
                }
                repository.deleteById(id);




        }



}
