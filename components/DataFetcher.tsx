import React, { useEffect } from 'react';

interface DataFetcherProps {
  type: 'balance' | 'holders';
  onData: (data: string | number | null) => void;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ type, onData }) => {
  const urlHolders = "https://tonapi.io/v2/jettons/EQAtSsa90p8_Zm0Lv6rgioI0vHOViIWCaHYe8buKwZEZIQog";
  const urlBalance = "https://toncenter.com/api/v3/accountStates?address=EQAtSsa90p8_Zm0Lv6rgioI0vHOViIWCaHYe8buKwZEZIQog&include_boc=false";

  const fetchDataWithRetry = async (url: string, retries: number = 5, delay: number = 1000) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          const retryAfter = parseInt(response.headers.get('Retry-After') || '1', 10);
          await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000 || delay));
          return fetchDataWithRetry(url, retries - 1, delay * 2);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'balance') {
          const data = await fetchDataWithRetry(urlBalance);
          if (data.accounts && data.accounts[0] && data.accounts[0].balance) {
            const calculatedBalance = (parseFloat(data.accounts[0].balance) / 10000000000).toFixed(0);
            onData(calculatedBalance);
          } else {
            console.error("Balance data not found");
            onData(null);
          }
        } else if (type === 'holders') {
          const data = await fetchDataWithRetry(urlHolders);
          if (data.holders_count !== undefined) {
            onData(data.holders_count);
          } else {
            console.error("Holders data not found");
            onData(null);
          }
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
        onData(null);
      }
    };
    fetchData();
  }, [type, onData]);

  return null;
};

export default DataFetcher;
