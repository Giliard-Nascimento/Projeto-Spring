package com.veiculo.exception;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
@ControllerAdvice
public class GlobalExceptionHandler {
    private ResponseEntity<Object> body(HttpStatus status, String message){
        Map<String, Object> map = new HashMap<>();
        map.put("timestamp", Instant.now().toString());
        map.put("Status", status.value());
        map.put("error", status.getReasonPhrase());
        map.put("message", (message == null || message.isBlank()) ? defautMessage(status) : message);
        return ResponseEntity.status(status).body(map);
        }

        private String defautMessage (HttpStatus status){
            return switch (status){
                case NOT_FOUND -> "Recurso não encontrado";
                case BAD_REQUEST -> "Conflito ao processar requisição";
                case CONFLICT -> "Erro interno no servidor";
                default -> "Erro Interno";
            };
        }

        @ExceptionHandler(RuntimeException.class)
        public ResponseEntity<Object> handleRuntime(RuntimeException ex){
            String msg = ex.getMessage();
            if (msg != null) {
                String lower = msg.toLowerCase();
                if (lower.contains("não entcontrado")) {
                    return body(HttpStatus.NOT_FOUND, msg);
                }

                if (lower.contains("veiculos associados") ||
                 lower.contains("não é possivel excluir") ||
                    lower.contains("existem veiculos")) { 
                        return body(HttpStatus.CONFLICT, msg);
                    }
                    
                }
                return body(HttpStatus.INTERNAL_SERVER_ERROR, msg);
        }

    }

    


        


    
