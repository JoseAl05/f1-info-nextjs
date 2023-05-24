import { useRouter, useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import axios from 'axios';


//POSIBLEMENTE ESTE ARCHIVO SERÁ ELIMINADO
interface IUseDriver {
  page?: number;
}

const useDriver = ({ page }: IUseDriver) => {
  const router = useRouter();
  const params = useSearchParams();

  let URL = `http://ergast.com/api/f1/seasons.json?limit=12&offset=${page}`;

  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data;
    });
  const { data, error, isLoading } = useSWR(URL, fetcher);

  return {
    seasons: data?.MRData as SeasonResponse | null,
    qSeasons: data?.MRData.total as number,
    error,
    isLoading,
  };
};

export default useSeason;
