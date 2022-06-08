import React, { useEffect, useState } from 'react';
import LoggedArea from '../components/LoggedArea';
import { IDevice, ITrackSearch } from '../services/interfaces/ISpotify';
import Spotify from '../services/Spotify';
import AlarmService from '../services/Alarm';
import { FaDesktop, FaMobileAlt, FaSync } from 'react-icons/fa'
import { BsSpeakerFill } from 'react-icons/bs'


import style from '../styles/Alarm.module.scss';
import ModalMedia from '../components/ModalMedia';
import { TypeSearchSpotify } from '../common/interfaces/TypeSearchSpotify';
import { getArtistsString } from '../utils/artists';
import { WeekDays } from '../common/interfaces/WeekDays';

interface IAlarmSate {
  media: ITrackSearch;
  mediaType: TypeSearchSpotify;
  device: IDevice;
  name: string;
  time: string;
}

const Alarm: React.FC = () => {

  const [alarm, setAlarm] = useState<IAlarmSate>({} as IAlarmSate);

  const [allDays, setAllDays] = useState(false);

  const [modalMediaOpen, setModalMediaOpen] = useState<boolean>(false);

  const [devices, setDevices] = useState<IDevice[]>([]);

  const getDevices = async () => {
    const spotifyService = new Spotify();
    const devices = await spotifyService.getDevices()
    setDevices(devices.devices)
  }

  const handleSelectDevice = (device: IDevice) => {
    setAlarm({ ...alarm, device })
  }

  const init = async () => {
    getDevices()
  }

  const getIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'Computer':
        return (<FaDesktop />)
      case 'Speaker':
        return (<BsSpeakerFill />)
      case 'Smartphone':
        return (<FaMobileAlt />)
      default:
        return null
    }
  }

  const onHandleTrack = (item: ITrackSearch, type: TypeSearchSpotify) => {
    setAlarm({
      ...alarm,
      media: item,
      mediaType: type
    })
  }

  const handleSaveAlarm = async () => {
    const alarmService = new AlarmService()
    await alarmService.create({
      idDevice: alarm.device.id,
      nameDevice: alarm.device.name,
      mediaType: alarm.mediaType,
      idsMedia: [alarm.media.uri],
      name: alarm.name,
      time: alarm.time,
      weekDays: weekDaysSelecteds,
      repeat: true
    })
  }

  const weekDaysOptions = [
    { value: WeekDays.Sunday, label: 'Domingo' },
    { value: WeekDays.Monday, label: 'Segunda' },
    { value: WeekDays.Tuesday, label: 'Terça' },
    { value: WeekDays.Wednesday, label: 'Quarta' },
    { value: WeekDays.Thursday, label: 'Quinta' },
    { value: WeekDays.Friday, label: 'Sexta' },
    { value: WeekDays.Saturday, label: 'Sábado' },
  ]

  const [weekDaysSelecteds, setWeekDaysSelecteds] = useState<WeekDays[]>([])

  const handleSelectWeekDay = (weekDay: WeekDays, active: boolean) => {
    if (active) {
      setWeekDaysSelecteds([...weekDaysSelecteds, weekDay])
      return;
    }
    setWeekDaysSelecteds(weekDaysSelecteds.filter(item => item !== weekDay))
  }

  const isWeekDaySelected = (weekDay: WeekDays) => {
    return weekDaysSelecteds.includes(weekDay)
  }

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (allDays) {
      setWeekDaysSelecteds(weekDaysOptions.map(item => item.value))
    } else {
      setWeekDaysSelecteds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDays])

  return <div>
    <LoggedArea>
      <>
        {modalMediaOpen && (
          <ModalMedia
            onChange={onHandleTrack}
            onClose={() => setModalMediaOpen(false)}
          />
        )}

        <div
          className={style.alarmModule} >
          <input
            type="time"
            onChange={(e) => setAlarm({ ...alarm, time: e.target.value })}
          />
          <div className={style.allWeekToogle}>
            <div
              onClick={() => setAllDays(!allDays)}
              className={allDays ? style.allWeekToogleSelected : ''}
            /> Todos os dias
          </div>
          <div className={style.weekDays} >

            {weekDaysOptions.map(item => (
              <button
                className={isWeekDaySelected(item.value) ? style.weekDaySelected : ''}
                key={item.value}
                onClick={() => handleSelectWeekDay(item.value, !isWeekDaySelected(item.value))} >{item.label}
              </button>
            ))
            }
          </div>
          <ul className={style.devices}>
            {devices.map(device => (
              <li
                role="button"
                key={device.id}
                onClick={() => handleSelectDevice(device)}
                className={device.id === alarm.device?.id ? style.selected : ''}
              >
                {getIcon(device.type)}
                <div>
                  <div>{device.name}</div>
                  <div>
                    {device.type}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {alarm.media && alarm.media.id && (
            <div className={style.mediaSelected} >
              <img src={alarm.media.image} alt="" />
              <div className={style.mediaSelectedInfo} >
                <div>{alarm.media.name}</div>
                <div>{alarm.media.album}</div>
                <div>{alarm.media.artists && getArtistsString(alarm.media.artists)}</div>
              </div>
              <div className={style.mediaSelectedButtons}  >
                <button onClick={() => setModalMediaOpen(true)}>
                  <FaSync />
                </button>
              </div>
            </div>
          )}

          {(!alarm.media || !alarm.media.id) && (
            <div className={style.mediaUnselected} >
              <button onClick={() => setModalMediaOpen(true)} >Selecionar Toque</button>
            </div>
          )}

          <input
            className={style.nameAlarm}
            type="text"
            placeholder='Rótulo'
            onChange={e => setAlarm({ ...alarm, name: e.target.value })} />
          <button className={style.alarmButtonSave} onClick={handleSaveAlarm} >Salvar</button>
        </div>
      </>
    </LoggedArea>
  </div>;
}

export default Alarm;