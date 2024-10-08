import ProkerDetailItem from '@/components/Proker/ProkerDetailItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProkerDetail() {
    const [proker, setProker] = useState([]);
    let { dinas, prokerName } = useParams();

    useEffect(() => {
        axios.get(`/data/proker.json`).then((res) => {
          setProker(res.data.data);
        });
    }, []);

  return (
    <div>
      {
        proker.flat().map((proker, key) => {
          if(proker["name"] == prokerName){
            return <ProkerDetailItem key={key} name={proker["name"]} />
          }
        })
      }
    </div>
  )
}
