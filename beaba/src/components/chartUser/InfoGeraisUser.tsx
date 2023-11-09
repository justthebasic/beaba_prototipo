import { Card, Title } from "@tremor/react";
import api from "../../services/api";
import { useEffect, useState } from "react";
import apiFastApi from "../../services/apiFastAPI";

export const UploadsTotalUser = () => {
  const [arquivos, setArquivos] = useState([]);
  const [totalUploads, setTotalUploads] = useState(0); // Estado para a contagem total de uploads

  useEffect(() => {
    // Recuperar a lista de templates do servidor
    apiFastApi.get('apis/arquivos', {})
      .then((response) => {
        setArquivos(response.data);

        // Conte a quantidade de arquivos por formato
        const formatCounts = {};
        let total = 0; // Variável para acompanhar a contagem total de uploads

        response.data.forEach((arquivo) => {
          const id = arquivo.id;
          if (formatCounts[id]) {
            formatCounts[id]++;
          } else {
            formatCounts[id] = 1;
          }
          total++; // Incrementar a contagem total de uploads
        });

        // Atualize o estado da contagem total de uploads
        setTotalUploads(total);

        // Converta o objeto em uma lista
      
      })
      .catch((error) => {
        console.error('Erro ao obter lista de templates', error);
      });
  }, []);

  return (
    <>
      <div>
        
        <Title >Total de Uploads: {totalUploads}</Title>
      </div>

      
    </>
  );
}




export const TemplatesTotalUser = () => {
  const [templates, setTemplates] = useState([]);
  const [totalTemplates, setTotalTemplates] = useState(0); // Estado para a contagem total de uploads

  useEffect(() => {
    // Recuperar a lista de templates do servidor
    apiFastApi.get('apis/templates', {})
      .then((response) => {
        setTemplates(response.data);

        // Conte a quantidade de templates por formato
        const formatCounts = {};
        let total = 0; // Variável para acompanhar a contagem total de uploads

        response.data.forEach((template) => {
          const id = template.id;
          if (formatCounts[id]) {
            formatCounts[id]++;
          } else {
            formatCounts[id] = 1;
          }
          total++; // Incrementar a contagem total de uploads
        });

        // Atualize o estado da contagem total de uploads
        setTotalTemplates(total);

        // Converta o objeto em uma lista
      
      })
      .catch((error) => {
        console.error('Erro ao obter lista de templates', error);
      });
  }, []);

  return (
    <>
      <div>
        
        <Title >Total de templates: {totalTemplates}</Title>
      </div>

      
    </>
  );
}



