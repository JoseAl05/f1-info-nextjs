import useSWR from 'swr';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

//POSIBLEMENTE ESTE ARCHIVO SERÁ ELIMINADO

interface IUseCircuit {
  page?: number;
  year?: {
    value: string;
    label: string;
  };
}

const useCircuit = ({ page, year }: IUseCircuit) => {
  const router = useRouter();
  const params = useSearchParams();
  let URL = '';

  if (year) {
    URL = `http://ergast.com/api/f1/${year.value}/circuits.json?limit=5&offset=${page}`;
  } else {
    URL = `http://ergast.com/api/f1/circuits.json?limit=5&offset=${page}`;
  }

  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data;
    });
  const { data, error, isLoading } = useSWR(URL, fetcher);

  return {
    circuits: data?.MRData as CircuitResponse | null,
    qCircuits: data?.MRData.total as number,
    error,
    isLoading,
  };
};

export default useCircuit;
