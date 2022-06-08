import React, { ChangeEventHandler, InputHTMLAttributes, useState } from 'react';
import { TypeSearchSpotify } from '../../common/interfaces/TypeSearchSpotify';
import { ITrackSearch } from '../../services/interfaces/ISpotify';
import Spotify from '../../services/Spotify';
import { FiX } from 'react-icons/fi'

import style from '../../styles/components/ModalMedia.module.scss'

interface IModalMediaProps {
  onChange: (value: ITrackSearch, type: TypeSearchSpotify) => void;
  onClose: () => void;
}

const ModalMedia: React.FC<IModalMediaProps> = ({ onChange, onClose }: IModalMediaProps) => {

  const [timeOutSearch, setTimeOutSearch] = useState<NodeJS.Timeout | null>(null);
  const [items, setItems] = useState<ITrackSearch[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<ITrackSearch | null>(null);
  const [selectedType, setSelectedType] = useState<TypeSearchSpotify>(TypeSearchSpotify.TRACK);

  const searchTrack = async (q = '', type = TypeSearchSpotify.TRACK) => {
    const spotifyService = new Spotify();
    const items = await spotifyService.getTrackBySearch(q, type)
    setItems(items.items)
  }

  const [serchValue, setSearchValue] = useState<string>('');

  const onSelectedTrack = (track: ITrackSearch) => {
    setSelectedTrack(track)
    onChange(track, selectedType)
  }

  const handleSelectType = (type: TypeSearchSpotify) => {
    setSelectedType(type)
    if (serchValue) {
      searchTrack(serchValue, type)
    }
  }

  const handleType = (search: string) => {

    setSearchValue(search)

    if (timeOutSearch) {
      clearTimeout(timeOutSearch)
    }

    setTimeOutSearch(setTimeout(() => {
      searchTrack(search, selectedType)
    }, 500))

  }

  const optionsSearch = [
    {
      label: 'Música',
      value: TypeSearchSpotify.TRACK
    },
    {
      label: 'Álbum',
      value: TypeSearchSpotify.ALBUM
    },
    {
      label: 'Artista',
      value: TypeSearchSpotify.ARTIST
    },
    {
      label: 'Playlist',
      value: TypeSearchSpotify.PLAYLIST
    }
  ]

  return <div className={style.modalMediaComponent
  } >
    <div>
      <button onClick={onClose} className={style.close} >
        <FiX />
      </button>

      <div className={style.tab} >
        {optionsSearch.map(item => (<button
          key={item.value}
          onClick={() => { handleSelectType(item.value) }}
          className={selectedType === item.value ? style.selected : ''}
        >{item.label}</button>))}
      </div>
      <input type="text" placeholder='Busca' onChange={(e) => handleType(e.target.value)} />

      {selectedTrack && selectedTrack.id && (
        <div className={style.selectedInfo} >
          <img src={selectedTrack?.image} alt="" />
          <div>
            <div>{selectedTrack.name}</div>
            <div>
              <div>{selectedTrack.album}</div>
              <div>{selectedTrack.artists?.map((item, key) => !key ? item : ' | ' + item)}</div>
            </div>
          </div>
        </div>
      )}
      <ul>
        {items.map(item => (
          <li
            role="button"
            onClick={() => onSelectedTrack(item)}
            key={item.id}
            className={selectedTrack && selectedTrack.id === item.id ? style.selected : ''}
          >
            <img src={item.image} alt={item.name} />
            <div>
              <div>{item.name}</div>
              <div>
                <div>{item.album}</div>
                <div>{item.artists?.map((item, key) => !key ? item : ' | ' + item)}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>;
}

export default ModalMedia;