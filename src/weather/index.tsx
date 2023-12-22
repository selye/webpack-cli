import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { debunceFn } from '../assets/utils';

interface WeatherProps {
  temperature: number;
  sd: string;
  wind_direction: string;
}

const Weather = () => {
  const [inputValue, setInputValue] = useState('');

  const [weather, setWeather] = useState<WeatherProps>({
    temperature: 0,
    sd: '',
    wind_direction: '',
  });

  const [showError, setError] = useState<boolean>(false);

  const getWeatherInfo = async () => {
    try {
      const res: any = await fetch(`http://ali-weather.showapi.com/area-to-weather?area=${inputValue}`, {
        method: 'GET',
        headers: {
          Authorization: 'APPCODE dea3ca29a11c4a78bc6cf3127b9c02b4',
        },
      });
      const weatherInfo = res?.showapi_res_body?.now;
      setWeather({
        temperature: weatherInfo.temperature,
        sd: weatherInfo.sd,
        wind_direction: weatherInfo.wind_direction,
      });
      setError(false);
    } catch (error: any) {
      setError(true);
      console.error('Error fetching weather:', error.message);
    }
  };

  const getWeather = debunceFn((e: any) => {
    setInputValue(e.target.value);
  }, 1000);

  useEffect(() => {
    if (inputValue.length) {
      getWeatherInfo();
    }
  }, [inputValue]);

  return (
    <div>
      <Input placeholder="请输入城市名称获取天气信息" onChange={getWeather} />
      {!showError ? (
        <div>
          <div>温度：{weather.temperature}℃</div>
          <div>湿度：{weather.sd}</div>
          <div>风向{weather.wind_direction}</div>
        </div>
      ) : null}

      {showError ? <div>请输入正确的城市信息</div> : null}
    </div>
  );
};

export default Weather;
